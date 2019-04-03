import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ItemsModule } from './items/items.module';
import { UsersModule } from './users/users.module';

import Config from './config/keys';

@Module({
  imports: [
    MongooseModule.forRoot(Config.mongoURI, { useNewUrlParser: true }),
    ItemsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
