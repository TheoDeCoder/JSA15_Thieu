const fetchAPI = async () => {
    const response = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Ho%20Chi%20Minh%20City&appid=dca857e6150b7d63058ab56218cb16c1");
    const data = await response.json();
    console.log(data);
};

let data = null;
const fetchAPIold = async () => {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=Ho%20Chi%20Minh%20City&appid=dca857e6150b7d63058ab56218cb16c1")
    .then((response) => response.json())
    .then((res) => {
        data = res;
        console.log(data);
    })
    .catch((error) => console.error(error));
};

fetchAPI();
fetchAPIold();