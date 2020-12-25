import { Field, ObjectType } from '@nestjs/graphql'
import { User } from 'src/entities/user/user.entity'

@ObjectType()
export class AuthType {
  @Field(() => User)
  user: User
  token: string
}
