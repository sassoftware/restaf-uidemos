/* eslint-disable no-undef */
const { TestScheduler } = require("jest");
const casAction = require("./casAction");
const casl = require("./casl");
const compute = require("./compute");
const coolStuff = require("./coolStuff");
const fail1 = require("./fail1");

test('casAction', async () => {
    let l = await casAction();
    expect(l).toBe('done');
});

test('casl', async () => {
    let l = await casl();
    expect(l).toBe('done');
});

test('compute', async () => {
    let l = await compute();
    expect(l).toBe('done');
});

test('coolstuff', async () => {
    let l = await coolStuff();
    expect(l).toBe('done');
});

test.skip('fail1', async () => {
    let l = await fail1();
    expect(l).toBe('done');
});