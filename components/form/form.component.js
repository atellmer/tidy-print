;
(function() {
	'use strict';

		document.addEventListener('DOMContentLoaded', ready);

		function ready() {
			var uploadTriggerBtn = document.querySelector('#upload-trigger'),
					uploadTargetBtn = document.querySelector('#upload-target'),
					uploadSign = document.querySelector('#upload-sign'),
					hammerUploadTriggerBtn;

				hammerUploadTriggerBtn = new Hammer(uploadTriggerBtn)
					.on('tap', uploadBtnHandler);

			function uploadBtnHandler() {
				uploadTargetBtn.click();
				uploadTargetBtn.addEventListener('change', changeHandler);

				function changeHandler() {
					uploadSign.textContent = 'Выбрано файлов: ' + uploadTargetBtn.files.length;
				}
			}
		}
})();
