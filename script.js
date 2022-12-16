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
    const returnTarget = Object.assign(target, source);
    // const newReturnTarget = Object.assign(source, target);
    console.log("returnTarget:", returnTarget);
    // console.log("newReturnTarget:", newReturnTarget);
    console.log("target:", target);
    console.log("source:", source);
}

{
    console.clear();
    const target = {
        a: 1,
        b: 2,
    }
    const source = {
        b: 4,
        c: 5
    }
    const combineTarget = {...target, ...source};
    console.log("target:", target);
    console.log("source:", source);
    const returnTarget = Object.assign(target, source);
    console.log("target:", target);
    console.log("source:", source);
    console.log("combineTarget:", combineTarget);
    console.log("returnTarget:", returnTarget);

    const obj = new Object({name: "alfred"});
    console.log("obj:")
}

{
    console.clear();
    const arr = [{
        name: "Alfred",
        age: 22,
        profile: {
            address: "Toowong",
        }
    }]
    const newArr = [{...arr[0]}];
    newArr[0].name = "Haomin";
    newArr[0].profile.address = "Brisbane"
    console.log("arr:", arr);
    console.log("newArr:", newArr);
}

// {
//     // 下次上课询问关于array怎么处理
//     console.clear();
//     let _ = require("lodash")
//     const user = {
//         name: "Alfred",
//         age: 22,
//         profile: {
//             address: "Queensland",
//             email: "gmail.com"
            
//         }
//     }
//     const newUser = {...user}
//     const newCloneUser = _.cloneDeep(user);
    
//     newUser.age = 18;
//     newUser.profile.email = "@gmail.com";
//     console.log("user:", user);
//     console.log("newUser:", newUser);
    
//     console.clear();
//     newCloneUser.age = 20;
//     newCloneUser.profile.email = "alfred.xin@gmail.com";
//     console.log("user:", user);
//     console.log("newCloneUser:", newCloneUser);
// }

