import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [PbEnvModule],
      useFactory: async (env: PbEnv) => env.MicroCmsHttpModuleOptionsFactory,
      inject: [PbEnv],
    }),
  ],
  providers: [ProfileService, ProfileResolver],
})
export class ProfileModule { }
