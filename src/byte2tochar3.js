export default function * byte2tochar3(alphabet, a, b) {
	yield alphabet[a >> 2];
	yield alphabet[63 & a << 4 | b >> 4];
	yield alphabet[63 & b << 2];
}
