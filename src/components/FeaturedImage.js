import React from "react";

export default function FeaturedImage({ src, width, height, alt, srcSet }) {
  return (
    <img
      className="post-thumbnail"
      src={src}
      width={width}
      height={height}
      alt={alt}
      srcSet={srcSet}
    />
  );
}
