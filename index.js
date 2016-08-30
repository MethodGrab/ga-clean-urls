// https://developers.google.com/analytics/devguides/collection/analyticsjs/writing-plugins

;(function(  ) {
	'use strict';

	function _ga(  ) {
		return window[ window.GoogleAnalyticsObject || 'ga' ];
	};

	// :: ( pluginName: String, pluginConstructor: Function ) → null
	// Provides a plugin name and constructor function to analytics.js. This
	// function works even if the site has customized the ga global identifier.
	function providePlugin( pluginName, pluginConstructor ) {
		if ( typeof _ga() === 'function' ) {
			_ga()( 'provide', pluginName, pluginConstructor );
		}
	}

	function CleanUrls( tracker, opts ) {
		// push callback to the end of the queue
		_ga()( stripUtmQueries );
	}

	function stripUtmQueries(  ) {
		// support test
		if ( !window.history.replaceState ) { return; }

		var cleanSearch = window.location.search
			// remove UTM codes
			.replace( /utm_[^&]+&?/g, '' )
			// cleanup residual ampersands
			.replace( /&$/, ' ')
			// cleanup residual question marks
			.replace( /^\?$/, '' );

		var cleanUrl = window.location.pathname + cleanSearch + window.location.hash;

		window.history.replaceState( {}, '', cleanUrl );
	}

	// registers the plugin for use
	providePlugin( 'cleanUrls', CleanUrls );

}(  ));
