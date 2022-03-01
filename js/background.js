const images = [
    "img0.jpg", "img1.jpg", "img2.jpg"
];

const chosenimage = images[Math.floor(Math.random() * images.length)];

const backgroundimg = document.createElement("img");
backgroundimg.src = `imgs/${chosenimage}`;
document.body.appendChild(backgroundimg);