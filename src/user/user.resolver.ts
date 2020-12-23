import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { User } from '../entities/user.entity'
import { CreateUserInput } from './dto/create-user.input'
import { UserService } from './user.service'

@Resolver()
export class UserResolver {
  constructor(private readonly userSerice: UserService) {}

  @Query(() => [User])
  async findAllUsers(): Promise<User[]> {
    return await this.userSerice.findAllUsers()
  }

  @Query(() => User)
  async findUserById(@Args('id') id: string): Promise<User> {
    return await this.userSerice.findUserById(id)
  }

  @Mutation(() => User)
  async createUser(@Args('data') data: CreateUserInput): Promise<User> {
    return await this.userSerice.createUser(data)
  }
}
