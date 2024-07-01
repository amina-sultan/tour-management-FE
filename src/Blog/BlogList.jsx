import React from 'react';
import './BlogList.css';
import ChitralBlog from './ChitralBlog';
import HunzaBlog from './HunzaBlog';
import GilgitBlog from './GilgitBlog';
import KashmirBlog from './KashmirBlog';
import SkarduBlog from './SkarduBlog';
import NaranKaghanBlog from './NaranKaghanBlog';
import BabusarBlog from './BabusarBlog';
import FortBlog from './FortBlog';

const BlogList = () => {
  return (
    <div className="blog-page">
      <div className="blog-entries">
      <h1>Blogs List</h1>
          <ChitralBlog />
          <HunzaBlog />
          <GilgitBlog />
          <KashmirBlog />
          <SkarduBlog />
          < NaranKaghanBlog />
          <BabusarBlog />
          < FortBlog />
      </div>
    </div>
  );
};

export default BlogList;
