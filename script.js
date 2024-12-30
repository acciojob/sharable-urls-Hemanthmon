// your code here
const nameInput = document.getElementById('name')
const yearInput = document.getElementById('year')
const url = document.getElementById('url')
const button = document.getElementById('button')


//update the url when the button is clicked
button.onclick = function() {
    const name = nameInput.value.trim()
    const year = yearInput.value.trim()

    url.textContent = `https://localhost:8080/?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`
}