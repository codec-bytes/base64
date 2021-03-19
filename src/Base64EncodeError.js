import {EncodeError} from '@aureooms/js-codec';

export default class Base64EncodeError extends EncodeError {
	constructor(reason, object, position) {
		super('base64', reason, object, position);
	}
}
