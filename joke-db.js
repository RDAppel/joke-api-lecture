
const { MongoClient, ObjectId } = require('mongodb')

const uri = process.env.MONGODB_URI || require('./secrets/mongodb.json').uri
const client = new MongoClient(uri)

const getCollection = async (dbName, collectionName) => {
	await client.connect()
	return client.db(dbName).collection(collectionName)
}

module.exports = { getCollection, ObjectId }