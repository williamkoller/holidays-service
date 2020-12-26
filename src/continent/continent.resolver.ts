import { ClassSerializerInterceptor, UseInterceptors } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Continent } from 'src/entities/continent/continent.entity'
import { ContinentService } from './continent.service'
import { CreateContinentInput } from './dto/create-continent.input'

@Resolver('Continent')
export class ContinentResolver {
  constructor(private readonly continentService: ContinentService) {}

  @Query(() => [Continent])
  @UseInterceptors(ClassSerializerInterceptor)
  async findAllContinents(): Promise<Array<Continent>> {
    return await this.continentService.findAllContinents()
  }

  @Mutation(() => Continent)
  async createContinent(@Args('data') data: CreateContinentInput): Promise<Continent> {
    return await this.continentService.createContinent(data)
  }
}
