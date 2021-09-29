// Sets
const set1 = new Set();

// Add value
set1.add(100);
set1.add(100);
set1.add("A String");
set1.add(() => {});
set1.add({ name: "john" });
set1.add(true);

const set2 = new Set([100, "A String", () => {}]);
console.log(set2);

console.log(set1);

// Get Count
console.log(set1.size);

// Check for value
console.log(set1.has(1000));

// Delete value
set1.delete(100);
console.log(set1);

// Itrate of set

// For..of
for (let item of set1) {
  console.log(item);
}

set1.forEach((value) => {
  console.log(value);
});

// Convert to array
const setArr = Array.from(set1);
console.log(setArr);
