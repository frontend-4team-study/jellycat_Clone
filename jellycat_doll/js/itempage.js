$(function(){
    const rate = 0.1;
    const max = 5;
    const percent = rate/max*100;
    $("#review").find("#back-score").css("width",percent+"%");
})
