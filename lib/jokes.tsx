import axios from 'axios'


export const getRandomJoke = async () => {
    try {
        const respone = await axios.get('https://api.chucknorris.io/jokes/random')
        return respone.data
    } catch (error) {
        console.log(error);
    }
}