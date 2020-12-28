const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const { ObjectId } = require('mongoose').Schema;

const majorSchema = new Schema(
    {
        name: {
            type : String,
            required :true
        },
        department: {
            type : String,
            required : true
        },
        core: [
            {
                name:{
                    type : String,
                    required : true
                },
                department:{
                    type : String
                }
            }
        ]
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Major', majorSchema)