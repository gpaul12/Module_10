// TODO: Create a class constructor named ForumItem that takes in 'authorName', 'text', and 'createdOn'.
class ForumItem {
  constructor(authorName, text, createdOn) {
    this.authorName = authorName;
    this.text = text;
    this.createdOn = createdOn;
  }
}
// TODO: Setup BlogPost and Comment so they inherit their structure from ForumItem.
class BlogPost extends ForumItem {
  constructor(authorName, title, text, createdOn) {
    super(authorName, text, createdOn);
    this.title = title;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}
class Comment extends ForumItem {
  constructor(authorName, text, createdOn, reaction) {
    super(authorName, text, createdOn);
    this.reaction = reaction;
  }
}
// TODO: Create a new object using the Comment class constructor.
const newComment = new Comment(
  "John Doe",
  "This is Text",
  "03/23/2023",
  "What a comment!"
);

// TODO: Create a new object using the BlogPost class constructor.
const newPost = new BlogPost(
  "Jane Doe",
  "Jane's Addiction",
  "This is Text",
  "03/23/2023",
  "Wow!"
);
// TODO: Log both newly created BlogPost and Comment to the console.

console.log(newComment);
console.log(newPost);
