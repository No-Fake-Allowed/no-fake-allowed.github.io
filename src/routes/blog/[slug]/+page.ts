import type {PageServerLoad} from './$types';

export const load:PageServerLoad = async ({data}) => {
    const component = await import(`../../../lib/content/blog/${data.post.slug}.md`);
    return {
        post:data.post,
        component:component.default,
        layout: {
            fullWidth:true,
        },
    }
}