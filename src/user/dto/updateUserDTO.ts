import { IsAlpha, IsEmail, IsNotEmpty, IsOptional } from 'class-validator'

class UpdateUserDTO {
  id: string

  @IsEmail()
  @IsNotEmpty()
  @IsOptional()
  email: string

  @IsAlpha()
  @IsNotEmpty()
  @IsOptional()
  first_name: string

  @IsAlpha()
  @IsNotEmpty()
  @IsOptional()
  last_name: string
}

export default UpdateUserDTO
