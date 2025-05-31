import QRCode from "qrcode";
import fs from "fs";
import path from "path";
import { env } from "@/validators/env";
import { uploadOnCloudinary } from "@/utils/cloudinary";

export const generateQRCodeAndUpload = async (
  tableId: string,
  restaurantId: string
): Promise<string | null> => {
  try {
    const qrUrl = `${env.FRONTEND_URL}/restaurant/${restaurantId}/table/${tableId}`;

    const tempDir = path.join(__dirname, "../../public/temp");
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }

    const tempFilePath = path.join(tempDir, `qr-${tableId}.png`);

   
    await QRCode.toFile(tempFilePath, qrUrl, {
      width: 300,
      margin: 1,
    });

  
    const uploadResult = await uploadOnCloudinary(tempFilePath);

    return uploadResult?.secure_url || null;
  } catch (err) {
    console.error("QR Generation/Upload Error:", err);
    return null;
  }
};
