import { Controller, Get } from '@nestjs/common'
import { UserService } from './user.service'
import UserDTO from './dto/user.dto'

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('list')
  async list(): Promise<UserDTO[]> {
    return this.userService.getAllUsers()
  }
}
