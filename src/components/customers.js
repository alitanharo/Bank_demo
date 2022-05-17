export class Customers {
  constructor(username, password, balance, email) {
    {
      this.username = username;
      this.password = password;
      this.balance = balance;
      this.email = email;
      this.lastTransaction = "";
    }

    this.logout = function () {
      this.username = "";
      this.password = "";
      this.balance = "";
      this.email = "";
      this.lastTransaction = "";
    };

    this.send = function (amount) {
      if (this.balance >= amount) {
        this.lastTransaction += "-" + amount;
        return (this.balance -= +amount);
      } else {
        alert("Your balance is not enough for this transaction");
        return (this.balance = this.balance);
      }
    };

    this.receive = function (amount) {
      this.lastTransaction += "+" + amount;
      return (this.balance += +amount);
    };

    this.setCookie = function (cname, cvalue, exdays) {
      const d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      let expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    };
    this.getCookie = function (cname) {
      let name = cname + "=";
      let ca = document.cookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    };
  }
}

export const vip = [
  new Customers("alex", "alex", 200, "alex@yahoo.com"),
  new Customers("tom", "cat", 1000, "tom@gmail.com"),
  new Customers("jerry", "mous", 200, "jerry@gmail.com"),
];
