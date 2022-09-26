let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
var duyleft = 1;
var duyright = 3;
function show() {
  // let showBet = document.getElementById("duy-match-item-1");
  // console.log(showBet);
  // document.getElementById("duy-match-item-1").style.display = "inline-block";
  for (i = duyleft; i <= duyright; i++) {
    document.getElementById("duy-match-item-" + i).style.display =
      "inline-block";
  }
}
function moveLeft() {
  if (duyleft <= 3 && duyright <= 5) {
    document.getElementById("duy-match-item-" + duyleft).style.display = "none";
    duyleft += 1;
    duyright += 1;
    for (i = duyleft; i <= duyright; i++) {
      document.getElementById("duy-match-item-" + i).style.display =
        "inline-block";
    }
  } else return;
}
function moveRight() {
  if (duyleft >= 2 && duyright <= 6) {
    document.getElementById("duy-match-item-" + duyright).style.display =
      "none";
    duyleft -= 1;
    duyright -= 1;
    for (i = duyleft; i <= duyright; i++) {
      document.getElementById("duy-match-item-" + i).style.display =
        "inline-block";
    }
  } else return;
}

// let slideTextIndex=0;
// showTexts();
// function showTexts(){
//   let i;
//   document.getElementById("duy-noti-text="+i).style.display="inline-block";
//   i=i+1;
//   setTimeout(show)
// }
