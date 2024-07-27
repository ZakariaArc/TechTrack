document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("form-Contact");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        var formData = new FormData(form);

        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        })
        .then(response => {
            if (response.ok) {
                // Hide the form and show the success message
                form.style.display = "none";
                document.querySelector(".successmessage").style.display = "block";
            } else {
                // Show error message
                document.querySelector(".errormessage").style.display = "block";
            }
        })
        .catch(error => {
            console.error("Form submission error:", error);
            // Show error message
            document.querySelector(".errormessage").style.display = "block";
        });
    });
});
