const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');
    const navlinks = document.querySelectorAll('.nav_links li');

    
    burger.addEventListener('click', ()=>{
        //toggle nav
        nav.classList.toggle('nav_active');

        //animating links

        navlinks.forEach((link, index)=>{
            if (link.style.animation) {
                link.style.animation='';
                
            }else{
                link.style.animation = `navLinksfade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
            

        });
        //burger animation

        burger.classList.toggle('animate');
        
    });


}

navSlide();

