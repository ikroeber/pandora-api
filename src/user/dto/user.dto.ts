import { Exclude } from 'class-transformer'

class UserDTO {
  id: string
  email: string

  @Exclude()
  pwd_hash: string

  first_name: string
  last_name: string
  first_access: boolean
  createdAt: Date
  updatedAt: Date

  constructor(partial: Partial<UserDTO>) {
    return Object.assign(this, partial)
  }
}

export default UserDTO
