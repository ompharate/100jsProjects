const URL = "https://randomuser.me/api"

const fetchUserProfile = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    const userImg =  data["results"][0].picture.large;
    console.log(userImg)
}

const data = fetchUserProfile();
