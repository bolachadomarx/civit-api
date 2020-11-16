import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {
    @ApiProperty({ 
        description: 'Nome da categoria. Este campo é o que irá ser apresentado ao usuário', 
        example: 'Infração de trânsito'
    })
    @IsNotEmpty()
    @IsString()
    name: string;
  
    @ApiProperty({ 
        description: 'Descrição da categoria', 
        example: 'Esta categoria foi criada com o propósito de acompanhar as infrações de trânsito na cidade' 
    })
    @IsNotEmpty()
    @IsString()
    description: String;

  }