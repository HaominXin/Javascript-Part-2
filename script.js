{
    console.log(new Object());
    console.log(new Array());
    console.log(new Set());
    console.log(new Map());
    console.log(new WeakMap());
    console.log(new WeakSet());
}

{
    /**
     * 了解weakSet和weakMap
     */
    console.clear();
    const object = new Object();
    const array = new Array();
    const set = new Set();
    const map = new Map();
    const weakSet = new WeakSet();
    const weakMap = new WeakMap();
}

{
    const target = {
        a: 1,
        b: 2,
    }
    const source = {
        b: 4,
        c: 5
    }
    const returnTarget = Object.assign(source, target);
    console.log("returnTarget:", returnTarget, typeof returnTarget);
    console.log("target:", target);
    console.log("source:", source);
}