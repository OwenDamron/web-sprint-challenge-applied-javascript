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

  const headerDiv = document.createElement('div')
  const dateWidget = document.createElement('span')
  const titleHeader = document.createElement('h1')
  const tempWidget = document.createElement('span')
  
  headerDiv.classList.add('header')
  dateWidget.classList.add('date')
  tempWidget.classList.add('temp')
  dateWidget.textContent = date
  titleHeader.textContent = title
  tempWidget.textContent = temp

  headerDiv.appendChild(dateWidget)
  headerDiv.appendChild(titleHeader)
  headerDiv.appendChild(tempWidget)

  return headerDiv

}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  const header = document.querySelector(selector)
  let newHeader = Header('Lambda Times', 'March 29, 2021', '45°')
  header.appendChild(newHeader)
  
}

export { Header, headerAppender }
