//fetch('https://api.github.com/users/Tatiana20th')
//  .then (res => res.json())
//  .then(json => console.log(json.url))
//  .then(json => console.log(json.avatar_url, json.url))
//  .catch(err => console.log(err));
//  .catch(error => console.error(error))
let url = window.location.toString();

let nameFromUrl = (url) => {
    let nameArr = url.split('=');
    let userName = nameArr[1];
    if (userName == undefined){
        userName = 'Tatiana20th';
    }
    return userName;
}

let name = nameFromUrl(url);

fetch ('https://api.github.com/users/' + name)
  .then(res => res.json())
  .then(json => {
    let avatar = json.avatar_url;
    let name = json.login;
    let bio = json.bio;
    let profile = json.html_url;
    if (name) {

    let createAvatar = () => {
      let newAvatar = document.createElement('img');
      newAvatar.src = avatar;
      document.body.append(newAvatar);
  };

      let createBio = () => {
      let newBio = document.createElement('p');
      newBio.innerHTML = bio;
      document.body.append(newBio);
    };

      let createProfile = () => {
      let elementLink = document.createElement('a');
      let elementName = document.createElement('h1');
      elementName.innerText = name;
      elementLink.href = profile;
      document.body.append(elementLink);
      elementLink.append(elementName);
    }

      createProfile();
      createAvatar();
      createBio();
    }
    else {
      let createError = () => {
        let errorElement = document.createElement('h1');
        errorElement.innerText = ' Информация о данном пользователе не найдена ';
        document.body.append(errorElement);
      }
      createError();
  }
})

.catch(err => alert(err + ' Информация о данном пользователе не найдена'));
