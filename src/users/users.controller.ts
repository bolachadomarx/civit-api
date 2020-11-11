import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        const createdUser = await this.usersService.create(createUserDto);
        return createdUser;
    }

    @Get()
    async list() {
        const users = await this.usersService.list();
        return users;
    }

    @Delete(':id')
    async delete(@Param('id') userId: string) {
        await this.usersService.delete(userId);
        return null;
    }
}