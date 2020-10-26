const fs = require("fs");

const db = require("../models");
const Image = db.images;

const uploadFiles = async (req, res) => {
  try {
    console.log(req.file);
    console.log(req.body.vumark_id);
    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }
    if(req.body.vumark_id == undefined){
      return res.send(`You must give an id.`);
    }

    Image.findOrCreate({
      where: {
        vumark_id: req.body.vumark_id,
      }
    }).then(([image, created]) =>{
      image.update({
        type: req.file.mimetype,
        name: req.file.originalname,
        data: fs.readFileSync(
          __basedir + "/resources/static/assets/uploads/" + req.file.filename
        ),
      }).then(() => {
        fs.writeFileSync(
          __basedir + "/resources/static/assets/tmp/" + image.vumark_id + "-" + image.name,
          image.data
        );

        return res.send(`File has been ${created ? `uploaded` : `updated`}`);
      })
    });
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};

module.exports = {
  uploadFiles,
};
