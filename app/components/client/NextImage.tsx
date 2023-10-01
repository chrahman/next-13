"use client";

import React, { Fragment, FC } from 'react'
import Image, {ImageLoaderProps} from "next/image";

interface NextImageProps {
	title: string;
}

const NextImage: FC<NextImageProps> = ({ title }) => {
	const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <Fragment>
			<Image
				loader={imageLoader}
				src={`https://source.unsplash.com/500x400/?${title}`}
				className="h-full w-full object-cover object-center transition-opacity opacity-0 duration-[2s]"
				alt="blog"
				width="500"
				height="400"
				quality={100}
				onLoadingComplete={(image) => {
					image.classList.remove("opacity-0");
				}}
			/>
    </Fragment>
  );
}

export default NextImage