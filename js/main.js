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

  if (!e.target.contains(item)) {
    e.target.appendChild(item);
  }

  console.log('drop', data, e.target.id);
};

function allowDrop(e) {
  e.preventDefault();
  e.target.classList.add('item-over');
}

function itemLeftAreat(e) {
  e.target.classList.remove('item-over');
}

div1.addEventListener('drop', drop);
div2.addEventListener('drop', drop);
div3.addEventListener('drop', drop);
div4.addEventListener('drop', drop);

div1.addEventListener('dragover', allowDrop);
div2.addEventListener('dragover', allowDrop);
div3.addEventListener('dragover', allowDrop);
div4.addEventListener('dragover', allowDrop);

div1.addEventListener('dragleave', itemLeftAreat);
div2.addEventListener('dragleave', itemLeftAreat);
div3.addEventListener('dragleave', itemLeftAreat);
div4.addEventListener('dragleave', itemLeftAreat);

drag1.addEventListener('dragstart', (e) => {
  let dt = e.dataTransfer;
  dt.setData('text', e.target.id);

  e.target.classList.add('hide-original');
});

drag1.addEventListener('dragend', (e) => {
  let itemId = e.target.id;

  // if (item.classList.contains('hide-original')) {
  if (e.target.classList.contains('hide-original')) {
    e.target.classList.remove('hide-original');
  }
});