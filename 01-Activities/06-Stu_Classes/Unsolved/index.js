// TODO: Create a class constructor named BlogPost that takes in 'authorName', 'title', 'text', and 'createdOn'.
class BlogPost {
  constructor(authorName, title, text, createdOn) {
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.createdOn = createdOn;
    // TODO: Give BlogPost a property called 'comments' that is set to an empty array.

    this.comments = [];
    // TODO: Give BlogPost a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn)'.

    this.printMetaData = function () {
      console.log(`Created by ${this.authorName} on ${this.createdOn}`);
    };
  }
}

// TODO: Give Blog Post a method called addComment() that takes in a comment and adds it to the comments array.

BlogPost.prototype.addComment = function (comments) {
  this.comments.push(comments);
};

// TODO: Create a class constructor called Comment that takes in 'authorName', 'text', 'createdOn', and 'reaction'.
class Comment {
  constructor(authorName, text, createdOn, reaction) {
    this.authorName = authorName;
    this.text = text;
    this.createdOn = createdOn;
    this.reaction = reaction;
    // TODO: Give Comment a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn) (reaction)'.
    this.printMetaData = function () {
      console.log(`Created by ${this.authorName} on ${createdOn} ${reaction}`);
    };
  }
}
// TODO: Create a new object using the Comment class constructor.

const newComment = new Comment(
  "John Doe",
  "My Second Post",
  "03/23/2023",
  "Great Book!"
);

// TODO: Create a new object using the BlogPost class constructor.

const newPost = new BlogPost(
  "Gerry Paul",
  "Gerry's Kidney",
  "wnewjf",
  "03/23/2023"
);

// TODO: Use the addComment() method on your newly created BlogPost to add your newly created Comment to its comments array.

newPost.addComment("Nice post, I like it!");

// TODO: Print the meta data for both the BlogPost and the Comment to the console.

newPost.printMetaData();
newComment.printMetaData();
