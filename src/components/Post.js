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
    </div>
  );
}
