import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IncidentController } from './incident.controller';
import { IncidentSchema } from './incident.model';
import { IncidentService } from './incident.service';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Incident', schema: IncidentSchema,
    }]),
  ],
  controllers: [IncidentController],
  providers: [IncidentService]
})
export class IncidentModule { }
