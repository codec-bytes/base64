import { iter , next , StopIteration } from '@aureooms/js-itertools' ;
import { ValueError } from '@aureooms/js-error' ;

import byte3tochar4 from './byte3tochar4' ;
import byte2tochar3 from './byte2tochar3' ;
import byte1tochar2 from './byte1tochar2' ;

import Base64DecodeError from './Base64DecodeError' ;

import variants from './variants' ;
import DEFAULT_OPTIONS from './DEFAULT_OPTIONS' ;

export default function* _decode ( bytes , options = DEFAULT_OPTIONS ) {

	if ( options.variant ) {
		if ( variants.hasOwnProperty(options.variant) ) {
			options = variants[options.variant] ;
		}
		else {
			throw new ValueError( `unknown Base64 variant ${options.variant}` ) ;
		}
	}

	let start = 0 ;

	const { alphabet , padding } = options ;

	const it = iter(bytes) ;

	while ( true ) {

		let a, b, c;

		try {
			a = next( it ) ;
		}
		catch ( e ) {
			if ( e instanceof StopIteration ) break ;
			else throw e ;
		}

		if ( a < 0x00 || a > 0xFF ) {
			const reason = `byte out of range 0x00 <= ${a} <= 0xFF` ;
			const position = { start : start , end : start + 1 } ;
			throw new Base64DecodeError( reason , bytes , position ) ;
		}

		++start;

		try {
			b = next( it ) ;
		}
		catch ( e ) {
			if ( e instanceof StopIteration ) {
				yield* byte1tochar2(alphabet, a);
				if (padding) {
					yield padding;
					yield padding;
				}
				break;
			}
			else throw e ;
		}

		if ( b < 0x00 || b > 0xFF ) {
			const reason = `byte out of range 0x00 <= ${b} <= 0xFF` ;
			const position = { start : start , end : start + 1 } ;
			throw new Base64DecodeError( reason , bytes , position ) ;
		}

		++start;

		try {
			c = next( it ) ;
		}
		catch ( e ) {
			if ( e instanceof StopIteration ) {
				yield* byte2tochar3(alphabet, a, b);
				if (padding) {
					yield padding;
				}
				break;
			}
			else throw e ;
		}

		if ( c < 0x00 || c > 0xFF ) {
			const reason = `byte out of range 0x00 <= ${c} <= 0xFF` ;
			const position = { start : start , end : start + 1 } ;
			throw new Base64DecodeError( reason , bytes , position ) ;
		}

		yield* byte3tochar4(alphabet, a, b, c);

		++start;

	}

}
