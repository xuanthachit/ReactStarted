var React = require('react/addons');

console.log("Hello from JSX!");

var groceryItemList = require('./components/groceryItemList.jsx');

// In javascript everything with an ID becomes elevated to the global scope in that name
// No need to get document by ID or anything like that
React.render(<groceryItemList />, app);