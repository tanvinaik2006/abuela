import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImageToCloudinary(fileBuffer: Buffer, mimeType: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "abuela_recipes",
        resource_type: "image",
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else if (result) {
          resolve(result.secure_url);
        } else {
          reject(new Error("Unknown Cloudinary upload error"));
        }
      }
    );

    // Convert string buffer to stream
    const str = `data:${mimeType};base64,${fileBuffer.toString("base64")}`;
    uploadStream.end(fileBuffer);
  });
}
