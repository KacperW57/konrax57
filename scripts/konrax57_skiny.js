const displayedImage = document.querySelector('.displayedImage');
const imageName = document.querySelector('.imageName');
const thumbnails = document.querySelector('.thumbnails');

const images = ["konra_aside.png","konra_gg.png","konra_lv.png","konra_polska.png","konra_santa.png"];
const alts = {
    "konra_aside.png" : "podstawowy skin konra",
    "konra_gg.png" : "prestiżowy skin konra x gucci",
    "konra_lv.png" : "prestiżowy skin konra x louis vuitton",
    "konra_polska.png" : "skin konra polski piłkarz",
    "konra_santa.png" : "skin konra mikołaj",
}

const labels = {
    "konra_aside.png" : "podstawowy skin konra",
    "konra_gg.png" : "prestiżowy skin konra x gucci",
    "konra_lv.png" : "prestiżowy skin konra x louis vuitton",
    "konra_polska.png" : "skin konra polski piłkarz",
    "konra_santa.png" : "skin konra mikołaj",
}

for (image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute("src",`images/${image}`);
    newImage.setAttribute("alt",alts[image]);
    newImage.setAttribute('class','thumb');
    newImage.setAttribute('label',`${labels[image]}`);
    thumbnails.appendChild(newImage);
    newImage.addEventListener('click',(e) => {
    displayedImage.src=e.target.src;
    displayedImage.alt=e.target.alt;
    imageName.textContent = e.target.alt;
    })
}