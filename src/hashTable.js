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
        var hash = 0, i, chr;
        if (key.length === 0) return hash;
        for (i = 0; i < key.length; i++) {
            chr = key.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
        // return key.toString().length % this.size;
    }

    add(key) {
        const hash = this.calculateHash(key);
        if (!this.values[hash]) {
            this.values[hash] = 1
        }
        else {
            this.values[hash] += 1
        }

        return this.values[hash]
    }
}
