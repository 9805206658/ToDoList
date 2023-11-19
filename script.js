// here we set click listener on the button save
let counter=0;
//defining the test for counting the delete item;
let test=0;
let btnSave=document.getElementById("save");
//here creating the function to determine the input value is null or not
function checkBlank(text)
{
   if((text==" ")||(text==""))
   {
return false;
   }
   else
   {
    return true;
   }
}
function remover(num)
{
   test++;
   let eleLi=document.getElementsByTagName("li");
   console.log(eleLi);
   eleLi[num-test].remove();
}

//it is used create the li with button
function contentAdder()
{
  
    let val=document.getElementById("work").value;
   let checker= checkBlank(val);
   if(checker)
   {
      counter++;
    let list=document.createElement("li");
    let para=document.createElement("p");
    let btn=document.createElement("button");
    btn.className="delete";
    btn.addEventListener("click",function (){remover(counter);});
    //here adding the eventlistener in the every button
    //here creating the text node for the button
    btn.appendChild(document.createTextNode("x"));
    let text=document.createTextNode(val);
    para.appendChild(text);
    list.appendChild(para);
    list.appendChild(btn);
    //here finding the id of the ul
    let mainEle = document.getElementById("list");
    mainEle.appendChild(list);
    document.getElementById("work").value="";
}
else
{
    window.alert("please add the information of your activities");
}
}
//here adding event listener for the button save
btnSave.addEventListener("click",contentAdder);
console.log(window.innerHeight);
console.log(window.innerWidth);
