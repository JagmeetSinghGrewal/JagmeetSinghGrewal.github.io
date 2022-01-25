import axios from "axios"

export const getRepos = async () =>{
    await axios.get('https://api.github.com/users/jagmeetsinghgrewal/repos')
    .then((response) => {
        return response.data;
    });
}