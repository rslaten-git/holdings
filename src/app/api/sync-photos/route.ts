import { NextRequest, NextResponse } from 'next/server';

/**
 * Sync property photos from Google Drive
 * This endpoint should be called periodically to cache photo URLs
 * 
 * Usage: POST /api/sync-photos with optional token in header or env
 */

export async function POST(request: NextRequest) {
  // Verify authorization token if needed
  const authHeader = request.headers.get('authorization');
  const envToken = process.env.SYNC_TOKEN;
  
  if (envToken && authHeader !== `Bearer ${envToken}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const googleAccessToken = process.env.GOOGLE_ACCESS_TOKEN;
  if (!googleAccessToken) {
    return NextResponse.json(
      { error: 'GOOGLE_ACCESS_TOKEN not configured' },
      { status: 500 }
    );
  }

  const PROPERTY_FILE_PATTERNS: Record<string, string> = {
    lillie1: 'Lillie',
    masters1: 'Masters',
    clinton1: 'Clinton',
    wyndham1: 'Wyndham',
    pinetrail1: 'Pine Trail',
  };

  const results: Record<string, any> = {};

  try {
    for (const [slug, pattern] of Object.entries(PROPERTY_FILE_PATTERNS)) {
      try {
        const searchResponse = await fetch(
          `https://www.googleapis.com/drive/v3/files?q=name contains '${encodeURIComponent(pattern)}' and mimeType contains 'image' and trashed=false&fields=files(id,name,webViewLink)&pageSize=50`,
          {
            headers: {
              Authorization: `Bearer ${googleAccessToken}`,
            },
          }
        );

        if (!searchResponse.ok) {
          results[slug] = { error: searchResponse.statusText, count: 0 };
          continue;
        }

        const data = await searchResponse.json();
        const photos = (data.files || []).map((file: any) => ({
          id: file.id,
          name: file.name,
          thumbnailUrl: `https://drive.google.com/thumbnail?id=${file.id}&sz=w400`,
          fullUrl: `https://drive.google.com/uc?id=${file.id}&export=download`,
        }));

        results[slug] = { count: photos.length, photos };
      } catch (error) {
        results[slug] = { error: String(error), count: 0 };
      }
    }

    return NextResponse.json({
      success: true,
      synced: Object.keys(results).length,
      results,
    });
  } catch (error) {
    return NextResponse.json(
      { error: String(error), success: false },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: 'Use POST to sync photos from Google Drive',
    required: ['GOOGLE_ACCESS_TOKEN environment variable'],
  });
}
