import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateArticleDto } from './article.dto';
import { Article } from './article.model';

@Injectable()
export class ArticleService {
    constructor(
        @InjectModel('Article') private readonly articleModel: Model<Article>,
    ) { }

    async list(): Promise<Article[]> {
        const articles = await this.articleModel.find().exec();
        console.log(articles[0].createdAt)
        return articles;
    }

    async getById(id: string): Promise<Article> {
        const article = await this.findById(id);
        return article;
    }

    async create(article: CreateArticleDto): Promise<Article> {
        const newArticle = new this.articleModel(article);
        const result = await newArticle.save();
        return result;
    }

    async delete(id: string): Promise<any> {
        const result = await this.articleModel.deleteOne({ _id: id }).exec();
        if (result.n === 0) {
            throw new NotFoundException('Could not find article');
        }
    }

    async update(id: string, article: CreateArticleDto): Promise<any> {
        const incident = await this.findById(id);
        await incident.updateOne(article);
        return null;
    }

    private async findById(id: string): Promise<Article> {
        let article: Article
        try {
            article = await this.articleModel.findById(id).exec();
        } catch (error) {
            throw new NotFoundException('Could not find article');
        }
        if (!article) {
            throw new NotFoundException('Could not find article');
        }
        return article;
    } 
}
