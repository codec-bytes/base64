import {DecodeError} from '@codec-bytes/error';

export default class Base64DecodeError extends DecodeError {
	constructor(reason, object, position) {
		super('base64', reason, object, position);
	}
}
