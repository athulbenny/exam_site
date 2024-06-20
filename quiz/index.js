var word="helping";var i=0,j=1;
var len=word.length;
var obj=['between 1940 and 1955','3yrs after 2nd world war','2yr before republic','1yr before ghandhis assasination','yr of partition of india']
var strtbtn=document.createElement('button');
strtbtn.innerHTML='start';
strtbtn.onclick=questadd;
document.body.appendChild(strtbtn);

// var a=document.getElementById("btn");
// a.addEventListener('click',questadd)
let question=document.createElement('div');
document.body.appendChild(question);

function questadd(){
   question.innerHTML="year of indian independence?"
   creation();
   document.body.removeChild(strtbtn);
}

var counter=1
function creation(){
    if(counter<len){
        // let div=document.createElement('div');      
        // div.id='row'+counter;
        // document.body.appendChild(div);
        let input=document.createElement('input');
        input.type='text';
        input.id='row'+counter;
        input.className='container'
        document.body.appendChild(input);
        counter++;
      //   let button1=document.createElement('button');
      //   button1.id=nextbtn;
      //   button1.onclick=creation;
      //   button1.innerHTML="next chance"
      //   document.body.appendChild(button1)
        let button2=document.createElement('button');
        button2.id=hintbtn;
        button2.innerHTML="hint";
        button2.onclick=hint;
        document.body.appendChild(button2)
        
    }
}


let hide=document.createElement('div');
document.body.appendChild(hide);
// var nextbtn=document.getElementById('nextbtn');
// nextbtn.addEventListener('click',creation);

var hintbtn=document.getElementById('hintbtn')
// hintbtn.addEventListener('click',hint())
function hint(){
   //  let para=document.getElementById('question');
   //  para.innerHTML=obj[i];i++;

    let newpara=document.createElement('p');
    hide.appendChild(newpara);
    if(i!=5){
    newpara.innerHTML=obj[i];i++;}
    
}

var submit=document.getElementById('submit');
submit.addEventListener('click',submitcheck);

function submitcheck(){
   val="1947";//to be changed
   let ans=document.getElementById(['row'+j]);
   if( val!=ans.value){
      console.log(ans.value);j++;
      creation();
   }else{
      console.log("YOU WIN");
      window.location.replace('./../index.html');
   }
}

var timediv=document.createElement('div');
document.body.appendChild(timediv);
var k=180;


setInterval(
   ()=>{
      timediv.innerHTML=k;k--;
      if(k==0){
         window.location.replace('./newhtml.html');
      }
   },1000
)
