import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QueriesModule } from './queries/queries.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.DB_CONNECTION), QueriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
