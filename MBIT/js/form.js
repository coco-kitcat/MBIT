function scrollUp(){
    const vheight = $('.test').height();
    $('html, body').animate({
        scrollTop: ((Math.floor($(window).scrollTop() / vheight) - 1) * vheight)
    }, 500);
}

function scrollDown(){
    const vheight = $('.test').height();
    $('html, body').animate({
        scrollTop: ((Math.floor($(window).scrollTop() / vheight) + 1) * vheight)
    }, 500);
}

$(function(){
	$('.next_btn').click(function(e){
        let divs = $(this).parent().prev().children()
        let inputs = divs.find('input:checked');
        if(inputs.length < 1) {
            alert('문항이 선택되지 않았습니다.');
            return false;
        }
        e.preventDefault();
        scrollDown();
	});

	$('.prev_btn').submit(function(e){ //제출할 때만 검사
        e.preventDefault();
        scrollUp();
	});

	$('#form').click(function(e){
        let radios = $('input[type=radio]: checked');
        if(radios.length < 3) {
            alert('문항이 선택되지 않았습니다.');
            return false;
        }
	});

	$('html, body').animate({
        scrollTop: 0
	}, 500);
});