import * as mongoose from 'mongoose';

export const ArticleSchema = new mongoose.Schema({
    featuredImage: { type: String, required: true },
    title: { type: String, required: true },
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() }
});

export interface Article extends mongoose.Document {
    id: string;
    featuredImage: string;
    title: string;
    text: string;
    createdAt: Date;
}