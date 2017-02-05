var viewModel = function() {
  // always start with this
  // data goes in here
  // now create the observables and observableArrays
  this.clickCount = ko.observable(0); // initial clickCount is 0
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.imgAttr = ko.observable('https://www.flickr.com/photos/46153825@N00/434164568');
  this.nicknames = ko.observableArray(['Tabtab', 'Tiba', 'Tibabbap', 'Tabidibidi']);

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

  // need incrementCounter function to count # of clicks
  this.incrementCounter = function() {
    // adds one to the value of this.clickCount
    this.clickCount(this.clickCount() + 1);
  };

  // return true if cat has nicknames
  this.hasNicknames = function() {
    return this.nicknames().length > 0;
  };
};


// activating knockout
ko.applyBindings(new viewModel());

