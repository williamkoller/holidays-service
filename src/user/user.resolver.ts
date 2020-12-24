import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { DeleteUserEnum } from 'src/commom/enum/delete-user.enum'
import { User } from '../entities/user.entity'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
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

  @Query(() => User)
  async findUserByEmail(@Args('email') email: string): Promise<User> {
    return await this.userSerice.findUserByEmail(email)
  }

  @Mutation(() => User)
  async updateUser(@Args('id') id: string, @Args('data') data: UpdateUserInput): Promise<User> {
    return await this.userSerice.updateUser({ id, ...data })
  }

  @Mutation(() => String)
  async deleteUser(@Args('id') id: string): Promise<DeleteUserEnum> {
    return await this.userSerice.deleteUser(id)
  }
}
