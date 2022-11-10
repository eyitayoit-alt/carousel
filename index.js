
let slidearr=["#slide1","#slide2","#slide3","#slide4","#slide5","#slide6"]
let index=0;



 

function display(event){

  
    document.querySelector("#show").style.opacity=1;
  
 
}
function hide(event){

      document.querySelector("#show").style.opacity=0;
    
   
  }

function handleNextClick(event){
   if(index >= slidearr.length-1) {
    document.querySelector(slidearr[slidearr.length-1]).style.opacity=0;
    document.querySelector(slidearr[0]).style.opacity=1
    index=0
        }
else{
  document.querySelector(slidearr[index]).style.opacity=0
    index=index+1;
    document.querySelector(slidearr[index]).style.opacity=1
}
      }
function handlePrevClick(event){
  if(index <= 0) {
    document.querySelector(slidearr[0]).style.opacity=0
    document.querySelector(slidearr[slidearr.length-1]).style.opacity=1
    index=slidearr.length-1
        }
else{
  document.querySelector(slidearr[index]).style.opacity=0
    index=index-1;
    document.querySelector(slidearr[index]).style.opacity=1
}
 }



 
