import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  login() {
    return { msg: 'This is the login service' };
  }

  signup() {
    return { msg: 'This is the signup service' };
  }
}
