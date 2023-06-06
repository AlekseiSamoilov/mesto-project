// export let loadedUser;
// import { userInfo } from "./api";
// import { profileName } from './modal';
// import { profileWork } from './modal';
// import { nameInput } from './modal';
// import { jobInput } from './modal';
// import { profileAvatar } from './modal';
// import { avatarInput } from './modal';
// import { sendUserInfo } from './api';
// import { closePopup } from './modal';
// import { name } from "./modal";
// import { about } from "./modal";

// userInfo()
//   .then((data) => {
//     loadedUser = data;
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//   userInfo () 
//   .then(user => {
//     profileName.textContent = user.name;
//     profileWork.textContent = user.about;
//     nameInput.value = profileName.textContent;
//     jobInput.value = profileWork.textContent;
//     profileAvatar.src = user.avatar;
//     avatarInput.value = user.avatar;

//     return user;
//   })
//   .catch(error => {
//     console.log(error); 
//   });

  // sendUserInfo(name, about)
  // .then(() => {
  //   profileName.textContent = name;
  //   profileWork.textContent = about;
  //   closePopup(profilePopup);
  // })
  // .catch((error) => {
  //   console.log(error);
  // });