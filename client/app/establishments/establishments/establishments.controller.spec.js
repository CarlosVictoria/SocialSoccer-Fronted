'use strict';

describe('Component: EstablishmentsComponent', function () {

  // load the controller's module
  beforeEach(module('socialSoccerApp'));

  var EstablishmentsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    EstablishmentsComponent = $componentController('establishments', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
