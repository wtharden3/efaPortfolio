const hoverableimg = document.querySelector('.hoverableimg');
const hoverabletext = document.querySelector('.hoverabletext');

let clicked = false;

hoverableimg.addEventListener('mouseover', () => {
  // console.log(e);
  //reduce the opacity on the picture and have text pop up and be visible to read
  //display hoverabletext add class
  hoverabletext.classList.toggle('d-none');
});
hoverableimg.addEventListener('mouseout', () => {
  hoverabletext.classList.toggle('d-none');
});

hoverableimg.addEventListener('click', e => {
  e.preventDefault();
  clicked = !clicked;
  console.log(clicked);
  // allow the text to stay even if you
});
