import { RedisOptions } from 'ioredis';

interface ICacheConfig {
  driver: 'redis';

  config: {
    redis: RedisOptions;
  };
}

export default {
  driver: 'redis',

  config: {
    redis: {
      port: 6379, // Redis port
      host: 'localhost', // Redis host
      // family: 4, // 4 (IPv4) or 6 (IPv6)
      // db: 0,
      password: undefined,
    },
  },
} as ICacheConfig;
