const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true)
const Schema  = mongoose.Schema;

var answerSchema = new Schema({
    description:{
        type: String,
        required:true
    },
    upvote:[{
        type:Schema.Types.ObjectId,
        ref: "User",
    }],
    downvote:[{
        type:Schema.Types.ObjectId,
        ref: "User",
    }],
    userId:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required:true
    },
    questionId:{
        type: Schema.Types.ObjectId,
        ref: "Question",
        required:true
    }
}, {timestamps:true})

const Answer = mongoose.model('Answer', answerSchema)

module.exports = Answer