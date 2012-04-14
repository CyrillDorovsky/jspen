//null, undefined, and delete
//JavaScript is difference from other programming languages by having both undefined and null values, which may cause confusion for newcomers. null is a special value that means "no value". null is usually thought of as a special object because typeof null returns 'object'.

//On the other hand, undefined means that the variable has not been declared, or has been declared but not given a value yet. Both of the following snippets display 'undefined':

// i is not declared anywhere in code
alert(typeof i);

var i;
alert(typeof i);

//Although that null and undefined are two different types, the == (equality) operator considers them equal, but the === (identity) operator doesn't.

//JavaScript also has a delete operator that "undefines" an object a property (thanks zproxy), it can be handy in certain situations, you can apply it to object properties and array members, variables declared with var cannot be deleted, but implicitly declared variables can be:

var obj = {
  val: 'Some string'
}

alert(obj.val); // displays 'Some string'

delete obj.val;
alert(obj.val); // displays 'undefined'

