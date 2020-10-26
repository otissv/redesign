export var isStringNumber = function(value) {
    return typeof value === 'string' && !!value.match(/^-?\d+\.?\d*$/);
};
