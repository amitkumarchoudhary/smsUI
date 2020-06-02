angular.module('userDetailsComService', [])

.service('userDetailsSvc', function($rootScope,$http, $window) {
    var restCall=this;

    restCall.getAllUserService = function (users){
        var cors_url = "http://localhost:6001/userdatefilter/details/userdatefilter?start_date="+users.start_date +"&end_date="+users.end_date;
        return $http({
            method: 'GET',
            url: cors_url,
            headers: {
                    "Content-Type": 'application/json',
            }
            
          })
          .then(function (response) {
            console.log('response is : ' + response.data);
            return response;
          }).catch(function (error) {
              if(error.status==500){
                  console.log(error.response)
              }
              if(error.status==401){
                console.log(error.response)
            }
          })
    }
   
  });


