import { Field, Float, InputType, Int } from '@nestjs/graphql'
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

@InputType()
export class CreateContinentInput {
  @IsString()
  @IsNotEmpty({ message: 'This field cannmot by empty' })
  @Field()
  name: string

  @IsNumber()
  @IsNotEmpty({ message: 'This field cannmot by empty' })
  @Field(() => Float)
  territorialExtension: number

  @IsNumber()
  @IsNotEmpty({ message: 'This field cannmot by empty' })
  @Field(() => Float)
  population: number

  @IsNumber()
  @IsNotEmpty({ message: 'This field cannmot by empty' })
  @Field(() => Int)
  numberOfCountries: number
}
