import { BooksModule } from './books/books.module';
import { BooksService } from './books/books.service';
import { BooksController } from './books/books.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [BooksModule],
  controllers: [BooksController, AppController],
  providers: [BooksService, AppService],
})
export class AppModule {}
