function contact(event) {
    event.preventDefault();
    const form = event.target;
    const loading = document.querySelector('.form__loading');
    const success = document.querySelector('.form__success');
    
    loading.classList += " form__visible";

    // emailjs.sendForm(
    //     'service_id',
    //     'template_id',
    //     event.target,
    //     'user_id'
    // ).then(() => {
    //     loading.classList.remove('form__visible');
    //     success.classList += " form__visible";
    // }).catch(() => {
    //     alert("Email service is currently not available. Please contact me directly: taitran@sandiego.edu");
    // })

    setTimeout(() => {
        loading.classList.remove('form__visible');
        success.classList += " form__visible";
    }, 1500)

    setTimeout(() => {
        toggleModal();
        form.reset();
        success.classList.remove('form__visible');
    }, 5000)
}