import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { DeleteUserEnum } from 'src/commom/enum/delete-user.enum'
import { Repository } from 'typeorm'
import { User } from '../entities/user/user.entity'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  async findAllUsers(): Promise<Array<User>> {
    return await this.userRepository.find()
  }

  async findUserById(id: string): Promise<User> {
    const userId = await this.userRepository.findOne(id)
    if (!userId) {
      throw new BadRequestException('User not found.')
    }
    return userId
  }

  async createUser(data: CreateUserInput): Promise<User> {
    const user = this.userRepository.create(data)
    const userSaved = await this.userRepository.save(user)
    if (!userSaved) {
      throw new InternalServerErrorException('Error creating a user.')
    }
    return userSaved
  }

  async findUserByEmail(email: string): Promise<User> {
    const findUserByEmail = await this.userRepository.findOne({ where: { email } })
    if (!findUserByEmail) {
      throw new NotFoundException('User not found.')
    }
    return findUserByEmail
  }

  async updateUser(data: UpdateUserInput): Promise<User> {
    const user = await this.findUserById(data.id)
    return this.userRepository.save({ ...user, ...data })
  }

  async deleteUser(id: string): Promise<DeleteUserEnum> {
    const user = await this.findUserById(id)
    await this.userRepository.remove(user)
    return DeleteUserEnum.Delete
  }
}
