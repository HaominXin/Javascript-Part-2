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

{
    console.clear();
    const obj = {
        name: "Alfred",
    }
    const newObj = {...obj, name: "lily"};
    console.log("newObj:", newObj);
    const {name: englishName} = newObj;
    console.log("englishName:", englishName);
}

{
    /**
     * 原型链
     * 在这个例子中user是newUser的原型链, newUser可以拥有user的所有元素属性, 同时也可以创造属于自己的元素属性并且对原型user不产生影响
     */
    console.clear();
    const user = {
        name: "alfred",
        profile: {
            address: "Toowong",
            email: "gmail.com",
        }
    }
    const newUser = Object.create(user);
    console.log("user:", user);
    console.log("newUser:", newUser);
    console.log("user:", user);
    console.log("newUser:",  newUser);
}

{
    /**
     * 用Object.hasOwn() / 实例.hasOwnProperty("属性")检测当前的属性是不是该Object的原型
     * 判断a是不是b的protoType: a.isPrototypeOf(b)
     * @Question: profile里面的属性如何进行判断
     */
    console.clear();
    const user = {
        name: "alfred",
        profile: {
            address: "Toowong",
            email: "gmail.com",
        }
    }
    const newUser = Object.create(user);
    console.log("isPrototype:", Object.hasOwn(user, "name"));
    console.log(user.hasOwnProperty("profile"));
    console.log(user.isPrototypeOf(newUser));
}

{
    /**
     * Object.isExtensible(obj): 用来查看当前的object是否可以进行扩展
     * Object.preventExtensions(obj): 阻止当前的object进行拓展不阻止删除和更改, 并且该操作不能够被撤销
     */
    console.clear();
    const user = {
        name: "alfred",
    }
    Object.preventExtensions(user);
    console.log("extensionResult:", Object.isExtensible(user));
}

{
    /**
     * Object.seal(obj): 使当前obj不可以进行拓展和删除但是可以进行更改
     */
    console.clear();
    const user = {
        name: "alfred",
    }
    Object.seal(user);
}

{
    /**
     * Object.freeze(obj): 使当前obj不可以进行拓展和更改还有删除
     */
    console.clear();
    const user = {
        name: "alfred",
    }
    Object.freeze(user);
}

{
    /**
     * Array.from(): 将字符串转换为数组并且是按char进行拆分, 弊端是字符串中有几个空格将会拆分几个空格
     */
    console.clear();
    const name = "alfred    Xin";
    const arrName = Array.from(name);
    console.log("arrName:", arrName);
    const newArrName = arrName.filter(element => element != " ");
    console.log("newArrName:", newArrName);

    /**
     * Array.join()合并
     */
    const combineArr = arrName.join("");
    console.log("combineArr:", combineArr);
}

{
    console.clear();
    const arr = ['a', 'b', 'c'];
    const arr2 = ['d', 'e', 'f'];
    const combineArr = arr.concat(arr2);
    console.log("combineArr:", combineArr);
}

{
    /**
     * Object.keys(obj) / Object.values(obj)可以将obj的keys和values抽离出来, 并且分别组成了新的array
     */
    console.clear();
    const obj = {
        name: "alfred",
        address: "Toowong",
    }
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    console.log(keys, values);
}