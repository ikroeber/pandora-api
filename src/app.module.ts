import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { PrismaModule } from './prisma/prisma.module'
import { ConfigurationModule } from './configuration/configuration.module'

@Module({
  imports: [AuthModule, UserModule, PrismaModule, ConfigurationModule],
})
export class AppModule {}
