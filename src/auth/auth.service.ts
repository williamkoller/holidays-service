import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { compareSync } from 'bcrypt'
import { User } from 'src/entities/user/user.entity'
import { UserService } from 'src/user/user.service'
import { AuthInput } from './dto/auth.input'
import { AuthType } from './dto/auth.type'

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}

  async validateUser(data: AuthInput): Promise<AuthType> {
    const user = await this.userService.findUserByEmail(data.email)
    const validPassword = compareSync(data.password, user.password)
    if (!validPassword) {
      throw new UnauthorizedException('Incorrect email or password.')
    }
    const token = await this.jwtToken(user)

    return {
      user,
      token,
    }
  }

  private async jwtToken(user: User): Promise<string> {
    const payload = {
      username: user.firstName,
      sub: user.id,
    }

    return this.jwtService.signAsync(payload)
  }
}
