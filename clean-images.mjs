import fs from 'fs';
import path from 'path';

const realImagesDir = path.join(process.cwd(), 'public', 'images', 'real');
const imagesTsPath = path.join(process.cwd(), 'src', 'data', 'images.ts');
const activitiesTsPath = path.join(process.cwd(), 'src', 'data', 'activities.ts');

let imagesTsContent = fs.readFileSync(imagesTsPath, 'utf8');
let activitiesTsContent = fs.readFileSync(activitiesTsPath, 'utf8');

const files = fs.readdirSync(realImagesDir);

for (const file of files) {
  if (!file.endsWith('.jpg')) continue;

  const newFileName = file
    .toLowerCase()
    .replace(/['’()]/g, '')
    .replace(/[^a-z0-9.]/g, '-')
    .replace(/-+/g, '-')
    .replace(/-\.jpg$/, '.jpg');

  if (file !== newFileName) {
    fs.renameSync(path.join(realImagesDir, file), path.join(realImagesDir, newFileName));
    const oldFileNameEscaped = file.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`/images/real/${oldFileNameEscaped}`, 'g');
    imagesTsContent = imagesTsContent.replace(regex, `/images/real/${newFileName}`);
    activitiesTsContent = activitiesTsContent.replace(regex, `/images/real/${newFileName}`);
  }
}

fs.writeFileSync(imagesTsPath, imagesTsContent);
fs.writeFileSync(activitiesTsPath, activitiesTsContent);

console.log("Renaming and updating complete.");
