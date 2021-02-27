var expect = require("chai").expect
var HashTable = require('../src/hashTable')

describe("Search in the data", function () {
    describe("Non-existing value search", function () {
        it("returns null", function () {

            const ht = new HashTable()
            const result = ht.search("Test123")
            expect(result).to.equal(null);
        })
    })
    describe("Existing value search", function () {
        it("returns a numeric value", function () {
            const ht = new HashTable()
            ht.add("Test", 0)

            const result = ht.search("Test")
            expect(result).to.be.an('number')
        })
        it("returns the inserted value", function () {
            const ht = new HashTable()
            ht.add("Test", 0)
            
            const result = ht.search("Test")
            expect(result).to.equal(0)
        })
    })
})