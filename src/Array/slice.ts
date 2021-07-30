/**
 * 创建一个数组切片，包括开始索引，不包括结束索引
 * @param arr 被切片的原始数组
 * @param start 开始位置
 * @param end 结束的位置
 * @returns 被切出来的新数组
 */
function slice<T>(arr: T[], start = 0, end = arr.length): T[] {

	const len = arr.length;

	if (len === 0) {
		return [];
	}

	// start 支持为负数
	if (start < 0) {
		// start 不能过小
		start = -start > len ? 0 : len + start;
	}
	// 此时 start 可能的取值 [0, Infinity], NaN, Infinity -Infinity 

	if (end > len) { // end 不能过大
		end = len;
	} else if (end < 0) { // end 支持为负
		end += len;
	}
	// 此时 end 可能的取值 [-Infinity, len] NaN Infinity -Infinity

	// NaN Infinity -Infinity >>> 0 === 0

	// 保证 length 一定为 0 或 正整数
	const length = start > end ? 0 : ((end - start) >>> 0);

	start >>>= 0; // 保证 start 一定为 0 或 正整数

	const result = new Array<T>(length);
	let index = -1;

	while (++index < length) {
		result[index] = arr[index + start];
	}
	return result;
}

export default slice;