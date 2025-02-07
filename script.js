console.log('initEmbeddedMessaging');
	function initEmbeddedMessaging() {
		try {
			console.log('Setting');
			embeddedservice_bootstrap.settings.language = 'en_US'; // For example, enter 'en' or 'en-US'
			console.log('Init');
			embeddedservice_bootstrap.init(
				'00DQy00000KZluz',
				'ESA_Web_Deployment',
				'https://orgfarm-9f46822ad7-dev-ed.develop.my.site.com/ESWESAWebDeployment1724800920657',
				{
					scrt2URL: 'https://orgfarm-9f46822ad7-dev-ed.develop.my.salesforce-scrt.com'
				}
			);
		} catch (err) {
			console.error('Error loading Embedded Messaging: ', err);
		}
	};
