
<script type="module" lang="ts">


    // Import Styles
    import "../app.css";
    // Import Fonts
    import "@fontsource/crimson-pro";
    import "@fontsource/outfit";
    //Import Logo As SVG
    import banksIcon from "$lib/assets/logos/BlackOnWhitePurple2.svg?raw";
    import {onNavigate} from "$app/navigation";

    //Import Fade Anim
    import {fade} from "svelte/transition";


    // On Navigate, Smooth Navigation
    onNavigate((navigation) => {
        if (!(document as any).startViewTransition) return;

        return new Promise((resolve) => {
            (document as any).startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    })

    import NavigationHeader from "$lib/components/NavigationHeader.svelte";
    import AvatarProfile from "$lib/components/AvatarProfile.svelte";
    import Footer from "$lib/components/Footer.svelte";

    import type {PageData} from "../../.svelte-kit/types/src/routes/$types";

    export let data:PageData;


</script>


<div class="flex flex-col w-full h-fit pb-10 items-center bg-ink-dark text-white"><!-- Slot, Which I Assume Places Page Content -->

    <div class="flex flex-row gap-x-10">

        <!-- Sidebar -->
        <section class="flex flex-col">
            <AvatarProfile url={data.userData.avatar_url}  bio={data.userData.bio} followers={data.userData.followers} repos={data.userData.public_repos} />
        </section>

        <!-- Header & Content -->
        <section class="flex flex-col justify-center items-center w-[900px]">
            <!-- Header / Navigation -->
            <NavigationHeader />
            <!-- Content -->
            <slot />
        </section>


    </div>




</div>
<Footer />