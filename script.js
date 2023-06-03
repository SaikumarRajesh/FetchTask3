let h1=document.createElement('h1')
h1.setAttribute('class','Heading')
h1.innerHTML="EmogiHub"

document.body.append(h1); 

async function Emogi(){
  let res1 =await fetch("https://emojihub.yurace.pro/api/random");
  let res2= await res1.json();
  console.log(res2)
  
  let h1=document.createElement('h1')
  h1.setAttribute('class','Heading')
  h1.innerHTML="EmogiHub"
   
  let div1=document.createElement('div')
  div1.setAttribute('class','Emojidiv')

  let div2=document.createElement('div')

  var linebreak=document.createElement("br");

  var button=document.createElement("button");
  button.setAttribute("type","button");
  button.classList.add("btn","btn-primary");
  button.style.margin="10px";
  button.innerHTML="Refresh";
  button.addEventListener('click', refreshImage);

  div2.innerHTML =`<div class="card bg-secondary mb-3" style="width: 18rem;">
  <div class="card-header  bg-secondary">${"Name:"+ res2.name}</div>
  <div class="card-body text-secondary">
    <p class="card-text"  style="font-size:100px">${res2.htmlCode[0]}</p>
  </div>
</div>`
  
  div1.append(div2,linebreak,button)
  document.body.append(div1);
}
function refreshImage() {
  var EmoDiv = document.querySelector('.Emojidiv');
  EmoDiv.remove();
  Emogi();
}
Emogi()

