var num = prompt("enter a number");

var binary;

// 2^5-1=31 get maximum bit

for (let shift = 31; shift > -1; shift--) {
  binary = num >> shift;

  if (binary & 1) {
    console.log("1");
  } else {
    console.log("0");
  }
}
