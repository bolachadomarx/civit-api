import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateArticleDto } from './article.dto';
import { ArticleService } from './article.service';

@ApiTags('Notícias')
@Controller('articles')
export class ArticleController {
    constructor(private readonly articleService: ArticleService) { }

    @Get()
    async list() {
        const articles = await this.articleService.list();
        return articles;
    }

    @Post()
    async create(@Body() createArticleDto: CreateArticleDto) {
        const createdArticle = await this.articleService.create(createArticleDto);
        return createdArticle;
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        return this.articleService.getById(id);
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() article: CreateArticleDto
    ) {
        const updatedArticle = await this.articleService.update(id, article);
        return updatedArticle;
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.articleService.delete(id);
        return null;
    }
}
