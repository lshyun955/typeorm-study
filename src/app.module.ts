import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VisitorsModule } from './visitors/visitors.module';
import { UsersModule } from './users/users.module';
import { TagsModule } from './tags/tags.module';
import { ProfilesModule } from './profiles/profiles.module';
import { BlogsModule } from './blogs/blogs.module';

@Module({
  imports: [
    VisitorsModule,
    UsersModule,
    TagsModule,
    ProfilesModule,
    BlogsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
