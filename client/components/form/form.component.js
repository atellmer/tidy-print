;
(function() {
	'use strict';

		document.addEventListener('DOMContentLoaded', ready);

		function ready() {
			var uploadTriggerBtn = document.querySelector('#upload-trigger'),
					uploadTargetBtn = document.querySelector('#upload-target'),
					hammerUploadTriggerBtn = new Hammer(uploadTriggerBtn)
						.on('tap', uploadBtnHandler);

			function uploadBtnHandler() {
				uploadTargetBtn.click();
			}
		}
})();
