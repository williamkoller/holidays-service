import { InputType } from '@nestjs/graphql'
import { Type } from 'class-transformer'
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator'

@InputType()
export class UpdateUserInput {
  @IsString()
  @IsUUID()
  @IsOptional()
  id?: string

  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty' })
  @IsOptional()
  firstName?: string

  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty' })
  @IsOptional()
  lastName?: string

  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  isActive?: boolean

  @IsEmail()
  @IsNotEmpty({ message: 'The field cannot be empty' })
  @IsOptional()
  email?: string

  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty' })
  @IsOptional()
  password?: string
}
