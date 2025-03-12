const de=document.getElementById(`decrease`);
const re=document.getElementById(`reset`);
const ie=document.getElementById(`increase`);
const countlal=document.getElementById(`countlabel`);
count =0;

ie.onclick=function(){
    count++
    countlal.textContent= count;
}
de.onclick=function(){
    count=count-1;
    countlal.textContent = count;
}
re.onclick =function(){
    count =0;
    countlal.textContent=count;
    
}