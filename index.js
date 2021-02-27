const HashTable = require('./src/hashTable')

const ht = new HashTable()

exports.check = function(phoneNumber) {
    return ht.add(phoneNumber);
}