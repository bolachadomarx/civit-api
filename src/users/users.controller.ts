import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './user.dto';
import { UsersService } from './users.service';

@ApiTags('Usuários')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        const createdUser = await this.usersService.create(createUserDto);
        return createdUser;
    }

    @Post('/admin/')
    async createAdmin(@Body() disabled) {
        const createdUser = await this.usersService.createAdmin(disabled);
        return createdUser;
    }

    @Put(':id')
    async updateStatus(
        @Param('id') id: string, 
        @Body('status') status: boolean
    ) {
        const updatedUser = await this.usersService.updateStatus(id, status);
        return updatedUser;
    }   

    @Get()
    async list() {
        const users = await this.usersService.list();
        return users;
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.usersService.getById(id);
    }

    @Delete(':id')
    async delete(@Param('id') userId: string) {
        await this.usersService.delete(userId);
        return null;
    }
}
