import { Injectable } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
import { ConfigurationService } from '../configuration/configuration.service'
import { CONFIGURATION_NAME } from '../configuration/types/configuration'

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(private configurationService: ConfigurationService) {
    const dbHost = configurationService.getConfigurationByName(
      CONFIGURATION_NAME.DATABASE_HOST,
    )
    const dbPort = configurationService.getConfigurationByName(
      CONFIGURATION_NAME.DATABASE_PORT,
    )
    const dbName = configurationService.getConfigurationByName(
      CONFIGURATION_NAME.DATABASE_NAME,
    )

    super({
      datasources: {
        db: {
          url: `postgresql://postgres:postgrespw@${dbHost}:${dbPort}/${dbName}?schema=public`,
        },
      },
    })
  }
}
