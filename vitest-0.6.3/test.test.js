import { test } from 'vitest';
import * as fc from 'fast-check';

test('test', () => {
	// Code under test
	const contains = (text, pattern) => text.indexOf(pattern) >= 0;

	fc.assert(fc.property(fc.string(), text => contains(text, text)));
	fc.assert(fc.property(fc.string(), fc.string(), fc.string(), (a,b,c) => {
		// Alternatively: no return statement and direct usage of expect or assert
		return contains(a+b+c, b);
	}));
});
