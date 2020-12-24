import { Type } from 'class-transformer'
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'
import { PrimaryGeneratedColumn } from 'typeorm'

export class Continent {
  @IsString()
  @IsNotEmpty()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @IsString()
  @IsNotEmpty()
  name: string

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  territorialExtension: number

  @IsString()
  @IsNotEmpty()
  population: string

  @IsString()
  @IsNotEmpty()
  countries: string

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pibTotal: number
}
