var is_sidebar_open=0;

function open_or_close_sidebar(){
    if(is_sidebar_open){
        is_sidebar_open=0;
        document.getElementById("control_sidebar").style.marginLeft="-330px";
        setTimeout(control_small,200);
        document.getElementById("control_sidebar").style.visible="hidden";
        document.getElementById("control_back").style.visibility="hidden";
    }else{
    control_adapt();
        is_sidebar_open=1;
        document.getElementById("control_sidebar").style.marginLeft="0px";
        document.getElementById("control_sidebar").style.marginTop="0px";
        document.getElementById("control_back").style.visibility="visible"; 
        document.getElementById("control_back").style.width=window.innerWidth + "px";
        document.getElementById("control_back").style.height=window.innerHeight + "px";
    }
}

function control_adapt(){
    document.getElementById("control_sidebar").style.height=window.innerHeight-75 + "px";
    document.getElementById("control_sidebar_iframe").style.height=window.innerHeight-90 + "px";
}

function control_small(){
    document.getElementById("control_sidebar").style.marginTop="-3000px";
}