// TODO: Create a constructor function called 'BlogPost' that takes in 'authorName', 'title', 'text, and 'createdOn'
function BlogPost(authorName, title, text, createdOn) {
  this.authorName = authorName;
  this.title = title;
  this.text = text;
  this.createdOne = createdOn;

  // TODO: Include a method called 'printMetaData()' that prints a message in the console saying 'Created by (authorName) on (createdOn)'

  this.printMetaData = function () {
    console.log(`Created by ${this.authorName} on ${createdOn}`);
  };
}

// TODO: Create a new object using the 'BlogPost' constructor

const blogPost = new BlogPost("John Doe", "Gerry's Kidney", "Eryn", "03/23/23");
// TODO: Call the 'printMetaData()' method on the new object

blogPost.printMetaData();
