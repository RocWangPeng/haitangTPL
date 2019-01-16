$(function(){
	console.log('all-pages --->ok');
	console.log('当前页：'+location.href);
	var elem = $('#ht-header');
	// debugger
	$('#ht-header').headroom({
		"tolerance": 5,
	  	"offset": 205,
	  	"classes": {
		    "initial": "animated",
		    "pinned": "slideDown",
		    "unpinned": "slideUp"
		}
	});

	// lesson list ask message and so on
	$('li[data-vip=presentation-27]').remove();

	// hide star
	// $($('#review-form').children('div').get(0)).hide();

	// hide exit 当前课程id
	// $('.lesson-exit-27').remove();

	// bug
	$('.article-detail').parent().css({
		'margin-top':'100px'
	});

	// videojs
	function videoPlay(videoUrl){
        var html ='<embed src="'+ videoUrl +'" quality="high" width="960" height="540" align="middle" allowScriptAccess="never" allowFullScreen="true" type="application/x-shockwave-flash"></embed>';
        $('.video-container').html(html);
        $('.video-mask').show();
    }
    // video url
    // var videoArr = [
    // 'http://cloud.video.taobao.com/play/u/128236317/p/1/e/1/t/1/42330056.swf',//teacher
    // 'http://cloud.video.taobao.com/play/u/128236317/p/1/e/1/t/1/42330095.swf',//assistant
    // 'http://cloud.video.taobao.com/play/u/128236317/p/1/e/1/t/1/42330114.swf'
    // ];
    var videoArr = [
    'http://yuntv.letv.com/bcloud.swf?uu=11ijmp9uua&vu=9ddd1051ff&pu=8FF9C0D595&auto_play=1&gpcflag=1',//teacher
    'http://yuntv.letv.com/bcloud.swf?uu=11ijmp9uua&vu=b03d1a16c1&pu=8FF9C0D595&auto_play=1&gpcflag=1',//assistant
    'http://yuntv.letv.com/bcloud.swf?uu=11ijmp9uua&vu=f2f3b49850&pu=8FF9C0D595&auto_play=1&gpcflag=1'
    ];
    $('.play-videos').on('click',function(){
        videoPlay( videoArr[$(this).attr('data-videoId')] );
    });
    $('.player-icon').on('click',function(){
        videoPlay( videoArr[$(this).attr('data-videoId')] );
    });

    $('.mask-1').click(function(){
        $('.video-mask').hide();
        $('.video-container').html(' ');
    });

    // wow js
    function wowInt(){
        if($(window).width() > 768){
            // new WOW().init();
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 100,
                mobile: true,
                live: true
            });
            wow.init();
        }else{
            $('.student-section').hide();
        }
    }
    wowInt();
	
    $(window).resize(function() {
        wowInt();
        // $('.ht-mobile-show').show();
    });
    //banner
    if($('#gla')){
        $('.gla_inbox').corner('8px');
        $('#gla_box>ul').roundabout({
            minOpacity:1,
            btnNext: ".next",
            duration: 1000,
            reflect: true,
            btnPrev: '.prev',
            autoplay:true,
            autoplayDuration:5000,
            tilt:0,
            shape: 'figure8'
        });
    }
});