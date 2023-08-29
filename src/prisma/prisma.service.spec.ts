import { Test, TestingModule } from '@nestjs/testing'
import { PrismaService } from './prisma.service'
import { ConfigurationModule } from '../configuration/configuration.module'

describe('PrismaService', () => {
  let service: PrismaService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService],
      imports: [ConfigurationModule],
    }).compile()

    service = module.get<PrismaService>(PrismaService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
