import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthUserDto {
    @ApiProperty({ description: 'E-mail do usuário cadastrado', example: 'jhon@unifei.edu.br' })
    @IsNotEmpty()
    @IsString()
    email: string;

    @ApiProperty({ description: 'Senha do usuário cadastrado', example: '123' })
    @IsNotEmpty()
    @IsString()
    password: string;
}
