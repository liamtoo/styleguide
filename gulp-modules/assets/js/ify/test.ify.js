console.time( 'browserify' );

// Libraries
var hbs = require( 'hbsfy/runtime' );

// Helpers
var injectData = require( './helpers/inject-data' );

// Templates
var $$test = require( '../../../templates/test.hbs' );

// Register Partials
hbs.registerPartial( 'link', require('../../../templates/test-link.hbs') );


var data = {
	title : 'Test Template',
	links : [
		{
			name : 'Twitter',
			url : 'http://twitter.com'
		},
		{
			name : 'Facebook',
			url : 'http://facebook.com'
		}
	]
};

injectData( $$test(data) );

console.timeEnd( 'browserify' );
