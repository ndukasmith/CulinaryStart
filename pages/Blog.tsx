import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Button } from '../components/Button';
import { BackButton } from '../components/BackButton';

export const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackButton />
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-stone-900 mb-4">Industry Insights</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
             Trends, guides, and success stories from the Dutch food scene.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16 relative rounded-2xl overflow-hidden h-[400px] group cursor-pointer">
           <img src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=1600&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Featured" />
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 md:p-12">
              <span className="text-emerald-400 font-bold text-sm uppercase mb-2">Featured Report</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">The State of the Dutch Shared Kitchen Market 2025</h2>
              <p className="text-stone-200 max-w-xl mb-6">An in-depth analysis of how sustainability and delivery apps are reshaping commercial kitchen usage in Amsterdam and Rotterdam.</p>
              <Button className="w-fit">Read Report</Button>
           </div>
        </div>

        {/* Recent Posts Grid */}
        <h2 className="text-2xl font-bold text-stone-900 mb-8">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {BLOG_POSTS.map(post => (
              <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-md transition-shadow group cursor-pointer">
                 <div className="h-48 overflow-hidden">
                    <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                 </div>
                 <div className="p-6">
                    <div className="flex justify-between items-center text-xs text-stone-500 mb-3">
                       <span className="font-bold text-primary-700 uppercase">{post.category}</span>
                       <span>{post.date}</span>
                    </div>
                    <h3 className="font-bold text-lg text-stone-900 mb-3 group-hover:text-primary-700 transition-colors">{post.title}</h3>
                    <p className="text-stone-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <span className="text-xs font-medium text-stone-400">By {post.author}</span>
                 </div>
              </div>
           ))}
        </div>

        {/* Newsletter */}
        <div className="mt-20 bg-stone-900 rounded-2xl p-8 md:p-16 text-center text-white">
           <h2 className="text-3xl font-serif font-bold mb-4">Stay ahead of the curve</h2>
           <p className="text-stone-300 mb-8">Get our free "Dutch Food Trends 2025" guide when you subscribe.</p>
           <form className="max-w-md mx-auto flex gap-2">
              <input type="email" placeholder="Enter your email" className="flex-1 rounded-md border-none px-4 py-3 text-stone-900" />
              <Button type="submit" variant="primary">Subscribe</Button>
           </form>
        </div>

      </div>
    </div>
  );
};
