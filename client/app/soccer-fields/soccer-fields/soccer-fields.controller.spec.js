'use strict';

describe('Component: SoccerFieldsComponent', function () {

  // load the controller's module
  beforeEach(module('socialSoccerApp'));

  var SoccerFieldsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    SoccerFieldsComponent = $componentController('soccer-fields', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
