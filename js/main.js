let hmadaOffset = $('#hmada').offset().top
$(window).scroll(function(){
    let scroll = $(window).scrollTop()
    if (scroll >= hmadaOffset - 50){
        $('#main-nav').css('backgroundColor', '#000')
        $(btnUp).fadeIn(1000)
    } else {
        $('#main-nav').css('backgroundColor', 'transparent')
        $(btnUp).fadeOut(500)
    }
})
$(btnUp).click(function(){
    $('body,html').animate({scrollTop:"0"},2000 )
    $("li a").removeClass('active')
    
})


$('a[href^="#"]').click(function(e){
    let aHref = $(e.target).attr('href')
    let offset = $(aHref).offset().top
    $("li a").removeClass('active')
    $(this).addClass('active')
    $('body,html').animate({scrollTop:offset},2000 )
})


$("#close").click(function(){
    let width= $("#box-color").innerWidth();
    let boxLeft =$('#slidebox').css('left')
    if(boxLeft=='0px'){
        $('#slidebox').animate({left:`-${width}`},1000)
    }else{
        $('#slidebox').animate({left:'0'},1000)
    }
})

let colorBoxes =$(".color-box");
colorBoxes.eq(0).css("backgroundColor","tomato");
colorBoxes.eq(1).css("backgroundColor","09c");
colorBoxes.eq(2).css("backgroundColor","orange");
colorBoxes.eq(3).css("backgroundColor","teal");
colorBoxes.eq(4).css("backgroundColor","aqua");
colorBoxes.eq(5).css("backgroundColor","lightgreen");

colorBoxes.click(function(e){
let myColor = $(e.target).css("backgroundColor");
$("p").css("color",myColor)
})

