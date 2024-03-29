export default class UserModel {
  constructor(userId, userName, userEmail, userPassword) {
    (this.userId = userId),
      (this.userName = userName),
      (this.userEmail = userEmail),
      (this.userPassword = userPassword);
  }

  static createUser(username, useremail, userpassword) {
    const newUser = new UserModel(
      users.length + 1,
      username,
      useremail,
      userpassword
    );
    users.push(newUser);
  }

  static isValidUser(useremail, userpassword) {
    const user = users.find((item) => item.userEmail == useremail && item.userPassword == userpassword)
    return user;
  }
}

const users = [new UserModel(1, "rohit", "rohit@email.com", "rohit")];
