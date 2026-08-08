import type { Metadata } from 'next';
import './editor.css';

export const metadata: Metadata = {
  title: 'Blog Editor | Truemind Labs',
  description: 'Admin editor to create and publish blog posts.',
  robots: 'noindex, nofollow',
};

export default function EditorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
