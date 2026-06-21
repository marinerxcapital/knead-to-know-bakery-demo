const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const publicAsset = (path: string) => `${basePath}${path.startsWith("/") ? path : `/${path}`}`;

export const assets = {
  logo: publicAsset("/assets/knead-to-know-logo-v1.png"),
  banner: publicAsset("/assets/knead-to-know-bakery-banner.jpg")
};

export const videos = {
  hero: publicAsset("/assets/videos/the-first-loaf.mov"),
  cookies: publicAsset("/assets/videos/brown-butter-pull-apart.mov"),
  pastries: publicAsset("/assets/videos/the-fold.mov"),
  gifting: publicAsset("/assets/videos/a-beautiful-arrival.mp4")
};
