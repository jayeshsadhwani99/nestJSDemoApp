import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login() {
    return { msg: 'This is the login service' };
  }

  signup() {
    return { msg: 'This is the signup service' };
  }
}
