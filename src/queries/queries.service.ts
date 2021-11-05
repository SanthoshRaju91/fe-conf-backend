import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QueriesDto } from './dto/queries.dto';
import { Queries, QueriesDocument } from './schemas/queries.schema';

type Pagination = {
  page: number;
  limit: number;
  count: number;
};

@Injectable()
export class QueriesService {
  constructor(
    @InjectModel(Queries.name) private readonly model: Model<QueriesDocument>,
  ) {}

  async findAll(): Promise<Queries[]> {
    return await this.model.find().sort({ _id: 1 }).exec();
  }

  async paginate(
    page = 0,
    limit?: number,
  ): Promise<{ queries: Queries[]; metadata: Pagination }> {
    const count = await this.model.count();
    const documentsToSkip = page * limit;
    const query = this.model.find().sort({ _id: 1 }).skip(documentsToSkip);

    if (limit) {
      query.limit(limit);
    }

    const queries = await query;
    const metadata: Pagination = {
      count,
      page,
      limit,
    };
    return { queries, metadata };
  }

  async search(queriesDto: QueriesDto): Promise<Queries> {
    const now = new Date();
    return await new this.model({
      ...queriesDto,
      elapsed_time: '10.2',
      request_time: now.toLocaleString(),
    }).save();
  }
}
