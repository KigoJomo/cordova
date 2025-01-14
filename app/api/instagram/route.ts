import { InstagramEmbedResponse } from '@/types/instagram';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json(
      { error: 'Instagram post URL is required!' },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://api.instagram.com/oembed/?url=${encodeURIComponent(url)}`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch from Instagram.');
    }

    const data: InstagramEmbedResponse = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: 'Failed to fetch Instagram embed data' },
      { status: 500 }
    );
  }
}
