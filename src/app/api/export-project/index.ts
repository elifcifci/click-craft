import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const archiver = require('archiver');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Disposition', 'attachment; filename=my-next-js-project.zip');
  res.setHeader('Content-Type', 'application/zip');

  const archive = archiver('zip', { zlib: { level: 9 } });

  archive.on('error', function (err) {
    throw err;
  });

  archive.pipe(res);

  const projectDir = path.join(process.cwd());
  archive.diresctory(projectDir, false);

  await archive.finalize();
}
