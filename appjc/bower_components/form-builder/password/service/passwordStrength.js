angular.module('formBuilder.password').factory('passwordStrength', function () {
	return  function (password) {
		var analysis = zxcvbn(password);

		return {
			score: function () {
				return analysis.score;
			}
		};
	};
});
