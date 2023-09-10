import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { PostsModule } from './components/posts/posts.module';
import * as path from 'path';
import { PrismaModule } from 'src/components/prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { validate } from './config/enviroments/env-validator';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: path.join(
        process.cwd(),
        'src/generated/graphql/schema.gql',
      ),
      sortSchema: true,
    }),
    PostsModule,
    PrismaModule,
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
      validate,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
