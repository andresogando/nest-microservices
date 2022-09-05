import { CreateUserEvent } from './events/create-user.event';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to sample-communication!' };
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log('user created: - COMMUNICATION', data);
  }
}
