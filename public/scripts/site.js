
let ignoreId = -1

const getJoke = async () => {
	const response = await fetch(`/api/v1/random/exclude/${ignoreId}`)
	const { _id, joke, punchline } = await response.json()
	ignoreId = _id
	document.querySelector('.joke p').textContent = joke
	document.querySelector('.joke .punchline').textContent = punchline
}

getJoke()

document.querySelector('.joke button').addEventListener('click', getJoke)