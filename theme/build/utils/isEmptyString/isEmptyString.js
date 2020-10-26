export var isEmptyString = function(value) {
    return typeof value === 'string' && value.trim() !== '';
};
