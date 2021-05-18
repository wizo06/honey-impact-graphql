const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: String,
  imgUrl: String,
  characters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Character' }],
})

const LocalMaterialModel = mongoose.model('LocalMaterial', schema, 'localMaterials')

module.exports = { LocalMaterialModel }