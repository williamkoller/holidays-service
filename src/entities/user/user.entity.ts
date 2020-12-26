import { Field, HideField, ID, ObjectType } from '@nestjs/graphql'
import { IsNotEmpty, IsOptional } from 'class-validator'
import { hashPasswordTransform } from 'src/commom/helpers/bcrypt'
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string

  @Column()
  @IsNotEmpty({ message: 'This field cannot be empty' })
  firstName: string

  @Column()
  @IsNotEmpty({ message: 'This field cannot be empty' })
  lastName: string

  @Column({ default: true })
  @IsOptional()
  isActive?: boolean

  @Column()
  @IsNotEmpty({ message: 'This field cannot be empty' })
  email: string

  @Column({
    transformer: hashPasswordTransform,
  })
  @HideField()
  @IsNotEmpty({ message: 'This field cannot be empty' })
  password: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
