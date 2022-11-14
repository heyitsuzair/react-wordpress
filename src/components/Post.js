import React from "react";
import { Link } from "react-router-dom";
import FeaturedImage from "./FeaturedImage";

export default function Post({ postItem }) {
  return (
    <div className="post-wrapper d-flex align-items-center justify-content-center flex-column">
      <h2>
        <Link to={`/post/` + postItem.id}>{postItem.title}</Link>
      </h2>
      {postItem.attachment_image.img_src && (
        <FeaturedImage
          src={postItem.attachment_image.img_src[0]}
          width={postItem.attachment_image.img_src[1]}
          height={postItem.attachment_image.img_src[2]}
          alt={postItem.title}
          srcSet={postItem.attachment_image.img_srcset}
        />
      )}
      <p className="excerpt">{postItem.excerpt}</p>
      <div className="post-meta my-2">
        <span className="author">
          <i className="fa fa-user-circle mx-2" aria-hidden="true"></i>
          {postItem.meta.author_name}
        </span>
      </div>
      <div className="post-date my-2">
        <span className="date">
          <i className="fa fa-clock mx-2" aria-hidden="true"></i>
          {postItem.date}
        </span>
      </div>
      {postItem.categories.length > 0 && (
        <div className="post-categories my-2 mb-5">
          {postItem.categories.map((category, index) => {
            // If Its Last Item Of Array Than Prevent Putting Comma
            return index !== postItem.categories.length - 1 ? (
              <span key={category.cat_ID} className="category">
                <i className="fa fa-folder mx-2" aria-hidden="true"></i>
                {category.cat_name},
              </span>
            ) : (
              <span key={category.cat_ID} className="category">
                <i className="fa fa-folder mx-2" aria-hidden="true"></i>
                {category.cat_name}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}
