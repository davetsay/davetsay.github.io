var SlideShow = (function(args) {
	var last, clicked=false;

	function SlideShow() {
		var $container = $('.ss-container'),
			$thumbs = $container.find('.ss-thumb'),
			$pics = $container.find('.ss-pic'),
			$text = $container.find('.ss-text'),
			$picContainer = $container.find('.ss-pic-container'),
			$textContainer = $container.find('.ss-text-container');

		console.log("thumbs:", $thumbs);
		$thumbs.on('click', function(e) {
			var current = findId(e.currentTarget.classList);

			if (!clicked) {
				$('.ss-profile-overlay').hide();
			}
			if (current !== last) {
				showSlide(current);
				hideSlide(last);
				last = current;
			}
		});

		// initialize all hidden

		$pics.each(function(index, pic) {
			console.log("pic:", pic);
			$(pic).hide();
		});
		$text.each(function(index, text) {
			$(text).hide();
		});

		function findId(classList) {
			for (var i = 0; i < classList.length; i++) {
				if(classList[i].indexOf('ss-id-') > -1) {
					console.log(classList[i]);
					return classList[i];
				}
			};

			// id not found in classList
			return '';
		}

		function showSlide(id) {
			$picContainer.find('.ss-pic' + '.' + id).show();
			$textContainer.find('.ss-text' + '.' + id).show();			
		}

		function hideSlide(id) {
			$picContainer.find('.ss-pic' + '.' + id).hide();	
			$textContainer.find('.ss-text' + '.' + id).hide();			
		}		
	}

	return SlideShow;
})();

$(function() {
  new SlideShow();
});