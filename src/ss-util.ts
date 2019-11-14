export function ensure<T>(o: T | null): T {
    if (o === undefined || o === null) {
        throw Error("Expecting a defined and non-null value");
    }
    return o;
}