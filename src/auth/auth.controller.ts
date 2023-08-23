import { Body, Controller, Post } from '@nestjs/common'
import { UserService } from '../user/user.service'
import CreateUserDTO from '../user/dto/createUser.dto'
import UserDTO from '../user/dto/user.dto'

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) {}

  @Post('signup')
  async signUp(@Body() createUserDTO: CreateUserDTO): Promise<UserDTO> {
    return this.userService.createUser(createUserDTO)
  }
}
