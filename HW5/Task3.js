function checkLogin(username, password) {
    return new Promise(function(resolve, reject) {
           setTimeout(function fetchData(){
            if (username === "admin" && password === "qwerty123456"){
                resolve("«Welcome, username!»");
        } else {
            reject("Invalid username or password!");
        }
    },2000);
});
}

checkLogin("admin", "qwerty123456")
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
