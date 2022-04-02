'use strict';


function titleClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
  /*console.log('Link was clicked!');*/

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

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */

  const activeArticle = document.querySelector(activeArticleSelektor);

  /* [DONE] add class 'active' to the correct article */

  activeArticle.classList.add('active');

}



const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector = '.post-author';

function generateTitleLinks(customSelector = ''){

  /*  [DONE] remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  /* [DONE] for each article */

  const articles = document.querySelectorAll(optArticleSelector + customSelector);

  let html = '';

  for(let article of articles){

    /* [DONE] get the article id */

    const articleId = article.getAttribute('id');

    /* [DONE] find the title element *//* get the title from the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* [DONE] create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

    /* [DONE] insert link into titleList */

    titleList.insertAdjacentHTML('beforeend', linkHTML);

  }

  const links = document.querySelectorAll('.titles a');

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

}

generateTitleLinks();


function generateTags(){
  /* [DONE] find all articles *//* START LOOP: for every article: */

  const articles = document.querySelectorAll(optArticleSelector);

  for(let article of articles){

    /* [DONE] find tags wrapper */

    const tagWrapper = article.querySelector(optArticleTagsSelector);

    /* [DONE] make html variable with empty string */

    /* [DONE] get tags from data-tags attribute */

    const articleTags = article.getAttribute('data-tags');

    /* [DONE] split tags into array */

    const articleTagsArray = articleTags.split(' ');

    /* [DONE] START LOOP: for each tag */

    for(let tag of articleTagsArray){

      /* [DONE] generate HTML of the link */

      const linkHTML = '<li><a href="#' + 'tag-' + tag + '"><span>' + tag + ' ' + '</span></a></li>';
      /*const linkHTML = `<li class="artcile-tag"><a href="${ tag } "><span>${tag}</span></a></li>`;*/

      /* [DONE] add generated code to html variable *//* END LOOP: for each tag */

      tagWrapper.insertAdjacentHTML('beforeend', linkHTML);

    }

    /* [DONE] insert HTML of all the links into the tags wrapper */

    /* [DONE] END LOOP: for every article: */

  }
}

generateTags();



function tagClickHandler(event){
  /* [DONE] prevent default action for this event */

  event.preventDefault();

  /* [DONE] make new constant named "clickedElement" and give it the value of "this" */

  const clickedElement = this;
  clickedElement.classList.add('active');
  console.log('clicked', this);
  /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */

  const href = clickedElement.getAttribute('href');
  console.log('href', href);

  /* [DONE] make a new constant "tag" and extract tag from the "href" constant */

  const tag = href.replace('#tag-', '');

  /* [DONE] find all tag links with class active */

  const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');

  /* [DONE] START LOOP: for each active tag link *//* remove class active *//* END LOOP: for each active tag link */

  for(let activeTag of activeTags){
    activeTag.classList.remove('active');
  }

  /* [DONE] find all tag links with "href" attribute equal to the "href" constant */

  const equalHrefs = document.querySelectorAll('a[href="' + href + '"]');

  /* [DONE] START LOOP: for each found tag link *//* add class active *//* END LOOP: for each found tag link */
  for(let equalHref of equalHrefs){
    equalHref.classList.add('active');
  }

  /* [DONE] execute function "generateTitleLinks" with article selector as argument */

  generateTitleLinks('[data-tags~="' + tag + '"]');

}


function addClickListenersToTags(){

  /* [DONE] find all links to tags */

  const articles = document.querySelectorAll(optArticleSelector);

  /* [DONE] START LOOP: for each link */

  for(let article of articles) {

    /* [DONE] add tagClickHandler as event listener for that link */

    const articleTags = article.querySelectorAll('.post-tags .list a');

    for (let tag of articleTags){
      tag.addEventListener('click', tagClickHandler);
    }
  }
  /* END LOOP: for each link */

}

addClickListenersToTags();


function generateAuthors(){

  const articles = document.querySelectorAll(optArticleSelector);

  for(let article of articles){

    const authorWrapper = article.querySelector(optArticleAuthorSelector);
    /*console.log('authorWrapper ', authorWrapper);*/

    const articleAuthor = article.getAttribute('data-author');

    const linkHTML = '<a href="#' + articleAuthor + '"><p>' + articleAuthor + '</p></a>';

    authorWrapper.insertAdjacentHTML('beforeend', linkHTML);

  }

}

generateAuthors();


function authorClickHandler(event){
  event.preventDefault();

  const clickedElement = this;
  clickedElement.classList.add('active');

  const authorSelector = clickedElement.getAttribute('href');

  const authorHREF = authorSelector.replace('#', '');

  generateTitleLinks('[data-author="' + authorHREF + '"]');

}


function addClickListenersToAuthors(){

  const articles = document.querySelectorAll(optArticleSelector);

  for(let article of articles){

    const author = article.querySelectorAll('.post-author a');

    for(let xyz of author){

      xyz.addEventListener('click', authorClickHandler);

    }
  }
}

addClickListenersToAuthors();
