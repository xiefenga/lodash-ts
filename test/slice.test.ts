import 'module-alias/register';
import slice from '@/Array/slice';
import { strict as assert } from 'assert';

describe('slice', function () {
	const array = [1, 2, 3];

	it('should use a default `start` of `0` and a default `end` of `length`', function () {
		const actual = slice(array);
		assert.deepStrictEqual(actual, array);
		assert.notStrictEqual(actual, array);
	});

	it('should work with a positive `start`', function () {
		assert.deepStrictEqual(slice(array, 1), [2, 3]);
		assert.deepStrictEqual(slice(array, 1, 3), [2, 3]);
	});

	it('should work with a negative `start`', function () {
		assert.deepStrictEqual(slice(array, -1), [3]);
	});

	it('should work with a negative `end`', function () {
		assert.deepStrictEqual(slice(array, 1, -1), [2]);
	});

	it('should work with NaN, Infinity and -Infinity', function () {
		assert.deepStrictEqual(slice(array, NaN), []);
		assert.deepStrictEqual(slice(array, -Infinity, Infinity), [1, 2, 3]);
	});

	it('shoud work with illegal range', function () {
		assert.deepStrictEqual(slice(array, Infinity, -Infinity), []);
	});

});