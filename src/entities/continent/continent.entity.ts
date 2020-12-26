import { Field, ID } from '@nestjs/graphql'
import { Type } from 'class-transformer'
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'
import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

export class Continent {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string

  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty' })
  name: string

  @IsNumber()
  @IsNotEmpty({ message: 'This field cannot be empty' })
  @Type(() => Number)
  territorialExtension: number

  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty' })
  population: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
