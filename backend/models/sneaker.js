const mongoose = require('mongoose');
const mongooseAutoInc = require('mongoose-auto-increment');
const Schema = mongoose.Schema;


mongoose.set('useCreateIndex', true)



const sneakerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    info: {
        type: String,
        required: true,
        default: "default"
    },
    link: {
        type: String,
        required: true,
        default: "https://www.ajou.ac.kr"
    },
    price:{
        type: String,
        required: true,
    }
});
sneakerSchema.plugin(mongooseAutoInc.plugin, 'sneaker');
module.exports = mongoose.model('sneaker', sneakerSchema);