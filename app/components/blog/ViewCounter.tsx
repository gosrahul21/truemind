"use client";
import React, { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

export default function ViewCounter({ slug }: { slug: string }) {
  const [views, setViews] = useState(0);

  useEffect(() => {
    fetch('/api/views', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug })
    })
      .then(res => res.json())
      .then(data => {
        if (data.views !== undefined) setViews(data.views);
      })
      .catch(console.error);
  }, [slug]);

  return (
    <span className="flex items-center gap-1.5">
      <Eye className="w-4 h-4" /> {views > 0 ? `${views} views` : '...'}
    </span>
  );
}
