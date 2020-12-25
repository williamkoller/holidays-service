import { UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { User } from 'src/entities/user/user.entity'
import { UserService } from 'src/user/user.service'

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    })
  }

  async validate(payload: { sub: User['id']; name: string }): Promise<User> {
    const user = await this.userService.findUserById(payload.sub)
    if (!user) {
      throw new UnauthorizedException('Unauthorized.')
    }
    return user
  }
}
