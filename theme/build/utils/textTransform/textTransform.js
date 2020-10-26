var ref;
export var charAt = function(n) {
    return function(str) {
        return str.charAt(n);
    };
};
export var dropChars = function(n) {
    return function(str) {
        return str.substr(n);
    };
};
export var firstChar = charAt(0);
export var dropFirstChar = dropChars(1);
export var toUpper = function(str) {
    return str.toUpperCase();
};
export var toLower = function(str) {
    return str.toLowerCase();
};
export var toCamel = function(str) {
    var string = str.trim();
    var isCamelCase = /^[a-z][A-Za-z]*$/.test(string);
    return isCamelCase ? string : string.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, function(_m, chr) {
        return chr.toUpperCase();
    });
};
export var toTitle = function(str) {
    return str.replace(/(^|\s)\S/g, toUpper);
};
export var toUpperFirst = function(str) {
    return str.toLowerCase().replace(/^./, toUpper);
};
export var toLowerFirst = function(str) {
    return str.toUpperCase().replace(/^./, toLower);
};
export var toPascalCase = function(str) {
    return str.replace(/\w\S*/g, function(m) {
        return toUpper(firstChar(m)) + toLower(dropFirstChar(m));
    });
};
export var joinCase = function(joiner) {
    return function(str) {
        return (ref = str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)) === null || ref === void 0 ? void 0 : ref.map(toLower).join(joiner);
    };
};
export var toKebabCase = joinCase('-');
export var toSnakeCase = joinCase('_');
