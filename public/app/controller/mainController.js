
angular.module('userDetailsComController', [])

.controller('userdetailsCtrl',["$scope","userDetailsSvc",function($scope,userDetailsSvc){
   
  
    var userdetailsCon=this;
    userdetailsCon.userDataAll=[];
    $scope.users={
      start_date:null,
      end_date : null
  }


    userdetailsCon.fatchAUserAll=function(){
        userDetailsSvc.getAllUserService($scope.users).then(function(response){
            userdetailsCon.userDataAll=response.data;
         });
     }

    userdetailsCon.fatchAUserAll();
}]);