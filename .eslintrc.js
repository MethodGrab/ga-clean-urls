module.exports = {
	extends : [
		'@methodgrab/standard',
		'@methodgrab/standard/browser',
	],

	globals : {
		'ga' : true,
	},

	rules : {
		strict          : [ 2, 'function' ],
		'no-extra-semi' : 0,
	},
};
