$(document).foundation();

function showRandomizer(btn) {
  $(btn).addClass('random-button-visible');
  $('#randomizer').addClass('randomizer-visible');
  $('body').addClass('no-scroll');
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

angular.module('randomizerApp', [])
  .directive('slot', function() {
    return {
      restrict: 'E',
      scope: {
        value: '=',
        trigger: '=',
        stopped: '='
      },
      link: function(scope, el, attr) {
        scope.options = [null, scope.value];
        var optionsToAdd = ['bacon', 'kebabkött', 'kräftstjärtar', 'kyckling', 'köttfärs', 'köttfärssås', 'lufttorkad skinka', 'musslor', 'oxfilé', 'räkor', 'salami', 'scampi', 'skinka', 'tonfisk', 'bearnaisesås', 'kebabsås mild', 'tacosås', 'vitlök', 'vitlökssås', 'vitlökssås stark', 'ananas', 'banan', 'champinjoner', 'curry', 'falafel', 'feferoni', 'fetaost', 'färsk basilika', 'färska tomater', 'gorgonzolaost', 'isbergssallad', 'jalapeño', 'kronärtskocka', 'lök', 'mozarellaost', 'oliver', 'paprika', 'pesto', 'pommes frites', 'ruccola', 'soltorkade tomater', 'taco kryddmix', 'vitlök', 'ägg', 'bacon', 'kebabkött', 'kräftstjärtar', 'kyckling', 'köttfärs', 'köttfärssås', 'lufttorkad skinka', 'musslor', 'oxfilé', 'räkor', 'salami', 'scampi', 'skinka', 'tonfisk'];
        shuffle(optionsToAdd);
        var first = true;

        for (var i in optionsToAdd) {
          if (scope.options.indexOf(optionsToAdd[i]) === -1) {
            if (first) {
              scope.options[0] = optionsToAdd[i];
              first = false;
            } else {
              scope.options.push(optionsToAdd[i]);
            }
          }
        }
      },
      template: '<div class="spinner" ng-class="{\'spin\': trigger, \'blurred\': stopped}"><div ng-repeat="option in options" ng-bind="option" class="slot-option"></div><div ng-repeat="option in options" ng-bind="option" class="slot-option"></div><div ng-repeat="option in options" ng-bind="option" class="slot-option"></div><div ng-repeat="option in options" ng-bind="option" class="slot-option"></div></div>'
    };
  })
  .controller('RandomizerController', function($scope, $http, $timeout) {
    $scope.type = 'meat';
    $scope.ingredients = [];
    $scope.name = '';
    $scope.closest = {
      name: '',
      removed: [],
      added: [],
      ingredients: []
    };
    $scope.rolling = false;
    $scope.stopped = true;
    $scope.rolled = false;

    $scope.$watch('type', function(a, b) {
      if (a != b) {
        $scope.stopped = true;
      }

      $scope.rolling = false;
      fetchRandomPizza();
    });

    var fetchRandomPizza = function() {
      var meat = $scope.type == 'meat' ? '/meat' : '';

      return $http.get('https://pizza.chalmers.it/json' + meat).then(function(res) {
          $scope.ingredients = res.data.ingredients;
          $scope.name = res.data.name;
          $scope.closest = res.data.closest;
      });
    }

    var actuallyRoll = function() {
      $scope.rolled = true;

      $timeout(function() {
        $scope.rolling = false;
        $scope.showResult = true;
      }, $scope.ingredients.length * 1000);
    };

    $scope.roll = function() {
      $scope.rolling = true;
      $scope.stopped = false;
      $scope.showResult = false;

      if ($scope.rolled) {
        fetchRandomPizza().then(function() {
          actuallyRoll();
        });
      } else {
        actuallyRoll();
      }
    };
  });