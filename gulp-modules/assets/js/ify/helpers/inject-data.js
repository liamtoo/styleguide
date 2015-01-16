// Get reference to jQuery
var $ = require( 'jquery' );

module.exports = function( str ) {
	$( 'body' ).html( str );
};