const profile = {
  name: "John Doe",
  age: 30,
};

const profileCopy = profile;

function getProfile(profileCopy) {
  profileCopy.city = "New York";
}

getProfile(profileCopy);
console.log(profile);
console.log(profileCopy);
