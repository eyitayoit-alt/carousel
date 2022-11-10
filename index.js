let imgUrl2=[{"src":"./Asset 3.png","alt":"img1"},{"src":"CALENDER.png","alt":"img2"},{"src":"reflective.jpg","alt":"img3"}]
let imgUrl=["picture/Asset 3.png","picture/CALENDER.png","picture/Artboard 1.png","picture/export3.PNG"]
let slidearr=["#slide1","#slide2","#slide3","#slide4"]
let index=0;



 

function display(event){

  if( event.target.id=="previous"){
    document.querySelector("#previous").style.opacity=1;
  }
  else if(event.target.id=="next"){
    document.querySelector("#next").style.opacity=1;
  }
}
function hide(event){

    if( event.target.id=="previous"){
      document.querySelector("#previous").style.opacity=0;
    }
    else if(event.target.id=="next"){
      document.querySelector("#next").style.opacity=0;
    }
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



 