import { Module } from '@nestjs/common';
import { QueriesService } from './queries.service';
import { QueriesController } from './queries.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Queries, QueriesSchema } from './schemas/queries.schema';

@Module({
  providers: [QueriesService],
  controllers: [QueriesController],
  imports: [
    MongooseModule.forFeature([{ name: Queries.name, schema: QueriesSchema }]),
  ],
})
export class QueriesModule {}
