var initialCats = [
  {
    clickCount: 0,
    name:'Bib',
    imgSrc: 'https://cdn.pixabay.com/photo/2016/11/21/14/47/adorable-1845790_960_720.jpg',
    imgAttr: 'https://cdn.pixabay.com/photo/2016/11/21/14/47/adorable-1845790_960_720.jpg',
    nicknames: ['Bibo', 'Bibi', 'Bibbob', 'Bilbo']
  },
  {
    clickCount: 0,
    name: 'Snooze',
    imgSrc: 'https://cdn.pixabay.com/photo/2016/12/16/20/09/cat-1912251_960_720.jpg',
    imgAttr: 'https://cdn.pixabay.com/photo/2016/12/16/20/09/cat-1912251_960_720.jpg',
    nicknames: ['Sleepyhead']
  },
  {
    clickCount: 0,
    name: 'Madison',
    imgSrc: 'https://cdn.pixabay.com/photo/2017/01/28/18/50/cat-2016196_960_720.jpg',
    imgAttr: 'https://cdn.pixabay.com/photo/2017/01/28/18/50/cat-2016196_960_720.jpg',
    nicknames: ['you fancy']
  },
  {
    clickCount: 0,
    name: 'Tully',
    imgSrc: 'https://cdn.pixabay.com/photo/2017/01/19/12/05/cat-1992140_960_720.jpg',
    imgAttr: 'https://cdn.pixabay.com/photo/2017/01/19/12/05/cat-1992140_960_720.jpg',
    nicknames: ['']
  },
  {
    clickCount: 0,
    name: 'Poppy',
    imgSrc: 'https://pixabay.com/en/kitten-cute-cat-white-domestic-1285341/',
    imgAttr: 'https://pixabay.com/en/kitten-cute-cat-white-domestic-1285341/',
    nicknames: ['']
  }];

var Cat = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttr = ko.observable(data.imgAttr);
  this.nicknames = ko.observableArray(data.nicknames);

  // display cat level depending on clickCount
  this.level = ko.computed(function() {
    var title,
        clicks = this.clickCount();

    if (clicks < 10) {
      title = 'Newborn';
    } else if (clicks < 20) {
      title = 'Infant';
    } else if (clicks < 40) {
      title = 'Child';
    } else if (clicks < 60) {
      title = 'Teen';
    } else if (clicks < 100) {
      title = 'Adult';
    } else {
      title = 'Ninja';
    }
    return title;
  }, this);
};

var viewModel = function() {
  var self = this;
  // note: self will always map to the viewModel
  // using 'self' as a trick so app is not confused as to what
  // this maps to inside initialCats.forEach function

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem) {
    self.catList.push(new Cat(catItem));  // self is used here
  });

  // set first cat as currentCat
  this.currentCat = ko.observable(this.catList()[0]);

  // count # of clicks
  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };

  // true if cat has nicknames
  this.hasNicknames = function() {
    return this.currentCat().nicknames().length > 0;
  };
};


// activate knockout
ko.applyBindings(new viewModel());
