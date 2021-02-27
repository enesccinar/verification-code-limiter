const HashTable = require('./src/hashTable')
const cron = require('node-cron')

let ht = new HashTable()

exports.check = function (phoneNumber) {
    return ht.add(phoneNumber);
}

cron.schedule('* 12 * * *', () => {
    console.info('Create new verification code table code executed!')
    ht = new HashTable()
})