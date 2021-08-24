// cost { TestWatcher } = require('jest');
const { returnTwo, greeting, add, multiply, subtract, divide } = require('./function.js')

test('Tests returnTwo to return 2', ()=> {
    expect(returnTwo()).toEqual(2)
})
test(`Should return Hello ${'James'}`, ()=>{
    expect(greeting('James')).toEqual('Hello, James')
    expect(greeting('Jill')).toEqual('Hello, Jill')
})
describe('Math Functions', ()=> {
    test('Should equal sum of two numbers', ()=>{
        expect(add('1',2)).toEqual(3)
        expect(add(5,9)).toEqual(14)
    })
    test('Should divide two numbers', ()=>{
        expect(divide(810,27)).toEqual(30)
        expect(divide(5103,9)).toEqual(567)
    })
    test('Should multiply two numbers', ()=>{
        expect(multiply(10,2)).toEqual(20)
        expect(multiply(5,9)).toEqual(45)
    })
    test('Should subtract two numbers', ()=>{
        expect(subtract(6,2)).toEqual(4)
        expect(subtract(565,9)).toEqual(556)
    })
})