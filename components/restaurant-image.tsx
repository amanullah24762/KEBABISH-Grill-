import type { CSSProperties } from 'react';
import manifest from '@/lib/optimized-images.json';

type ImageAsset = {
  width: number;
  height: number;
  variants: { src: string; width: number }[];
  avifVariants?: { src: string; width: number }[];
  placeholder: string;
};

// Static responsive files avoid request-time image processing, including on cold loads.
export function RestaurantImage({ src, alt, sizes, className, fill, priority = false }: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
}) {
  const asset = (manifest as Record<string, ImageAsset>)[src];
  const variants = asset?.variants;
  const avifVariants = asset?.avifVariants;
  const srcSet = variants?.map(image => `${image.src} ${image.width}w`).join(', ');
  const avifSrcSet = avifVariants?.map(image => `${image.src} ${image.width}w`).join(', ');
  const preferred = avifVariants?.[avifVariants.length - 1];
  const fallback = variants?.find(image => image.width >= 960) ?? variants?.[variants.length - 1];
  const style: CSSProperties = {
    ...(fill ? { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' } : {}),
    backgroundImage: asset ? `url("${asset.placeholder}")` : undefined,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return <>
    {priority && <link rel="preload" as="image" href={preferred?.src ?? fallback?.src ?? src} imageSrcSet={avifSrcSet ?? srcSet} imageSizes={sizes} type={avifSrcSet ? 'image/avif' : 'image/webp'} fetchPriority="high"/>}
    <picture className={fill ? 'kg-responsive-picture kg-responsive-picture-fill' : 'kg-responsive-picture'}>
    {avifSrcSet && <source type="image/avif" srcSet={avifSrcSet} sizes={sizes}/>}
    <img
    src={fallback?.src ?? src}
    srcSet={srcSet}
    sizes={sizes}
    alt={alt}
    width={asset?.width}
    height={asset?.height}
    className={className}
    style={style}
    loading={priority ? 'eager' : 'lazy'}
    fetchPriority={priority ? 'high' : 'auto'}
    decoding="async"
    />
    </picture>
  </>;
}
