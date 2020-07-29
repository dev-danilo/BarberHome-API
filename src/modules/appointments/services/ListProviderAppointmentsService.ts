import 'reflect-metadata';
import { injectable, inject } from 'tsyringe';
import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import { classToClass } from 'class-transformer';
import Appointment from '../infra/typeorm/entities/Appointment';

interface IRequest {
  provider_id: string;
  month: number;
  year: number;
  day: number;
}

@injectable()
class ListProviderAppointmentsService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentRepository: IAppointmentsRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({
    provider_id,
    month,
    year,
    day,
  }: IRequest): Promise<Appointment[]> {
    /* const cacheData = await this.cacheProvider.recover('asd');
    console.log(cacheData); */
    const cachKey = `provider-appointments:${provider_id}:${year}:${month}:${day}`;
    // let appointments = await this.cacheProvider.recover<Appointment[]>(cachKey);
    let appointments;
    if (!appointments) {
      appointments = await this.appointmentRepository.findAllInDayFromProvider({
        provider_id,
        month,
        year,
        day,
      }); // nao esta compartilhando cache de dois dias diferentes
      /*  console.log('buscou do banco'); */

      await this.cacheProvider.save(cachKey, classToClass(appointments));
    }

    return appointments;
  }
}

export default ListProviderAppointmentsService;
