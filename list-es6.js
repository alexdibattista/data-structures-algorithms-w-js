'use strict';

var List = class {
  constructor () {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
  };

  clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
  };

  find (element) {
    for (var i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] == element) {
        return i;
      }
    };

    return -1;
  };

  toString () {
    return this.dataStore;
  };

  insert (element, after) {
    var insertPos = this.find(after);

    if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1, 0, element);
    }

    return false;
  };

  append (element) {
    this.dataStore[this.listSize++] = element;
  };

  remove (element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
      console.log('here');
      this.dataStore.splice(foundAt, 1);
      --this.listSize;
      return true;
    }
  };

  front () {
    this.pos = 0;
  };

  end () {
    this.pos = this.listSize - 1;
  };

  prev () {
    if (this.pos > 0) {
      --this.pos;
    }
  };

  next () {
    if (this.pos < this.listSize - 1) {
      ++this.pos;
    }
  };

  length () {
    return this.listSize;
  };

  currPos () {
    return this.pos;
  };

  moveTo (position) {
    this.pos = position;
  };

  getElement () {
    return this.dataStore[this.pos];
  };

  contains (element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] == element) {
        return true;
      }

      return false;
    }
  };
};

module.exports = List;
