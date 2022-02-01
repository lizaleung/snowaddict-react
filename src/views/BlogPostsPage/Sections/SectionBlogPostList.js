import SectionBlogPreview from './SectionBlogPreview';
import ListPagination from './ListPagination';
import React from 'react';
import GridContainer from "components/Grid/GridContainer.js";


const SectionBlogPostList = props => {
  if (!props.articles) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }

  if (props.articles.length === 0) {
    return (
      <div className="article-preview">
        No articles are here... yet.
      </div>
    );
  }

  return (
    <div>
      <GridContainer>

      {
        props.articles.map(article => {
          return (
            <SectionBlogPreview article={article} key={article.slug} />
          );
        })
      }
      </GridContainer>

      <ListPagination
        pager={props.pager}
        articlesCount={props.articlesCount}
        currentPage={props.currentPage} />
    </div>
  );
};

export default SectionBlogPostList;
