import { IsOptional, IsString, IsNotEmpty, IsNumber, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum IncidentStatus {
  AGUARDANDO = 'AGUARDANDO',
  PROCESSANDO = 'PROCESSANDO',
  FINALIZADO = 'FINALIZADO'
}

export class UpdateIncidentDto {
  @ApiProperty({ description: 'Status da ocorrência', enum: ['AGUARDANDO', 'PROCESSANDO', 'FINALIZADO']})
  @IsNotEmpty()
  @IsString()
  @IsEnum(IncidentStatus)
  status: string;
}

export class CreateIncidentDto {
  @ApiProperty({ description: 'Titulo da ocorrência', example: "Estacionamento em local proibido" })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ description: 'Data e hora da ocorrência (YYYY-MM-DD HH:mm:ss)', example: "2020-11-15 15:19:32" })
  @IsNotEmpty()
  date: String;

  @ApiProperty({ description: 'Latitude', type: Number, example: 18.109581 })
  @IsNotEmpty()
  @IsNumber()
  latitude: string;

  @ApiProperty({ description: 'Longitude', type: Number, example: -77.297508 })
  @IsNotEmpty()
  @IsNumber()
  longitude: string;

  @ApiProperty({ description: 'Categoria da ocorrência', example: "Infração de trânsito" })
  @IsNotEmpty()
  @IsString()
  category: string;

  @ApiProperty({ description: 'Descrição da ocorrência', example: "Estacionou o carro na faixa amarela. Placa: XYZ-3245" })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ description: 'Array de imagens em Base64', type: Array, example: ['12938712783', '812123981293812'] })
  @IsOptional()
  @IsString()
  images: string;

  status?: string = 'AGUARDANDO';
}

