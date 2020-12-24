import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { join } from 'path'
import { UserModule } from './user/user.module'
import { ContinentModule } from './continent/continent.module'
import { CountryModule } from './country/country.module'

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UserModule,
    ContinentModule,
    CountryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
