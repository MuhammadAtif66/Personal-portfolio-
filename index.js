// Optional: Add JavaScript for form submission or other interactivity
// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     // You can add form submission logic here, like sending data to a server
//     // For demonstration, we'll just log the form data to the console
//     let formData = new FormData(this);
//     console.log({
//         name: formData.get('Name'),
//         email: formData.get('Email'),
//         message: formData.get('Message')
//     });
// });


  const scriptURL = 'https://script.google.com/macros/s/AKfycbyWF5on-G0jUq_huvP6IfM_aXfqX22hSEEUzJCknURys7rIcX80X1SmWPIk-OKCTQNdfA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = " Your message sent successfully "
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

var ullist = document.getElementById("ul-list");
 function openmenu(){
    ullist.style.right = "0"
 }
 function closemenu(){
    ullist.style.right = "-200px"
 }