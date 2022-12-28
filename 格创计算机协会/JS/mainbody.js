function auto_adapt_size(){
    bodyWidth=document.body.clientWidth;

    let maintitleWidth;
    if(bodyWidth<=830){
        maintitleWidth=bodyWidth;
    }else if(bodyWidth<=1060){
        maintitleWidth=bodyWidth-60;
    }else if(bodyWidth<=1760){
        maintitleWidth=bodyWidth*0.9;
    }else{
        maintitleWidth=1760;
    }
    document.getElementById("maintitle").style.width=maintitleWidth + "px";
    document.getElementById("main").style.width=maintitleWidth + "px";
}

