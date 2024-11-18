import { Module } from '@nestjs/common';
import {TypeOrmModule } from '@nestjs/typeorm';
import { CoursesModule } from './courses/courses.module';
import { BootcampsModule } from './bootcamps/bootcamps.module';
import { ReviewsModule } from './reviews/reviews.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 7000,
      username: 'root',
      password: '',
      database: 'bootcamp_2898754',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
      dropSchema: true,
      //debug:true
    }),
    CoursesModule,
    BootcampsModule,
    ReviewsModule,
    UsersModule,
  ],
  controllers: [ ],
  providers: [],
})
export class AppModule {}
