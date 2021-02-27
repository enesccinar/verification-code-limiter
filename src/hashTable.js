module.exports = class HashTable {
    constructor(length = 0) {
        this.values = {};
        this.size = 0;

        if (typeof length === 'number')
            this.length = length;
        else
            this.length = 0
    }

    calculateHash(key) {
        return key.toString().length % this.size;
    }

    add(key, value) {
        const hash = this.calculateHash(key);
        if (!this.values.hasOwnProperty(hash)) {
            this.values[hash] = {};
        }
        if (!this.values[hash].hasOwnProperty(key)) {
            this.length++;
        }
        this.values[hash][key] = value;
    }

    search(key) {
        const hash = this.calculateHash(key);
        if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
            return this.values[hash][key];
        } else {
            return null;
        }
    }
}
