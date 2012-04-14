Some languages like C++ support the concept of static variables; they are local variables that retain their values between function calls. JavaScript doesn't have a static keyword or direct support for this technique. However, the fact that functions are also objects makes simulating this feature possible. The idea is storing the static variable as a property of the function. Suppose that we want to create a counter function, here is a code snippet that shows this technique in action:

function count() {
  if (typeof count.i == 'undefined') {
    count.i = 0;
  }
  return count.i++;
}
When count is called for the first time, count.i is undefined, so the if condition is true and count.i is set to 0. Because we are storing the variable as a property, it's going to retain its value between function calls, thus it can be considered a static variable.

We can introduce a slight performance improvement to the above function by removing that if check and initialize count.i after defining the function:

function count() {
  return count.i++;
}
count.i = 0;
While the first example encapsulates all of count's logic in its body, the second example is more efficient. The choice is up to you.
