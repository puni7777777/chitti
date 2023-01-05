try{
const fs =require('fs');
const path =require('path');
const direc = path.join(__dirname,'images');

fs.readdir(direc,(err,files)=>{
    document.getElementById('refresh').onclick = function(){
        const f = Math.floor(Math.random()* files.length);
        //console.log('images/'+ files[i]);
        document.body.styles.backgroundImage = `url(${files[f]})`;
    }
})
}

catch{
const imgs =[];

imgs[0]= 'images/IMG-20201116-WA0007.jpg'
imgs[1]= 'images/IMG-20210825-WA0038.jpg'
imgs[2]= 'images/IMG-20211127-WA0010.jpg'
imgs[3]= 'images/IMG-20220101-WA0013.jpg'
imgs[4]= 'images/IMG-20220122-WA0017.jpg'
imgs[5]= 'images/IMG-20220210-WA0015.jpg'
imgs[6]= 'images/IMG-20220210-WA0017.jpg'
imgs[7]= 'images/IMG-20220308-WA0011.jpg'
imgs[8]= 'images/IMG-20220502-WA0069.jpg'
imgs[9]= 'images/IMG-20220521-WA0086.jpg'
imgs[10]= 'images/IMG-20221203-WA0067.jpg'
imgs[11]= 'images/IMG-20221231-WA0007.jpg'
imgs[12]= 'images/IMG20220430134159.jpg' 
imgs[13]= 'images/IMG20220812201918.jpg'
imgs[14]= 'images/IMG20220812202353.jpg'
imgs[15]= 'images/IMG20221005165121.jpg'
imgs[16]= 'images/IMG20221005165741.jpg'
imgs[17]= 'images/IMG20221005170118.jpg'
imgs[18]= 'images/IMG20221005171227.jpg'
imgs[19]= 'images/IMG20221011024931.jpg'
imgs[20]= 'images/IMG20221015190252.jpg'
imgs[21]= 'images/IMG20221024202248.jpg'
imgs[22]= 'images/IMG20221024212105.jpg'
imgs[23]= 'images/IMG20221203152629.jpg'
imgs[24]= 'images/IMG20221203154144.jpg'
imgs[25]= 'images/IMG20221215151824.jpg'
imgs[26]= 'images/IMG20221215151956.jpg'
imgs[27]= 'images/IMG20221215152533.jpg'
imgs[28]= 'images/IMG20221225082947.jpg'
imgs[29]= 'images/IMG20221225083045.jpg'
imgs[30]= 'images/IMG_20220106_084516.jpg'
imgs[31]= 'images/IMG_20220301_204525_253.jpg'
imgs[32]= 'images/IMG_6039.HEIC'
imgs[33]= 'images/Snapchat-1259387862.jpg'
imgs[34]= 'images/Snapchat-1311682082.jpg'
imgs[35]= 'images/Snapchat-1367453808.jpg'
imgs[36]= 'images/Snapchat-1388832687.jpg'
imgs[37]= 'images/Snapchat-1764562689.jpg'
imgs[38]= 'images/Snapchat-2132630427.jpg'
imgs[39]= 'images/Snapchat-254730665.jpg'
imgs[40]= 'images/Snapchat-400515389.jpg'
imgs[41]= 'images/Snapchat-751366467.jpg'


document.getElementById('refresh').onclick = function(){
    const random = Math.floor(Math.random() * imgs.length) ;
    document.body.style.backgroundImage = `url(${imgs[random]})`;
}
}finally{
    function noscroll(){
    window.scrollTo(0,0);
}

window.addEventListener("scroll",noscroll);
}


  /*for(let i=1;i<=44;i++){
    console.log(i);
  }*/

