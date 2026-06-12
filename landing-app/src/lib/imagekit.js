import ImageKit from "imagekit";

let _ik = null;

function getImageKit() {
  if (!_ik) {
    _ik = new ImageKit({
      publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
      urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
    });
  }
  return _ik;
}

/**
 * Inserts ImageKit URL transformations into any ik.imagekit.io URL.
 * Safe to call on local paths — returns them unchanged.
 * Skips URLs that already have a /tr: segment.
 */
export function compressImageUrl(url, params = "q-75,f-webp") {
  if (!url || !url.includes("ik.imagekit.io")) return url;
  if (url.includes("/tr:")) return url;
  return url.replace(
    /^(https:\/\/ik\.imagekit\.io\/[^/]+\/)/,
    `$1tr:${params}/`
  );
}

export async function uploadImage(base64Data, fileName, folder = "/blog") {
  const result = await getImageKit().upload({
    file: base64Data,
    fileName,
    folder,
    useUniqueFileName: true,
  });
  return compressImageUrl(result.url);
}
