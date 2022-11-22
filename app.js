// Instantize GitHub Class
const github = new GitHub;
const ui = new UI;

// get input
const inputDOM = document.querySelector('#search');
// add an keyup event to input
inputDOM.addEventListener('keyup', findProfile);
// findProfile function
function findProfile(e) {
  const search = e.target.value;

  if(search !== ''){
    // getProfile
    const user = github.getUser(search)
    user.then(res => {
      if(res.profile.message == 'Not Found') {
        ui.deleteProfile();
        ui.showAlert(`The username could not find!`, search);
        ui.deleteAlert();
      } else {
        // show profile
        ui.showProfile(res.profile)
        // show repos
        ui.showRepos(res.repos);
      }
    })
  } else {
    // ıf input is blank, this function will remove page which was loaded before
    ui.deleteProfile();
  }
  
  // getRepos

}