var initialCats = [
  {
    clickCount: 0,
    name:'Tabby',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    imgAttr: 'https://www.flickr.com/photos/bigtallguy/434164568/in/album-72157594351075652/',
    nicknames: ['Bibo', 'Bibi', 'Bibbob', 'Bilbo']
  },
  {
    clickCount: 0,
    name: 'Lily',
    imgSrc: 'img/22252709_010df3379e_z.jpg',
    imgAttr: '',
    nicknames: ['PrettyFace']
  },
  {
    clickCount: 0,
    name: 'Pidgey',
    imgSrc: 'img/1413379559_412a540d29_z.jpg',
    imgAttr: '',
    nicknames: ['WildFace']
  },
  {
    clickCount: 0,
    name: 'TigerCub',
    imgSrc: 'img/4154543904_6e2428c421_z.jpg',
    imgAttr: '',
    nicknames: ['Little Big Cat']
  },
  {
    clickCount: 0,
    name: 'Snooze',
    imgSrc: 'img/9648464288_2516b35537_z.jpg',
    imgAttr: '',
    nicknames: ['Sleepyhead']
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

  this.setCat = function(cat) {
    var index = self.catList.indexOf(cat);
    return self.currentCat = ko.observable(self.catList()[index]);
  };

  // count # of clicks
  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };
};


// activate knockout
ko.applyBindings(new viewModel());
