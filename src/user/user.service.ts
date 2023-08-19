import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { createHash } from 'crypto'
@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async getUsers() {
    return await this.prismaService.user.findMany()
  }

  async createUser() {
    const user = await this.prismaService.user.create({
      data: {
        email: 'igor.kroeber@gmail.com',
        pwd_hash: createHash('sha512').update('test').digest().toString('hex'),
        first_name: 'Igor',
        last_name: 'Kroeber',
      },
    })

    return user
  }
}
