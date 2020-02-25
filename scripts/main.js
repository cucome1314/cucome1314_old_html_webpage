//var head=document.querySelector('h1');
//head.textContent='hello head';
document.querySelector('h1').onclick = function() {
    alert('點蝦咪');
    var head=document.querySelector('h1');
    head.textContent='hello head';
}

var myImage = document.querySelector('#a');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/1.jpg') {
      myImage.setAttribute ('src','image/2.jpg');
      myImage.setAttribute()
    } else {
      myImage.setAttribute ('src','image/1.jpg');
    }
}

var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your waifu.');//(input)
    localStorage.setItem('name', myName);//(tag,vul)
    myHeading.innerHTML = 'HI  ' + myName;
}
/*if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'HI  ' + storedName;
}*/
var myButton = document.querySelector('button');
myButton.onclick=function(){
    setUserName();
}
