;
(function () {
	'use strict';

	document.addEventListener('DOMContentLoaded', ready);

	function ready() {
		var modalBtns = document.querySelectorAll('[data-modal-trigger]'),
				overlay = document.querySelector('.modals__overlay'),
				hammerModalBtns = [],
				hammerOverlay = new Hammer(overlay);

		modalBtns.forEach(function(item, index) {
			hammerModalBtns[index] = new Hammer(modalBtns[index])
				.on('tap', clickModalBtnsHandler);
		});

		function clickModalBtnsHandler(event) {
			var trigger = event.target,
					id = trigger.getAttribute('data-modal-trigger'),
					target = document.querySelector('[data-modal-target="' + id + '"]'),
					closeBtns = document.querySelectorAll('[data-modal-target="' + id + '"] [data-modal-close]'),
					hammerCloseBtns = [];

			hammerOverlay.on('tap', clickCloseBtnHandler);

			closeBtns.forEach(function(item, index) {
				hammerCloseBtns[index] = new Hammer(closeBtns[index])
					.on('tap', clickCloseBtnHandler);
			});

			if (!target.classList.contains('js-is-open')) {
				target.classList.add('js-is-open');
			}

			if (!overlay.classList.contains('js-is-open')) {
				overlay.classList.add('js-is-open');
			}
			blockScroll();

			function clickCloseBtnHandler() {
				if (target.classList.contains('js-is-open')) {
					target.classList.remove('js-is-open');
				}
				if (overlay.classList.contains('js-is-open')) {
					overlay.classList.remove('js-is-open');
				}
				unblockScroll();
			}
		}

		function blockScroll() {
			var body = document.querySelector('body');

			if (isScrollDesktop()) {
				body.style.paddingRight = '17px';
			}
			body.style.overflow = 'hidden';	
		}

		function unblockScroll() {
			var body = document.querySelector('body');

			body.style.overflow = 'auto';
			if (isScrollDesktop()) {
				body.style.paddingRight = '0px';
			}
		}

		function isScrollDesktop() {
			if (window.innerWidth !== document.documentElement.clientWidth) {
				return true;
			}

			return false;
		}
	}
})();
