const hoverableDiv = document.querySelector('.hoverableDiv');
const hoverabletext = document.querySelector('.hoverabletext');

let clicked = false;

hoverableDiv.addEventListener('mouseover', () => {
  // console.log(e);
  //reduce the opacity on the picture and have text pop up and be visible to read
  //display hoverabletext add class
  hoverabletext.classList.remove('d-none');

  hoverableDiv.addEventListener('mouseout', () => {
    hoverabletext.classList.add('d-none');
  });
});

hoverableDiv.addEventListener('click', e => {
  e.preventDefault();
  clicked = !clicked;
  console.log(clicked);
  // allow the text to stay even if you
});
