document.getElementById('proxy-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const url = document.getElementById('url-input').value;

    const iframe = document.getElementById('result-frame');
    iframe.src = `/proxy/${url}`;
});
