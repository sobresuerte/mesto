export default class UserInfo {
  constructor({nameSelector, jobSelector}) {
    this._profileName = document.querySelector(nameSelector);
    this._prifileJob = document.querySelector(jobSelector);
  }

  getUserInfo() {
    this._userInfo = {
      name: this._profileName.textContent,
      job: this._prifileJob.textContent,
    }

    return this._userInfo;
  }
  
  setUserInfo(name, job) {
    this._profileName.textContent = name;
    this._prifileJob.textContent = job;
  }
}