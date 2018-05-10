const div1 = document.querySelector('#div1');
const div2 = document.querySelector('#div2');
const div3 = document.querySelector('#div3');
const div4 = document.querySelector('#div4');
const drag1 = document.querySelector('#drag1');

const drop = (e) => {
  e.preventDefault();

  let data = e.dataTransfer.getData('text');
  let item = document.getElementById(data);

  item.classList.remove('hide-original');
  e.target.appendChild(item);

  console.log('drop', data, e.target.id);
};

const allowDrop = (e) => {
  e.preventDefault();
  console.log('dragover');
};

div1.addEventListener('drop', drop);
div2.addEventListener('drop', drop);
div3.addEventListener('drop', drop);
div4.addEventListener('drop', drop);

div1.addEventListener('dragover', allowDrop);
div2.addEventListener('dragover', allowDrop);
div3.addEventListener('dragover', allowDrop);
div4.addEventListener('dragover', allowDrop);

drag1.addEventListener('dragstart', (e) => {
  let dt = e.dataTransfer
  dt.setData('text', e.target.id);

  // let img = new Image();
  // img.src = './sun.png';
  // img.width = '10';

  // dt.setDragImage(img, 0, 0);

  e.target.classList.add('hide-original');

  console.log('dragstart', e.target);
});
