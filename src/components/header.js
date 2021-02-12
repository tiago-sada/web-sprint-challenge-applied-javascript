const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  // creating elements
  const header = document.createElement("div")
  const dateEl = document.createElement("span")
  const titleEl = document.createElement("h1")
  const tempEl = document.createElement("span")

  //adding classes
  header.classList.add("header")
  dateEl.classList.add("date")
  tempEl.classList.add("temp")

  //adding content
  titleEl.textContent = title
  dateEl.textContent = date
  tempEl.textContent = temp

  //nest elements
  header.appendChild(dateEl)
  header.appendChild(titleEl)
  header.appendChild(tempEl)

  return header

}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  const target = document.querySelector(selector)
  const header = Header("Lambda Times", "September 21, 1996", "21 C")
  target.appendChild(header)

}

export { Header, headerAppender }
