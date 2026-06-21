const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const publicAsset = (path: string) => `${basePath}${path.startsWith("/") ? path : `/${path}`}`;

export const assets = {
  logo: publicAsset("/assets/knead-to-know-logo-v1.png"),
  banner: publicAsset("/assets/knead-to-know-bakery-banner.jpg")
};
