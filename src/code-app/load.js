
define(['./jquery', './events'], function ($, events) {
	
	var setup = function () {
		for (var i=0; i < 7; i++) {
			if (i == 6) {
				$(".win_Prog li").eq(i).addClass('p_cr');
			}
			else {
				$(".win_Prog li").eq(i).addClass('p_yt');
			}
		}
	}
	
	return { initialize : setup };

})
