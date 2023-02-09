import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { path } from 'app-root-path';
import { FileService } from './file.service';

@Module({
  controllers: [],
  imports: [
    ServeStaticModule.forRoot({
      rootPath: `${path}/uploads`,
      serveRoot: '/static',
    }),
  ],
  providers: [FileService],
  exports: [FileService],
})
export class FileModule {}
