function IsPlainObj(value) {
    return !!(value && typeof(value) === "object" && !Array.isArray(value));
}

console.log(IsPlainObj(10));
console.log(IsPlainObj({}));
console.log(IsPlainObj("87"));
console.log(IsPlainObj(NaN));

