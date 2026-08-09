import { PortableTextComponents } from '@portabletext/react';
import { slugify } from '../lib/toc';
import { urlForImage } from '../../sanity/lib/image';

export const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => {
      // Extract raw text from children for the slug
      const text = getPlainText(children);
      const slug = slugify(text);
      return <h2 id={slug}>{children}</h2>;
    },
    h3: ({ children }) => {
      const text = getPlainText(children);
      const slug = slugify(text);
      return <h3 id={slug}>{children}</h3>;
    },
    // You can add other block types here if needed (e.g. normal text, blockquotes)
  },
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;
      return (
        <img
          alt={value.alt || 'Post image'}
          loading="lazy"
          src={urlForImage(value)}
          className="rounded-xl shadow-lg my-8 w-full h-auto"
        />
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
        <div className="my-8 w-full aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe 
            src={embedUrl}
            title="YouTube Video"
            className="w-full h-full"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      );
    }
  },
};

// Helper function to extract plain text from React children tree 
// (which can be strings or nested arrays of objects)
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
