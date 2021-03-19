export default function * char4tobyte3(index, a, b, c, d) {
	yield index[a] << 2 | index[b] >> 4;
	yield 0xFF & index[b] << 4 | index[c] >> 2;
	yield 0xFF & index[c] << 6 | index[d];
}
