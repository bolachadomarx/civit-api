import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateCategoryDto } from './category.dto';
import { CategoryService } from './category.service';

@ApiTags('Categorias')
@Controller('categories')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }

    @Get()
    async list() {
        const incidents = await this.categoryService.list();
        return incidents;
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        return this.categoryService.getById(id);
    }

    @Post()
    async create(@Body() createIncidentDto: CreateCategoryDto) {
        const createdIncident = await this.categoryService.create(createIncidentDto);
        return createdIncident;
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() category: CreateCategoryDto
    ) {
        const updatedIncident = await this.categoryService.update(id, category);
        return updatedIncident;
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.categoryService.delete(id);
        return null;
    }
}
