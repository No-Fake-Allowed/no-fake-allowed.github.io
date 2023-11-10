

import {Octokit, App} from "octokit";
import {PUBLIC_GITHUB_TOKEN} from '$env/static/public';

const octokit = new Octokit({auth:PUBLIC_GITHUB_TOKEN});

const {
    data: {login},
} = await octokit.rest.users.getAuthenticated();

export default octokit;