const expect = require('chai').expect
const HashTable = require('../src/hashTable')

describe('Capacity Management', function () {
    describe('hashtable should return length', function () {
        it('as 0 /w parameterless constructor', function () {
            const ht = new HashTable()
            const result = ht.length

            expect(result).to.be.equal(0)
        })
        it("as value /w parameter", function () {
            const ht = new HashTable(5)
            const result = ht.length

            expect(result).to.be.equal(5)
        })
    })
    describe('hashtable should return value as numeric', function () {
        it('/w parameterless constructor', function () {
            const ht = new HashTable()
            const result = ht.length

            expect(result).to.be.an('number')
        })
        it('/w string value', function () {
            const ht = new HashTable('lol')
            const result = ht.length

            expect(result).to.be.an('number')
        })
    })
})