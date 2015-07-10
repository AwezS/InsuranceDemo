/* Question mark click*/
var myApp=angular.module("nation",[]);
myApp.controller("mainctrl",function($scope){
	
  
});

myApp.directive("questiontag", function(){
 return{
	 
	 restrict:"AEC",
	 templateUrl:"questionmark.html",
	scope:{ mymsg:"=xyz",
		    showmsg:"&fn"} ,
	
	 link:function (scope,element,attr){
		 element.on("onclick", function(){
		element.css("cursor","pointer");
			angular.element($("wrapper").css("background-color","blue"));
			angular.element($("wrapper").css("opacity","0.5"));
			alert("Help! <br> the corresponding value is important.<br>" +
					"Contact the number 1-866-633-5749 for assistance");
		 })
		  
	 }
 };	
});




