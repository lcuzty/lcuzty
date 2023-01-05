function auto_adapt(){
    if(innerWidth<=1400){
        document.body.style.width="1400px";
        document.getElementById("title_main").style.width=1400*0.9 + "px";
        document.getElementById("nav_main").style.width=1400*0.9 + "px";
    }else{
        document.body.style.width="100%";
        document.getElementById("title_main").style.width=innerWidth*0.9 + "px";
        document.getElementById("nav_main").style.width=innerWidth*0.9 + "px";
    }
}

function search_input_text_change_event(){
    if(document.getElementById('search_input_text_box').value==""){
        document.getElementById('search_warning_text').style.visibility="visible";
    }else{
        document.getElementById('search_warning_text').style.visibility="hidden";

    }
}