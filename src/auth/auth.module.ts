import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthResolver } from './auth.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from 'src/entities/user/user.entity'
import { JwtModule } from '@nestjs/jwt'
import { UserService } from 'src/user/user.service'
import { JwtStrategy } from './strategy/jwt.strategy'

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: {
          expiresIn: '1d',
        },
      }),
    }),
  ],
  providers: [AuthService, AuthResolver, UserService, JwtStrategy],
})
export class AuthModule {}
