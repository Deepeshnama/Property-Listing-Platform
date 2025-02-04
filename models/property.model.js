import { Schema, model } from "mongoose";

const propertySchema = new Schema({
  Property_ID: { type: String },
  Title: { type: String },
  Location: {
    type: String,
    index: true,
  },
  Type: {
    type: String,
    enum: ["House", "Apartment", "Office"],
    index: true,
  },
  Bedrooms: Number,
  Bathrooms: Number,
  Status: {
    type: String,
    enum: ["Sold", "Pending", "Available"],
    index: true,
  },
  Amenities: {
    type: [String],
    index: true,
  },
  Image_URL: { type: String },
  Price: { type: Number },
});

const Property = model("property", propertySchema);

export { Property };
