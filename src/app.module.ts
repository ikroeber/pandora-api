import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { ProjectModule } from './project/project.module'
import { PrismaModule } from './prisma/prisma.module'

@Module({
  imports: [AuthModule, UserModule, ProjectModule, PrismaModule],
})
export class AppModule {}
