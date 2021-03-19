export default function* char3tobyte2(index, a, b, c) {
	yield (index[a] << 2) | (index[b] >> 4);
	yield (0xff & (index[b] << 4)) | (index[c] >> 2);
}
