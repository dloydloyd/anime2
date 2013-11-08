jQuery(function(){
	
	$.fn.animeJS = function(_params){
		var aID=$(this);
		var Settings={
			'width':'320',
			'height':'240',
			'fps':'30',
			'src':'./movie.jpg',
			'max_frame':'30',
		};
			
		for (var k in _params) {
			if(array_key_exists ( k, Settings )){
				Settings[k]=_params[k];
			}
		}

		var frame = 0;
		var max_frame = Settings['max_frame'];

		var onceFlg = false;
		
		aID.css({
			"background":"url("+Settings['src']+")",
			"width":Settings['width'],
			"height":Settings['height']
		});

		var interval = 1/Settings['fps']*1000;
		animation = setInterval(function (){
			aID.css({
				"background-position":"0 "+ -Settings['height'] * frame +"px"
			});
			frame++;
			if(frame>=Settings['max_frame']){
				if(onceFlg) clearInterval( animation );
				frame = 0;
			};
		}, interval);

	}


});



function array_key_exists ( key, search ) {
	if( !search || (search.constructor !== Array && search.constructor !== Object) ){
		return false;
	}
	return key in search;
}