const button = document.getElementById('submit-button');
button.disabled = true; //initially disabled.
let elms=[];
elms.push(document.getElementById('input-name'));
elms.push(document.getElementById('input-email'));
elms.push(document.getElementById('input-message'));
elms.map(elm => {
  //enable the submit button iff all the input elements are valid and not-empty
  elm.addEventListener('input', ()=> {
    let numvalid = elms.reduce((accumulator, current)=> {
      if(current.validity.valid && current.value){
        return accumulator + 1;
      } else {
        return accumulator;
      }
    }, 0);
    console.log('inside callback: ', numvalid);
    if(numvalid == elms.length) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  });
});
function mysubmit(event) {
  console.log('submitted');
  for(let elm of elms) {
    elm.value = '';
  }
}
