import { iter , next , StopIteration } from '@aureooms/js-itertools' ;
import DEFAULT_OPTIONS from './DEFAULT_OPTIONS' ;

import char4tobyte3 from './char4tobyte3' ;
import char3tobyte2 from './char3tobyte2' ;
import char2tobyte1 from './char2tobyte1' ;

import Base64EncodeError from './Base64EncodeError' ;

export default function* _encode ( string , options = DEFAULT_OPTIONS ) {

	let start = 0 ;

	const index = options.index ;
	const padding = options.padding ;

	const it = iter(string) ;

	while ( true ) {

		let a, b, c, d ;

		let stop = 4 ;

		try {
			a = next( it ) ;
		}
		catch ( e ) {
			if ( e instanceof StopIteration ) break ;
			else throw e ;
		}

		try {
			b = next( it ) ;
		}
		catch ( e ) {
			if ( e instanceof StopIteration ) {
				const reason = `lone character ${a}` ;
				const position = { start : start , end : start + 1 } ;
				throw new Base64EncodeError( reason , string , position ) ;
			}
			else throw e ;
		}

		try {
			c = next( it ) ;
		}
		catch ( e ) {
			if ( e instanceof StopIteration ) {
				if ( padding ) {
					const reason = `missing padding after ${a}${b}` ;
					const position = { start : start , end : start + 2 } ;
					throw new Base64EncodeError( reason , string , position ) ;
				}
				stop = 2 ;
			}
			else throw e ;
		}

		if ( stop === 4 ) {
			try {
				d = next( it ) ;
			}
			catch ( e ) {
				if ( e instanceof StopIteration ) {
					if ( padding ) {
						const reason = `missing padding after ${a}${b}${c}` ;
						const position = { start : start , end : start + 3 } ;
						throw new Base64EncodeError( reason , string , position ) ;
					}
					stop = 3 ;
				}
				else throw e ;
			}
		}

		if ( padding ) {
			stop = [a, b, c, d].indexOf(padding) ;
			stop = stop === -1 ? 4 : stop ;
			if ( stop < 2 ) {
				const reason = `padding at wrong position in ${a}${b}${c}${d}` ;
				const position = { start : start + stop , end : start + stop + 1 } ;
				throw new Base64EncodeError( reason , string , position ) ;
			}
			if ( stop === 2 && d !== padding ) {
				const reason = `incorrect padding end in ${a}${b}${c}${d}` ;
				const position = { start : start + 3 , end : start + 4 } ;
				throw new Base64EncodeError( reason , string , position ) ;
			}
		}

		if ( !index.hasOwnProperty(a) ) {
			const reason = `not in alphabet ${a}` ;
			const position = { start : start , end : start + 1 } ;
 			throw new Base64EncodeError( reason , string , position ) ;
		}

		if ( !index.hasOwnProperty(b) ) {
			const reason = `not in alphabet ${b}` ;
			const position = { start : start + 1 , end : start + 2 } ;
 			throw new Base64EncodeError( reason , string , position ) ;
		}

		if ( stop > 2 ) {

			if ( !index.hasOwnProperty(c) ) {
				const reason = `not in alphabet ${c}` ;
				const position = { start : start + 2 , end : start + 3 } ;
				throw new Base64EncodeError( reason , string , position ) ;
			}

			if ( stop > 3 ) {

				if ( !index.hasOwnProperty(d) ) {
					const reason = `not in alphabet ${d}` ;
					const position = { start : start + 3 , end : start + 4 } ;
					throw new Base64EncodeError( reason , string , position ) ;
				}

			}

			else {
				if ( index[c] & 3 ) {
					const reason = `trailing bits in ${a}${b}${c}, last digit should be ${options.alphabet[index[c] & 63 << 2]}` ;
					const position = { start : start + 2 , end : start + 3 } ;
					throw new Base64EncodeError( reason , string , position ) ;
				}
			}

		}

		else {
			if ( index[b] & 15 ) {
				const reason = `trailing bits in ${a}${b}, last digit should be ${options.alphabet[index[b] & 3 << 4]}` ;
				const position = { start : start + 1 , end : start + 2 } ;
				throw new Base64EncodeError( reason , string , position ) ;
			}
		}

		switch ( stop ) {
			case 4:
				yield* char4tobyte3(index, a, b, c, d) ;
				break;
			case 3:
				yield* char3tobyte2(index, a, b, c) ;
				break;
			case 2:
				yield* char2tobyte1(index, a, b) ;
				break;
		}

		start += 4 ;

	}

}
