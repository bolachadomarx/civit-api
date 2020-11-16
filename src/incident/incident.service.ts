import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateIncidentDto, UpdateIncidentDto } from './incident.dto';
import { Incident } from './incident.model';
import * as crypto from "crypto";


@Injectable()
export class IncidentService {
    constructor(
        @InjectModel('Incident') private readonly incidentModel: Model<Incident>,
    ) { }

    async list(queryParam?: any): Promise<Incident[]> {
        const incidents = await this.incidentModel.find(queryParam).exec();
        return incidents;
    }

    async create(incident: CreateIncidentDto): Promise<Incident> {
        const newIncident = new this.incidentModel(incident);
        const result = await newIncident.save();
        return result;
    }

    async delete(id: string): Promise<any> {
        const result = await this.incidentModel.deleteOne({ _id: id }).exec();
        if (result.n === 0) {
            throw new NotFoundException('Could not find incident');
        }
    }

    async getById(id: string): Promise<Incident> {
        const incident = await this.findIncidentById(id);
        return incident;
    }

    async updateStatus(id: string, updateIncidentDto: UpdateIncidentDto): Promise<any> {
        const incident = await this.findIncidentById(id);
        await incident.updateOne({ status: updateIncidentDto.status });
        return null;
    }

    private async findIncidentById(id: string): Promise<Incident> {
        let incident: Incident
        try {
            incident = await this.incidentModel.findById(id).exec();
        } catch (error) {
            throw new NotFoundException('Could not find incident');
        }
        if (!incident) {
            throw new NotFoundException('Could not find incident');
        }
        return incident;
    } 
}
