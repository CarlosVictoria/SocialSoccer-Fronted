'use strict';

describe('Service: establishments', function () {

  // load the service's module
  beforeEach(module('socialSoccerApp'));

  // instantiate service
  var establishments;
  beforeEach(inject(function (_establishments_) {
    establishments = _establishments_;
  }));

  it('should do something', function () {
    expect(!!establishments).to.be.true;
  });

});
