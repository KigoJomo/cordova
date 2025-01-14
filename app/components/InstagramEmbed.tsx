'use client';

import { InstagramEmbedResponse } from '@/types/instagram';
import Script from 'next/script';
import { useEffect, useState } from 'react';

interface InstagramEmbedProps {
  url: string;
  className?: string;
}

export default function InstagramEmbed({
  url,
  className = '',
}: InstagramEmbedProps) {
  const [embedHtml, setEmbedHtml] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmbedData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `/api/instagram?url=${encodeURIComponent(url)}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch Instagram embed data.');
        }

        const data: InstagramEmbedResponse = await response.json();
        setEmbedHtml(data.html);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong!');
      } finally {
        setLoading(false);
      }
    };

    fetchEmbedData();
  }, [url]);

  useEffect(() => {
    if (window.instgrm && embedHtml) {
      window.instgrm.Embeds.process();
    }
  }, [embedHtml]);

  return (
    <div className="w-full md:w-2/5 aspect-square md:aspect-[4/3] bg-gray-100 rounded-2xl flex items-center justify-center">
      {loading && (
        <div className="animate-pulse h-[400px] bg-gray-200 rounded-lg" />
      )}

      {error && (
        <div className="text-red-500">
          Error loading Instagram post: {error}
        </div>
      )}

      {!error && !loading && (
        <>
          <Script
            src="https://www.instagram.com/embed.js"
            strategy="lazyOnload"
          />
          <div
            className={`w-full aspect-square md:aspect-[4/3] ${className}`}
            dangerouslySetInnerHTML={{ __html: embedHtml }}
          />
        </>
      )}
    </div>
  );
}
