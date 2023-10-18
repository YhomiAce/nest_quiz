import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { QuizModule } from './modules/quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './database/datasource';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), UserModule, QuizModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
