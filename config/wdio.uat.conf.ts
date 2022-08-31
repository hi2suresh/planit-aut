import { config as BaseConfig } from '../wdio.conf';
export const config = Object.assign(BaseConfig, {
  // Enviroment specific key value pairs
  environment: 'UAT',
  logLevel: 'info',
  winstonLogLevel: 'info',
  planit_AUT_Url: 'https://jupiter.cloud.planittesting.com/',
});
