window.onload = function () {
    document.getElementById('user').innerHTML = 'Shreyas';
  };
  
  document.getElementById('btn-click').onclick = function () {
    this.style.backgroundColor = 'red';
  };
  
  function makeSentence() {
    var noun = document.getElementById('noun').value;
    var verb = document.getElementById('verb').value;
    var adverb = document.getElementById('adverb').value;
    var sentence = noun + ' ' + verb + ' ' + adverb;
    document.getElementById('statement').textContent = sentence;
  }
  
  document.getElementById('build-button').addEventListener('click', makeSentence);
  
  document.getElementById('child').addEventListener('click', function () {
    alert('Child clicked');
  });
  
  document.getElementById('parent').addEventListener('click', function () {
    alert('Parent clicked');
  });
  
  document.getElementById('grandparent').addEventListener('click', function () {
    alert('Grandparent clicked');
  });
  
  document.getElementById('grandparent').addEventListener(
    'click',
    function () {
      alert('Grandparent clicked');
    },
    true
  );
  
  document.getElementById('parent').addEventListener(
    'click',
    function () {
      alert('Parent clicked');
    },
    true
  );
  
  document.getElementById('child').addEventListener(
    'click',
    function () {
      alert('Child clicked');
    },
    true
  );
  
  document.getElementById('category').addEventListener('click', function (event) {
    if (event.target.id == 'blazers') {
      alert('blazers');
    }
    if (event.target.id == 'pants') {
      alert('pants');
    }
    if (event.target.id == 'shirts') {
      alert('shirts');
    }
  });
  