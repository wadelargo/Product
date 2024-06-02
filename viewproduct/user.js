fetch('https://dummyjson.com/users')
    .then((Response)=>Response.json())
    .then((data)=>{
        let usersDiv = document.getElementById('users');
        
        data.users.forEach((user)=>{
            let userDiv = document.createElement('a')
            userDiv.className = "user";
            userDiv.href=".user/user.html/userId="+user.id;

            let fullnameDiv = document.createElement('div')
            fullnameDiv.className = "fullname";

            let image = document.createElement('img')
            image.className = "image";
            image.src = user.image;
            fullnameDiv.innerText = user.firstName+ ' ' +user.maidenName+ ' ' + user.lastName;

            userDiv.appendChild(image);

            userDiv.append(fullnameDiv);

            usersDiv.append(userDiv);
        })
    })