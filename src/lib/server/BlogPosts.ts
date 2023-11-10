// Handle Blog Posts

import path from 'path';

type GlobEntry = {
    metadata: Post;
    default: unknown;
};

export interface Post {
    title:string;
    description:string;
    author:string;
    date:string;
}

export const posts = Object.entries(
    import.meta.glob<GlobEntry>('/src/lib/content/blog/**/*.md', {eager:true})
)
.map(([filepath, globEntry]) => {
    return {
        ...globEntry.metadata,

        // Generate the slug from the file path
        slug: path.parse(filepath).name,
    };
})
// Sort by date
.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
// Add References to next/previous posts
.map((post, index, allPosts) => ({
    ...post,
    next: allPosts[index - 1] || 0,
    previous: allPosts[index + 1] || 0,
}));