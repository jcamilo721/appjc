// Code goes here
//Data
var cities = [
              {
                  city : 'Colombia !',
                  desc : 'Come, and You will never forget this country!',
                  lat : 3.231388,
                  long : -73.903303
              },
              {
                  city : 'Medellin',
                  desc : 'The place where I was born, The city of the eternal spring',
                  lat : 6.296413,
                  long : -75.599754
              },
              {
                  city : 'Madrid',
                  desc : 'The beautiful door of Europe!',
                  lat : 40.416439,
                  long : -3.711820
              },
              {
                  city : 'Torino',
                  desc : 'Wonderful place to live!',
                  lat : 45.070845,
                  long : 7.683820
              },
              {
                  city : 'Roma',
                  desc : 'Ages of culture and history',
                  lat : 41.900787,
                  long : 12.502342
              }
          ];

          //Angular App Module and Controller
          var sampleApp = angular.module('mapsApp', []);
          sampleApp.controller('MapCtrl', function ($scope) {

              var mapOptions = {
                  zoom: 2,
                  center: new google.maps.LatLng(33, -41),
                  mapTypeId: google.maps.MapTypeId.TERRAIN
              }

              $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

              $scope.markers = [];
              
              var infoWindow = new google.maps.InfoWindow();
              
              var createMarker = function (info){
                  
                  var marker = new google.maps.Marker({
                      map: $scope.map,
                      position: new google.maps.LatLng(info.lat, info.long),
                      title: info.city,
                      animation: google.maps.Animation.DROP
                  });
                  marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
                  
                  google.maps.event.addListener(marker, 'click', function(){
                      infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                      infoWindow.open($scope.map, marker);
                  });
                  
                  $scope.markers.push(marker);
                  
              }  
              
              for (i = 0; i < cities.length; i++){
                
                  createMarker(cities[i]);
              }

              $scope.openInfoWindow = function(e, selectedMarker){
                  e.preventDefault();
                  google.maps.event.trigger(selectedMarker, 'click');
              }

          });
