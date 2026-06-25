"use client";
import React, { useState, useEffect } from 'react';
import { MessageSquare, Send } from 'lucide-react';
import Button from '@/app/widgets/button';

interface Comment {
  id: string;
  name: string;
  text: string;
  createdAt: string;
}

export default function CommentsSection({ slug }: { slug: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newCommentName, setNewCommentName] = useState('');
  const [newCommentText, setNewCommentText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetch(`/api/comments?slug=${slug}`)
      .then(res => res.json())
      .then(data => {
        if (data.comments) setComments(data.comments);
      })
      .catch(console.error);
  }, [slug]);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;
    
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, name: newCommentName, text: newCommentText })
      });
      const data = await res.json();
      if (data.success && data.comment) {
        setComments([data.comment, ...comments]);
        setNewCommentText('');
        setNewCommentName('');
      }
    } catch (err) {
      console.error("Failed to post comment", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 mt-16 pb-16">
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
        <MessageSquare className="w-8 h-8 text-cyan-400" /> 
        Discussion ({comments.length})
      </h2>
      
      <div className="bg-[#141414] border border-[#2A2A2A] p-6 mb-12">
        <form onSubmit={handleCommentSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Name (optional)"
              value={newCommentName}
              onChange={(e) => setNewCommentName(e.target.value)}
              className="w-full bg-[#0a0a0a] border border-[#2A2A2A] text-white px-4 py-3 focus:outline-none focus:border-cyan-500/50 transition-colors font-mono text-sm"
            />
          </div>
          <div>
            <textarea
              placeholder="Share your thoughts..."
              value={newCommentText}
              onChange={(e) => setNewCommentText(e.target.value)}
              required
              rows={4}
              className="w-full bg-[#0a0a0a] border border-[#2A2A2A] text-white px-4 py-3 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
            />
          </div>
          <div className="flex justify-end">
            <Button 
              type="submit" 
              disabled={isSubmitting || !newCommentText.trim()}
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold px-6 py-2 rounded-none flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Posting...' : 'Post Comment'} <Send className="w-4 h-4" />
            </Button>
          </div>
        </form>
      </div>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-[#0a0a0a] border border-[#2A2A2A] p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#141414] border border-[#2A2A2A] flex items-center justify-center text-cyan-400 font-bold text-sm">
                  {comment.name.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <p className="text-white font-bold">{comment.name}</p>
                  <p className="text-xs text-slate-500 font-mono">
                    {new Date(comment.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                  </p>
                </div>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed whitespace-pre-wrap">{comment.text}</p>
          </div>
        ))}
        {comments.length === 0 && (
          <p className="text-slate-500 text-center py-8 font-mono">No comments yet. Be the first to share your thoughts!</p>
        )}
      </div>
    </div>
  );
}
