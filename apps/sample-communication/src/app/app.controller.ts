import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { CreateUserEvent } from './events/create-user.event';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @EventPattern('user_created')
  handleUserCreated(data: CreateUserEvent) {
    console.log('user-created-communication');
    this.appService.handleUserCreated(data);
  }
}
