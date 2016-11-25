;
(function() {
	'use strict';

		document.addEventListener('DOMContentLoaded', ready);

		function ready() {
			var uploadTriggerBtns = document.querySelectorAll('[data-upload-trigger]'),
					uploadTargetBtns = document.querySelectorAll('[data-upload-target]'),
					hammerUploadTriggerBtns = [],
					i;

			for (i = 0; i < uploadTriggerBtns.length; i++) {
				uploadTargetBtns[i].setAttribute('name', 'upload_' + i);
				hammerUploadTriggerBtns[i] = new Hammer(uploadTriggerBtns[i])
						.on('tap', uploadBtnHandler.bind(null, uploadTargetBtns[i]));
			}

			function uploadBtnHandler(target) {
				var parent = target.closest('[data-upload-id]'),
						parentId = parseInt(parent.getAttribute('data-upload-id')),
						btn = parent.querySelector('[data-upload-btn]'),
						sign = parent.querySelector('[data-upload-sign]'),
						trigger = parent.querySelector('[data-upload-sign-trigger]'),
						hammerTrigger = new Hammer(trigger),
						clone;

				target.click();
				clone = parent.cloneNode(true);
				clone.setAttribute('data-upload-id', parentId + 1);

				target.addEventListener('change', changeHandler);
				hammerTrigger.on('tap', clickHandler);

				function changeHandler() {
					if (!btn.classList.contains('js-is-selected')) {
						btn.classList.add('js-is-selected');
					}
					if (!sign.classList.add('js-is-selected')) {
						sign.classList.add('js-is-selected');
					}
				}

				function clickHandler() {
					parent.parentNode.appendChild(clone);
					ready();
				}
			}
		}
})();
