var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}



var sidemenu = document.getElementById("sidemenu");

    function openmenu(){
        sidemenu.style.right = "0";
    }
    function closemenu(){
        sidemenu.style.right = "-200px";
    }



    const scriptURL = 'https://script.google.com/macros/s/AKfycbzv2XoyB7wMZVIldepKC9Y_tIgpKXcD0U-Rhr-1uCYzDcI9T-BoCN3wCynPIgKTv1dsvg/exec'
    const form = document.forms['submit-to-google-sheet']
    
    const mgs = document.getElementById("msg")
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully, Thanks for your opinion"
            setTimeout(function(){
             msg.innerHTML = ""   
            },4000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })