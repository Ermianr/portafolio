<script lang="ts">
import { page } from "$app/state";
import type { Snippet } from "svelte";

interface Props {
    href: string;
    text: string;
    label: string;
    children: Snippet;
}

const { href, text, label, children }: Props = $props();
const isActive = $derived(page.url.pathname === href);
</script>

<a 
  {href}
  aria-label="{label}" 
  class="flex gap-2 p-2 text-gray-400 text-[1rem] items-center hover:text-foreground"
  class:active = {isActive}
>
    {@render children()}
    <span class="hidden md:block">{text}</span>
</a>

<style>
    .active {
        background-color: var(--color-secondary);
        border-radius: var(--radius-sm);
        color: var(--color-foreground)
    }
</style>