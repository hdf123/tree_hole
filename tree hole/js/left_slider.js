/**
 * Created by Administrator on 2018/8/25.
 */
var falg=true;
$("#show").click(function(){
    $("#layer").css("left","80%");
    $("#layer").height("100%");
    $("#left").height("100%");
    $("#content_layer").css("overflow","hidden");
    $("#layer").css("overflow","hidden");
    $("#left").css("overflow","hidden");

    $("#layer").css("position","absolute");
    $("#layer").css("transition","left 0.1s ease");
    $("#left").show();
    $("#mask").show();
});
$("#mask").click(function(){
    $("#layer").css("position","relative");
    $("#layer").css("left","0%");
    $("#content_layer").css("overflow","auto");
    $("#left").css("display","none");
    $("#layer").css("transition","left 0.1s ease");
    $("#mask").css("display","none");
})