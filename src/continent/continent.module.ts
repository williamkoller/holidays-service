import { Module } from '@nestjs/common'
import { ContinentService } from './continent.service'
import { ContinentResolver } from './continent.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Continent } from '../entities/continent/continent.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Continent])],
  providers: [ContinentService, ContinentResolver],
})
export class ContinentModule {}
