const Imgs = [
    'https://wallpapers.com/images/high/aesthetic-rick-and-morty-pc-4k-qb87cm6llvqi5zxd.webp',
    'https://wallpapers.com/images/hd/rick-and-morty-in-the-beach-sunset-lp5645l0h01qloh8.webp'
];

let currentBackground = 0;
const backgroundElement = document.querySelector('.nav__style');

function changeBackground() {
    backgroundElement.style.backgroundImage = `url(${Imgs[currentBackground]})`;
    currentBackground = (currentBackground + 1) % Imgs.length;
}

changeBackground();
setInterval(changeBackground, 9000);