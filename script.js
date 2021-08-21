const imgArr = [
    "land1.jpg",
    "land2.jpg",
    "land3.jpg",
    "land4.jpg",
    "land5.jpg",
]

const nextIndex = (currentIndex) => {
    if (currentIndex === imgArr.length - 1) {
        return 0;
    }

    return currentIndex + 1;
}

const prevIndex = (currentIndex) => {
    if (currentIndex === 0) {
        return imgArr.length - 1;
    }

    return currentIndex - 1;
}

const slide = (index) => {
    const image = document.querySelector('.main-image');
    const newSrc = imgArr[index];
    image.src = newSrc;
}

const getIndex = () => {
    const image = document.querySelector('.main-image');
    const currentImageArray = image.src.split('/');
    const currentImageSource = currentImageArray[currentImageArray.length - 1];
    return imgArr.indexOf(currentImageSource);
}

const doNextSlide = () => {
    const index = getIndex()
    const newIndex = nextIndex(index);
    slide(newIndex)
}

const doPrevSlide = () => {
    const index = getIndex()
    const newIndex = prevIndex(index);
    slide(newIndex)
}

const x = document.createElement("img");
x.className = "main-image"
x.src = imgArr[0]

const newDiv = document.createElement("div");
newDiv.className = "container";

const overlayRightButton = document.createElement("div");
overlayRightButton.id = "right"

const rightArrow = document.createElement("img");
rightArrow.src = "Arrows-Right-icon.png"


const imageBlock = document.createElement("div")
imageBlock.className = "image-container";


const overlayLeftButton = document.createElement("div");
overlayLeftButton.id = "left"

const leftArrow = document.createElement("img");
leftArrow.src = "Arrows-Left-icon.png"


const appendDiv = () => {
    imageBlock.appendChild(x)
    overlayLeftButton.appendChild(leftArrow);
    overlayRightButton.appendChild(rightArrow);
    newDiv.appendChild(imageBlock)
    newDiv.appendChild(overlayLeftButton)
    newDiv.appendChild(overlayRightButton);
    document.body.appendChild(newDiv)
}

appendDiv()

const left = document.getElementById('left')
left.addEventListener('click', doPrevSlide, false)
const right = document.getElementById('right')
right.addEventListener('click', doNextSlide, false)

window.setInterval(function() {
    doNextSlide()
}, 5000)