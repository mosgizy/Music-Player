import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://spotify81.p.rapidapi.com/albums',
  params: {ids: '0lzPMIAYhhUSD2BPT0VQWI,1KOmHyNLuOe5YrPhD3Juuf,0s3BbZlcqsUdAD8wIYdO5n,34vlTd4355ddD4q9pPsoqF,218CJKDCszsQQj7Amk7vIu'},
  headers: {
    'X-RapidAPI-Key': 'dc89a98a14msh998a210cca4ebe2p1637d9jsne91b67d808ae',
     'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
  }
};

const getData = async () => {
    try {
        const response = await axios.request(options)
        return response.data;
    } catch (error) {   
        console.log(error)
    }
}

export default getData;