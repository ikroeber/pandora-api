import { Controller, Get, Post } from '@nestjs/common'
import { UserService } from 'src/user/user.service'

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) {}

  @Get('list')
  list() {
    return this.userService.getUsers()
  }

  @Post('signup')
  signUp() {
    return this.userService.createUser()
  }
}
