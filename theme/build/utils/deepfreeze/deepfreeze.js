/**
 * @param o   Object to be frozen.
 * @returns   Returns frozen object.
 */ export var deepFreeze = function(o) {
    Object.freeze(o);
    Object.getOwnPropertyNames(o).forEach(function(prop) {
        if (Object.prototype.hasOwnProperty.call(o, prop) && o[prop] !== null && (typeof o[prop] === 'object' || typeof o[prop] === 'function') && !Object.isFrozen(o[prop])) {
            deepFreeze(o[prop]);
        }
    });
    return o;
};
