document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const formData = new FormData(this);

    fetch("Php.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("responseMessage").innerHTML = data;
        document.getElementById("feedbackForm").reset(); 
    })
    .catch(error => {
        console.error("Erro:", error);
        document.getElementById("responseMessage").innerHTML = "Erro ao enviar feedback.";
    });
});
