import { ConfigurationService } from '../src/configuration/configuration.service'
import { CONFIGURATION_NAME } from '../src/configuration/types/configuration'
import { exec } from 'child_process'

const configurationService = new ConfigurationService()

const dbHost = configurationService.getConfigurationByName(
  CONFIGURATION_NAME.DATABASE_HOST,
)
const dbPort = configurationService.getConfigurationByName(
  CONFIGURATION_NAME.DATABASE_PORT,
)
const dbName = configurationService.getConfigurationByName(
  CONFIGURATION_NAME.DATABASE_NAME,
)

process.env.DATABASE_URL = `postgresql://postgres:postgrespw@${dbHost}:${dbPort}/${dbName}?schema=public`

console.log('DB migration started...')

try {
  exec('npx prisma migrate deploy')
} catch (e) {
  console.log(`Error on db migration: ${e}`)
}

console.log('DB migration successful!')
