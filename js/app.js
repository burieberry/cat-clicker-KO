var viewModel = function() {
  // always start with this
  // data goes in here
  // now create the observables and observableArrays
  this.clickCount = ko.observable(0); // initial clickCount is 0
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.imgAttr = ko.observable('https://www.flickr.com/photos/46153825@N00/434164568');

  // display cat level depending on clickCount
  this.level = ko.computed(function() {
      if (this.clickCount() < 10) {
        return 'Newborn';
      } else if (this.clickCount() < 20) {
        return 'Infant';
      } else if (this.clickCount() < 30) {
        return 'Teen';
      } else if (this.clickCount() < 50) {
        return 'Adult';
      } else {
        return 'Elderly';
      }
    }, this);

  // display cat nicknames
  this.nicknames = ko.observableArray(['Tabtab', 'Tiba', 'Tibabbap', 'Tabidibidi']);

  // return true if cat has nicknames
  this.hasNicknames = function() {
    return this.nicknames().length > 0;
  };

  console.log(this.hasNicknames());

  // no need for get functions like before, ko does that automatically
  // need incrementCounter function to count # of clicks
  this.incrementCounter = function() {
    // adds one to the value of this.clickCount
    this.clickCount(this.clickCount() + 1);
  };
};


// activating knockout
ko.applyBindings(new viewModel());

