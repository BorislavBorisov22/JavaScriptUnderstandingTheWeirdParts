const forEach = (list, callbackFn) => {
    for (let i = 0; i < list.length; i++) {
        callbackFn(list[i], i, list);
    }
};

const reduce = (list, callbackFn, initialValue) => {
    let accValue = initialValue;
    for (let i = 0; i < list.length; i++) {
        accValue = callbackFn(accValue, list[i], i, list);
    }

    return accValue;
};

const map = (list, callbackFn) => {
    return reduce(list, (aggArr, current, index, list) => {
        aggArr.push(callbackFn(current, index, list));
        return aggArr;
    }, []);
};

const filter = (list, callbackFn) => {
    return reduce(list, (aggArr, current, index, list) => {
        if (callbackFn(current, index, list)) {
            aggArr.push(current);
        }

        return aggArr;
    }, []);
};

const _find = (list, callbackFn) => {
    for (let i = 0; i < list.length; i++) {
        if (callbackFn(list[i], i, list)) {
            return {
                index: i,
                value: list[i]
            };
        }
    }

    return {
        index: -1,
        value: null
    };
};

const find = (list, callbackFn) => {
    return _find(list, callbackFn).value;
};

const findIndex = (list, callbackFn) => {
    return _find(list, callbackFn).index;
};

const groupBy = (list, callbackFn) => {
    return reduce(list, (groups, currentValue) => {
        const groupName = callbackFn(currentValue);
        const newValue = [currentValue];
        groups[groupName] = groups[groupName] ? groups[groupName].concat(newValue) : newValue;
        return groups;
    }, {});
};

const _ = underscore = {
    reduce,
    forEach,
    map,
    filter,
    find,
    findIndex,
    groupBy
};

const testArr = [
    { username: 'John', password: '1232341' },
    { username: 'Doe', password: '1232341' },
    { username: 'Doe', password: '1232341' }
];

const mapped = _.map(testArr, (user, index) => user.username);
const filtered = _.filter(mapped, (e) => e.includes('J'));

const grouped = _.groupBy(testArr, (current) => current.username);
console.log(mapped);
console.log(filtered);

console.log(grouped);

function curry(callbackFn) {
    const totalArgs = callbackFn.length;
    const { slice } = Array.prototype;

    return function() {
        const self = this;
        const args = slice.call(arguments);
        if (args.length < totalArgs) {
            return function() {
                return self.apply(args.concat(slice(arguments)));
            };
        } else {
            return self.apply(args.concat(slice(arguments)));
        }
    };
}

const add = curry((a, b, c, d) => a + b + c + d);
console.log(add(1)(2)(3)(5));