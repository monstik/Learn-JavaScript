let srcs = [
    'https://www.pngkey.com/png/detail/550-5509803_js-logo-javascript-logo-circle-png.png',
    'https://img2.pngindir.com/20180821/ifq/kisspng-javascript-image-world-wide-web-product-design-log-photos-js-belgrade-meetup-belgrade-5b7b935e0f5851.0602960915348253100629.jpg',
    'https://coursehunter.net/uploads/course_posters_/javascript-zhestkie-chasti.jpg',
    'https://media.tcdn.co/1976401eb4ad2d31fd27fce0b6f311be/0475b09b1a179d060076db8ef511f01d95.jpg',
    'https://www.mirrorplacement.com/assets/home/select-js-df288d39dd9d848c8672a51f122e70fe.png',
];

let sliderImg = getElement('img');
let currentImg = 0;
swipeImg();

getElement('previus-button').addEventListener('click', onSwipeImg);
getElement('next-button').addEventListener('click', onSwipeImg);


function onSwipeImg(e) {
    GetCurrentImg(e.currentTarget.innerHTML);
    swipeImg()
}



function swipeImg() {
    sliderImg.src = srcs[currentImg];
}


function GetCurrentImg(operation) {
    let tempCurrentImg = currentImg;
    if (operation === '&gt;') {
        tempCurrentImg++;
        if (tempCurrentImg > srcs.length -1) {
            currentImg = 0;
        } else {
            currentImg = tempCurrentImg;
        }

    } else {
        tempCurrentImg--;

        if (tempCurrentImg < 0) {
            currentImg = srcs.length -1;
        } else {
            currentImg = tempCurrentImg;
        }
    }
}


function getElement(id) {
    return document.getElementById(id);
}