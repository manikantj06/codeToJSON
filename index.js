// Get references to the HTML elements
const textarea1 = document.getElementById("textarea1");
const textarea2 = document.getElementById("textarea2");
const convertBtn = document.getElementById("convert-btn");
const copyBtn = document.getElementById("copy-btn");

// Add a click event listener to the convert button
convertBtn.addEventListener("click", function () {
  // Convert the contents of the first textarea to a JSON string
  const jsonString = JSON.stringify(textarea1.value);

  // Set the contents of the second textarea to the JSON string
  textarea2.value = jsonString;
});

// Add a click event listener to the copy button
copyBtn.addEventListener("click", function () {
  // Select the contents of the second textarea
  textarea2.select();

  // Copy the selected text to the clipboard
  document.execCommand("copy");
});
