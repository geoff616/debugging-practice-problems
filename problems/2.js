// BUG: This code is only logging bar, while throwing an error for foo: "ReferenceError: foo is not defined

bar();
foo();

function bar() {
  console.log("bar");
}

foo = () => {
  console.log("foo");
};
