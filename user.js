const { log } = console;
class User {
  constructor(name, email, password, cpassword, loggedIn) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.cpassword = this.cpassword;
    this.loggedIn = false;
  }

  setPass(loggedIn) {
    if (loggedIn == true) {
      this.loggedIn = loggedIn;
      return this.loggedIn;
    } else return false;
  }

  getPass() {
    return this.loggedIn;
  }

  setCred(name, email) {
    this.name = name;
    this.email = email;
    return this;
  }

  getCred() {
    return {
      name: this.name,
      email: this.email,
    };
  }

  register(name, email, password, cpassword) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.cpassword = cpassword;
    return this;
  }

  login(name, password) {
    if (this.name == name && (this.password = password)) {
      this.setPass(true);
      log(this.name, "you are now loggedIn", this.loggedIn);
    } else if (!name || !password) return log("please provide valid input");
    else {
      log("wrong email or password");
      this.setPass(false);
    }
    return this;
  }
  
  loggedOut() {
    this.loggedIn = false;
    this.name = "";
    this.email = "";
    this.password = "";
    this.cpassword = "";
    console.log("user loggedOut");
    return this;
  }

  games() {
    if (this.loggedIn == false) {
      return console.log("you need to loggin to access games");
    }
    let game = [
      { name: "super man", type: "cartoon" },
      { name: "spider man", type: "cartoon" },
      { name: "bat man", type: "cartoon" },
    ];
    console.log(game);
    return this;
  }
}

class Games extends User {
  constructor(game, type) {
    super();
    this.game = game;
    this.type = type;
  }
  getGame() {
    this.games();
    return this;
  }
  setGame(game, type) {
    this.game = game;
    this.type = type;
    newGame = { name: this.game, type: this.type };
    console.log({ ...this.games, newGame });
    return this;
  }
  gamerDetail() {
    let details = this.getCred();
    log(details);
    return this;
  }
}

let user1 = new User("abiola", "abiola@mail.com", "test1234", "test1234");
// user1.login("abiola", "test1234");
// user1.loggedOut().games()

let gamer1 = new Games("naruto", "cartoon");
gamer1
  .register("abiola", "abiola@mail.com", "test1234", "test1234")
  .login("abiola", "test1234")
  .gamerDetail();
