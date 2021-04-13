// To create a dragNDRop we need some events and pre-made methods.
// I will add some extra events next days.

function makeDroppable(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    alert('thanks, i was hungry')
  }