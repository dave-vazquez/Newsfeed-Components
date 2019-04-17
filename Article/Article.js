// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
	constructor(domElement) {
	  	// assign this.domElement to the passed in domElement
		this.domElement = domElement;
		
		this.expanded = false;

	  	// create a reference to the ".expandButton" class. 
	  	this.expandButton = domElement.querySelector('.expandButton');
	  	// Using your expandButton reference, update the text on your expandButton to say "expand"
	  	this.expandButton.textContent = 'Expand';
	  	// Set a click handler on the expandButton reference, calling the expandArticle method.
	  	this.expandButton.addEventListener('click', this.expandArticle.bind(this));
	}
  
	expandArticle() {
	  	// Using our reference to the domElement, toggle a class to expand or hide the article.

		TweenMax.to(this.domElement, .5, {height: `${this.expanded ? '50px' : '400px'}`, onComplete: ()=> {
			this.expandButton.textContent = this.expanded ? 'Collapse' : 'Expand';
		}});
		
		this.expanded = !this.expanded;
	}
  }

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the 
  articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.article');

articles.forEach(article => new Article(article));

window.addEventListener('load', () => {

	articles.forEach((article, i) => {

		let expandButton = article.querySelector('span');

		TweenMax.from(article, 1, {
			ease: Elastic.easeOut.config(1, .75), 
			delay: (i*.25), x: -1500, 
			onComplete: showExpandButton, onCompleteParams: [expandButton]});
	});

	function showExpandButton(expandButton) {
		TweenMax.to(expandButton, .25, {opacity: 1})
	}
});
