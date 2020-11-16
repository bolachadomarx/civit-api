import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { IncidentModule } from './incident/incident.module';
import { CategoryModule } from './category/category.module';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL),
    AuthModule, 
    UsersModule, IncidentModule, CategoryModule, ArticleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
