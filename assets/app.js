// document.addEventListener('DOMContentLoaded', () => {
//     const hamburger_btn = document.querySelector('.hamburger_btn');
//     const mobile_menu = document.querySelector('.mobile_menu');
//     const close = document.querySelector('.close');
//     const html = document.documentElement;
//     const body = document.body;

//     // hamburger_btn.addEventListener('click', () => {
//     //      mobile_menu.classList.toggle('active');
//     //      toggleMenu();
//     // })

     

//     function toggleMenu() {
//         mobile_menu.classList.toggle('active');

//         const isExpanded = mobile_menu.classList.contains('active');

//         html.style.overflow = isExpanded ? 'hidden' : ' ';
//         body.style.overflow = isExpanded ? 'hidden' : ' ';

//         // const body = document.body;
//         // if (isExpanded) {
//         //     body.style.overflow = 'hidden';
//         // } else {
//         //     body.style.overflow = 'auto';
//         // }
//     }

//     //  hamburger_btn.addEventListener('click', () => {
//     //      isExpanded;
//     // })

//     hamburger_btn.addEventListener('click', toggleMenu);

//      close.addEventListener('click', toggleMenu);



    

//     // close.addEventListener('click', () => {
//     //     mobile_menu.classList.toggle('active')
//     // })

   
    
    
// })

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}


document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.querySelector('.hamburger_btn');
    const mobileMenu = document.querySelector('.mobile_menu');
    const closeBtn = document.querySelector('.close');
    const body = document.body;

    let scrollY = 0;

    function openMenu() {
        scrollY = window.scrollY;

        body.style.position = 'fixed';
        body.style.top = `-${scrollY}px`;
        body.style.width = '100%';

        mobileMenu.classList.add('active');
    }

    function closeMenu() {
        mobileMenu.classList.remove('active');

        body.style.position = '';
        body.style.top = '';
        body.style.width = '';

        window.scrollTo(0, scrollY);
    }

    hamburgerBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
});
