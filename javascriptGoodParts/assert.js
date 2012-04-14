//***********************************************************
//Javascript does not have assert()
//***********************************************************
//Assertion is one of the commonly-used debugging techniques. It's used to ensure that an expression evaluates to true during execution. if the expression evaluates to false, this indicates a possible bug in code. JavaScript lacks a built-in assert function, but fortunately it's easy to write one. The following implementation throws an exception of type AssertException if the passed expression evaluates to false:

function AssertException(message) { this.message = message; }
AssertException.prototype.toString = function () {
  return 'AssertException: ' + this.message;
}

function assert(exp, message) {
  if (!exp) {
    throw new AssertException(message);
  }
}
//Throwing an exception on its own isn't very useful, but when combined with a helpful error message or a debugging tool, you can detect the problematic assertion. You may also check whether an exception is an assertion exception by using the following snippet:

try {
  // ...
}
catch (e) {
  if (e instanceof AssertException) {
    // ...
  }
}
//This function can be used in a way similar to C or Java:

assert(obj != null, 'Object is null');

//If obj happens to be null, the following message will be printed in the JavaScript console in Firefox:

//uncaught exception: AssertException: Object is null
