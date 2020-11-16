import { AuthService } from './shared/auth.service';
import { LocalAuthGuard } from './shared/local-auth.guard';
import { Controller, UseGuards, Request, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Autenticação')
@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService,
  ) { }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }
}
