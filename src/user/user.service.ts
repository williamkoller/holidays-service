import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from '../entities/user.entity'
import { CreateUserInput } from './dto/create-user.input'

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  async findAllUsers(): Promise<User[]> {
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
}
