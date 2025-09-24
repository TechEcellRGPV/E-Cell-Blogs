const cloudinary = require("../config/cloudinary");

// buffer comes from multer
exports.uploadImageBuffer = async (buffer, folder = "blog_app") => {
  try {
    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      stream.end(buffer);
    });

    return result.secure_url;
  } catch (err) {
    console.error("❌ Cloudinary Upload Error:", err);
    throw new Error("Image upload failed");
  }
};
