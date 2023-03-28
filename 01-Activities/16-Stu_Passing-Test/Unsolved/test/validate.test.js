const Validate = require("../validate.js");

describe("Validate", () => {
  // TODO: Write a test that checks if isPassword() returns false when the password is less than 8 characters.
  describe("Password", () => {
    it("should return false if password length is less than 8", () => {
      const validate = new Validate();
      const result = validate.isPassword("abc");
      expect(result).toEqual(false);
    });
    it("should return false if password >7 characters", () => {
      const validate = new Validate();
      const result = validate.isPassword("wdawdawda");
      expect(result).toEqual(true);
    });
  });
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 uppercase.
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 lowercase.
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 number.
  // TODO: Write a test that checks if isPassword() returns true when the password is at least 8 characters long and contains an uppercase, lowercase, and number.
});
