angular.module('Demo', ['ngSanitize','GoogleCalendar']);

angular.module('Demo').controller('googleCtrl', function($scope){

  $scope.demo = {
    hideTitle: false,
    google_key: 'AIzaSyDI9VA5xCt8FMDZV1eZuyuf2ODimyI4kfQ',
    calendar_id: 'v9htojeol66f34jh3d6o8cohss@group.calendar.google.com',
    htmlDesc: true,
    max: 5
  };
});
