import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator'

export class CreateProjectDTO {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @Length(3, 3)
  abbreviation: string

  @IsUUID()
  owner_id: string
}
