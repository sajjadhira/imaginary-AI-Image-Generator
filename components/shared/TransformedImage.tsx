import Image from "next/image";
import React from "react";
import { CldImage } from "next-cloudinary";
import { dataUrl, debounce, getImageSize } from "@/lib/utils";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";

const TransformedImage = ({
  image,
  type,
  title,
  transformationConfig,
  isTransforming,
  setIsTransforming,
  hasDownload = false,
}: TransformedImageProps) => {
  const downloadHandler = async () => {};

  return (
    <div className="flex flex-col gap-4">
      <div className="flex-between">
        <h3 className="h3-bold text-dark-600">Transform</h3>

        {hasDownload && (
          <>
            <button className="button button-primary" onClick={downloadHandler}>
              {isTransforming ? "Processing..." : "Download"}
            </button>
            <Image
              src="/assets/icons/download.svg"
              alt="Download Image"
              width={24}
              height={24}
              className="pb-[6px]"
            />
          </>
        )}
      </div>

      {image?.publicId && transformationConfig ? (
        <div className="relative">
          <CldImage
            width={getImageSize(type, image, "width")}
            height={getImageSize(type, image, "height")}
            src={image?.publicId}
            alt="Original Image"
            sizes={"(max-width: 767px) 100vw, 50vw"}
            placeholder={dataUrl as PlaceholderValue}
            className="transformed-image"
            onLoad={() => {
              setIsTransforming && setIsTransforming(false);
            }}
            onError={() => {
              debounce(() => {
                setIsTransforming && setIsTransforming(false);
              }, 8000);
            }}
            {...transformationConfig}
          />

          {isTransforming && (
            <div className="transforming-loader">
              <Image
                src="/assets/icons/spinner.svg"
                alt="Transforming Image"
                width={50}
                height={50}
              />
            </div>
          )}
        </div>
      ) : (
        <div className="transformed-placeholder">Transformed Image</div>
      )}
    </div>
  );
};

export default TransformedImage;
