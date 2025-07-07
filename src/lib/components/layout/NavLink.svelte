<script lang="ts">
    import type { Snippet } from "svelte";

    import { page } from "$app/state";

    interface Props {
        href: string;
        text: string;
        label: string;
        children: Snippet;
    }

    const { href, text, label, children }: Props = $props();
</script>

<a
    {href}
    aria-label={label}
    class="flex items-center gap-2 p-2 text-[1rem] text-gray-400 hover:text-foreground"
    class:active={page.url.pathname === href}
>
    {@render children()}
    <span class="hidden md:block">{text}</span>
</a>

<style>
    .active {
        background-color: var(--color-secondary);
        border-radius: var(--radius-sm);
        color: var(--color-foreground);
    }
</style>
