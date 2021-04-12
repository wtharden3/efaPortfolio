//select all divs that will be hoverable
const hoverableDivList = document.querySelectorAll('.hoverableDiv');

// let clicked = false;

//for each div target the corresponding hoverable text; add event listener to hover events
hoverableDivList.forEach(div => {
  const hoverabletext = div.querySelector('.hoverabletext');
  div.addEventListener('mouseover', () => {
    hoverabletext.classList.remove('d-none');
    div.addEventListener('mouseout', () => {
      hoverabletext.classList.add('d-none');
    });
  });
});