/*
Your code should do the following:
- Maintain an array of objects representing all of the user's added bookmarks.
- Re-render the entire list of bookmarks any time a bookmark is added or removed.
- Use map to map the bookmark array to DOM elements.

Here are some guiding questions:
- What event listeners do you need to start off with?
- Can you correctly add bookmarks?
- What UI element allows a user to remove a previously added bookmark?
- How can you make sure that the correct bookmark is removed?
*/

/*
what needs to happen when "add bookmark" button is clicked:
- an object holding the link and name will be created and added to the array holding all of the users bookmarks
- on the page, a list item will render with the name hyperlinked to the correpsonding URL as well as an inline button that can remove the bookmark
*/

/*
what needs to happen when the "remove bookmark" button is clicked:
- the object corresponding to that bookmark will be removed from the array holding all of the users bookmarks
- the list item and corresponding remove button will be removed from the page
*/

// could try a bookmark list class
// how do i manage the collection of bookmarks ?
let arrayOfBookmarks = [];

// this is my recipe for how to create a bookmark
class Bookmark {
  constructor(link, name) {
    this.link = link;
    this.name = name;
  }
  getLabel() {
    return `${this.name} | ${this.link}`;
  }
  render() {
    // create a list item
    const bookmarkListItem = document.createElement("li");
    // set the text of our list item to our getLabel() func
    bookmarkListItem.textContent = this.getLabel();
    // create a remove button that will correspond to each bookmark
    const removeBookmarkButton = document.createElement("button");
    // give the button a class of remove to differentiate it from our add bookmark button
    removeBookmarkButton.className = "remove";
    removeBookmarkButton.textContent = "x";
    // append the remove button to the list item
    bookmarkListItem.append(removeBookmarkButton);
  }
}
// one function for the event listener but it executes multiple functions within it
// functions that I need for my event listener function to execute:
// 1. add whatever the user typed to the arrayOfBookmarks
function addBookmarkToArray() {
  let linkValue = document.querySelector(".bookmarkLink").value;
  let nameValue = document.querySelector(".bookmarkName").value;
  let bookmarkObject = {
    link: linkValue,
    name: nameValue,
  };
  arrayOfBookmarks.push(bookmarkObject);
  // return arrayOfBookmarks;
  console.log(arrayOfBookmarks);
}
// 2. put the bookmarks on the page

//return, to put on the page
function renderOneBookmark() {
  // instantiate a bookmark item
  const bookmarkItem = new Bookmark();
  // render the item
  bookmarkItem.render();
}

function addAndRenderBookmarks() {
  addBookmarkToArray();
  renderOneBookmark();
}

// select our button with the class of "add"
const addBookmarkButton = document.querySelector(".add");
// add an event listener to the button
addBookmarkButton.addEventListener("click", addBookmarkToArray);
