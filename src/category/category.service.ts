import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryDto } from './category.dto';
import { Category } from './category.model';

@Injectable()
export class CategoryService {
    constructor(
        @InjectModel('Category') private readonly categoryModel: Model<Category>,
    ) { }

    async list(): Promise<Category[]> {
        const categories = await this.categoryModel.find().exec();
        return categories;
    }

    async create(category: CreateCategoryDto): Promise<Category> {
        const newCategory = new this.categoryModel(category);
        const result = await newCategory.save();
        return result;
    }

    async delete(id: string): Promise<any> {
        const result = await this.categoryModel.deleteOne({ _id: id }).exec();
        if (result.n === 0) {
            throw new NotFoundException('Could not find category');
        }
    }

    async getById(id: string): Promise<Category> {
        const category = await this.findCategoryById(id);
        return category;
    }

    async update(id: string, category: CreateCategoryDto): Promise<any> {
        const incident = await this.findCategoryById(id);
        await incident.updateOne(category);
        return null;
    }

    private async findCategoryById(id: string): Promise<Category> {
        let category: Category
        try {
            category = await this.categoryModel.findById(id).exec();
        } catch (error) {
            throw new NotFoundException('Could not find category');
        }
        if (!category) {
            throw new NotFoundException('Could not find category');
        }
        return category;
    } 
}
