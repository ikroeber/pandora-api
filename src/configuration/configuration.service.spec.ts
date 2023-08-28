import { Test, TestingModule } from '@nestjs/testing'
import { ConfigurationService } from './configuration.service'
import { CONFIGURATION_NAME } from './types/configuration'

describe('ConfigurationService', () => {
  let service: ConfigurationService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigurationService],
    }).compile()

    process.env['DATABASE_HOST'] = ''
    process.env['DATABASE_PORT'] = ''
    process.env['DATABASE_NAME'] = ''

    service = module.get<ConfigurationService>(ConfigurationService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  describe('getConfigurationByName', () => {
    it.each([
      [CONFIGURATION_NAME.DATABASE_HOST, '0.0.0.0'],
      [CONFIGURATION_NAME.DATABASE_PORT, '36542'],
      [CONFIGURATION_NAME.DATABASE_NAME, 'pandora-db'],
    ])("should return default value: '%s' -> '%s'", (input, expected) => {
      const configValue: string = service.getConfigurationByName(input)
      expect(configValue).toBe<string>(expected)
    })

    it('should return overriden value when environment variable is set', () => {
      process.env.DATABASE_HOST = 'localhost'

      const hostName: string = service.getConfigurationByName(
        CONFIGURATION_NAME.DATABASE_HOST,
      )

      expect(hostName).toBe('localhost')
    })
  })
})
