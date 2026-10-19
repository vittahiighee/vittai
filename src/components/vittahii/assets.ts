import type { ImageAsset } from "./ReferenceImage";

export const images = {
  logo: { src: "/images/optimized/Vittahii%20Logo%201.webp", width: 6468, height: 3650 },
  archive: { src: "/images/optimized/Family%20archive.webp", width: 1904, height: 2576 },
  archiveDetail: { src: "/images/optimized/Historical%20dairy.webp", width: 712, height: 992 },
  ghee: { src: "/images/optimized/87b1328f-b3a3-44ca-b8e4-acd2be57636c.webp", width: 1368, height: 1150 },
  quality: { src: "/images/optimized/32e9960f-cba2-4762-94d5-6198d82f4222.webp", width: 1536, height: 1024 },
  process: { src: "/images/optimized/aef827aa-7736-41cd-946c-25030eca35b4.webp", width: 1919, height: 820 },
  founder: { src: "/images/optimized/reference.webp", width: 717, height: 425, crop: { x: 40, y: 57, width: 234, height: 309 } },
  range: { src: "/images/optimized/b508943b-9608-4bd4-a87a-d8a5fe111fea.webp", width: 1672, height: 941 },
} satisfies Record<string, ImageAsset>;
