const db = require("../models");
const stream = require('stream');
const Image = db.images;

const getImage = async (req, res) => {
  try {

    Image.findOne({ where: {vumark_id: req.params.id}}).then(image => {
      if(image === null){
        return res.send("Vumark not found")
      } else {
        return res.send({
          name: image.name,
          type: image.type,
          data: image.data
        })
      }
    });

  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};

module.exports = {
  getImage,
};
