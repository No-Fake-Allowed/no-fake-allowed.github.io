<script>
import banksIcon from "$lib/assets/logos/BlackOnWhitePurple2.svg?raw";
import {page} from "$app/stores";
import {fade} from "svelte/transition";


let isLogoVisible = false;

setTimeout(() => {
    isLogoVisible = true;
}, 10);


</script>

<style lang="postcss">

    nav li a {
        text-decoration: none;
        background-image: linear-gradient(#ff70ec, #8d03b1);
        background-size: 0% 0.1em;
        background-position-y: 100%;
        background-position-x: 100%;
        background-repeat: no-repeat;
        transition:background-size 0.2s ease-in-out;
    }

    a:hover,
    a:focus,
    a:active {
        background-size: 100% 0.1em;
        background-position-x: 0%;
        outline-width: 0;
    }

    a.selected {
        color:#8d03b1;
    }



</style>

<!-- Site Navigation Element -->
<header class="flex flex-col w-fit h-fit justify-center rounded-xl bg-ink-light items-center my-10 text-lg">

    <div class="flex w-[35em] h-[14em] py-0 h-fit justify-center items-center">
        {#if isLogoVisible}
            <div transition:fade={{delay:200, duration:300}}>
                {@html banksIcon}
            </div>
        {/if}
    </div>

    <nav class="flex w-fit h-fit p-1 gap-x-24 justify-center items-end outfit list-none text-md px-24 pb-4 ">
        <li><a href="/" class:selected={$page.url.pathname === '/'}>Home</a></li>
        <li><a href="/about" class:selected={$page.url.pathname === "/about"}>About Me</a></li>
        <li><a href="/projects" class:selected={$page.url.pathname === "/projects"}>Projects</a></li>
        <li><a href="/blog" class:selected={$page.url.pathname === "/blog"}>Blog</a></li>
    </nav>
</header>