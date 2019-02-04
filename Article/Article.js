// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(article) {
    // assign this.domElement to the passed in domElement
    this.article = article;

    // create a reference to the ".expandButton" class. 
    this.expandButton = article.querySelector('.expandButton');
    this.closeButton = article.querySelector('.closeButton');
    // Using your expandButton reference, update the text on your
    // expandButton to say "expand"
    this.expandButton.textContent = 'Expand';
  
    
    // Set a click handler on the expandButton reference, 
    //calling the expandArticle method.
    this.expandButton.addEventListener('click', e => {
      this.expandArticle();
    });
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    console.log('article expanded');
    this.article.classList.toggle('article-open');
    if (this.expandButton.textContent === 'Expand') {
      this.expandButton.textContent = 'Close';
    } else if (this.expandButton.textContent === 'Close') {
      this.expandButton.textContent = 'Expand';
    }//Wasn't MVP or stretch but Josh said to try to do this if you could^^^
    //Content of the span will change depending on if the window is open or closed
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach()
    on to the articles variable to iterate over the articles
    NodeList and create a new instance of Article by passing in each
    article as a parameter to the constructor.

*/

let articles = document.querySelectorAll('.article');

//pass each article as a param to constructor
articles.forEach(article => new Article(article));
//see top of file ^^^^