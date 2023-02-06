import { path } from 'app-root-path';
import { Injectable } from '@nestjs/common';
import { ensureDir, writeFile, rm } from 'fs-extra';
import { v4 as uuidv4 } from 'uuid';
import { File } from './file.interface';

@Injectable()
export class FileService {
  async saveFiles(
    files: Express.Multer.File[],
    folder = 'other',
  ): Promise<File[]> {
    const currentDate = new Date();
    const date = currentDate.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });

    const uploadFolder = `${path}/uploads/${folder}/${date}`;
    await ensureDir(uploadFolder);

    const res: File[] = [];

    for (const file of files) {
      const originalName = Buffer.from(file.originalname, 'latin1').toString(
        'utf-8',
      );

      const id = uuidv4();
      const ext = '.' + originalName.split('.').slice(-1)[0];

      await writeFile(`${uploadFolder}/${id}${ext}`, file.buffer);
      res.push({
        url: `/${folder}/${date}/${id}${ext}`,
        name: originalName,
        type: file.mimetype,
      });
    }

    return res;
  }
  async remove(link: string): Promise<void> {
    await rm(`${path}${link}`);
  }
}
