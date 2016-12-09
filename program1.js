function foo ( f, num ) {
	if ( num ) foo( f, --num );
	return;
}

module.exports = foo;
