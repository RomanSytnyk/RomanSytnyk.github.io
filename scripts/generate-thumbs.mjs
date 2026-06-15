// Generates 800px WebP thumbnails for gallery images into <dir>/thumbs/.
// Run after adding new photos: npm run thumbs
import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";

const IMAGE_DIRS = ["meetings", "photography", "boardGames", "erasmus"];
const ROOT = path.join(import.meta.dirname, "..", "public", "images");
const MAX_SIZE = 800;
const QUALITY = 80;

for (const dir of IMAGE_DIRS) {
  const srcDir = path.join(ROOT, dir);
  const thumbsDir = path.join(srcDir, "thumbs");
  await mkdir(thumbsDir, { recursive: true });

  const files = (await readdir(srcDir)).filter((f) => /\.jpe?g$/i.test(f));
  for (const file of files) {
    const outName = file.replace(/\.jpe?g$/i, ".webp");
    const outPath = path.join(thumbsDir, outName);
    await sharp(path.join(srcDir, file))
      .rotate() // respect EXIF orientation
      .resize(MAX_SIZE, MAX_SIZE, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outPath);
    console.log(`${dir}/thumbs/${outName}`);
  }
}
