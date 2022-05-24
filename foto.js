let galleryImages = document.querySelectorAll(".gallery-img");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;
let nextBtn = document.querySelector(".img-btn-next");
let prevBtn = document.querySelector(".img-btn-prev");
nextBtn.style.display = "none";
prevBtn.style.display = "none";
var calcnewImg;

function load() {
    galleryImages.forEach(function(image, index) {
        image.onclick = function() {
            showBtn();

            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue("background-image");
            let getImgUrlPos = getFullImgUrl.split("img/");
            let setnewImgUrl = getImgUrlPos[1].replace('")', '');

            getLatestOpenedImg = index + 1;
            let container = document.body;
            let newImgWindow = document.createElement("div");
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window");
            newImgWindow.setAttribute("onclick", "closeImg()");

            let newImg = document.createElement("img");
            newImgWindow.appendChild(newImg);
            newImg.setAttribute("src", "img/" + setnewImgUrl);
            newImg.setAttribute("id", "current-img");
        }
    });

}


function closeImg() {
    document.querySelector(".img-window").remove();
    nextBtn.style.display = "none";
    prevBtn.style.display = "none";
}


function showBtn() {
    nextBtn.style.display = "block";
    prevBtn.style.display = "block";
}


function createImg(changedir) {
    if (changedir === 1) {
        calcnewImg = getLatestOpenedImg + 1;
        if (calcnewImg > galleryImages.length) {
            calcnewImg = 1;
        }
    } else if (changedir === 0) {
        calcnewImg = getLatestOpenedImg - 1;
        if (calcnewImg < 1) {
            calcnewImg = galleryImages.length;
        }

    }
    return calcnewImg;
}


function changeImg(changedir) {
    document.querySelector("#current-img").remove();

    let getImgWindow = document.querySelector(".img-window");
    let newImg = document.createElement("img");
    getImgWindow.appendChild(newImg);

    createImg(changedir);

    newImg.setAttribute("src", "img/img" + calcnewImg + ".jpg");
    newImg.setAttribute("id", "current-img");
    getLatestOpenedImg = calcnewImg;
}