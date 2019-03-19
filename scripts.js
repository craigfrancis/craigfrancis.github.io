
;(function(document, window, undefined) {

	'use strict';

	if (!document.addEventListener || !document.querySelector || !('classList' in document.createElement('span'))) { // classList = IE11
		return;
	}

	// document.documentElement.classList.add('js_enabled');

	function link_click(e) {
		console.log('hi');
		e.preventDefault();
	}

	function init() {

		var my_link = document.getElementById('my_link');
		if (my_link) {
			my_link.addEventListener('click', link_click);
		}

	}

	if (document.readyState !== 'loading') {
		window.setTimeout(init); // Handle asynchronously
	} else {
		document.addEventListener('DOMContentLoaded', init);
	}

})(document, window);
