document.addEventListener('DOMContentLoaded', function() {
    // Load footer
    fetch('/includes/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
});
