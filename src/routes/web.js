const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const uploadController = require("../controllers/upload");
const getimageController = require("../controllers/getImage");
const upload = require("../middleware/upload");


let routes = (app) => {
  router.get("/", homeController.getHome);
  router.get('/vumarks/:id', getimageController.getImage);

  router.post("/upload", upload.single("file"), uploadController.uploadFiles);

  return app.use("/", router);
};

module.exports = routes;
