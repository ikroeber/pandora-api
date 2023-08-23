import { Test, TestingModule } from '@nestjs/testing'
import { AuthController } from './auth.controller'
import { UserModule } from '../user/user.module'
import { PrismaModule } from '../prisma/prisma.module'

describe('AuthController', () => {
  let controller: AuthController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      imports: [UserModule, PrismaModule],
    }).compile()

    controller = module.get<AuthController>(AuthController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
