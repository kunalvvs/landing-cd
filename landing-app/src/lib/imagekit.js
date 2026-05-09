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

export async function uploadImage(base64Data, fileName, folder = "/blog") {
  const result = await getImageKit().upload({
    file: base64Data,
    fileName,
    folder,
    useUniqueFileName: true,
  });
  return result.url;
}
