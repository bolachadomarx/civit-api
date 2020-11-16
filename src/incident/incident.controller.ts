import { Body, Controller, Get, Post } from '@nestjs/common';
import { Delete, Put } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Param, Query } from '@nestjs/common/decorators/http/route-params.decorator';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateIncidentDto, UpdateIncidentDto } from './incident.dto';
import { IncidentService } from './incident.service';

@ApiTags('Ocorrências')
@Controller('incidents')
export class IncidentController {
    constructor(private readonly incidentService: IncidentService) { }
    
    @ApiQuery({ name: 'category' })
    @Get()
    async list(@Query() queryParams) {
        const incidents = await this.incidentService.list(queryParams);
        return incidents;
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        return this.incidentService.getById(id);
    }

    @Post()
    async create(@Body() createIncidentDto: CreateIncidentDto) {
        const createdIncident = await this.incidentService.create(createIncidentDto);
        return createdIncident;
    }

    @Put(':id')
    async updateStatus(
        @Param('id') id: string,
        @Body() updateIncidentDto: UpdateIncidentDto
    ) {
        const updatedIncident = await this.incidentService.updateStatus(id, updateIncidentDto);
        return updatedIncident;
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.incidentService.delete(id);
        return null;
    }
}
