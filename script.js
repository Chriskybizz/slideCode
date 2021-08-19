let imgNumber = 1

// check image and move function
const slideCheck = () => {
    if (imgNumber === 1) {
        document.getElementById("dogImg").src = "dogOne.webp";
        document.getElementById("trackerOne").style.backgroundColor="white"
        document.getElementById("trackerTwo").style.backgroundColor="red"
        document.getElementById("trackerThree").style.backgroundColor="red"
        document.getElementById("trackerFour").style.backgroundColor="red"

    }
    if (imgNumber === 2) {
        document.getElementById("dogImg").src = "dogTwo.webp"
        document.getElementById("trackerOne").style.backgroundColor="red"
        document.getElementById("trackerTwo").style.backgroundColor="white"
        document.getElementById("trackerThree").style.backgroundColor="red"
        document.getElementById("trackerFour").style.backgroundColor="red"
    }
    if (imgNumber === 3) {
        document.getElementById("dogImg").src = "dogThree.webp"
        document.getElementById("trackerOne").style.backgroundColor="red"
        document.getElementById("trackerTwo").style.backgroundColor="red"
        document.getElementById("trackerThree").style.backgroundColor="white"
        document.getElementById("trackerFour").style.backgroundColor="red"
    }
    if (imgNumber === 4) {
        document.getElementById("dogImg").src = "dogFour.webp"
        document.getElementById("trackerOne").style.backgroundColor="red"
        document.getElementById("trackerTwo").style.backgroundColor="red"
        document.getElementById("trackerThree").style.backgroundColor="red"
        document.getElementById("trackerFour").style.backgroundColor="white"

    }
}

// interval slide function
const slide = () => {
    if (imgNumber >= 1 && imgNumber < 4) {
        imgNumber++;
        slideCheck()
    } else {
        imgNumber = 1;
        document.getElementById("dogImg").src = "dogOne.webp";
        document.getElementById("trackerOne").style.backgroundColor="white"    
        document.getElementById("trackerTwo").style.backgroundColor="red"
        document.getElementById("trackerThree").style.backgroundColor="red"
        document.getElementById("trackerFour").style.backgroundColor="red"    

    }
}

const right = () => {
    if (imgNumber < 4) {
        imgNumber++
        slideCheck();
    } else { imgNumber = 0 }
}
const left = () => {
    if (imgNumber > 1) {
        imgNumber--
        slideCheck()
    } else {
        imgNumber = 4;
        document.getElementById("dogImg").src = "dogFour.webp";
    }
}

window.setInterval(function () { slide() }, 3000)