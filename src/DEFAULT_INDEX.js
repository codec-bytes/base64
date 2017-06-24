import DEFAULT_ALPHABET from './DEFAULT_ALPHABET' ;

import { enumerate } from '@aureooms/js-itertools' ;

import { object , reflect } from '@aureooms/js-mapping' ;

export default object( reflect( enumerate( DEFAULT_ALPHABET ) ) ) ;
