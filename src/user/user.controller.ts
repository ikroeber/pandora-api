import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common'
import { UserService } from './user.service'
import UserDTO from './dto/user.dto'
import UpdateUserDTO from './dto/updateUserDTO'

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async list(): Promise<UserDTO[]> {
    return this.userService.getAllUsers()
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<UserDTO> {
    return this.userService.getUserById(id)
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDTO: UpdateUserDTO,
  ): Promise<UserDTO> {
    return this.userService.updateUser(id, updateUserDTO)
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<UserDTO> {
    return this.userService.deleteUser(id)
  }
}
