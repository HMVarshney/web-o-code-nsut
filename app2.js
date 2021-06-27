const mainImageContainer = document.getElementById('main-image-container');

mainImageContainer.addEventListener('mousemove', (e)=>{
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    mainImageContainer.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

mainImageContainer.addEventListener('mouseleave', (e)=>{
    mainImageContainer.style.transform = `rotateY(0deg) rotateX(0deg)`;
})

