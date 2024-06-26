const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();


const uri = process.env.MONGODB_URI;

const connectDB = async () => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client.db();
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1); 
    }
}


const insertDocument = async (db, collectionName, document) => {
    try {
        const result = await db.collection(collectionName).insertOne(document);
        console.log(`Inserted document with ID: ${result.insertedId}`);
        return result;
    } catch (err) {
        console.error('Error inserting document:', err);
    }
}

// Function to find documents in a collection
const findDocuments = async (db, collectionName, query) => {
    try {
        const cursor = await db.collection(collectionName).find(query);
        const results = await cursor.toArray();
        console.log('Found documents:', results);
        return results;
    } catch (err) {
        console.error('Error finding documents:', err);
    }
}


const updateDocument = async (db, collectionName, filter, updateDoc) => {
    try {
        const result = await db.collection(collectionName).updateOne(filter, { $set: updateDoc });
        console.log(`Updated document count: ${result.modifiedCount}`);
        return result;
    } catch (err) {
        console.error('Error updating document:', err);
    }
}


const deleteDocument = async (db, collectionName, filter) => {
    try {
        const result = await db.collection(collectionName).deleteOne(filter);
        console.log(`Deleted document count: ${result.deletedCount}`);
        return result;
    } catch (err) {
        console.error('Error deleting document:', err);
    }
}


const aggregateDocuments = async (db, collectionName, pipeline) => {
    try {
        const cursor = await db.collection(collectionName).aggregate(pipeline);
        const results = await cursor.toArray();
        console.log('Aggregation results:', results);
        return results;
    } catch (err) {
        console.error('Error running aggregation:', err);
    }
}

module.exports = {
    connectDB,
    insertDocument,
    findDocuments,
    updateDocument,
    deleteDocument,
    aggregateDocuments
};
