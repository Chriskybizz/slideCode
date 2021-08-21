let imgArr = ["C:\\Users\\chris\\Webdev\\slider\\land1.jpg", "C:\\Users\\chris\\Webdev\\slider\\land2.jpg", "C:\\Users\\chris\\Webdev\\slider\\land3.jpg",
    "C:\\Users\\chris\\Webdev\\slider\\land4.jpg", "C:\\Users\\chris\\Webdev\\slider\\land5.jpg"]


const newDiv = document.createElement("div");
newDiv.style.height = "600px"
newDiv.style.width = "100%"
newDiv.style.border = "solid black 1px"
newDiv.style.position = "relative"
newDiv.style.display = "flex"

const overlayRightButton = document.createElement("div");
overlayRightButton.style.width = "20%"
//overlayRightButton.style.border = "solid black 1px"
//overlayRightButton.style.background = "red"
overlayRightButton.style.position = "absolute"
overlayRightButton.style.right = "0"
overlayRightButton.style.zIndex = "2"
overlayRightButton.style.height = "100%"

const rightArrow = document.createElement("img");
rightArrow.src = "C:\\Users\\chris\\Webdev\\slider\\Arrows-Right-icon.png"



const imageBlock = document.createElement("div")
imageBlock.style.width = "100%"
imageBlock.style.height = "100%"
//imageBlock.style.border = "solid black 1px"
imageBlock.style.background = "green"
imageBlock.style.position = "absolute"
imageBlock.style.zIndex = "0"

const overlayLeftButton = document.createElement("div");
overlayLeftButton.style.width = "20%"
//overlayLeftButton.style.border = "solid black 1px"
//overlayLeftButton.style.background = "blue"
overlayLeftButton.style.position = "absolute"
overlayLeftButton.style.left = "0"
overlayLeftButton.style.zIndex = "2"
overlayLeftButton.style.height = "100%"
overlayLeftButton.setAttribute("onclick", "C:/\Users/\chris/\Webdev/\slider/\land1.jpg");

const leftArrow = document.createElement("img");
leftArrow.src = "C:\\Users\\chris\\Webdev\\slider\\Arrows-Left-icon.png"


const x = document.createElement("img");
x.setAttribute("height", "100%")
x.setAttribute("width", "100%")
x.src = imgArr[0]


const appendDiv = (imgNumber) => {
    document.body.appendChild(newDiv)
    newDiv.appendChild(imageBlock)
    imageBlock.appendChild(x)
    newDiv.appendChild(overlayLeftButton)
    overlayLeftButton.appendChild(leftArrow)
    newDiv.appendChild(overlayRightButton)
    overlayRightButton.appendChild(rightArrow)

}

const slide = () => {
    const image = document.querySelector('.main-image');
    const currentImageArray = image.src.split('/');
    const currentImageSource = currentImageArray[currentImageArray.length - 1];
    const index = imgArr.indexOf(currentImageSource);
    const newIndex = getIndex(index);
    const newSrc = imgArr[newIndex];
    image.src = newSrc;
}

appendDiv()

window.setInterval(function () {
    slide()
}, 500)