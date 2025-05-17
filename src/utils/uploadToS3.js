import { S3Client } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';

const s3Client = new S3Client({
  region: import.meta.env.VITE_AWS_REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
  },
});

export async function uploadImageToS3(file) {
  try {
    const fileName = `${Date.now()}-${file.name}`;
    const filePath = `kera/${fileName}`;

    const upload = new Upload({
      client: s3Client,
      params: {
        Bucket: import.meta.env.VITE_AWS_BUCKET_NAME,
        Key: filePath,
        Body: file,
        ContentType: file.type,
      },
    });

    const result = await upload.done();
    return result.Location;
  } catch (error) {
    console.error('S3 Upload Error:', error);
    throw error;
  }
}
