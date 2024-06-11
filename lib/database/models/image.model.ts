
import { model, models, Schema, Document } from "mongoose";

export interface IImage extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  secureURL: string; 
  width?: number;
  height?: number;
  config?: object; 
  transformationUrl?: string; 
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author: {
    _id: string;
    firstName: string;
    lastName: string;
  }
  createdAt?: Date;
  updatedAt?: Date;
}

const ImageSchema = new Schema({
    title: { Type: String, required: true },
    transformationType: { Type: String, required: true },
    publicId: { Type: String, required: true },
    secureUrl: { Type: String, required: true },
    width: { Type: Number},
    height: { Type: Number},
    config: { Type: Object},    
    trasnformationUrl: {Type : URL},
    aspectRatio: {Type: String},
    color: {Type: String},
    prompt: {Type: String},
    author: {Type: Schema.Types.ObjectId, ref: "User"},
    createdAt: {Type: Date, default: Date.now},
    updatedAt: {Type: Date, default: Date.now}

});

const Image = models?.Image || model("Image", ImageSchema);
export default Image;