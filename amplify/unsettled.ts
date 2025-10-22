// amplify/unsettled.ts

// This creates an unsettled promise at the top level of the module
const unsettledPromise = new Promise(() => {
  // This promise never resolves or rejects
});

// Top-level await that will trigger the warning
await unsettledPromise;

console.log("This line will not be reached if the promise remains unsettled.");

// Export something so the file can be imported
export const test = true;