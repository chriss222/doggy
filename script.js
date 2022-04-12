let dogImage = document.getElementById('dog-image');
let breedSelect = document.getElementById('breed');

// fetch("https://dog.ceo/api/breeds/list/all").then(res => res.json())
//     .then(data => {
//         console.log(data);
//     })

async function start() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    createBreedList(data.message);
}

function createBreedList(breedList) {
    breedSelect.innerHTML = `
        ${Object.keys(breedList).map(breed => `<option value=${breed}>${breed}</option>`)}
    `
}

start();

async function getRandomDogBreed() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random")
    const data = await response.json();
    updateRandomDogImage(data.message);
}

function updateRandomDogImage(randomImage) {
    document.getElementById("dogLogo").classList.add('hideElement');
    dogImage.src = randomImage;
}

getRandomDogBreed();

    
breedSelect.addEventListener('change', (e)=> updateReceivedBreedImage(e.target.value));

async function updateReceivedBreedImage(val) {
    document.getElementById("dogLogo").classList.remove('hideElement');
    const response = await fetch(`https://dog.ceo/api/breed/${val}/images/random`);
    const data = await response.json();
    document.getElementById("dogLogo").classList.add('hideElement');
    dogImage.src = data.message;
}

