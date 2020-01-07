let whatWeDoInfo = document.querySelectorAll('.whatwedo-info');
whatWeDoInfo.forEach(function (item) {
    item.addEventListener('mouseleave', function (e) {
        e.target.style.backgroundColor = "#ffffff";
    });
    item.addEventListener('mouseenter', function (e) {
        e.target.style.backgroundColor = "red";
    })

})