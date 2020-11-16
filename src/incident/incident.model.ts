import * as mongoose from 'mongoose';

export const IncidentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: String, required: false, default: Date.now() },
    latitude: { type: Number, required: true },
    longitude:  { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true, enum: ['AGUARDANDO', 'PROCESSANDO', 'FINALIZADO'] },
    images: [ { type: String, required: false } ]
});

export interface Incident extends mongoose.Document {
    id: string;
    title: string;
    date: string;
    latitude: number;
    longitude: number;
    category: string;
    description: string;
    status: string;
    images: string;
}
