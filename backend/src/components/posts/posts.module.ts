import { Module } from '@nestjs/common';
import { PostsResolver } from './post.resolvers';
import { PrismaModule } from 'src/components/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PostsResolver],
})
export class PostsModule {}
