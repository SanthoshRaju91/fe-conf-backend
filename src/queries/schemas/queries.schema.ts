import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Queries {
  @Prop({ required: true })
  query: string;

  @Prop({ required: true })
  nodes: number;

  @Prop({ required: true })
  elapsed_time: string;

  @Prop({ required: true })
  request_time: string;
}

export const QueriesSchema = SchemaFactory.createForClass(Queries);

export type QueriesDocument = Queries & Document;
