import { Field, HideField, ID, ObjectType } from '@nestjs/graphql'
import { IsOptional } from 'class-validator'
import { hashPasswordTransform } from 'src/commom/helpers/bcrypt'
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string

  @Column()
  @Field()
  firstName: string

  @Column()
  @Field()
  lastName: string

  @Column({ default: true })
  @IsOptional()
  @Field()
  isActive?: boolean

  @Column()
  @Field()
  email: string

  @Column({
    transformer: hashPasswordTransform,
  })
  @HideField()
  password: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
