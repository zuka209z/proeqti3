
document.getElementById('SearchIcon_mobile').onclick = function toggleSearch() {
    var search = document.getElementById('searchMobile');
    
    if (search.style.display === 'none' || search.style.display === '') {
        search.style.display = 'flex';
    } else {
        search.style.display = 'none';
    }
    return 0;
};

document.addEventListener('click', function(event) {
    var search = document.getElementById('searchMobile');
    var searchIcon = document.getElementById('SearchIcon_mobile');

    if (!search.contains(event.target) && !searchIcon.contains(event.target)) {
        search.style.display = 'none';
    }
});

window.addEventListener('resize', function() {
    var search = document.getElementById('searchMobile');
    if (window.innerWidth > 1024) {
        search.style.display = 'none';
    }
});



document.getElementById('ProfileIcon').onclick = function(){
    var Profile = document.getElementById('profile');

    if(Profile.style.display === 'none'){
        Profile.style.display = 'flex';
    }else{
        Profile.style.display = 'none';
    }
    window.addEventListener('resize', function(){
        if(window.innerWidth < 1024){
            Profile.style.display = 'none';
        }
    })
}

document.getElementById('LanguageIcon').onclick = function(){
    var ChangeLanguageDiv = document.getElementById('ChangeLanguage');

    if(ChangeLanguageDiv.style.display === 'none'){
        ChangeLanguageDiv.style.display = 'flex';
    }else{
        ChangeLanguageDiv.style.display = 'none';
    }
    window.addEventListener('resize', function(){
        if (window.innerWidth < 1024){
            ChangeLanguageDiv.style.display = 'none';
        }
    })
}


document.getElementById('ListIcon').onclick = function(){
    var smartPhoneMenu = document.getElementById('menu');

    if(smartPhoneMenu.style.display === 'none'){
        smartPhoneMenu.style.display = 'flex';
    }else{
        smartPhoneMenu.style.display = 'none';
    }
    window.addEventListener('resize', function() {
        var menu = document.getElementById('menu');
        if (window.innerWidth > 1024) {
            menu.style.display = 'none';
        }
    });
    
}
// სლაიდერიიიი
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

//asdhasdiahsdiasdioasdihasd
const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            
            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}
window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);


// <<<<<<<<<<<<<<<<<<<ენის შეცვლის ფუნქცია>>>>>>>>>>>>>>>>>>>>>
function ChangeLanguageToGeorgian(){
    var a = document.getElementById('a');
    a.innerText = 'თამაშები'

    var b = document.getElementById('b');
    b.innerText = 'თამაშები'

    var c = document.getElementById('c');
    c.innerText = 'სიახლეები'

    var d = document.getElementById('d');
    d.innerText = 'სიახლეები'

    var e = document.getElementById('e');
    e.innerText = 'განხილვები'

    var f = document.getElementById('f')
    f.innerText = 'განხილვები'

    var g = document.getElementById('g');
    g.innerText = 'კონტაქტი'

    var h = document.getElementById('h');
    h.innerText = 'კონტაქტი'

    var i = document.getElementById('i');
    i.innerText = '2024 წლის საუკეთესო თამაშები'

    var j = document.getElementById('j');
    j.innerText = 'რეგისტრაცია'

    var k = document.getElementById('k');
    k.innerText = 'ავტორიზაცია'

    var l = document.getElementById('l');
    l.innerText = 'რეგისტრაცია';

    var m = document.getElementById('m');
    m.innerText = 'ავტორიზაცია'
}
function ChangeLanguageToEnglish(){
    var a = document.getElementById('a');
    a.innerText = 'Games'

    var b = document.getElementById('b');
    b.innerText = 'Games'

    var c = document.getElementById('c');
    c.innerText = 'News'
    
    var d = document.getElementById('d');
    d.innerText = 'News'

    var e = document.getElementById('e');
    e.innerText = 'Reviews'

    var f = document.getElementById('f')
    f.innerText = 'Reviews'

    var g = document.getElementById('g');
    g.innerText = 'Contact Us'

    var h = document.getElementById('h');
    h.innerText = 'Contact Us'

    var i = document.getElementById('i');
    i.innerText = 'Best Of 2024'

    var j = document.getElementById('j');
    j.innerText = 'Register'

    var k = document.getElementById('k');
    k.innerText = 'Log in'

    var l = document.getElementById('l');
    l.innerText = 'Register';

    var m = document.getElementById('m');
    m.innerText = 'Log In'
}



// <<<<<<<<<<<<<<<<<< პაროლის შემოწმების ფუნქცია >>>>>>>>>>>>>>>

function ConfirmPassword(){
    var password = document.getElementById('password').value;
    var confirmpassword = document.getElementById('confirm-password').value;
    var bool = document.getElementById('bool');
    var string = document.getElementById('confirm-h2');

    if(password.length != 0){
        if(password == confirmpassword){
            bool.innerText = "Match"
            string.style.display = 'block'
            string.style.color = 'green'
        }
        else{
            bool.innerHTML = "Doesn't Match"
            string.style.display = "block"
            string.style.color = 'red'
        }
    }
}
// პაროლის სიმძლავრის შემოწმება

document.getElementById('submitBtn').onclick = function() {
    const weakPattern = /^[a-zA-Z]+$/;
    const mediumPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
    const strongPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\W_])[a-zA-Z0-9\W_]+$/;
    let password = document.getElementById('password').value;
    let answer = document.getElementById('h2-password');

    if (weakPattern.test(password)) {
        answer.innerText = 'Weak';
    } else if (mediumPattern.test(password)) {
        answer.innerText = 'Normal';
    } else if (strongPattern.test(password)) {
        answer.innerText = 'Strong';
    } else {
        answer.innerText = 'Invalid';
    }
};