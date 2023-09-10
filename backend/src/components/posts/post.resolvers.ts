import { PrismaService } from './../prisma/prisma.service';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { PostModel } from './interfaces/post.model';
import { GetPostsArgs } from 'src/components/posts/interfaces/get-posts-connection.args';
import { FindPostArgs } from './interfaces/find-post-args';
import { ConfigService } from '@nestjs/config';

@Resolver((of) => PostModel)
export class PostsResolver {
  constructor(
    private readonly prisma: PrismaService,
    private configService: ConfigService,
  ) { }

  @Query(() => String)
  helloConfiguration(): string {
    const nodeEnv = this.configService.get<string>('NODE_ENV'); // development （.env.development.localのもの）
    const databaseUrl = this.configService.get<string>('DATABASE_URL'); // postgresql:/... （.env.development.localのもの）
    const microCmsKey = this.configService.get<string>('MICRO_CMS_KEY'); // 1234567890（環境変数のもの）
  }

  @Query(() => [PostModel], { name: 'fixedPosts', nullable: true })
  async getPostsByFixedData() {
    return [
      {
        id: '1',
        title: 'NestJS is so good.',
      },
      {
        id: '2',
        title: 'GraphQL is so good.',
      },
    ];
  }

  @Query(() => PostModel, { name: 'findPost', nullable: false })
  async findPost(@Args() args: FindPostArgs) {
    return await this.prisma.post.findUnique({
      where: {
        id: args.id,
        contentPath: args.contentPath,
      },
    });
  }

  @Query(() => [PostModel], { name: 'prismaPosts', nullable: true })
  async getPostsByPrisma() {
    return this.prisma.post.findMany();
  }

  @Query(() => [PostModel], { name: 'posts', nullable: true })
  async getPosts(@Args() args: GetPostsArgs) {
    return this.prisma.post.findMany({
      where: {
        type: args.type
          ? {
            in: args.type,
          }
          : undefined,
        published: true, // ついでに指定。公開ブログへ渡すデータなのでtrue固定にしちゃう
      },
      orderBy: {
        publishDate: 'desc',
      },
    });
  }
}
