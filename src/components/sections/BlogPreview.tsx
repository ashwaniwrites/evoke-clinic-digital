import React from 'react';
import { Link } from 'react-router-dom';
import { EvokeCard } from '@/components/ui/EvokeCard';
import { EvokeBadge } from '@/components/ui/EvokeBadge';
import { EvokeButton } from '@/components/ui/EvokeButton';
import type { BlogArticle } from '@/types/booking';

interface Props {
  articles: BlogArticle[];
}

/** Blog preview section with article cards */
export const BlogPreview: React.FC<Props> = ({ articles }) => (
  <section className="section-padding bg-evoke-bgLight">
    <div className="container mx-auto px-4">
      <h2 className="display-heading text-evoke-navy text-center mb-3">Learn Before You Decide.</h2>
      <p className="text-center text-evoke-textMuted mb-12">
        Doctor-authored guides, honest comparisons, and real answers.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link key={article.id} to={`/blog/${article.slug}`}>
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
        ))}
      </div>

      <div className="text-center mt-8">
        <Link to="/blog">
          <EvokeButton variant="secondary">Explore All Articles →</EvokeButton>
        </Link>
      </div>
    </div>
  </section>
);
