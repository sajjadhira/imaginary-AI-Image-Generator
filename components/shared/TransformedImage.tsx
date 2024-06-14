import React from "react";

const TransformedImage = ({
  image,
  type,
  title,
  transformationConfig,
  isTransforming,
  setIsTransforming,
  hasDownload = false,
}: TransformedImageProps) => {
  return (
    <div>
      <h1>Transformed Image</h1>
    </div>
  );
};

export default TransformedImage;
