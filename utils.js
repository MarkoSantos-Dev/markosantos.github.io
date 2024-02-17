let lastScrollTop = 10;

window.addEventListener("scroll", function() {
    let svg = document.getElementById("my-svg");
    let scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
    // Scrolling down
        svg.style.opacity = "1"; // Set opacity to 100%
    } else {
        // Scrolling up or at the top
        if (scrollTop == 0) {
        svg.style.opacity = "0"; // Set opacity to 0%
        } else {
        svg.style.opacity = "0.5"; // Set opacity to 50% or any other value
        }
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});


const home = document.querySelector('.home');

const refreshHome = (event) => {
    event.preventDefault(); 
    location.reload(); // Refresh the page
};

home.addEventListener('click', refreshHome);


function toggleText() {
    let buttonText = document.getElementById('see-more-btn');
    let paragraphs = document.querySelectorAll('.p-disp'); // Select all paragraphs with the class 'p-disp'
    
    // Loop through each paragraph
    paragraphs.forEach(paragraph => {
        // Check if the paragraph is currently hidden
        if (paragraph.classList.contains('d-none')) {
            // If hidden, remove the 'd-none' class to show the paragraph
            paragraph.classList.remove('d-none');
        } else {
            // If visible, add the 'd-none' class to hide the paragraph
            paragraph.classList.add('d-none');
        }
    });

    // Change button text based on visibility of paragraphs
    buttonText.innerText = paragraphs[0].classList.contains('d-none') ? 'See More' : 'See Less';
}
