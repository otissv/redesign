var _typeof = function(obj) {
    return obj && obj.constructor === Symbol ? "symbol" : typeof obj;
};
/**
 *
 * @param value any value
 * @returns   true if object is empty, else false.
 */ export var isEmpty = function(value) {
    var type = _typeof(value);
    switch(true){
        // @ts-ignore
        case Array.isArray(value) && value.filter(function(v) {
            return typeof v === 'undefined';
        }).length === value.length:
            return true;
        case type === 'boolean':
        case type === 'number':
            return false;
        case type === 'string':
            return !value;
        case type === 'object':
            return !Object.keys(value).length;
        default:
            return !value;
    }
};
