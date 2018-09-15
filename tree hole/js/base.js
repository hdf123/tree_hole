/**
 * Created by Administrator on 2018/7/23.
 */
function back(){
    history.go(-1);
}
function goHref(){
    window.location.href="../html/location.html"
}
function isUserID(){
    var userId=localStorage.getItem('userId');
    if(userId){
        userId.replace(/\"/g,"");
    }else{
        window.location.href="./login.html";
    }
}
 /* mui.back = function(){
            if(!first) {
                first = new Date().getTime();
                //console.log(first);
                mui.toast('再按一次退出应用');
                setTimeout(function() {
                    first = null;
                }, 2000);
            } else {
                if(new Date().getTime() - first < 2000) {
                    plus.runtime.quit();
                }
            }
        };*/
        
var baseUrl="http://192.168.1.126";

//获取所有的头像
 function getAvatar(ele){
     $.ajax({
         xhrFields: {
             withCredentials: true
         },
         type: "post",
         //async:false,
         url: baseUrl+"/student/findAvatar",
         dataType: 'json',
         success:function(data){
             console.log(data);
             var html=template("getPic",data);
           ele.html(html);
         },
         error:function(data){
             console.log(data);
         }
     })
 }
//获取侧边栏用户信息
function userInfo(ele){
    $.ajax({
        xhrFields: {
            withCredentials: true
        },
        type: "post",
        url: baseUrl+"/student/getStudent",
        dataType: 'json',
        success:function(data){
            console.log(data);
            var html=template("userInfo",data);
            ele.html(html);
        },
        error:function(data){
            console.log(data);
        }
    })
}
//增加 校园资讯的 浏览次数
function addLookNumber(href){
    $.ajax({
        xhrFields: {
            withCredentials: true
        },
        type: "post",
        url: baseUrl+"/schoolMessage/addLookNumber",
        dataType: 'json',
        data:{
            schoolMessageId:href
        },
        success:function(data){
            console.log(data);

        },
        error:function(data){
            console.log(data);
        }
    })
}
//增加 商城的浏览次数

function goodsAddLookNumber(href){
    $.ajax({
        xhrFields: {
            withCredentials: true
        },
        type: "post",
        url: baseUrl+"/goods/addLookNumber",
        dataType: 'json',
        data:{
            goodsId:href
        },
        success:function(data){
            console.log(data);

        },
        error:function(data){
            console.log(data);
        }
    })
}
//增加 帖子的浏览次数 /noteMessage/addLookNumber
function noteMessageLookNumber(href){
    $.ajax({
        xhrFields: {
            withCredentials: true
        },
        type: "post",
        url: baseUrl+"/noteMessage/addLookNumber",
        dataType: 'json',
        data:{
            noteMessageId:href
        },
        success:function(data){
            console.log(data);

        },
        error:function(data){
            console.log(data);
        }
    })
}

