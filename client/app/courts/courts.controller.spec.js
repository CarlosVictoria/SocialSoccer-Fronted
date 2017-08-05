'use strict';

describe('Component: courtsComponent', function() {

  // load the controller's module
  beforeEach(module('socialSoccerApp'));
  beforeEach(module('stateMock'));

  var scope;
  var courtsComponent;
  var state;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(
    _$httpBackend_,
    $http,
    $componentController,
    $rootScope,
    $state) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('/api/things')
        .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

      scope = $rootScope.$new();
      state = $state;
      courtsComponent = $componentController('courts', {
        $http: $http,
        $scope: scope
      });
  }));

  it('should attach a list of things to the controller', function() {
    courtsComponent.$onInit();
    $httpBackend.flush();
    expect(courtsComponent.awesomeThings.length).to.equal(4);
  });
});
