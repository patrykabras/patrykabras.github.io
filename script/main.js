window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("up").style.display = "block";
    } else {
        document.getElementById("up").style.display = "none";
    }
}
function go_top() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function more_info(id){
    let info = document.getElementById("info"+id);
    let arrowDOWN = document.querySelector(".info"+id);
    let arrowUP = document.querySelector(".infoo"+id);

    if(info.style.display == "none"){
        info.style.display = "block";
        arrowDOWN.style.display = "none";
        arrowUP.style.display = "inline-block";
    }else{
        info.style.display = "none";
        arrowDOWN.style.display = "inline-block";
        arrowUP.style.display = "none";

    }
}
