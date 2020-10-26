export function either(left, right) {
    return function(value) {
        if (typeof left === 'function' && typeof right === 'function') {
            var ref;
            return (ref = left(value)) !== null && ref !== void 0 ? ref : right(value);
        }
        if (typeof left === 'function' && typeof right !== 'function') {
            var ref;
            return (ref = left(value)) !== null && ref !== void 0 ? ref : right;
        }
        if (typeof left !== 'function' && typeof right === 'function') {
            return left !== null && left !== void 0 ? left : right();
        }
        if (typeof left !== 'function' && typeof right !== 'function') {
            return left !== null && left !== void 0 ? left : right;
        }
    };
}
