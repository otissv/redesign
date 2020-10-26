/**
 * @param Right   Function to be evaluated.
 * @param Left    Fallback function.
 * @returns       Promise containing Right if truthy else a Promise with left.
 */ export var tryCatch = function(Right) {
    try {
        return Right();
    } catch (e) {
        return new Error(e);
    }
};
