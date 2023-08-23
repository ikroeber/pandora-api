import { IsEmail, IsStrongPassword, IsNotEmpty } from 'class-validator'

class CreateUserDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsStrongPassword({ minLength: 8 })
  password: string
}

export default CreateUserDTO
