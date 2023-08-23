import { Injectable } from '@nestjs/common'
import { createHash } from 'crypto'
import CreateUserDTO from './dto/createUser.dto'
import { PrismaService } from '../prisma/prisma.service'
import UserDTO from './dto/user.dto'

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async getAllUsers(): Promise<UserDTO[]> {
    const users = (await this.prismaService.user.findMany()).map(
      (user) => new UserDTO(user),
    )
    return users
  }

  async createUser(createUserDTO: CreateUserDTO) {
    const user = await this.prismaService.user.create({
      data: {
        email: createUserDTO.email,
        pwd_hash: createHash('sha512')
          .update(createUserDTO.password)
          .digest()
          .toString('hex'),
      },
    })
    return new UserDTO(user)
  }
}
