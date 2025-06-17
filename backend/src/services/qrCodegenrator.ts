import QRCode from "qrcode";
import fs from "fs";
import path from "path";
import { env } from "@/validators/env";
import { uploadOnCloudinary } from "@/utils/cloudinary";

export const generateQRCodeAndUpload = async (
  tableId: string,
  restaurantId: string
): Promise<{ secure_url: string; public_id: string } | null> => {
  try {
    const qrUrl = `${env.FRONTEND_URL}/restaurant/${restaurantId}/menu`;
    const tempDir = path.join(__dirname, "../../public/temp");

    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }

    const tempFilePath = path.join(tempDir, `qr-${tableId}.png`);
    await QRCode.toFile(tempFilePath, qrUrl, { width: 300, margin: 1 });

    const uploadResult = await uploadOnCloudinary(tempFilePath);

    if (uploadResult?.secure_url && uploadResult?.public_id) {
      return {
        secure_url: uploadResult.secure_url,
        public_id: uploadResult.public_id,
      };
    }

    return null;
  } catch (err) {
    console.error("QR Generation/Upload Error:", err);
    return null;
  }
};
