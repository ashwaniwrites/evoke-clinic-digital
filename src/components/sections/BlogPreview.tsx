import React from 'react';
import { Link } from 'react-router-dom';
import { EvokeCard } from '@/components/ui/EvokeCard';
import { EvokeBadge } from '@/components/ui/EvokeBadge';
import { EvokeButton } from '@/components/ui/EvokeButton';
import type { BlogArticle } from '@/types/booking';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Props {
  articles: BlogArticle[];
}

/** Blog preview section with article cards */
export const BlogPreview: React.FC<Props> = ({ articles }) => {
  const revealRef = useScrollReveal();

  return (
    <section className="section-padding bg-evoke-bgLight">
      <div ref={revealRef as any} className="container mx-auto px-4">
        <div className="reveal-item" data-reveal="blur">
          <h2 className="display-heading text-evoke-navy text-center mb-3">Learn Before You Decide.</h2>
        </div>
        <p className="text-center text-evoke-textMuted mb-12 reveal-item" data-reveal="fade">
          Doctor-authored guides, honest comparisons, and real answers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div key={article.id} className="reveal-item" data-reveal="lift">
              <Link to={`/blog/${article.slug}`}>
            <EvokeCard hover className="h-full">
              <div className="aspect-video overflow-hidden">
                <img src={article.thumbnail} alt={article.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <EvokeBadge variant="teal" className="mb-3">{article.category}</EvokeBadge>
                <h3 className="font-display text-lg font-bold text-evoke-navy mb-2 line-clamp-2">{article.title}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <img src={article.authorImage} alt={article.author} className="w-6 h-6 rounded-full" loading="lazy" />
                  <span className="text-xs text-evoke-textMuted">{article.author}</span>
                  <span className="text-xs text-evoke-textMuted">· {article.readTime}</span>
                </div>
                <p className="text-sm text-evoke-textMuted line-clamp-2">{article.excerpt}</p>
              </div>
            </EvokeCard>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 reveal-item" data-reveal="fade">
          <Link to="/blog">
            <EvokeButton variant="secondary">Explore All Articles →</EvokeButton>
          </Link>
        </div>
      </div>
    </section>
  );
};
