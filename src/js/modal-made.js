function readMore() {
    var dots = document.getElementById("dots");  
    var more = document.getElementById("more");
    var btn = document.getElementById("btn"); 
        
if(dots.style.display === "none") {
    dots.style.display = "inline";
    btn.innerHTML = "read more";
    more.style.display = "none";
}
    
else {
    dots.style.display = "none";
    btn.innerHTML = "hide";
    more.style.display = "inline";
    }
}

document.querySelectorAll('.readMore').forEach((el) => { el.addEventListener("click", function () { readMore() }) });



function readMoreFirst() {
 var dotsFirst = document.getElementById("dotsFirst");
    var moreFirst = document.getElementById("moreFirst");
    var btnFirst = document.getElementById("btnFirst");

     if(dotsFirst.style.display === "none") {
    dotsFirst.style.display = "inline";
    btnFirst.innerHTML = "read more";
    moreFirst.style.display = "none";
     }
    
else {
    dotsFirst.style.display = "none";
    btnFirst.innerHTML = "hide";
    moreFirst.style.display = "inline";
    }
}

document.querySelectorAll('.readMoreFirst').forEach((el) => { el.addEventListener("click", function () { readMoreFirst() }) });



function readMoreSecond() {
 var dotsSecond = document.getElementById("dotsSecond");
    var moreSecond = document.getElementById("moreSecond");
    var btnSecond = document.getElementById("btnSecond");

     if(dotsSecond.style.display === "none") {
    dotsSecond.style.display = "inline";
    btnSecond.innerHTML = "read more";
    moreSecond.style.display = "none";
     }
    
else {
    dotsSecond.style.display = "none";
    btnSecond.innerHTML = "hide";
    moreSecond.style.display = "inline";
    }
}

document.querySelectorAll('.readMoreSecond').forEach((el) => { el.addEventListener("click", function () { readMoreSecond() }) });