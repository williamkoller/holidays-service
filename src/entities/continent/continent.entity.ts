import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@ObjectType()
@Entity()
export class Continent {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string

  @Column()
  @Field()
  name: string

  @Column({ type: 'float' })
  @Field()
  territorialExtension: number

  @Column({ type: 'float' })
  @Field()
  population: number

  @Column({ type: 'int' })
  @Field()
  numberOfCountries: number

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
