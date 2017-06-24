export default function* byte1tochar2 ( alphabet , a ) {
	yield alphabet[      a >> 2 ] ;
	yield alphabet[ 63 & a << 4 ] ;
}
