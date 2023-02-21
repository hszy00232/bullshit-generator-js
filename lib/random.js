/**
 * 函数返回一个大于等于 min，小于 max 的随机整数
 */
export function randomInt(min,max) {
    const p = Math.random();
    return Math.floor(min*(1-p) + max*p);
}

/**
 * 随机选出一个数组元素
 * 避免每次选中相同项
 * 注意：
 * 1. 额外增加一个lastPickedIndex保存上一个
 * 2. 如果选择重复，则变相增加选取次数
 */

let lastPickedIndex = null;

export function randomPick(arr) {
    let pickedIndex = null

    do {
        pickedIndex = randomInt(0, arr.length);
    } while (pickedIndex === lastPickedIndex);

    lastPickedIndex = pickedIndex;

    return arr[lastPickedIndex];
}

/**
 * 随机选出一个数组元素
 * 避免每次选中相同项
 * 优化后的实现：
 * 1. 随机取数的范围从数组长度更改为数组长度-1，这样每次都从未选中的项中进行选择
 * 2. 每次取到的元素和数组最后的元素进行交换
 * 注意：
 * 1. 第一次随机取时末尾的那个元素取不到
 * 2. 原始数列的顺序会被打乱
 */

export function createRandomPicker(arr) {
    arr = [...arr]; // 复制数组，避免原始数组改变

    function randomPick() {
        const len = arr.length - 1;

        const index = randomInt(0, len);

        const picked = arr[index];

        [arr[index], arr[picked]] = [arr[picked],arr[index]];

        return picked;
     }

     randomPick(); // 抛弃第一次选择的结果；

     return randomPick;

}
