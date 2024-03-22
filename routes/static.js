
const router = require('express').Router()

const path = require('path')
const root = path.join(__dirname, '..', 'public')

router.get('/', (request, response) => {
	response.sendFile('index.html', { root })
})

router.all('*', (request, response) => {
	response.status(404).sendFile('404.html', { root })
})

module.exports = router