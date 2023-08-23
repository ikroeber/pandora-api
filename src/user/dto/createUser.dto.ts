import { IsEmail, IsStrongPassword, IsNotEmpty } from 'class-validator'

class CreateUserDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsStrongPassword({ minLength: 8 })
  @IsNotEmpty()
  password: string
}

export default CreateUserDTO
