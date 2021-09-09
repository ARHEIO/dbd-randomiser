import fs from 'fs-extra'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), 'static/docs')

export function getPostSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((file: string) => file.replace(/\.md$/, ''));
}

export function getPostBySlug(slug): {data: Record<string, unknown>, content: string} {
  const filename = `${slug}.md`;
  const fullPath = join(postsDirectory, filename);

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return matter(fileContents);
}
