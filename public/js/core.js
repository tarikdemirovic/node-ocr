var meanocr = angular.module('meanocr', ['ngFileUpload']);

meanocr.controller('mainController', ['$scope', 'Upload', function($scope, Upload) {
	$scope.loader = {
 		loading: false,
 	};

	$scope.upload = function (file) {
		if (file != null) {
			$scope.loader.loading = true;
	        Upload.upload({
	            url: 'api/upload',
	            data: { photo: file }
	        }).then(function (resp) {
	            $scope.resultText = resp.data.text;
	            $scope.loader.loading = false;
	        }, function (resp) {
	            console.log('Error status: ' + resp.status);
	            $scope.loader.loading = false;
	        }, function (evt) {
	            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
	            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
	        });
	    }
    };
}]);