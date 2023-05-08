const url = ("http://localhost:5500/api")

function getUsers() {
    fetch(url)
    .then(response => response.json())
    .then(data => rendeApiResult.textContent =
      JSON.stringify(data)   )
      .catch(error => console.error(error))
}

function getUser() {
    fetch(`${url}/1`)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

function addUser(newUser) {
   fetch(url, {
     method: "POST",
     body: JSON.stringify(newUser),
     headers: {
        "Content-type": "application/json;charset=UTF-8"
     }
   })
     .then(response => response.json())
     .then(data => alertApi.textContent = data)
     .catch(error => consolo.error(error))
}

function updateUser(updatedUser) {
    fetch(`${url}/1`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        }
    } )
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

const updatedUser = {
    name: "Marcelo Clovis",
    avatar:"http://picsum.photos/200/300",
    city: "Recife"
}

const newUser = {
    name: "Olivia Zars",
    avatar: "http://picsum.photos/200/300",
    city: "São Paulo"
}

//addUser(newUser)

updateUser(updatedUser)

getUsers()
getUser()