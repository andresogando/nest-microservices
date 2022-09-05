import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { CreateUserRequest } from './dto/create-user.input';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post()
  createUser(@Body() createUserRequest: CreateUserRequest) {
    console.log('incoming request to createUser ', createUserRequest);
    this.appService.createUser(createUserRequest);
  }
}
