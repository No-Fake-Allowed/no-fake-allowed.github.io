
import type {PageData} from './$types';
import octokit from "../lib/client/GithubAPI";

// @ts-ignore
export const load:PageData = async () => {
    let cute = await octokit.rest.repos.get({repo:"CuTE", owner:"PThorpe92"});
    let storedb = await octokit.rest.repos.get({repo:"store-db", owner:"KMastroluca"});
    let cashfulrs = await octokit.rest.repos.get({repo:"cashful-rs", owner:"KMastroluca"});
    let slicklistsrs = await octokit.rest.repos.get({repo:"slicklists-rs", owner:"KMastroluca"});
    let crudtbl = await octokit.rest.repos.get({repo:"crudtbl", owner:"KMastroluca"});
    return {
        projects: {
            cute: cute.data,
            storedb: storedb.data,
            cashful: cashfulrs.data,
            slick: slicklistsrs.data,
            crud: crudtbl.data,
        }
    }
}