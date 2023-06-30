
function plus() {
    changePic("plus");
}
function minus() {
    changePic("minus");
}


function getPic(x,y) {
    var arr=new Array("images/mint-slide-1-65.jpg","images/mint-slide-2-65.jpg");
    if (y=="length"){
        return arr.length;
    }
    else if (y=="nun"){
        return arr[x];
    }
}
function check(A) {
    var count=document.getElementById("counter").innerHTML;
    if (A=="plus"){
        if (count==1){
            return 0;
        }
        else {
            return parseInt(count)+1;
        }
    }
    if (A=="minus"){
        if (count==0){
            return 1;
        }
        else {
            return parseInt(count)-1;
        }
    }
}

function changePic(z,select="no",selectId=0) {
    if (select=="no"){
        var r=check(z);
    }
    else if (select=="yes"){
        var r=selectId;
    }
    document.getElementById("counter").innerHTML=r;
    document.getElementById("mint-slide").src=getPic(r,"nun");
    clearInterval(h);
    h=setInterval(plus,50000);
}
/*
function selectText(t){
    var images4=getPic(0,"length");
    for (i=0;i<images4;i++){
        document.getElementsByClassName("inner-text-box")[i].classList="inner-text-box";
    }
    document.getElementsByClassName("inner-text-box")[t].classList="inner-text-box active";

}*/
h=setInterval(plus,50000);
document.getElementsByClassName("arrow-box-left")[0].addEventListener("click",minus);
document.getElementsByClassName("arrow-box-right")[0].addEventListener("click",plus);




document.getElementsByClassName("menu")[0].addEventListener("click",function () {
   document.getElementsByTagName("nav")[0].style.display="flex";
   document.getElementsByClassName("menu")[0].style.display="none";
   document.getElementsByClassName("close")[0].style.display="flex";
});
document.getElementsByClassName("close")[0].addEventListener("click",function () {
   document.getElementsByTagName("nav")[0].style.display="none";
   document.getElementsByClassName("menu")[0].style.display="flex";
   document.getElementsByClassName("close")[0].style.display="none";
});