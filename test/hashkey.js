var expect = require('chai').expect
var HashTable = require('../src/hashTable')

describe("Calculate an hash key func", function () {
    it("should return a value", function () {
        const ht = new HashTable()
        const result = ht.calculateHash("Test123")

        expect(result).to.not.be.null
    })
    it("should return a same key everytime", function () {
        const ht = new HashTable()
        const result = ht.calculateHash("+16262920296")
        const result2 = ht.calculateHash("+16262920296")

        expect(result).to.equal(result2)
    })
})