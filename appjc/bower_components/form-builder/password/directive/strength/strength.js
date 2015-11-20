angular.module('formBuilder.password').directive('strength', function (passwordStrength, $compile, $http, $templateCache) {
	return {
		restrict: 'A',
		require: 'ngModel',
		scope: {},
		link: function(scope, element, attrs, ngModelCtrl) {
			var strengthTable = [
					{ class: 'text-danger', name: 'Weak' },
					{ class: 'text-warning', name: 'So-so' },
					{ class: 'text-success', name: 'Great' },
					{ class: 'text-info', name: 'Strong' },
					{ class: 'text-primary', name: 'Very Strong' }
				],
				url = 'password/directive/strength/strength.html';

			$http.get(url, { cache: $templateCache }).success(function (template) {
				template = $compile(template)(scope);
				element.after(template);

				ngModelCtrl.$parsers.push(function (value) {
					if (value) {
						var passwordAnalysis = passwordStrength(value);
						scope.strengthContext = strengthTable[passwordAnalysis.score()];
					} else {
						scope.strengthContext = null;
					}
					return value;
				});

			});
		}
	};
});

