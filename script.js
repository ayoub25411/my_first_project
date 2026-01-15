// Simple script example
console.log("Hello World from ayoub's script!");

// Optional: Change the text color when clicked
const text = document.querySelector(".center-text");
text.addEventListener("click", () => {
    text.style.color = "#" + Math.floor(Math.random()*16777215).toString(16);
});
