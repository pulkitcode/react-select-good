const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const { ObjectId } = require('mongoose').Schema;

const electivesSchema = new Schema(
    {
        department: {
            type : String,
            required : true
        },
        electives: [
            {
                name: {
                    type : String,
                    required : true
                }
            }
        ]
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Electives', electivesSchema)