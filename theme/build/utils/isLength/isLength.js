export var isLength = function(length) {
    return function(value) {
        return value != null && value.length === length;
    };
};
