import { Field, HideField, ID, ObjectType } from '@nestjs/graphql'
import { hashPasswordTransform } from 'src/commom/helpers/bcrypt'
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column({ default: true })
  isActive?: boolean

  @Column()
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
