var list=['c','r','u','e','l']; //words to be changed
var count=0;var subc=0;
var btn=document.getElementById('btn');
btn.addEventListener('click',submitbut)

function submitbut(){
var sub=document.createElement('button');
sub.id=sub;
sub.innerHTML="submit";
sub.onclick=check;
document.body.appendChild(sub);
btn.style.display='none';
create();
}

// var submit=document.getElementById('sub');
// submit.addEventListener('click',create);

function create(){
var row1=document.createElement('div');
row1.id=row1;
document.body.appendChild(row1);


var ch1=document.createElement('input');
ch1.id=ch1;
ch1.onblur=calb;
ch1.type='text';
function calb(){
if(ch1.value != null|| ch1.value!=''){
    let a=ch1.value;
    ch1.disabled='disabled'
    for(let i=0;i<5;i++){
        if(list[i]==a){
            if(i==0){
            ch1.style.backgroundColor='green';
            ch1.style.color='white';count++;console.log(count);}
            else{ch1.style.backgroundColor='yellow'}
        }
    }
};}
ch1.maxLength=1;
row1.appendChild(ch1);

create1(row1);
}
function create1(row1){
let ch2=document.createElement('input');
ch2.id=ch2;ch2.maxLength=1;
ch2.onblur=calb;
function calb(){
    if(ch2.value != null|| ch2.value!=''){
        let a=ch2.value;ch2.disabled='disabled';
        for(let i=0;i<5;i++){
            if(list[i]==a){
                if(i==1){
                ch2.style.backgroundColor='green';
                ch2.style.color='white';count++;console.log(count);}
                else{ch2.style.backgroundColor='yellow'}
            }
        }
    };}
row1.appendChild(ch2);
create2(row1);
}
function create2(row1){
let ch3=document.createElement('input');
ch3.id=ch3;ch3.maxLength=1;
ch3.onblur=calb;
function calb(){
    if(ch3.value != null|| ch3.value!=''){
        let a=ch3.value;ch3.disabled='disabled';
        for(let i=0;i<5;i++){
            if(list[i]==a){
                if(i==2){
                ch3.style.backgroundColor='green';
                ch3.style.color='white';count++;console.log(count);}
                else{ch3.style.backgroundColor='yellow'}
            }
        }
    };}
row1.appendChild(ch3);
create3(row1);
}
function create3(row1){
let ch4=document.createElement('input');
ch4.id=ch4;ch4.maxLength=1;
ch4.onblur=calb;
function calb(){
    if(ch4.value != null|| ch4.value!=''){
        let a=ch4.value;ch4.disabled='disabled';
        for(let i=0;i<5;i++){
            if(list[i]==a){
                if(i==3){
                ch4.style.backgroundColor='green';
                ch4.style.color='white';count++;console.log(count);}
                else{ch4.style.backgroundColor='yellow'}
            }
        }
    };}
row1.appendChild(ch4);
create4(row1);
}
function create4(row1){
let ch5=document.createElement('input');
ch5.id=ch5;ch5.maxLength=1;
ch5.onblur=calb;
function calb(){
    if(ch5.value != null|| ch5.value!=''){
        let a=ch5.value;ch5.disabled='disabled';
        for(let i=0;i<5;i++){
            if(list[i]==a){
                if(i==4){
                ch5.style.backgroundColor='green';
            ch5.style.color='white';count++;console.log(count);}
                else{ch5.style.backgroundColor='yellow'}
            }
        }
    };}
row1.appendChild(ch5);
}


function check(){
    if(count==5){
        window.location.replace('./newpage.html')
    }
    count=0;subc++;
    if(subc==5){
        window.location.replace('./newpage.html')
    }
    create();}


    


