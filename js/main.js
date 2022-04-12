$(document).ready(function () {
    // next
    var index = 1;
    $(".next").click(function (e) { 
        if(index == 4){
            $(".active").removeClass("active");
            $(".img div:first-child").addClass("active");
            index = 1;
        }
        else {
            $(".active").removeClass("active").next().addClass("active");
            index++;
        }
        $(".chon").removeClass("chon")
        $(".cicle li:nth-child("+index+")").addClass("chon")
    });
    //pre
    $(".prev").click(function (e) {
        if(index == 1){
            $(".active").removeClass("active");
            $(".img div:last-child").addClass("active")
            index = 4;
        }
        else {
            $(".active").removeClass("active").prev().addClass("active");
            index--;
        }
        $(".chon").removeClass("chon")
        $(".cicle li:nth-child("+index+")").addClass("chon")
    });
    // cicle
    $(".cicle li").click(function(e){
        $(".chon").removeClass("chon")
        $(this).addClass("chon")
        $(".active").removeClass("active")
        $(".img div:nth-child("+($(".cicle li").index($(".chon")) + 1) + ")").addClass("active")
        index = $(".cicle li").index($(".chon")) + 1;
    })
});