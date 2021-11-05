import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { QueriesDto } from './dto/queries.dto';
import { QueriesService } from './queries.service';

@Controller('queries')
export class QueriesController {
  constructor(private readonly service: QueriesService) {}

  @Get()
  async queries() {
    return await this.service.findAll();
  }

  @Get('paginate')
  async paginateQueries(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 0,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
  ) {
    return await this.service.paginate(page, limit);
  }

  @Post()
  async search(@Body() searchDto: QueriesDto) {
    return await this.service.search(searchDto);
  }
}
