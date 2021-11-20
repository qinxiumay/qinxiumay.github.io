let myImg=document.querySelector('img');
let myBtn=document.querySelector('button');
let myH1=document.querySelector('h1');

myImg.onclick=function(){
    let mySrc=myImg.getAttribute('src');
    if(mySrc==='images/hibaby.png'){
        myImg.setAttribute('src','images/hug.png');
    }
    else{
        myImg.setAttribute('src','images/hibaby.png');
    }
}

function setUserName(){
    let myName=prompt('请输入你的名字：');
    if(!myName||myName===null){
        setUserName();
        }
    else{
        localStorage.setItem('name',myName);
        myH1.textContent='Welcome,'+myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}
else{
    let storedName=localStorage.getItem('name');
    myH1.textContent='Welcome,'+storedName;
}

myBtn.onclick=function(){
    setUserName();
}