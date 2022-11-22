// get profile input
const profileDOM = document.querySelector('#profile');
// UI class
class UI {

  // showProfile
  showProfile(user) {
    profileDOM.innerHTML = `
    <div class='card card-body mb-3 mt-3 text-center new-added-profile'>
      <div class='row'>
        <div class='col-sm-3'>
        <img src="${user.avatar_url}" class='img-fluid mb-2'>
        <a href="${user.html_url}" class='btn btn-primary btn-block'>View Profile</a>
        </div>
        <div class='col-sm-9'>
          <span class='badge text-bg-primary'>Puplic repos: ${user.public_repos}</span>
          <span class='badge text-bg-secondary'>Puplic gists: ${user.public_gists}</span>
          <span class='badge text-bg-success'>Followers: ${user.followers}</span>
          <span class='badge text-bg-info'>Following: ${user.following}</span>
          <ul class='list-group'>
            <li class='list-group-item'>name: ${user.name}</li>
            <li class='list-group-item'>company: ${user.company}</li>
            <li class='list-group-item'>blog: ${user.blog}</li>
            <li class='list-group-item'>location: ${user.location}</li>
            <li class='list-group-item'>created_at: ${user.created_at}</li>
          </ul>
          <br>
          <h3 class='page_heading'>Lates Repos</h3>
          <div id='repos'></div>
        </div>
      </div>
    </div>
    `
  }

  // showRepos
  showRepos(user) {
    console.log(user)
    let output = '';
    user.forEach(repo => {
      output += `
        <div class='card card-body'>
          <div class='row'>
            <div class='col-sm-6'>
              <a href="${repo.html_url}" class='btn btn-primary btn-block' target='blank'>${repo.name}</a>
            </div>
            <div class='col-sm-6'>
              <span class='badge text-bg-primary'> ${repo.stargazers_count}</span>
              <span class='badge text-bg-primary'>${repo.watchers_count}</span>
              <span class='badge text-bg-primary'>${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `
      return output;
    })
    document.querySelector('#repos').innerHTML = output;
  }

  showAlert(message, user) {
    const makeDiv = document.createElement('div');
    makeDiv.classList.add('alert','alert-primary');
    makeDiv.appendChild(document.createTextNode(`${message} : ${user}`))
    const alertParent = document.querySelector('#alert-parent');
    const alertChild = document.querySelector('#alert-child')
    alertParent.insertBefore(makeDiv, alertChild)
  }

  deleteAlert() {
    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 2000)
  }

  deleteProfile() {
    const profile =document.querySelector('.new-added-profile')
    if(profile){
      profile.innerHTML = '';
    }
  }

}
