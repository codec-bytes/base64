export default function* byte3tochar4 ( alphabet , a , b , c ) {
	yield alphabet[      a >> 2                   ] ;
	yield alphabet[ 63 & a << 4 | b >> 4          ] ;
	yield alphabet[ 63 &          b << 2 | c >> 6 ] ;
	yield alphabet[ 63 &                   c      ] ;
}
