;
(function(){
	'use strict';

	document.addEventListener('DOMContentLoaded', ready);

	function ready() {
		var attrSelector = 'data-interactive-trigger',
				target = document.querySelector('[data-interactive-target]'),
				items = document.querySelectorAll('[' + attrSelector + ']'),
				classes = [
					'js-is-A6',
					'js-is-A5',
					'js-is-A4',
					'js-is-A3',
					'js-is-A2'
				], i;

		for (var i = 0; i < items.length; i++) {
			items[i].addEventListener('mouseover', mouseOverHandler);
			items[i].addEventListener('mouseleave', mouseLeaveHandler);
		}

		function mouseOverHandler(e) {
			e.stopPropagation();
			var id = parseInt(e.target.getAttribute(attrSelector));

			if (!isNaN(id)) {

				removeClasses(target, classes);

				switch(id) {
					case (0): {
						addClass(target, classes[0]);

						break;
					}
					case (1): {
						addClass(target, classes[1]);

						break;
					}
					case (2): {
						addClass(target, classes[2]);

						break;
					}
					case (3): {
						addClass(target, classes[3]);

						break;
					}
					case (4): {
						addClass(target, classes[4]);

						break;
					}
					default:
						break;
				}
			}
		}

		function mouseLeaveHandler() {
			removeClasses(target, classes);
		}

		function removeClasses(target, classes) {
			var i;

			for (i = 0; i < classes.length; i++) {
				if (target.classList.contains(classes[i])) {
					target.classList.remove(classes[i]);
				}
			}
		}

		function addClass(target, className) {
			if (!target.classList.contains(className)) {
				target.classList.add(className);
			}
		}
	}
})();
