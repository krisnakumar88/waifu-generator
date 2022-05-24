import './style.css'

const btnGen  = document.getElementById('btn-pict');
const selPict = document.getElementById('select-pict');
const pict    = document.getElementById('img-pict');

const comment = "ini adalah codingan saya";

const waifuPic = (category = 'waifu') => {
  
  fetch(`https://api.waifu.pics/sfw/${category}`)
  .then(res => res.json())
  .then(data => pict.src = data.url);

};

btnGen.onclick = () => {
  pict.value = '';
  const valSelect = selPict.value;

  if (valSelect == '') {
    return null;
  }
  waifuPic(valSelect)

};



waifuPic();