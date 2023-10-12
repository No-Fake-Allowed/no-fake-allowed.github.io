
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

    //
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

</script>


<div class="flex flex-col w-screen h-screen items-center bg-ink-dark text-white"><!-- Slot, Which I Assume Places Page Content -->

    <div class="flex flex-row gap-x-10">

        <!-- Sidebar -->
        <section class="flex flex-col">
            <AvatarProfile />

        </section>

        <!-- Header / Navigation -->
        <NavigationHeader />

    </div>

    <slot />

</div>