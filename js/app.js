// Define Global variables
// I've created the variable navigationbar to using it to  define which part i will be putting my nav bar in it 
const navigationBar = document.getElementById('navbar__list');
// i've created the variable sections by using queryselectorall to collect all the sections in one variable to using it in creating the nav bar and define which section will be active when it enter to the viewport 
const sections = document.querySelectorAll('section');





// using forEach method to overloop over sections and create the navigation bar 
// i've created the function and it is called newmenu to create my nav bar 
let newMenu = () => {
    // i've created the variable with an empty value and this my first step 
    let listSection = '';
    // i've used the variable sections and the for each method to applying the same information that i will be giving it later to each section
    sections.forEach(section => {
      
        // i've created the variable section id and i've give it the value and the value is the id of the section
        const sectionID = section.id;
        // i've created the variable sectiondata and give it the value and the value of it is a data.nav of the section 
        const sectionData = section.dataset.nav;
        // i've put the value for the variable listsection that i did not put a value to it before 
        listSection += `<li><a class='menu__link' href='#${sectionID}'>${sectionData}</a></li>`;
        
   
    }) ; 
    
     
// after creating my nav bar so i decided to put the nav bar in the navigation bar postion by appending the nav bar to the navigation bar
    navigationBar.innerHTML = listSection;
      
   
 // i've defined the attribute href to link all sections 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // i've used addeventlistener to make the navigation moving in a smooth way by clicking 
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            // i've used the scrollintoview to make the smooth scroll by javascript during the scrolling 
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth' , block : 'end' , inline :'nearest'
            });
        });
    });

        
    }
   

// the declaration of the nav bar to be visible on my browser 
newMenu() ;





// i've used the intersection observer method to define the section that will be in an active state during the scrolling 
// first step  i've created the call back for the sections and i've used the for each method to detect the section that i want and to make my observer working
const callback = (entries , observer ) => {
    entries.forEach((entry)=> {
        //  i've used the method entry is intersecting as a conditional statement and it means if the section have intersected the root then give the section an active class if not intersecting then remove the active class
    if (entry.isIntersecting) {
        entry.target.classList.add("your-active-class")
        

    }else {entry.target.classList.remove("your-active-class")
    

    

}}

    )
}

// i've created the variable options to define the viewport the viewport here is a root and define the root margin and the root margin here is the setoff and the threshold is the amount of the section that will be needed to give the active class to the section 
const options = { root:null , rootMargin : '0px' , threshold : 0.3};
// i've created that variable to do my observer on the section by using the information that the variable have whether in the variable option or callback
const observerByScrolling = new IntersectionObserver (callback , options );

// i've used the for each to observe every section the will be in the view port and i've defined the parameter that will be observed is the section 
sections.forEach(section => { observerByScrolling.observe(section)})
 
