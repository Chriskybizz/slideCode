let imgNumber = 1

// check image and move function
const slideCheck = () => {
    if (imgNumber === 1) {
        document.getElementById("dogImg").src = "dogOne.webp"
    }
    if (imgNumber === 2) {
        document.getElementById("dogImg").src = "dogTwo.webp"
    }
    if (imgNumber === 3) {
        document.getElementById("dogImg").src = "dogThree.webp"
    }
    if (imgNumber === 4) {
        document.getElementById("dogImg").src = "dogFour.webp"

    }
}

// interval slide function
const slide = () => {
    if (imgNumber >= 0 && imgNumber < 4) {
        imgNumber++;
        slideCheck()
    } else {
        imgNumber = 0;
    }
}

const right = () => {
    if (imgNumber < 4) {
        imgNumber++
        slideCheck();
    } else { imgNumber = 0 }
}
const left = () => {
    if (imgNumber > 0) {
        imgNumber--
        slideCheck()
    }
}

window.setInterval(function () { slide() }, 3000)