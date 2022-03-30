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
  /*console.log('Pobrany ID z kliknietego linka', activeArticleSelektor);*/

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */

  const activeArticle = document.querySelector(activeArticleSelektor);

  /* [DONE] add class 'active' to the correct article */

  activeArticle.classList.add('active');

}



const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks(){

  /* remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  /* for each article */

  const articles = document.querySelectorAll(optArticleSelector);

  let html = '';

  for(let article of articles){

    /* get the article id */

    const articleId = article.getAttribute('id');
    /*console.log('articleId: ', articleId);*/

    /* find the title element */

    /* get the title from the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    /*console.log('articleTitle:', articleTitle);*/

    /* create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

    /* insert link into titleList */

    titleList.insertAdjacentHTML('beforeend', linkHTML);

  }

  const links = document.querySelectorAll('.titles a');
  console.log('links ', links);

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

}

generateTitleLinks();


function generateTags(){
  /* find all articles */

  /* START LOOP: for every article: */

  const articles = document.querySelectorAll(optArticleSelector);

  for(let article of articles){

    /* find tags wrapper */

    const tagWrapper = article.querySelector(optArticleTagsSelector);

    /*console.log('tagWrapper ', tagWrapper);*/

    /* make html variable with empty string */

    let html = '';

    /* get tags from data-tags attribute */

    const articleTags = article.getAttribute('data-tags');
    /*console.log('articleTags ', articleTags);*/

    /* split tags into array */

    const articleTagsArray = articleTags.split(' ');
    /*console.log('articleTagsArray ', articleTagsArray);*/

    /* START LOOP: for each tag */

    for(let tag of articleTagsArray){
      /*console.log('tag ', tag);*/

      /* generate HTML of the link */

      const linkHTML = '<li><a href="#' + 'tag-' + tag + '"><span>' + tag + '\u00A0' + '</span></a></li>';
      /*console.log('linkHTML ', linkHTML);*/

      /* add generated code to html variable */

      tagWrapper.insertAdjacentHTML('beforeend', linkHTML);

    }
    /* END LOOP: for each tag */

    /* insert HTML of all the links into the tags wrapper */

    const links = document.querySelectorAll('.post-tags');
    console.log('links ', links);

  /* END LOOP: for every article: */

  }
}

generateTags();



function tagClickHandler(event){
  /* prevent default action for this event */

  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */

  const clickedElement = this;
  console.log('Link was clicked ', clickedElement);

  /* make a new constant "href" and read the attribute "href" of the clicked element */

  const href = clickedElement.querySelectorAll('a.active[href^="#tag-"]');
  console.log('href ', href);

  /* make a new constant "tag" and extract tag from the "href" constant */

  const tag = href.replace('#tag-', '');
  console.log('tag ', tag);

  /* find all tag links with class active */

  /* START LOOP: for each active tag link */

    /* remove class active */

  /* END LOOP: for each active tag link */

  /* find all tag links with "href" attribute equal to the "href" constant */

  /* START LOOP: for each found tag link */

    /* add class active */

  /* END LOOP: for each found tag link */

  /* execute function "generateTitleLinks" with article selector as argument */
}

function addClickListenersToTags(){
  /* find all links to tags */

  /* START LOOP: for each link */

    /* add tagClickHandler as event listener for that link */

  /* END LOOP: for each link */
}

addClickListenersToTags();


