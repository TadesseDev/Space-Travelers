const URL = 'https://api.spacexdata.com/v3/missions';

const getMissions = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
}

export default getMissions;
