module.exports = function reverse(n) {
	return n > 0 ? positive(n) : negative(n)
}
function positive(n) {
	return n.toString().split('').reverse().join('');
}

function negative(n) {
	let arr = n.toString().split('').reverse();
	arr.pop()
	let res = arr.reduce((arr, i) => arr.concat(i))
	return res
}