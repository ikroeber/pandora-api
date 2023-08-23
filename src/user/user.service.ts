import { Injectable } from '@nestjs/common'
import { createHash } from 'crypto'
import CreateUserDTO from './dto/createUser.dto'
import { PrismaService } from '../prisma/prisma.service'
import UserDTO from './dto/user.dto'
import UpdateUserDTO from './dto/updateUserDTO'

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async getAllUsers(): Promise<UserDTO[]> {
    const users = await this.prismaService.user.findMany()
    return users.map((u) => new UserDTO(u))
  }

  async getUserById(id: string): Promise<UserDTO> {
    const user = await this.prismaService.user.findFirst({ where: { id } })
    return new UserDTO(user)
  }

  async createUser(createUserDTO: CreateUserDTO): Promise<UserDTO> {
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

  async updateUser(id: string, updateUserDTO: UpdateUserDTO): Promise<UserDTO> {
    const user = await this.prismaService.user.update({
      where: { id },
      data: updateUserDTO,
    })
    return new UserDTO(user)
  }

  async deleteUser(id: string): Promise<UserDTO> {
    const user = await this.prismaService.user.delete({ where: { id } })
    return new UserDTO(user)
  }
}
