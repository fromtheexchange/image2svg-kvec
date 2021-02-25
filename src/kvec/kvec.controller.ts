import { UseInterceptors, UploadedFiles } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { Controller, Post } from '@nestjs/common';
import { KvecService, ColorMode } from './kvec.service';

@Controller('kvec')
export class KvecController {
  constructor(private readonly kvecService: KvecService) {}

  @Post('color')
  @UseInterceptors(AnyFilesInterceptor())
  // File type https://stackoverflow.com/a/59325829
  async imagetracerjs(@UploadedFiles() files: Express.Multer.File[]) {
    const colorMode = ColorMode.COLOR;

    const processedFiles = await this.kvecService.processFiles(
      files,
      colorMode,
    );

    return {
      algorithm: 'kvec',
      colorMode,
      files: processedFiles,
    };
  }

  @Post('black-and-white')
  @UseInterceptors(AnyFilesInterceptor())
  // File type https://stackoverflow.com/a/59325829
  async blackAndWhite(@UploadedFiles() files: Express.Multer.File[]) {
    const colorMode = ColorMode.BLACK_AND_WHITE;

    const processedFiles = await this.kvecService.processFiles(
      files,
      colorMode,
    );

    return {
      algorithm: 'kvec',
      colorMode,
      files: processedFiles,
    };
  }
}
