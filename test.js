const imgs = [];

x = 'images/1.jpg'
y = x.split('.');
z = y[0].split('/');
z[1] = Math.floor(Math.random()* 6);
p = z[1].toString();
z[1] = p;

const fs = require('fs');
const path = require('path');
const direc = path.join(__dirname,'images');

console.log(direc);

/*fs.readdir(direc,(err,files)=>{
    files.forEach((items)=>{
        console.warn(items);
    })
})*/

fs.readdir(direc,(err,files)=>{
    f = Math.floor(Math.random()* files.length);
})

console.log(p);

console.log(y);
console.log(z);