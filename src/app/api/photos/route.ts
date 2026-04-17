import { NextRequest, NextResponse } from 'next/server';

// Google Drive folder IDs for each property (from Family Office Drive structure)
const PROPERTY_FOLDER_IDS: Record<string, { mediaFolderId: string; propertyName: string }> = {
  lillie1: { mediaFolderId: '1s2lk0EYEyjeLspYRuNyhACNvkECRD1WQ', propertyName: 'Lillie' },
  masters1: { mediaFolderId: '1s2lk0EYEyjeLspYRuNyhACNvkECRD1WQ', propertyName: 'Masters' },
  clinton1: { mediaFolderId: '1s2lk0EYEyjeLspYRuNyhACNvkECRD1WQ', propertyName: 'Clinton' },
  wyndham1: { mediaFolderId: '1s2lk0EYEyjeLspYRuNyhACNvkECRD1WQ', propertyName: 'Wyndham' },
  pinetrail1: { mediaFolderId: '1s2lk0EYEyjeLspYRuNyhACNvkECRD1WQ', propertyName: 'Pine Trail' },
};

// Map property slugs to Drive file search terms (by filename)
const PROPERTY_FILE_PATTERNS: Record<string, string> = {
  lillie1: 'Lillie',
  masters1: 'Masters',
  clinton1: 'Clinton',
  wyndham1: 'Wyndham',
  pinetrail1: 'Pine Trail',
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');

  if (!slug || !PROPERTY_FILE_PATTERNS[slug]) {
    return NextResponse.json({ error: 'Invalid property slug' }, { status: 400 });
  }

  try {
    // Get Google API token from environment
    const accessToken = process.env.GOOGLE_ACCESS_TOKEN;
    if (!accessToken) {
      console.warn('GOOGLE_ACCESS_TOKEN not set, returning empty photos');
      return NextResponse.json({ photos: [] });
    }

    const filePattern = PROPERTY_FILE_PATTERNS[slug];
    
    // Search for files in Drive matching property name
    const searchResponse = await fetch(
      `https://www.googleapis.com/drive/v3/files?q=name contains '${encodeURIComponent(filePattern)}' and mimeType contains 'image' and trashed=false&fields=files(id,name,webViewLink,webContentLink)&pageSize=50`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!searchResponse.ok) {
      console.error('Drive API error:', searchResponse.statusText);
      return NextResponse.json({ photos: [] });
    }

    const data = await searchResponse.json();
    const photos = (data.files || []).map((file: any) => ({
      id: file.id,
      name: file.name,
      link: file.webViewLink,
      // Generate thumbnail URL (add =w800 parameter for size)
      thumbnailUrl: `https://drive.google.com/thumbnail?id=${file.id}&sz=w400`,
      fullUrl: `https://drive.google.com/uc?id=${file.id}&export=download`,
    }));

    return NextResponse.json({ photos, count: photos.length });
  } catch (error) {
    console.error('Error fetching photos:', error);
    return NextResponse.json({ photos: [], error: 'Failed to fetch photos' });
  }
}
