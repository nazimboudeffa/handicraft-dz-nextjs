import { StaticImageData } from 'next/image';

export type Product = {
    id: number;
    handle: string;
    title: string;
    description: string;
    imageSrc: StaticImageData;
    imageAltText: string;
  };