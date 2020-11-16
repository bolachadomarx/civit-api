import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateArticleDto {
    @ApiProperty({ description: 'Imagem de destaque da notícia em base64', example: 'string base64' })
    @IsNotEmpty()
    @IsString()
    featuredImage: string;

    @ApiProperty({ description: 'Título da notícia', example: 'Atualização COVID 20/11/2020' })
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty({ description: 'Texto da notícia', example: 'Lorem Ipsum Dolor' })
    @IsNotEmpty()
    @IsString()
    text: string;
}