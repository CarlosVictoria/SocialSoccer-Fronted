'use strict';

describe('Component: NosotrosComponent', function () {

  // load the controller's module
  beforeEach(module('socialSoccerApp'));

  var NosotrosComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    NosotrosComponent = $componentController('nosotros', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
