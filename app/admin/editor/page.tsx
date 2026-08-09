'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Highlight from '@tiptap/extension-highlight';
import CharacterCount from '@tiptap/extension-character-count';
import { useState, useCallback, useRef, useEffect } from 'react';

interface FormData {
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  videoUrl: string;
  authorName: string;
  tags: string;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

function generateSlug(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim();
}

// ---- Icons ----
const BoldIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/></svg>;
const ItalicIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"/></svg>;
const UnderlineIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"/></svg>;
const StrikeIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.85 7.08C6.85 4.37 9.45 3 12.24 3c1.64 0 3 .49 3.9 1.28 1.0 .83 1.47 2.09 1.49 3.42h-3.01c-.02-.66-.18-1.15-.36-1.53-.42-.92-1.29-1.44-2.46-1.44-1.51 0-2.44.68-2.44 1.72 0 .48.21.88.61 1.17.4.29.78.48 1.16.64H6.85zm-1.23 6.66h3.01c.13.46.33.84.61 1.12.48.47 1.22.78 2.29.78 1.14 0 2.06-.38 2.49-1.05.27-.44.39-.96.37-1.56h3.01c.03 1.5-.57 2.77-1.58 3.55-.98.76-2.24 1.14-3.67 1.14-1.58 0-2.93-.44-3.82-1.22-.89-.78-1.62-1.98-1.71-2.76z M5 13h14v-2H5z"/></svg>;
const H1Icon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2v-4H8v4H6V7h2v4h4V7h2v10z"/></svg>;
const H2Icon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 7h2v4h4V7h2v10H9v-4H5v4H3zm10 0h4c1.1 0 2 .9 2 2v2c0 .75-.4 1.4-1 1.73V15c0 1.1-.9 2-2 2h-4v-2h4v-2h-3v-2h3V9h-3z"/></svg>;
const H3Icon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 7h2v4h4V7h2v10H9v-4H5v4H3zm10 0h4c1.1 0 2 .9 2 2v1c0 .55-.22 1.05-.59 1.41.37.36.59.86.59 1.41v1c0 1.1-.9 2-2 2h-4v-2h4v-2h-2v-2h2V9h-4z"/></svg>;
const QuoteIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/></svg>;
const BulletIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"/></svg>;
const OrderedIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-8v2h14V3H7zm0 18h14v-2H7v2zm0-8h14v-2H7v2z"/></svg>;
const CodeIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>;
const LinkIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>;
const ImageIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>;
const AlignLeftIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"/></svg>;
const AlignCenterIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"/></svg>;
const HighlightIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="m 13 5 l -8.5 8.5 v 3.5 h 3.5 l 8.5 -8.5 l -3.5 -3.5 m 5.7 -0.7 l -1.5 1.5 l -3.5 -3.5 l 1.5 -1.5 c 0.4 -0.4 1 -0.4 1.4 0 l 2.1 2.1 c 0.4 0.4 0.4 1 0 1.4 z" /></svg>;

export default function MediumEditor() {
  const [form, setForm] = useState<FormData>({
    title: '',
    slug: '',
    excerpt: '',
    coverImage: '',
    videoUrl: '',
    authorName: '',
    tags: '',
  });
  const [autoSlug, setAutoSlug] = useState(true);
  const [status, setStatus] = useState<Status>('idle');
  const [statusMsg, setStatusMsg] = useState('');
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [showImageInput, setShowImageInput] = useState(false);
  const [bubble, setBubble] = useState<{ top: number; left: number; visible: boolean }>({ top: 0, left: 0, visible: false });
  const bubbleRef = useRef<HTMLDivElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
      }),
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === 'heading') return 'Heading...';
          return 'Tell your story…';
        },
        showOnlyCurrent: false,
      }),
      Underline,
      Link.configure({ openOnClick: false, HTMLAttributes: { class: 'prose-link' } }),
      Image.configure({ allowBase64: false }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Highlight.configure({ multicolor: false }),
      CharacterCount,
    ],
    content: '',
    onSelectionUpdate({ editor }) {
      const { from, to } = editor.state.selection;
      if (from === to) {
        setBubble(b => ({ ...b, visible: false }));
        return;
      }
      const sel = window.getSelection();
      if (!sel || sel.rangeCount === 0) return;
      const range = sel.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      if (rect.width === 0) {
        setBubble(b => ({ ...b, visible: false }));
        return;
      }
      const bubbleWidth = 280;
      const left = Math.max(8, rect.left + rect.width / 2 - bubbleWidth / 2);
      setBubble({ top: rect.top + window.scrollY - 52, left, visible: true });
    },
    editorProps: {
      attributes: {
        class: 'medium-editor-content',
        spellcheck: 'true',
      },
    },
  });

  // Hide bubble when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (bubbleRef.current && !bubbleRef.current.contains(e.target as Node)) {
        setBubble(b => ({ ...b, visible: false }));
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);


  const handleFormChange = useCallback((field: keyof FormData, value: string) => {
    setForm(prev => {
      const updated = { ...prev, [field]: value };
      if (field === 'title' && autoSlug) {
        updated.slug = generateSlug(value);
      }
      return updated;
    });
  }, [autoSlug]);

  const setLink = useCallback(() => {
    if (!linkUrl) {
      editor?.chain().focus().extendMarkRange('link').unsetLink().run();
      setShowLinkInput(false);
      return;
    }
    editor?.chain().focus().setLink({ href: linkUrl }).run();
    setLinkUrl('');
    setShowLinkInput(false);
  }, [editor, linkUrl]);

  const insertImage = useCallback(() => {
    if (imageUrl) {
      editor?.chain().focus().setImage({ src: imageUrl }).run();
      setImageUrl('');
      setShowImageInput(false);
    }
  }, [editor, imageUrl]);

  const handlePublish = async () => {
    if (!form.title || !form.slug) {
      setStatus('error');
      setStatusMsg('Title and slug are required.');
      return;
    }
    if (!editor || editor.isEmpty) {
      setStatus('error');
      setStatusMsg('Content cannot be empty.');
      return;
    }

    setStatus('loading');
    setStatusMsg('Publishing...');

    try {
      const content = editor.getHTML();
      const secret = process.env.NEXT_PUBLIC_REVALIDATION_SECRET || '';
      const res = await fetch(`/api/webhooks/posts?secret=${encodeURIComponent(secret)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          domainName: window.location.hostname,
          slug: form.slug,
          title: form.title,
          content,
          excerpt: form.excerpt || undefined,
          coverImage: form.coverImage || undefined,
          videoUrl: form.videoUrl || undefined,
          authorName: form.authorName || undefined,
          tags: form.tags ? form.tags.split(',').map(t => t.trim()).filter(Boolean) : [],
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Unknown error');

      setStatus('success');
      setStatusMsg(`Published! /blog/${form.slug}`);
    } catch (err: unknown) {
      setStatus('error');
      setStatusMsg(`Error: ${err instanceof Error ? err.message : 'Unknown'}`);
    }
  };

  const wordCount = editor?.storage.characterCount?.words() ?? 0;
  const charCount = editor?.storage.characterCount?.characters() ?? 0;

  return (
    <div className="me-root">
      {/* ── TOP BAR ── */}
      <header className="me-topbar">
        <div className="me-topbar-left">
          <span className="me-brand">✍️ TrueMind Editor</span>
        </div>

        <div className="me-toolbar">
          {/* Text format */}
          <div className="me-toolbar-group">
            <button className={`me-tb-btn ${editor?.isActive('bold') ? 'is-active' : ''}`} onClick={() => editor?.chain().focus().toggleBold().run()} title="Bold"><BoldIcon /></button>
            <button className={`me-tb-btn ${editor?.isActive('italic') ? 'is-active' : ''}`} onClick={() => editor?.chain().focus().toggleItalic().run()} title="Italic"><ItalicIcon /></button>
            <button className={`me-tb-btn ${editor?.isActive('underline') ? 'is-active' : ''}`} onClick={() => editor?.chain().focus().toggleUnderline().run()} title="Underline"><UnderlineIcon /></button>
            <button className={`me-tb-btn ${editor?.isActive('strike') ? 'is-active' : ''}`} onClick={() => editor?.chain().focus().toggleStrike().run()} title="Strike"><StrikeIcon /></button>
            <button className={`me-tb-btn ${editor?.isActive('highlight') ? 'is-active' : ''}`} onClick={() => editor?.chain().focus().toggleHighlight().run()} title="Highlight"><HighlightIcon /></button>
          </div>

          <div className="me-toolbar-sep" />

          {/* Headings */}
          <div className="me-toolbar-group">
            <button className={`me-tb-btn ${editor?.isActive('heading', { level: 1 }) ? 'is-active' : ''}`} onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()} title="Heading 1"><H1Icon /></button>
            <button className={`me-tb-btn ${editor?.isActive('heading', { level: 2 }) ? 'is-active' : ''}`} onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()} title="Heading 2"><H2Icon /></button>
            <button className={`me-tb-btn ${editor?.isActive('heading', { level: 3 }) ? 'is-active' : ''}`} onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()} title="Heading 3"><H3Icon /></button>
          </div>

          <div className="me-toolbar-sep" />

          {/* Lists & blocks */}
          <div className="me-toolbar-group">
            <button className={`me-tb-btn ${editor?.isActive('bulletList') ? 'is-active' : ''}`} onClick={() => editor?.chain().focus().toggleBulletList().run()} title="Bullet List"><BulletIcon /></button>
            <button className={`me-tb-btn ${editor?.isActive('orderedList') ? 'is-active' : ''}`} onClick={() => editor?.chain().focus().toggleOrderedList().run()} title="Ordered List"><OrderedIcon /></button>
            <button className={`me-tb-btn ${editor?.isActive('blockquote') ? 'is-active' : ''}`} onClick={() => editor?.chain().focus().toggleBlockquote().run()} title="Quote"><QuoteIcon /></button>
            <button className={`me-tb-btn ${editor?.isActive('codeBlock') ? 'is-active' : ''}`} onClick={() => editor?.chain().focus().toggleCodeBlock().run()} title="Code"><CodeIcon /></button>
          </div>

          <div className="me-toolbar-sep" />

          {/* Alignment */}
          <div className="me-toolbar-group">
            <button className={`me-tb-btn ${editor?.isActive({ textAlign: 'left' }) ? 'is-active' : ''}`} onClick={() => editor?.chain().focus().setTextAlign('left').run()} title="Align Left"><AlignLeftIcon /></button>
            <button className={`me-tb-btn ${editor?.isActive({ textAlign: 'center' }) ? 'is-active' : ''}`} onClick={() => editor?.chain().focus().setTextAlign('center').run()} title="Align Center"><AlignCenterIcon /></button>
          </div>

          <div className="me-toolbar-sep" />

          {/* Media */}
          <div className="me-toolbar-group" style={{ position: 'relative' }}>
            <button
              className={`me-tb-btn ${editor?.isActive('link') ? 'is-active' : ''}`}
              onClick={() => { setShowImageInput(false); setShowLinkInput(p => !p); }}
              title="Insert Link"
            ><LinkIcon /></button>
            <button
              className="me-tb-btn"
              onClick={() => { setShowLinkInput(false); setShowImageInput(p => !p); }}
              title="Insert Image"
            ><ImageIcon /></button>

            {showLinkInput && (
              <div className="me-popover">
                <input
                  autoFocus
                  className="me-popover-input"
                  placeholder="https://example.com"
                  value={linkUrl}
                  onChange={e => setLinkUrl(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && setLink()}
                />
                <button className="me-popover-btn" onClick={setLink}>Insert</button>
              </div>
            )}

            {showImageInput && (
              <div className="me-popover">
                <input
                  autoFocus
                  className="me-popover-input"
                  placeholder="Image URL..."
                  value={imageUrl}
                  onChange={e => setImageUrl(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && insertImage()}
                />
                <button className="me-popover-btn" onClick={insertImage}>Insert</button>
              </div>
            )}
          </div>

          <div className="me-toolbar-sep" />

          {/* HR */}
          <button className="me-tb-btn" onClick={() => editor?.chain().focus().setHorizontalRule().run()} title="Divider">—</button>
          <button className="me-tb-btn" onClick={() => editor?.chain().focus().undo().run()} title="Undo">↩</button>
          <button className="me-tb-btn" onClick={() => editor?.chain().focus().redo().run()} title="Redo">↪</button>
        </div>

        <div className="me-topbar-right">
          <span className="me-wordcount">{wordCount} words</span>
          <button className="me-settings-btn" onClick={() => setSettingsOpen(p => !p)} title="Post settings">
            ⚙️
          </button>
          <button
            id="me-publish-btn"
            className={`me-publish-btn ${status === 'loading' ? 'loading' : ''}`}
            onClick={handlePublish}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? <span className="me-spinner" /> : 'Publish'}
          </button>
        </div>
      </header>

      {/* ── STATUS BAR ── */}
      {statusMsg && (
        <div className={`me-status-bar ${status}`}>
          {statusMsg}
          {status === 'success' && form.slug && (
            <a href={`/blog/${form.slug}`} target="_blank" rel="noreferrer" className="me-status-link">
              View post →
            </a>
          )}
        </div>
      )}

      {/* ── MAIN ── */}
      <div className="me-main">
        {/* ── SETTINGS PANEL ── */}
        <aside className={`me-settings-panel ${settingsOpen ? 'open' : ''}`}>
          <h2 className="me-settings-title">Post Settings</h2>

          <label className="me-field-label">Slug</label>
          <div className="me-slug-row">
            <input
              id="me-slug"
              className="me-field-input me-mono"
              value={form.slug}
              onChange={e => { setAutoSlug(false); handleFormChange('slug', e.target.value); }}
              placeholder="my-post-slug"
            />
            <button className={`me-auto-btn ${autoSlug ? 'on' : ''}`} onClick={() => setAutoSlug(p => !p)}>Auto</button>
          </div>
          {form.slug && <span className="me-slug-hint">/blog/{form.slug}</span>}

          <label className="me-field-label">Author</label>
          <input id="me-author" className="me-field-input" value={form.authorName} onChange={e => handleFormChange('authorName', e.target.value)} placeholder="Author name" />

          <label className="me-field-label">Excerpt</label>
          <textarea id="me-excerpt" className="me-field-input me-textarea" rows={3} value={form.excerpt} onChange={e => handleFormChange('excerpt', e.target.value)} placeholder="Short description…" />

          <label className="me-field-label">Cover Image URL</label>
          <input id="me-cover" className="me-field-input" value={form.coverImage} onChange={e => handleFormChange('coverImage', e.target.value)} placeholder="https://images.unsplash.com/…" />
          {form.coverImage && <img src={form.coverImage} alt="Preview" className="me-cover-preview" />}

          <label className="me-field-label">Video URL</label>
          <input id="me-video" className="me-field-input" value={form.videoUrl} onChange={e => handleFormChange('videoUrl', e.target.value)} placeholder="https://youtube.com/watch?v=…" />

          <label className="me-field-label">Tags (comma-separated)</label>
          <input id="me-tags" className="me-field-input" value={form.tags} onChange={e => handleFormChange('tags', e.target.value)} placeholder="react, nextjs, webdev" />
          {form.tags && (
            <div className="me-tags-row">
              {form.tags.split(',').map(t => t.trim()).filter(Boolean).map(tag => (
                <span key={tag} className="me-tag">{tag}</span>
              ))}
            </div>
          )}

          <div className="me-char-stats">
            <span>{charCount} characters</span>
            <span>{wordCount} words</span>
          </div>
        </aside>

        {/* ── WRITING CANVAS ── */}
        <div className="me-canvas">
          <input
            id="me-title"
            className="me-title-input"
            placeholder="Title"
            value={form.title}
            onChange={e => handleFormChange('title', e.target.value)}
            maxLength={200}
          />

          {/* ── CUSTOM FLOATING BUBBLE MENU ── */}
          {editor && bubble.visible && (
            <div
              ref={bubbleRef}
              className="me-bubble-menu"
              style={{ position: 'fixed', top: bubble.top, left: bubble.left, zIndex: 9999 }}
              onMouseDown={e => e.preventDefault()}
            >
              <button className={`me-bb-btn ${editor.isActive('bold') ? 'on' : ''}`} onClick={() => editor.chain().focus().toggleBold().run()}><BoldIcon /></button>
              <button className={`me-bb-btn ${editor.isActive('italic') ? 'on' : ''}`} onClick={() => editor.chain().focus().toggleItalic().run()}><ItalicIcon /></button>
              <button className={`me-bb-btn ${editor.isActive('underline') ? 'on' : ''}`} onClick={() => editor.chain().focus().toggleUnderline().run()}><UnderlineIcon /></button>
              <button className={`me-bb-btn ${editor.isActive('highlight') ? 'on' : ''}`} onClick={() => editor.chain().focus().toggleHighlight().run()}><HighlightIcon /></button>
              <div className="me-bb-sep" />
              <button className={`me-bb-btn ${editor.isActive('heading', { level: 2 }) ? 'on' : ''}`} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>H2</button>
              <button className={`me-bb-btn ${editor.isActive('heading', { level: 3 }) ? 'on' : ''}`} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>H3</button>
              <div className="me-bb-sep" />
              <button className={`me-bb-btn ${editor.isActive('link') ? 'on' : ''}`} onClick={() => { const url = window.prompt('URL'); if (url) editor.chain().focus().setLink({ href: url }).run(); }}><LinkIcon /></button>
            </div>
          )}

          <EditorContent editor={editor} className="me-editor-wrap" />
        </div>
      </div>
    </div>
  );
}
