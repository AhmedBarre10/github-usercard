/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

function createCard(data) {

  //declare the variables

const newCard = document.createElement('div'),
      newImg = document.createElement('img'),
      newCardInfo = document.createElement('div'),
      name = document.createElement('h3'),
      username = document.createElement('p'),
      location = document.createElement('p'),
      profile = document.createElement('p'),
      profileUrl = document.createElement('a'),
      followers = document.createElement('p'),
      following = document.createElement('p'),
      bio = document.createElement('p');
  
  
  // 
      newCard.appendChild(newImg);
      newCard.appendChild(newCardInfo);
      newCardInfo.appendChild(name);
      newCardInfo.appendChild(username);
      newCardInfo.appendChild(location);
      newCardInfo.appendChild(profile);
      newCardInfo.appendChild(followers);
      newCardInfo.appendChild(following);
      newCardInfo.appendChild(bio);
      newCardInfo.appendChild(profileUrl);


      newCard.classList.add('card');
      newCardInfo.classList.add('card-info');
      name.classList.add('name');
      username.classList.add('username');
      

      newImg.src = data.avatar_url;
      username.textContent = data.login;
      followers.textContent = data.followers;
      following.textContent = data.following;
      name.textContent = data.name;
      location.textContent = data.location;
      profileUrl.textContent = data.url;
      profileUrl.href = data.url;
      profile.textContent = 'Profile:';
      bio.textContent = `Bio: ${data.bio}`;
   

      return newCard;
      console.log(newCard);
}


const cards = document.querySelector('.cards');

axios.get('https://api.github.com/users/idongessien')
  .then(function (response) {
    const myCard = createCard(response.data);
    cards.appendChild(myCard);
    console.log(response.data);
    return response.data.followers_url;

    // const myCard = createCard(response.data);
    // console.log(response.data);
  })
  .catch(function (error) {
    console.log('data not returned', error);
  });
  axios.get('https://api.github.com/users/ardissam0')
  .then(function (response) {
    const myCard = createCard(response.data);
    cards.appendChild(myCard);
    console.log(response.data);
    return response.data.followers_url;

    // const myCard = createCard(response.data);
    // console.log(response.data);
  })
  .catch(function (error) {
    console.log('data not returned', error);
  });
 


  
  axios.get('https://api.github.com/users/ArtmanG')
  .then(function (response) {
    const myCard = createCard(response.data);
    cards.appendChild(myCard);
    console.log(response.data);
    return response.data.followers_url;

    // const myCard = createCard(response.data);
    // console.log(response.data);
  })
  .catch(function (error) {
    console.log('data not returned', error);
  });


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
