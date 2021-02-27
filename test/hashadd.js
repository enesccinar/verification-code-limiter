var expect = require("chai").expect
var HashTable = require('../src/hashTable')

describe("Adding a new value to hashtable", function () {
    describe("/w non-existing key", function () {
        it('returns a numeric value', function () {
            const ht = new HashTable()
            const result = ht.add('test')

            expect(result).to.be.an('number')
        })
        it("returns 1", function () {
            const ht = new HashTable()
            const result = ht.add("Test123")
            expect(result).to.equal(1);
        })
    })
    describe("/w existing key", function () {
        it("returns a numeric value", function () {
            const ht = new HashTable()
            ht.add("Test")
            const result = ht.add("Test")
            expect(result).to.be.an('number')
        })
        it("returns a value bigger than 1", function () {
            const ht = new HashTable()
            ht.add("Test")
            const result = ht.add("Test")

            expect(result).to.equal(2)
        })
    })
})