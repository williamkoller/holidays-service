import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Continent } from '../entities/continent/continent.entity'
import { Repository } from 'typeorm'
import { CreateContinentInput } from './dto/create-continent.input'

@Injectable()
export class ContinentService {
  constructor(@InjectRepository(Continent) private readonly continentRepository: Repository<Continent>) {}

  async findAllContinents(): Promise<Array<Continent>> {
    const continents = await this.continentRepository.find()
    if (continents?.length == 0) {
      throw new NotFoundException('No continent registered.')
    }
    return continents
  }

  async createContinent(data: CreateContinentInput): Promise<Continent> {
    const continent = this.continentRepository.create(data)
    return await this.continentRepository.save(continent)
  }

  async findContinentByName(name: string): Promise<Continent> {
    const findContinent = await this.continentRepository.findOne({ where: { name } })
    if (!findContinent) {
      throw new NotFoundException('Continent not found.')
    }
    return findContinent
  }
}
