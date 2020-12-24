import { Module } from '@nestjs/common'
import { ContinentService } from './continent.service'

@Module({
  providers: [ContinentService],
})
export class ContinentModule {}
