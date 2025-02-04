import express from "express";
import {
  filterProperties,
  getAllProperties,
  getPropertById,
} from "../controllers/Property.controller.js";

const propertyRoutes = express.Router();

propertyRoutes.get("/allProperty", getAllProperties);

propertyRoutes.post("/filter", filterProperties);

propertyRoutes.get("/property/:id", getPropertById);

export default propertyRoutes;
