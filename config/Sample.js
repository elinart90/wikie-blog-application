const User = require("../models/User");
const Post = require("../models/Post");
const Comments = require("../models/Comments");

const insertSampleData = async () => {
    const usersCount = await User.countDocuments();
    if (usersCount === 0) {
        console.log('Inserting sample data...');

        const user1 = new User({
            username: "user1",
            email: 'user1@gmail.com',
            password: 1234 // Remember to hash this in a real application
        });
        const user2 = new User({
            username: 'user2',
            email: 'user2@gmail.com',
            password: 1242, // Remember to hash this in a real application
        });

        await user1.save();
        await user2.save();

        const post1 = new Post({
            userId: user1._id,
            title: 'The latest version of NextJs is in town',
            content: 'It comes with mind-blowing features'
        });
        const post2 = new Post({
            userId: user2._id,
            title: 'The latest version of NextJs is in town',
            content: 'It comes with mind-blowing features'
        });
        const post3 = new Post({
            userId: user2._id,
            title: 'The latest version of NextJs is in town',
            content: 'It comes with mind-blowing features'
        });
        await post1.save();
        await post2.save();
        await post3.save();

        const comment1 = new Comment({
            postId: post3._id,
            userId: user2._id,
            content: 'Can you tell me more about the NextJs 15'
        });
        const comment2 = new Comment({
            postId: post1._id,
            userId: user2._id,
            content: 'Can you tell me more about the NextJs 15'
        });
        const comment3 = new Comment({
            postId: post2._id,
            userId: user1._id,
            content: 'Can you tell me more about the NextJs 15'
        });
        const comment4 = new Comment({
            postId: post2._id,
            userId: user2._id,
            content: 'Can you tell me more about the NextJs 15'
        });
        const comment5 = new Comment({
            postId: post2._id,
            userId: user1._id,
            content: 'Can you tell me more about the NextJs 15'
        });

        await comment1.save();
        await comment2.save();
        await comment3.save();
        await comment4.save();
        await comment5.save();

        console.log('Sample data inserted');
    }
}

module.exports = insertSampleData;
