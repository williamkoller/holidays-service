import { Query, Resolver } from '@nestjs/graphql'
import { User } from '../entities/user.entity'
import { UserService } from './user.service'

@Resolver()
export class UserResolver {
  constructor(private readonly userSerice: UserService) {}

  @Query(() => [User])
  async findAllUsers(): Promise<Array<User>> {
    return this.userSerice.findAllUsers()
  }
}
