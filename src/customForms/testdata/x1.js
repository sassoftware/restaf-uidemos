// eslint-disable-next-line no-unused-vars
async function x1 (data, value, name) {
    let msg = {code: 1, msg: `${name} handler executed.`};
    if (data.x1 > 10) {
        data.x1 = 10;
        msg = {code: 2, msg: "Exceeded Max. Value reset to max"};
    }

    return [data, msg];
};
export default x1;
