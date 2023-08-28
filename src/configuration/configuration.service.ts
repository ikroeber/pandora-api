import { Injectable } from '@nestjs/common'
import { CONFIGURATION_NAME } from './types/configuration'

const CONFIGURATION_DEFAULTS = {
  DATABASE_HOST: '0.0.0.0',
  DATABASE_PORT: '36542',
  DATABASE_NAME: 'pandora-db',
}

@Injectable()
export class ConfigurationService {
  getConfigurationByName(configName: CONFIGURATION_NAME) {
    return process.env[configName] || CONFIGURATION_DEFAULTS[configName]
  }
}
