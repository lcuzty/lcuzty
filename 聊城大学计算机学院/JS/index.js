function auto_adapt(){
    var title_main_inside_width;
    if(window.innerWidth<=1200){
        title_main_inside_width=window.innerWidth;
    }else{
        title_main_inside_width=1200;
    }
    document.getElementById("title_main_inside").style.width=title_main_inside_width + "px";
    document.getElementById("title_navs_main").style.width=title_main_inside_width + "px";


    document.getElementById("banner_pic").style.width=window.innerWidth*0.7 + "px";
    document.getElementById("banner_title_box").style.width=window.innerWidth*0.3*0.6 + "px";
    document.getElementById("banner_title_box").style.marginLeft=window.innerWidth*0.3*0.18 + "px";
    document.getElementById("banner_control_button_1").style.width=window.innerWidth*0.3*0.29 + "px";
    document.getElementById("banner_control_button_2").style.width=window.innerWidth*0.3*0.29 + "px";
    document.getElementById("content_main").style.width=title_main_inside_width + "px";
}

function open_link(link_index){
    switch (link_index) {
        case 0:

            break;
        case 1:
            window.open("https://www.lcu.edu.cn","_self");
            break;
    }
}

function show_or_hide_nav_menu(nav_menu_id,op){
    if(op){
        document.getElementById("title_navs_menus").style.marginTop="0px";
        document.getElementById("nav_menu_" + nav_menu_id).style.visibility="visible";
    }else{
        document.getElementById("nav_menu_10").style.visibility="hidden";
        document.getElementById("nav_menu_9").style.visibility="hidden";
        document.getElementById("nav_menu_8").style.visibility="hidden";
        document.getElementById("nav_menu_7").style.visibility="hidden";
        document.getElementById("nav_menu_1").style.visibility="hidden";
        document.getElementById("nav_menu_2").style.visibility="hidden";
        document.getElementById("nav_menu_3").style.visibility="hidden";
        document.getElementById("nav_menu_4").style.visibility="hidden";
        document.getElementById("nav_menu_5").style.visibility="hidden";
        document.getElementById("nav_menu_6").style.visibility="hidden";
        document.getElementById("title_navs_menus").style.marginTop="-100px";
    }
}

function click_to_change_banner(op,is_change_by_click) {
    if(op){
        current_banner_id++;
        if(current_banner_id==max_banner_id+1){
            current_banner_id=1;
        }
    }else{
        current_banner_id--;
        if(current_banner_id==0){
            current_banner_id=max_banner_id;
        }
    }
    banner_changer(current_banner_id);
    if(is_change_by_click){
        banner_changer_time=50;
    }
}

var current_banner_id=1;
var max_banner_id=3;
function banner_changer(banner_id) {
    var banner_title;
    var banner_src;
    current_banner_id=banner_id;
    switch (banner_id) {
        case 1:
            banner_title='肖海荣到计算机学院调研指导工程教育认证工作';
            banner_src='./RE/banner/banner1.png';
            break;
        case 2:
            banner_title='计算机学院开展庆祝建党99周年迎“七一”主题党日...';
            banner_src='./RE/banner/banner2.png';
            break;
        case 3:
            banner_title='计算机学院举办2021年度青年教师教学比赛';
            banner_src='./RE/banner/banner3.png';
            break;
    }
    document.getElementById("banner_title").innerText=banner_title;
    document.getElementById("banner_pic").style.backgroundImage='url(' + banner_src + ')';

}

var banner_changer_time=50;
setInterval(auto_change_banner,100);
function auto_change_banner(){
    if(banner_changer_time==0){
        banner_changer_time=50;
        click_to_change_banner(1,0);
    }else{
        banner_changer_time--;
    }
}