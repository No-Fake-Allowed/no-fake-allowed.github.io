<script lang="ts">
    import RecentProjects from "$lib/components/RecentProjects.svelte";

    import type {PageData} from "../../.svelte-kit/types/src/routes/$types";


    export let data;

    let projects = data.projects;

</script>

<RecentProjects projects={projects} />

