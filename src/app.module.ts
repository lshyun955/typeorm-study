import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VisitorsModule } from './visitors/visitors.module';
import { UsersModule } from './users/users.module';
import { TagsModule } from './tags/tags.module';
import { ProfilesModule } from './profiles/profiles.module';
import { BlogsModule } from './blogs/blogs.module';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { UserEntity } from './users/users.entity';
import { ProfileEntity } from './profiles/profiles.entity';
import { BlogEntity } from './blogs/blogs.entity';
import { VisitorEntity } from './visitors/visitors.entity';
import { TagEntity } from './tags/tags.entity';
import * as Joi from 'joi';

const typeOrmModuleOptions = {
  userFactory: async (
    configService: ConfigService,
  ): Promise<TypeOrmModuleOptions> => ({
    namingStrategy: new SnakeNamingStrategy(),
    type: 'postgres',
    host: configService.get('DB_HOST'),
    port: configService.get('DB_PORT'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_NAME'),
    entities: [UserEntity, ProfileEntity, BlogEntity, VisitorEntity, TagEntity],
    synchronize: true,
    autoLoadEntities: true,
    logging: true,
    keepConnectionAlive: true,
  }),
  inject: [ConfigService],
};
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test', 'provision')
          .default('development'),
        PORT: Joi.number().default(5000),
        SECRET_KEY: Joi.string().required(),
        ADMIN_USER: Joi.string().required(),
        ADMIN_PASSWORD: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().required(),
        DB_NAME: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRootAsync(typeOrmModuleOptions),
    VisitorsModule,
    UsersModule,
    TagsModule,
    ProfilesModule,
    BlogsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
