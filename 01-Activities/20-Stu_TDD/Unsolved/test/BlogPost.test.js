const BlogPost = require("../lib/BlogPost.js");
const Comment = require("../lib/Comment.js");

describe("BlogPost", () => {
  // TODO: Add a comment describing this test.
  // Testing an instance of BlogPost class
  describe("Instantiate", () => {
    it("should be an instance of BlogPost class", () => {
      const blogpost = new BlogPost();

      expect(blogpost).toBeInstanceOf(BlogPost);
    });
  });

  // TODO: Add a comment describing this test.
  // Testing authorName is set properly
  describe("Initialize authorName", () => {
    it("should set authorName properly", () => {
      const authorName = "John Doe";
      const blogpost = new BlogPost(authorName);

      expect(blogpost.authorName).toBe(authorName);
    });
  });

  // TODO: Add a comment describing this test.
  // Testing title is set properly
  describe("Initialize title", () => {
    it("should set title properly", () => {
      const title = "My First Post";
      const blogpost = new BlogPost("John Doe", title);

      expect(blogpost.title).toBe(title);
    });
  });

  // TODO: Add a comment describing this test.
  // Testing text is set properly
  describe("Initialize text", () => {
    it("should set text properly", () => {
      const text = "Dogs are super cute!";
      const blogpost = new BlogPost("John Doe", "My First Post", text);

      expect(blogpost.text).toBe(text);
    });
  });

  // TODO: Add a comment describing this test.
  // Testing createdOn is set properly
  describe("Initialize createdOn", () => {
    it("should set createdOn properly", () => {
      const createdOn = "12/15/2021";
      const blogpost = new BlogPost(
        "John Doe",
        "My First Post",
        "Dogs are super cute!",
        createdOn
      );

      expect(blogpost.createdOn).toBe(createdOn);
    });
  });

  // TODO: Add a comment describing this test.
  // Testing createdOn is set properly
  describe("Initialize comments", () => {
    it("should set createdOn properly", () => {
      const blogpost = new BlogPost();

      expect(blogpost.comments.length).toBe(0);
    });
  });

  // TODO: Add a comment describing this test.
  // Testing if adding a comment to comments array
  describe("addComment() method", () => {
    it("should add comment to comments array", () => {
      const blogpost = new BlogPost();
      const comment = new Comment();
      blogpost.addComment(comment);

      expect(blogpost.comments[0]).toBeInstanceOf(Comment);
    });
  });

  // TODO: Add a comment describing this test.
  // Testing the print message with data
  describe("printMetaData() method", () => {
    it("should print message with data", () => {
      const blogpost = new BlogPost(
        "John Doe",
        "My First Post",
        "Dogs are super cute!",
        "12/15/2021"
      );

      expect(blogpost.printMetaData()).toBe(
        `Created by John Doe on 12/15/2021`
      );
    });
  });
});
