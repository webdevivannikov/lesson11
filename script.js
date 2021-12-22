const btn = document.getElementById('btn');
const text = document.getElementById('text');
const square = document.getElementById('square');
const eBtn = document.getElementById('e_btn');
const range = document.getElementById('range');
const circle = document.getElementById('circle');

btn.addEventListener('click', function() {
    square.style.backgroundColor = text.value;
    
});

eBtn.style.display = 'none';

range.addEventListener('input', function() {
    circle.style.width = range.value + '%';
    circle.style.height = range.value + '%';
});







