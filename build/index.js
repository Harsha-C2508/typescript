// create a type name with a string
var My_name = 'harsha';
// create a type age with a number
var age = 20;
// create a type isFetching with boolean
var isFetching = true;
// create an array of numbers
var arr1 = [1, 2, 3, 4, 6];
// create an array of strings (using array constructor generic type)
var arr2 = ['a', 'b', 'c', 'd'];
// create a tuple , which keeps a string as the first value, and boolean as the second
var tuple;
tuple = ['checked', false];
// create an enum it should have User, SuperUser, Admin, SuperAdmin
var panel;
(function (panel) {
    panel["User"] = "User";
    panel["SuperUser"] = "SuperUser";
    panel["Admin"] = "Admin";
    panel["SuperAdmin"] = "SuperAdmin";
})(panel || (panel = {}));
var product = function (props) {
    var x = props.x, y = props.y;
    return x * y;
};
var Divi = function (props) {
    var x = props.x, y = props.y;
    return x / y;
};
//# sourceMappingURL=index.js.map