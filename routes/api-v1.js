
const router = require('express').Router()

const { getCollection, ObjectId } = require('../joke-db')

router.get('/joke/:id', async (request, response) => {
	const { id } = request.params
	const collection = await getCollection('joke-api', 'jokes')
	const joke = await collection.findOne({ "_id": new ObjectId(id) })
	response.json(joke)
})


router.get('/random', async (request, response) => {
	const collection = await getCollection('joke-api', 'jokes')
	const jokes = await collection.find().toArray()
	const randomIndex = Math.floor(Math.random() * jokes.length)
	response.json(jokes[randomIndex])
})

router.get('/random/exclude/:id', async (request, response) => {
	const { id } = request.params
	const collection = await getCollection('joke-api', 'jokes')
	const jokes = await collection.find().toArray()
	const filteredJokes = jokes.filter(({ _id }) => _id.toString() !== id)
	const randomIndex = Math.floor(Math.random() * filteredJokes.length)
	response.json(filteredJokes[randomIndex])
})

router.post('/new', async (request, response) => {
	const { joke, punchline } = request.body
	const collection = await getCollection('joke-api', 'jokes')
	await collection.insertOne({ joke, punchline })
	response.json({ message: 'New joke added!' })
})

module.exports = router