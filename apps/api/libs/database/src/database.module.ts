import { Module } from '@nestjs/common';
import { CategoriesService } from './categories/categories/categories.service';
import { DatabaseService } from './database/database.service';

@Module({
  providers: [DatabaseService, CategoriesService],
  exports: [DatabaseService, CategoriesService],
})
export class DatabaseModule {}
