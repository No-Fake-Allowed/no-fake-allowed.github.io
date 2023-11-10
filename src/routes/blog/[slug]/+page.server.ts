
export const prerender = true;

import {posts} from '$lib/server/BlogPosts'
import {error} from '@sveltejs/kit';
import type { PageServerLoad } from "../../../../.svelte-kit/types/src/routes/blog/[slug]/$types";

export const load: PageServerLoad = async ({params}) => {
    const {slug} = params;
    const post = posts.find((post) => slug === post.slug);
    if (!post) {
        throw error(404, "Error: Not Found");
    }
    return {
        post,
    };
};