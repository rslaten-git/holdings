import { NextRequest, NextResponse } from 'next/server';
import { readdir } from 'fs/promises';
import { join } from 'path';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');

  if (!slug) {
    return NextResponse.json({ error: 'Slug required' }, { status: 400 });
  }

  try {
    const photoDir = join(process.cwd(), 'public', 'photos', slug);
    const files = await readdir(photoDir);
    
    const photos = files
      .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
      .sort()
      .map(f => ({
        src: `/photos/${slug}/${f}`,
        alt: `${slug} property photo`
      }));

    return NextResponse.json({ photos, count: photos.length });
  } catch (error) {
    console.error('Error reading photos:', error);
    return NextResponse.json({ photos: [], count: 0 });
  }
}
