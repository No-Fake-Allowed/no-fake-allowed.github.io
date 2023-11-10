

<script lang="ts">
    import LorenzoAvatar from '../assets/images/avatar.png';

    const possibleSkillPillColors = [
      "bg-green-300",
      "bg-purple-400",
      "bg-red-300",
        "bg-amber-200",
        "bg-sky-300",
        "bg-pink-200",
        "bg-rose-500",
        "bg-orange-600"
    ];

    const skills = [
        "CSS",
        "HTML",
        "Typescript/Javascript",
        "React",
        "Svelte",
        "SolidJS",
        "Rust",
        "C/C++",
        "C#",
    ];

    function randIndex (from:number, to:number) {
        let min = Math.ceil(from);
        let max = Math.floor(to);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Props
    export let url:string|null;
    export let bio:string|null;
    export let followers:number|null;
    export let repos:number|null;
</script>

<style lang="postcss">

    .skill-pill {
       @apply flex w-fit h-5 px-2 rounded-md justify-center items-center text-center text-sm text-ink-dark;
    }

</style>



<div class="flex flex-col items-center bg- justify-center bg-ink-light w-[20em] min-h-[16.25em] p-4 gap-y-4 mt-10 rounded-xl">

    <!-- Profile Image -->
    <div class="w-32 h-32 rounded-[100px] bg-ink-dark">
        <img src={url} class="rounded-full shadow-inner" alt="My Ugly Ass Mug"/>
    </div>

    <!-- Quick Details -->
    <div class="flex flex-col w-[15em] gap-1 justify-center text-center h-fit">
        <span class="text-xl">Lorenzo A. Banks</span>
        <span class="text-sm">{followers} Followers, {repos} Projects</span>
        <span class="text-sm">{bio}</span>
    </div>

    <div class="side-bar-divider" />

    <!-- Skills / Languages / Etc -->
    <div class="flex justify-center items-center text-center text-lg">
        <span>Languages & Tech:</span>
    </div>
    <div class="flex flex-wrap gap-2 justify-center items-center">
        {#each skills as skill}
            <div class={`${possibleSkillPillColors.at(randIndex(0, 7))} skill-pill`}>{skill}</div>
        {/each}
    </div>

</div>
