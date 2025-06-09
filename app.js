let mobileNav = document.getElementById('navLinks');
let barIcon = document.getElementById('fa-bar');
let comeEatMsg = document.getElementById('msg')
mobileNav.style.display = "none";
barIcon.addEventListener("click", ()=>{
    if(mobileNav.style.display === 'block'){
            mobileNav.style.display = 'none';
    }else{
            mobileNav.style.display = 'block';
            comeEatMsg.style.display = 'none';
    }
})