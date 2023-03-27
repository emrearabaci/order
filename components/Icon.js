/* Next API */
import Image from 'next/image';

export default function Icon({ src, alt, width, height, quality, priority }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      quality={quality}
      priority={priority}
    />
  );
}
