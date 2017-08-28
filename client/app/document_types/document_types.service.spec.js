'use strict';

describe('Service: documentTypes', function () {

  // load the service's module
  beforeEach(module('socialSoccerApp'));

  // instantiate service
  var documentTypes;
  beforeEach(inject(function (_documentTypes_) {
    documentTypes = _documentTypes_;
  }));

  it('should do something', function () {
    expect(!!documentTypes).to.be.true;
  });

});
