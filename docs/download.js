// download.js
document.getElementById('download-cv').addEventListener('click', function() {
    const cvUrl = 'cv-2024.pdf'; 
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'cv-2024.pdf'; 
    link.click();
});
