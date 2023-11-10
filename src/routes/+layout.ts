

import type {PageData} from './$types';
import octokit from "../lib/client/GithubAPI";
// @ts-ignore
export const load:PageData = async () => {

    let userData = await octokit.rest.users.getByUsername({username:"KMastroluca"});
    return {
        userData:userData.data
    }
};