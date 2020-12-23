import { InputType } from '@nestjs/graphql'
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'This field cannmot by empty' })
  firstName: string

  @IsString()
  @IsNotEmpty({ message: 'This field cannmot by empty' })
  lastName: string

  @IsNumber()
  @IsOptional()
  isActive?: boolean

  @IsEmail()
  @IsNotEmpty({ message: 'This field cannmot by empty' })
  email: string

  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty' })
  password: string
}
