var is_sidebar_open=0;

function open_or_close_sidebar(){
    if(is_sidebar_open){
        is_sidebar_open=0;
        document.getElementById("control_sidebar").style.left="-330px";
        document.getElementById("control_back").style.visibility="hidden";
    }else{
        is_sidebar_open=1;
        document.getElementById("control_sidebar").style.left="0px";
        document.getElementById("control_back").style.visibility="visible";
        document.getElementById("control_back").style.width=window.innerWidth + "px";
        document.getElementById("control_back").style.height=window.innerHeight + "px";
    }
}

function control_adapt(){
    document.getElementById("control_sidebar").style.height=window.innerHeight-80 + "px";
    document.getElementById("control_sidebar_iframe").style.height=window.innerHeight-90 + "px";
}