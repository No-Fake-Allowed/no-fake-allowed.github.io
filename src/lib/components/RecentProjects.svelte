
<script lang="ts">
    import {compile} from "mdsvex";
    import RecentProjectsBlurb from '$lib/content/mdcontent/home/recentprojects.md';

    import {Github, Eye, Star} from "lucide-svelte";

    export let projects;
</script>


<style lang="postcss">
</style>


<div class="grid grid-cols-2 gap-x-2 gap-y-4 outfit w-full">
    <div class="flex flex-col gap-2 w-full min-h-[15em] h-fit rounded-md bg-ink-light px-4 py-2">
        <h1 class="text-4xl">Recent Projects</h1>
        <div class="w-full border-b-[1px] border-gray-500"/>
        <div class="flex">
            <RecentProjectsBlurb />
        </div>
    </div>
    <div class="flex flex-col w-full h-50 px-4 py-2 gap-2 rounded-md bg-ink-light">
        <div class="flex flex-row w-fit h-fit items-center gap-2">
            <h1 class="text-3xl"><a href={projects.storedb.html_url}>{projects.storedb.name}</a></h1>
            <Github />
            <div class="bg-purple-800 rounded-xl px-4">
                {projects.storedb.visibility}
            </div>
        </div>
        <div class="flex flex-row w-fit h-fit items-center">
            {projects.storedb.full_name}
        </div>
        <div class="flex flex-row w-fit h-fit items-center">
            {projects.storedb.description}
        </div>
        <div class="flex flex-wrap gap-2 w-fit h-fit items-center">
            {#each projects.storedb.topics as topic}
                <div class="bg-amber-600 rounded-xl px-4">
                    {topic}
                </div>
            {/each}
        </div>
        <div class="flex flex-row  w-fit h-fit gap-2 items-center bg-gray-200 text-gray-800 px-7 rounded-lg">
            {projects.storedb.watchers} <Eye /> {projects.storedb.stargazers_count} <Star />
        </div>
    </div>

    <div class="flex flex-col w-full h-50 px-4 py-2 gap-2 rounded-md bg-ink-light">
        <div class="flex flex-row w-fit h-fit items-center gap-2">
            <h1 class="text-3xl"><a href={projects.cute.html_url}>{projects.cute.name}</a></h1>
            <Github />
            <div class="bg-green-800 rounded-xl px-4">
                {projects.cute.visibility}
            </div>
        </div>
        <div class="flex flex-row w-fit h-fit items-center">
            {projects.cute.full_name}
        </div>
        <div class="flex flex-row w-fit h-fit items-center">
            {projects.cute.description}
        </div>
        <div class="flex flex-wrap gap-2 w-fit h-fit items-center">
            {#each projects.cute.topics as topic}
                <div class="bg-amber-600 rounded-xl px-4">
                    {topic}
                </div>
            {/each}
        </div>
        <div class="flex flex-row  w-fit h-fit gap-2 items-center bg-gray-200 text-gray-800 px-7 rounded-lg">
            {projects.cute.watchers} <Eye /> {projects.cute.stargazers_count} <Star />
        </div>
    </div>

    <div class="flex flex-col w-full h-50 px-4 py-2 gap-2 rounded-md bg-ink-light">
        <div class="flex flex-row w-fit h-fit items-center gap-2">
            <h1 class="text-3xl"><a href={projects.slick.html_url}>{projects.slick.name}</a></h1>
            <Github />
            <div class="bg-green-800 rounded-xl px-4">
                {projects.slick.visibility}
            </div>
        </div>
        <div class="flex flex-row w-fit h-fit items-center">
            {projects.slick.full_name}
        </div>
        <div class="flex flex-row w-fit h-fit items-center">
            {projects.slick.description}
        </div>
        <div class="flex flex-wrap gap-2 w-fit h-fit items-center">
            {#each projects.slick.topics as topic}
                <div class="bg-amber-600 rounded-xl px-4">
                    {topic}
                </div>
            {/each}
        </div>
        <div class="flex flex-row  w-fit h-fit gap-2 items-center bg-gray-200 text-gray-800 px-7 rounded-lg">
            {projects.slick.watchers} <Eye /> {projects.slick.stargazers_count} <Star />
        </div>
    </div>


    <div class="flex flex-col w-full h-50 px-4 py-2 gap-2 rounded-md bg-ink-light">
        <div class="flex flex-row w-fit h-fit items-center gap-2">
            <h1 class="text-3xl"><a href={projects.crud.html_url}>{projects.crud.name}</a></h1>
            <Github />
            <div class="bg-green-800 rounded-xl px-4">
                {projects.crud.visibility}
            </div>
        </div>
        <div class="flex flex-row w-fit h-fit items-center">
            {projects.crud.full_name}
        </div>
        <div class="flex flex-row w-fit h-fit items-center">
            {projects.crud.description}
        </div>
        <div class="flex flex-wrap gap-2 w-fit h-fit items-center">
            {#each projects.crud.topics as topic}
                <div class="bg-amber-600 rounded-xl px-4">
                    {topic}
                </div>
            {/each}
        </div>
        <div class="flex flex-row  w-fit h-fit gap-2 items-center bg-gray-200 text-gray-800 px-7 rounded-lg">
            {projects.crud.watchers} <Eye /> {projects.crud.stargazers_count} <Star />
        </div>
    </div>

    <div class="flex flex-col w-full h-50 px-4 py-2 gap-2 rounded-md bg-ink-light">
        <div class="flex flex-row w-fit h-fit items-center gap-2">
            <h1 class="text-3xl"><a href={projects.cashful.html_url}>{projects.cashful.name}</a></h1>
            <Github />
            <div class="bg-purple-800 rounded-xl px-4">
                {projects.cashful.visibility}
            </div>
        </div>
        <div class="flex flex-row w-fit h-fit items-center">
            {projects.cashful.full_name}
        </div>
        <div class="flex flex-row w-fit h-fit items-center">
            {projects.cashful.description}
        </div>
        <div class="flex flex-wrap gap-2 w-fit h-fit items-center">
            {#each projects.cashful.topics as topic}
                <div class="bg-amber-600 rounded-xl px-4">
                    {topic}
                </div>
            {/each}
        </div>
        <div class="flex flex-row  w-fit h-fit gap-2 items-center bg-gray-200 text-gray-800 px-7 rounded-lg">
            {projects.cashful.watchers} <Eye /> {projects.cashful.stargazers_count} <Star />
        </div>
    </div>

</div>