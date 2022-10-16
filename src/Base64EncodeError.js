import {EncodeError} from '@codec-bytes/error';

export default class Base64EncodeError extends EncodeError {
	constructor(reason, object, position) {
		super('base64', reason, object, position);
	}
}
