'use strict';


function titleClickHandler(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
  
    /* [DONE] remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */

    console.log('clickedElement:', clickedElement);
    this.classList.add('active');

    /* [DONE] remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.post');

    for(let activeArticle of activeArticles){
        activeArticle.classList.remove('active');
    }

    /* [DONE] get 'href' attribute from the clicked link */

    const activeArticleSelektor = clickedElement.getAttribute('href');
    console.log('Pobrany ID z kliknietego linka', activeArticleSelektor);      
  
    /* [DONE] find the correct article using the selector (value of 'href' attribute) */

    const activeArticle = document.querySelector(activeArticleSelektor);

    /* [DONE] add class 'active' to the correct article */

    activeArticle.classList.add('active');

  }
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
  
