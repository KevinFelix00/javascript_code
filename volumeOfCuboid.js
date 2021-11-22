const h1 = 10;
const w1 = 12;
const l1 = 15;
const h2 = 12;
const w2 = 15;
const l2 = 9;

const findVolumeDifference = (l1, w1, h1, l2, w2, h2) => {
    const v1 = l1 * w1 * h1;
    const v2 = l2 * w2 * h2;
    const diff = Math.abs(v1 - v2);
    return diff;
};

console.log(findVolumeDifference(l1, w1, h1, l2, w2, h2))
