function auto_adapt(){
    is_loaded=1;
    document.body.style.opacity="100%";
    var title_main_inside_width;
    if(window.innerWidth<=1200){
        title_main_inside_width=window.innerWidth;
    }else{
        title_main_inside_width=1200;
    }
    document.getElementById("title_main_inside").style.width=title_main_inside_width + "px";
    document.getElementById("title_navs_main").style.width=title_main_inside_width + "px";


    document.getElementById("banner_pic").style.width=window.innerWidth*0.7 + "px";
    document.getElementById("banner_pic_tran").style.width=window.innerWidth*0.7 + "px";
    document.getElementById("banner_title_box").style.width=window.innerWidth*0.3*0.6 + "px";
    document.getElementById("banner_title_box").style.marginLeft=window.innerWidth*0.3*0.18 + "px";
    document.getElementById("banner_control_button_1").style.width=window.innerWidth*0.3*0.29 + "px";
    document.getElementById("banner_control_button_2").style.width=window.innerWidth*0.3*0.29 + "px";
    document.getElementById("content_box").style.width=title_main_inside_width + "px";
    document.getElementById("main_footer").style.width=title_main_inside_width + "px";
}

function open_link(link_index){
    switch (link_index) {
        case 0:
            window.open("index.html","_self");
            break;
        case 1:
            window.open("https://www.lcu.edu.cn","_self");
            break;
        case 2:
            window.open("index.html","_self");
            break;
        case 3:
            window.open("#","_self");
            break;
        case 4:
            window.open("#","_self");
            break;
        case 5:
            window.open("#","_self");
            break;
        case 6:
            window.open("#","_self");
            break;
        case 7:
            window.open("#","_self");
            break;
        case 8:
            window.open("#","_self");
            break;
        case 9:
            window.open("#","_self");
            break;
        case 10:
            window.open("#","_self");
            break;
        case 11:
            window.open("#","_self");
            break;
        case 12:
            window.open("#","_self");
            break;
        case 13:
            window.open("#","_self");
            break;
        case 14:
            window.open("#","_self");
            break;
        case 15:
            window.open("#","_self");
            break;
        case 16:
            window.open("#","_self");
            break;
        case 17:
            window.open("#","_self");
            break;
        case 18:
            window.open("#","_self");
            break;
        case 19:
            window.open("#","_self");
            break;
        case 20:
            window.open("#","_self");
            break;
        case 21:
            window.open("#","_self");
            break;
        case 22:
            window.open("#","_self");
            break;
        case 23:
            window.open("#","_self");
            break;
        case 24:
            window.open("#","_self");
            break;
        case 25:
            window.open("#","_self");
            break;
        case 26:
            window.open("#","_self");
            break;
        case 27:
            window.open("#","_self");
            break;
        case 28:
            window.open("#","_self");
            break;
        case 29:
            window.open("#","_self");
            break;
        case 30:
            window.open("#","_self");
            break;
        case 31:
            window.open("#","_self");
            break;
        case 32:
            window.open("#","_self");
            break;
        case 33:
            window.open("#","_self");
            break;
        case 34:
            window.open("#","_self");
            break;
        case 35:
            window.open("#","_self");
            break;
        case 36:
            window.open("#","_self");
            break;
        case 37:
            window.open("#","_self");
            break;
        case 38:
            window.open("#","_self");
            break;
        case 39:
            window.open("#","_self");
            break;
        case 40:
            window.open("#","_self");
            break;
        case 41:
            window.open("#","_self");
            break;
        case 42:
            window.open("#","_self");
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
    start_banner_tran(current_banner_id);
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

function search_box_auto_show_or_hide_default_text(){
    if(document.getElementById("search_text_input").value==''){
        document.getElementById("search_default_text").style.visibility="visible";
    }else{
        document.getElementById("search_default_text").style.visibility="hidden";
    }
}

var is_loaded=0;
function auto_adapt_onresize(){
    if(is_loaded){
        auto_adapt();
    }
}

function start_banner_tran(last_banner_id){
    document.getElementById("banner_pic_tran").style.backgroundImage='url(./RE/banner/banner' + last_banner_id + '.png)';
    current_banner_tran_op=100;
}

setInterval(make_banner_tran_op_to_0,5);
var current_banner_tran_op=0;
function make_banner_tran_op_to_0(){
    if(current_banner_tran_op){
        current_banner_tran_op-=2;
    }
    document.getElementById("banner_pic_tran").style.opacity=current_banner_tran_op*0.01;
}