import { Type } from 'class-transformer'
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'
import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

export class Continent {
  @IsString()
  @IsNotEmpty({ message: 'this field cannot be empty' })
  @PrimaryGeneratedColumn('uuid')
  id: string

  @IsString()
  @IsNotEmpty({ message: 'this field cannot be empty' })
  name: string

  @IsNumber()
  @IsNotEmpty({ message: 'this field cannot be empty' })
  @Type(() => Number)
  territorialExtension: number

  @IsString()
  @IsNotEmpty({ message: 'this field cannot be empty' })
  population: string

  @IsString()
  @IsNotEmpty({ message: 'this field cannot be empty' })
  countries: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
