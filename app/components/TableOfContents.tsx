'use client';

import { TOCHeading } from '../lib/toc';
import { useState, useEffect } from 'react';

interface TableOfContentsProps {
  headings: TOCHeading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeSlug, setActiveSlug] = useState<string>('');

  useEffect(() => {
    if (!headings.length) return;

    const headingEls = headings
      .map((h) => document.getElementById(h.slug))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveSlug(visible[0].target.id);
        }
      },
      { rootMargin: '0px 0px -70% 0px', threshold: 0 }
    );

    headingEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  if (!headings || headings.length === 0) return null;

  const activeIndex = headings.findIndex((h) => h.slug === activeSlug);
  const progress = headings.length ? Math.round(((activeIndex + 1) / headings.length) * 100) : 0;

  return (
    <nav
      style={{
        maxHeight: 'calc(100vh - 8rem)',
        overflowY: 'auto',
        width: '100%',
        background: '#111111',
        border: '1px solid #222222',
        borderRadius: '14px',
        padding: '1.25rem 1rem',
        boxShadow: '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)',
        scrollbarWidth: 'thin',
        scrollbarColor: '#333 transparent',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '1rem',
          paddingBottom: '0.75rem',
          borderBottom: '1px solid #222222',
        }}
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
          <rect x="1" y="2" width="9" height="1.5" rx="0.75" fill="#888"/>
          <rect x="1" y="6" width="14" height="1.5" rx="0.75" fill="#888"/>
          <rect x="1" y="10" width="11" height="1.5" rx="0.75" fill="#888"/>
          <rect x="1" y="14" width="7" height="1.5" rx="0.75" fill="#888"/>
        </svg>
        <span
          style={{
            fontSize: '0.65rem',
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#888888',
          }}
        >
          On this page
        </span>
      </div>

      {/* Items */}
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '1px' }}>
        {headings.map((heading, index) => {
          const isActive = activeSlug === heading.slug;
          const isH3 = heading.level === 3;

          return (
            <li key={`${heading.slug}-${index}`} style={{ marginLeft: isH3 ? '0.75rem' : '0' }}>
              <a
                href={`#${heading.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(heading.slug);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    setActiveSlug(heading.slug);
                  }
                }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.6rem',
                  padding: '0.4rem 0.6rem',
                  borderRadius: '7px',
                  textDecoration: 'none',
                  fontSize: isH3 ? '0.76rem' : '0.82rem',
                  fontWeight: isActive ? 600 : 400,
                  lineHeight: '1.45',
                  color: isActive ? '#e5e5e5' : '#666666',
                  background: isActive ? '#1e1e1e' : 'transparent',
                  borderLeft: `2px solid ${isActive ? '#888888' : 'transparent'}`,
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = '#aaaaaa';
                    el.style.background = '#161616';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = '#666666';
                    el.style.background = 'transparent';
                  }
                }}
              >
                {/* dot */}
                <span
                  style={{
                    display: 'inline-block',
                    width: isH3 ? '3px' : '4px',
                    height: isH3 ? '3px' : '4px',
                    borderRadius: '50%',
                    background: isActive ? '#aaaaaa' : '#333333',
                    flexShrink: 0,
                    marginTop: '0.42rem',
                    transition: 'background 0.15s ease',
                  }}
                />
                <span
                  style={{
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {heading.text}
                </span>
              </a>
            </li>
          );
        })}
      </ul>

      {/* Progress bar */}
      <div
        style={{
          marginTop: '1rem',
          paddingTop: '0.75rem',
          borderTop: '1px solid #222222',
        }}
      >
        <div
          style={{
            height: '2px',
            borderRadius: '9999px',
            background: '#222222',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              borderRadius: '9999px',
              background: 'linear-gradient(90deg, #555555, #888888)',
              width: `${progress}%`,
              transition: 'width 0.4s ease',
            }}
          />
        </div>
        <p style={{ fontSize: '0.65rem', color: '#444444', marginTop: '0.4rem', textAlign: 'right' }}>
          {activeIndex + 1} / {headings.length}
        </p>
      </div>
    </nav>
  );
}
