export default function * char2tobyte1(index, a, b) {
	yield index[a] << 2 | index[b] >> 4;
}
