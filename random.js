
const fs = require('fs');
const path = require('path');
const direc = path.join(__dirname,'images');

fs.readdir(direc,(err,files)=>{
    document.getElementById('refresh').onclick = function(){
        const f = Math.floor(Math.random()* files.length);
        document.body.styles.backgroundImage = `url(${files[f]})`;
    }
})

/*const imgs =[];

imgs[0] = 'images/1.jpg'
imgs[1] = 'images/2.jpg'
imgs[2] = 'images/3.jpg'
imgs[3] = 'images/4.jpg'
imgs[4] = 'images/5.jpg'
imgs[5] = 'images/6.jpg'
imgs[6] = 'images/7.jpg'


document.getElementById('refresh').onclick = function(){
    const random = Math.floor(Math.random() * imgs.length) ;
    document.body.style.backgroundImage = `url(${imgs[random]})`;
}*/