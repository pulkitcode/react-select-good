const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const { ObjectId } = require('mongoose').Schema;

const breadthSchema = new Schema(
    {
        name: {
            type : String,
            required :true
        },
        department: {
            type : String,
            required : true
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Breadth', breadthSchema)