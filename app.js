let mobileNav = document.getElementById('navLinks');
let barIcon = document.getElementById('fa-bar');
mobileNav.style.display = "none";
barIcon.addEventListener("click", ()=>{
    if(mobileNav.style.display === 'block'){
            mobileNav.style.display = 'none';
    }else{
            mobileNav.style.display = 'block';
    }
})
