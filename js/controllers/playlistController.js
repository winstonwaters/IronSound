module.exports = function(app) {
    app.controller('playlistController', ['$scope', '$http', '$location', 'libraryService', function($scope, $http, $location, libraryService) {

        // libraryService.getNewPlaylist();

        // $scope.playlist = libraryService.getNewPlaylist();

        return libraryService.getPlaylist();
        console.log('heeeeeyy winston', data);

    }]);
}
