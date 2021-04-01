const hoverableDivList = document.querySelectorAll('.hoverableDiv');
// const hoverabletext = document.querySelector('.hoverabletext');

console.log('hoverableDiv ', hoverableDivList);

let clicked = false;

hoverableDivList.forEach(div => {
  console.log('div', div);
  const hoverabletext = div.querySelector('.hoverabletext');
  div.addEventListener('mouseover', () => {
    hoverabletext.classList.remove('d-none');
    div.addEventListener('mouseout', () => {
      hoverabletext.classList.add('d-none');
    });
  });
});

// hoverableDiv.addEventListener('mouseover', () => {
//   // console.log(e);
//   //reduce the opacity on the picture and have text pop up and be visible to read
//   //display hoverabletext add class
//   hoverabletext.classList.remove('d-none');

//   hoverableDiv.addEventListener('mouseout', () => {
//     hoverabletext.classList.add('d-none');
//   });
// });

// hoverableDiv.addEventListener('click', e => {
//   e.preventDefault();
//   clicked = !clicked;
//   console.log(clicked);
//   // allow the text to stay even if you
// });
