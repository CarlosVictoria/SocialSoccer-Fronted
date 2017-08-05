'use strict';

describe('Component: UsersUpdateComponent', function() {

    // load the controller's module
    beforeEach(module('socialSoccerApp'));

    var UsersUpdateComponent;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($componentController) {
        UsersUpdateComponent = $componentController('users-update', {});
    }));

    it('should ...', function() {
        expect(1).to.equal(1);
    });
});
