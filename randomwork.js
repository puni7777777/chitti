const imgs =[];

imgs[0] = 'images/IMG_20220106_084516.jpg'
imgs[1] = 'images/IMG_20220301_204525_253.jpg'
imgs[2] = 'images/IMG-20210825-WA0038.jpg'
imgs[3] = 'images/IMG-20211127-WA0010.jpg'
imgs[4] = 'images/IMG-20220101-WA0013.jpg'
imgs[5] = 'images/IMG-20220122-WA0017.jpg'
imgs[6] = 'images/IMG-20220308-WA0011.jpg'
imgs[7] = 'images/IMG20220430134159.jpg'
imgs[8] = 'images/IMG20221215151824_1.jpg'
imgs[9] = 'images/IMG20221215151956.jpg'
imgs[10] = 'images/IMG20221215152533.jpg'
imgs[11] = 'images/Snapchat-254730665.jpg'
imgs[12] = 'images/Snapchat-400515389.jpg'
imgs[13] = 'images/Snapchat-751366467.jpg'
imgs[14] = 'images/Snapchat-1259387862.jpg'
imgs[15] = 'images/Snapchat-1311682082.jpg'
imgs[16] = 'images/Snapchat-1367453808.jpg'
imgs[17] = 'images/Snapchat-1764562689.jpg'
imgs[18] = 'images/Snapchat-2132630427.jpg'


document.getElementById('refresh').onclick = function(){
    const random = Math.floor(Math.random() * imgs.length) ;
    document.body.style.backgroundImage = `url(${imgs[random]})`;
}

function noscroll(){
    window.scrollTo(0,0);
}

window.addEventListener("scroll",noscroll);