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
				];

		items.forEach(function(item) {
			item.addEventListener('mouseover', mouseOverHandler);
			item.addEventListener('mouseleave', mouseLeaveHandler);
		});

		function mouseOverHandler(e) {
			e.stopPropagation();
			var id = parseInt(e.target.getAttribute(attrSelector));

			if (!isNaN(id)) {

				if (target.classList.contains('js-is-A3')) {
						target.classList.remove('js-is-A3');
				}

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
			classes.forEach(function(item) {
				if (target.classList.contains(item)) {
					target.classList.remove(item);
				}
			});
		}

		function addClass(target, className) {
			if (!target.classList.contains(className)) {
				target.classList.add(className);
			}
		}
	}
})();
