let number=document.getElementById('number');
let p=document.getElementById('b1');
let m=document.getElementById('b2');
let r=document.getElementById('b3');

m.addEventListener('click',handle1)
p.addEventListener('click',handle2)
r.addEventListener('click',handle3)

let cv=0;

function update(){
number.textContent=cv;    
}
function handle2(){
cv++;
update();
}

function handle1(){
    cv--;
    update();
}
function handle3(){
    cv=0;
    update(cv);
}
















