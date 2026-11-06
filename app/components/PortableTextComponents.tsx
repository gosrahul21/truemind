import { PortableTextComponents } from '@portabletext/react';
import { slugify } from '../lib/toc';
import { urlForImage } from '../../sanity/lib/image';

export const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => {
      const text = getPlainText(children);
      const slug = slugify(text);
      return (
        <h2 id={slug} className="text-2xl md:text-3xl font-bold mt-10 mb-4 scroll-mt-24 text-gray-900 dark:text-gray-100">
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      const text = getPlainText(children);
      const slug = slugify(text);
      return (
        <h3 id={slug} className="text-xl md:text-2xl font-semibold mt-8 mb-3 scroll-mt-24 text-gray-900 dark:text-gray-100">
          {children}
        </h3>
      );
    },
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-indigo-500 pl-4 py-1 italic text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/40 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  marks: {
    highlight: ({ children }: any) => (
      <mark className="bg-amber-200/80 dark:bg-amber-500/25 text-gray-900 dark:text-amber-200 px-1 py-0.5 rounded font-medium">
        {children}
      </mark>
    ),
    textColor: ({ value, children }: any) => (
      <span style={{ color: value?.value }}>{children}</span>
    ),
    link: ({ value, children }: any) => {
      const href = value?.href || '';
      const isExternal = href.startsWith('http');
      return (
        <a
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="text-indigo-600 dark:text-indigo-400 underline decoration-indigo-400/50 hover:decoration-indigo-600 dark:hover:decoration-indigo-300 font-medium transition"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;
      return (
        <figure className="my-8">
          <img
            alt={value.alt || 'Post image'}
            loading="lazy"
            src={urlForImage(value)}
            className="rounded-xl shadow-lg w-full h-auto"
          />
          {value.caption && (
            <figcaption className="text-center text-xs text-gray-500 mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    table: ({ value }: any) => {
      if (!value?.rows || !Array.isArray(value.rows) || value.rows.length === 0) return null;
      const [headerRow, ...bodyRows] = value.rows;
      return (
        <div className="my-8 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800 text-left text-sm">
            {headerRow?.cells && (
              <thead className="bg-gray-100/90 dark:bg-gray-800/90">
                <tr>
                  {headerRow.cells.map((cell: string, idx: number) => (
                    <th key={idx} className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800 bg-white dark:bg-gray-900">
              {bodyRows.map((row: any, rIdx: number) => (
                <tr key={row._key || rIdx} className="hover:bg-gray-50/60 dark:hover:bg-gray-800/50 transition">
                  {row.cells?.map((cell: string, cIdx: number) => (
                    <td key={cIdx} className="px-4 py-3 text-gray-700 dark:text-gray-300 whitespace-pre-line">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },
    callout: ({ value }: any) => {
      if (!value?.content) return null;
      const tone = value.tone || 'takeaway';
      const toneStyles: Record<string, { border: string; bg: string; text: string; icon: string; title: string }> = {
        takeaway: {
          border: 'border-indigo-500',
          bg: 'bg-indigo-50/70 dark:bg-indigo-950/30',
          text: 'text-indigo-950 dark:text-indigo-200',
          icon: '💡',
          title: 'Key Takeaway',
        },
        tip: {
          border: 'border-emerald-500',
          bg: 'bg-emerald-50/70 dark:bg-emerald-950/30',
          text: 'text-emerald-950 dark:text-emerald-200',
          icon: '✅',
          title: 'Pro Tip',
        },
        warning: {
          border: 'border-amber-500',
          bg: 'bg-amber-50/70 dark:bg-amber-950/30',
          text: 'text-amber-950 dark:text-amber-200',
          icon: '⚠️',
          title: 'Warning',
        },
        stat: {
          border: 'border-blue-500',
          bg: 'bg-blue-50/70 dark:bg-blue-950/30',
          text: 'text-blue-950 dark:text-blue-200',
          icon: '📊',
          title: 'Key Metric',
        },
        quote: {
          border: 'border-purple-500',
          bg: 'bg-purple-50/70 dark:bg-purple-950/30',
          text: 'text-purple-950 dark:text-purple-200',
          icon: '💬',
          title: 'Case Study',
        },
      };
      const style = toneStyles[tone] || toneStyles.takeaway;
      return (
        <aside className={`my-8 p-5 rounded-xl border-l-4 shadow-sm ${style.border} ${style.bg} ${style.text}`}>
          <div className="flex items-center gap-2 mb-2 font-bold tracking-wide">
            <span className="text-xl">{style.icon}</span>
            <span className="text-base text-gray-900 dark:text-gray-100">{value.title || style.title}</span>
          </div>
          <div className="text-sm md:text-base leading-relaxed opacity-95 whitespace-pre-line font-normal">
            {value.content}
          </div>
        </aside>
      );
    },
    youtube: ({ value }: any) => {
      if (!value?.url) return null;
      let embedUrl = value.url;
      if (embedUrl.includes('youtube.com/shorts/')) {
        embedUrl = embedUrl.replace('youtube.com/shorts/', 'youtube.com/embed/');
      } else if (embedUrl.includes('watch?v=')) {
        embedUrl = embedUrl.replace('watch?v=', 'embed/');
      } else if (embedUrl.includes('youtu.be/')) {
        embedUrl = embedUrl.replace('youtu.be/', 'youtube.com/embed/');
      }
      return (
        <figure className="my-8">
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
            <iframe
              src={embedUrl}
              title={value.title || 'YouTube Video'}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {(value.title || value.caption) && (
            <figcaption className="mt-2 text-center text-xs md:text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">{value.title}</span>
              {value.caption && ` — ${value.caption}`}
            </figcaption>
          )}
        </figure>
      );
    },
    faq: ({ value }: any) => {
      if (!value?.items || !Array.isArray(value.items) || value.items.length === 0) return null;
      return (
        <section className="my-12 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 font-bold text-sm">
              FAQ
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 m-0">
              {value.title || 'Frequently Asked Questions'}
            </h2>
          </div>
          <div className="space-y-4">
            {value.items.map((item: any, idx: number) => (
              <details
                key={idx}
                className="group rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/60 p-5 transition-all duration-200 hover:border-indigo-400/50 dark:hover:border-indigo-500/50"
              >
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900 dark:text-gray-100 list-none text-base md:text-lg">
                  <span className="flex items-start gap-3">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold select-none">Q:</span>
                    <span>{item.question}</span>
                  </span>
                  <span className="ml-4 flex-shrink-0 text-gray-400 transition-transform duration-200 group-open:rotate-180">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-3 pl-7 text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line border-t border-gray-100 dark:border-gray-800/80 pt-3">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </section>
      );
    },
  },
};

function getPlainText(children: any): string {
  if (typeof children === 'string') {
    return children;
  }
  if (Array.isArray(children)) {
    return children.map(getPlainText).join('');
  }
  if (children && typeof children === 'object' && children.props && children.props.text) {
    return children.props.text;
  }
  if (children && typeof children === 'object' && children.props && children.props.children) {
    return getPlainText(children.props.children);
  }
  return '';
}
