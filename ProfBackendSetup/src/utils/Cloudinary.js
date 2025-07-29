import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilepath) => {
    try {
        if (!localFilepath) return "Local file couldn't be found";

        const response = await cloudinary.uploader.upload(localFilepath, {
            resource_type : 'auto'
        })

        console.log("Your File has been uploaded in cloudinary successfully " , response.url);
        return response;
        
    } catch (error) {
        fs.unlinkSync(localFilepath)  //remove the file locally saved temporary file as the upload got failed
        return "your upload got failed "
    }
}

export {uploadOnCloudinary}