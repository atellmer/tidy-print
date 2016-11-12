'use strict';

module.exports = {
  root: 'client',
  port: 3000,
	mode: process.env.NODE_ENV !== 'production' ? 'development' : 'production',
	debug: process.env.NODE_ENV !== 'production' ? true : false,
	tinyPngApiKey: 'qxIGxLiWrmjcSr4aVcby1RzsZoK-HFML'
}
