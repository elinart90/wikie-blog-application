const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userid: mongoose.Schema.Types.ObjectId,
        
    title: String,
        
    content: String,
        
    createdAt: {
        type: Date, 
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
    
});

const Post = mongoose.model('Post', postSchema)
module.exports = Post;