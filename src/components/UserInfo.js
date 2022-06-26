export default class UserInfo {
  constructor({nameSelector, jobSelector}) {
    this._profileName = nameSelector;
    this._prifileJob = jobSelector;
  }

  getUserInfo() {
    this._userInfo = {
      name: this._profileName.textContent,
      job: this._prifileJob.textContent,
    }

    return this._userInfo;
  }
  
  setUserInfo(nameInput, jobInput) {
    this._profileName.textContent = nameInput.value;
    this._prifileJob.textContent = jobInput.value;
  }
}