import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { PrismaModule } from './prisma/prisma.module'
import { ProjectModule } from './project/project.module'

@Module({
  imports: [AuthModule, UserModule, ProjectModule, PrismaModule],
})
export class AppModule {}
