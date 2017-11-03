'use strict';

describe('Service: soccerFields', function () {

  // load the service's module
  beforeEach(module('socialSoccerApp'));

  // instantiate service
  var soccerFields;
  beforeEach(inject(function (_soccerFields_) {
    soccerFields = _soccerFields_;
  }));

  it('should do something', function () {
    expect(!!soccerFields).to.be.true;
  });

});
