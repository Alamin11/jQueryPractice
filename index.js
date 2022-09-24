//alert("hello");
//$("h1").css("color", "red");
var button = $("button");
//Adding a new class using jQuery
$("h1").addClass("big-title");
// Changing text of an element
button.text("Wanna click?");
//Adding a new html element 
button.html("<em>new element added</em>");
//changing css style of an element
button.css("padding", "20px");
button.css("margin", "10px");

//getting and setting an attribute 
$("a").attr("href", "https://yahoo.com");
//as class is also an attribute , we can check the class list in an html element by attr() method 
console.log($("h1").attr("class"));

//checking a particular class in an element 
console.log($("a").hasClass("fineTune"));

//Adding eventListener to an element
button.click(function () {
    $("h1").css("color", "green");
});

$("input").keypress(function (e) {
    $("h1").text(e.key);
});

//Adding an html element before / after a targeted element
$("input").before("<b>Enter : </b>");
$("input").after("<button>Submit</button>");
$("a").prepend("<p>Search using yahoo instead google</p>");
$("a").append("<p>The above link will take you to yahoo</p>");

//Removing an html element
//button.remove();



