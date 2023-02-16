
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
    document.getElementById("content_main_with_sidebar").style.width=title_main_inside_width-285 + "px";


    document.getElementById("content_box").style.paddingRight="0px";
    document.getElementById("content_box").style.paddingLeft="0px";
    document.getElementById("title_main_inside").style.paddingLeft="0px";
    document.getElementById("title_main_inside").style.paddingRight="0px";
    document.getElementById("title_navs_menus_main").style.width="1200px";
    for(i=1;i<=10;i++){
        document.getElementById("nav_button_" + i).style.width="115px";
        document.getElementById("nav_menu_" + i).style.width="115px";
    }


    if(window.innerWidth<=1240){
        document.getElementById("content_box").style.paddingRight="20px";
        document.getElementById("content_box").style.paddingLeft="20px";
        document.getElementById("title_main_inside").style.paddingLeft="20px";
        document.getElementById("title_main_inside").style.paddingRight="20px";

        document.getElementById("content_main_with_sidebar").style.width=title_main_inside_width-325 + "px";


        document.getElementById("title_navs_menus_main").style.width=title_main_inside_width +"px";

        for(i=1;i<=10;i++){
            document.getElementById("nav_button_" + i).style.width="90px";
            document.getElementById("nav_menu_" + i).style.width="90px";
        }
    }

    //footer_adapt
    document.getElementById("footer_small").style.height="230px";
    document.getElementById("footer_small").style.visibility="hidden";
    document.getElementById("title_small").style.visibility="hidden";
    document.getElementById("content_sidebar").style.position="fixed";
    document.getElementById("content_sidebar").style.width="270px";
    document.getElementById("content_list_title").style.textAlign="right";
    document.getElementById("banner_small").style.height="0px";document.getElementById("banner").style.height="500px";
    document.getElementById("banner_small_pic").style.height="500px";
    document.getElementById("banner_pic_tran").style.height="500px";
    if(window.innerWidth<=1000){
        document.getElementById("footer_small").style.height="400px";
        document.getElementById("footer_small").style.visibility="visible";
        document.getElementById("title_small").style.visibility="visible";
        document.getElementById("content_main_with_sidebar").style.width=title_main_inside_width -40  + "px";
        document.getElementById("content_sidebar").style.position="unset";
        document.getElementById("content_sidebar").style.width=title_main_inside_width-40+ "px";
        document.getElementById("content_list_title").style.textAlign="center";
        document.getElementById("banner_small").style.height="650px";
        document.getElementById("banner").style.height="650px";
        if(title_main_inside_width<=650){
            document.getElementById("banner_small").style.height="400px";
            document.getElementById("banner").style.height="400px";
            document.getElementById("banner_small_pic").style.height="250px";
            document.getElementById("banner_pic_tran").style.height="400px";
        }
        document.getElementById("banner_small_control_button_left").style.width=title_main_inside_width/2-20+"px";
        document.getElementById("banner_small_control_button_right").style.width=title_main_inside_width/2-20+"px";
    }
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
        case 43:
            window.open("https://www.lcu.edu.cn/cms/search/","_blank");
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
    document.getElementById("banner_small_title").innerText=banner_title;
    document.getElementById("banner_small_pic").style.backgroundImage='url(' + banner_src + ')';

}

var banner_changer_time=0;
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

function open_small_menu(small_menu_id){
    open_or_close_small_menu(small_menu_id,0);
    if(current_opened_menu_id!=small_menu_id){
        open_or_close_small_menu(small_menu_id,1);
    }else{
        current_opened_menu_id=0;
    }
}

var current_opened_menu_id;
function open_or_close_small_menu(small_menu_id,op){
    if(op){
        switch (small_menu_id){
            case 1:

                break;
            case 2:
                document.getElementById("title_small_menu_subitem_box_2").style.height="140px";
                break;
            case 3:

                break;
            case 4:
                document.getElementById("title_small_menu_subitem_box_" + small_menu_id).style.height="175px";
                break;
            case 5:
                document.getElementById("title_small_menu_subitem_box_" + small_menu_id).style.height="105px";
                break;
            case 6:
                document.getElementById("title_small_menu_subitem_box_" + small_menu_id).style.height="175px";
                break;
            case 7:
                document.getElementById("title_small_menu_subitem_box_" + small_menu_id).style.height="70px";
                break;
            case 8:
                document.getElementById("title_small_menu_subitem_box_" + small_menu_id).style.height="350px";
                break;
            case 9:
                document.getElementById("title_small_menu_subitem_box_" + small_menu_id).style.height="70px";
                break;
            case 10:

                break;
        }
        current_opened_menu_id=small_menu_id;
    }else{
        document.getElementById("title_small_menu_subitem_box_1").style.height="0px";
        document.getElementById("title_small_menu_subitem_box_2").style.height="0px";
        document.getElementById("title_small_menu_subitem_box_3").style.height="0px";
        document.getElementById("title_small_menu_subitem_box_4").style.height="0px";
        document.getElementById("title_small_menu_subitem_box_5").style.height="0px";
        document.getElementById("title_small_menu_subitem_box_6").style.height="0px";
        document.getElementById("title_small_menu_subitem_box_7").style.height="0px";
        document.getElementById("title_small_menu_subitem_box_8").style.height="0px";
        document.getElementById("title_small_menu_subitem_box_9").style.height="0px";
        document.getElementById("title_small_menu_subitem_box_10").style.height="0px";
    }
}

function open_or_close_small_menu_box(){
    if(document.getElementById("title_small_menu").style.height=="0px"){
        document.getElementById("title_small_menu").style.height="unset";
    }else{
        document.getElementById("title_small_menu").style.height="0px";
        open_or_close_small_menu(0,0);
    }
}