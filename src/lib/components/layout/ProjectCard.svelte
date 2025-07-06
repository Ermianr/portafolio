<script lang="ts">
import { buttonVariants } from "$lib/components/ui/button";
import * as Card from "$lib/components/ui/card/index";
import { Link } from "@lucide/svelte";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

interface Props extends HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
    href: string;
    children: Snippet;
}

const { title, description, href, children, ...restProps }: Props = $props();
</script>

<Card.Root {...restProps}>
    <Card.Header class="rounded-sm bg-secondary/60 py-5 text-left">
        <Card.Title class="font-bold">{title}</Card.Title>
        <Card.Description>
            {description}
        </Card.Description>
        <Card.Action>
            <a {href} aria-label={`Ir a ${title}`} class={buttonVariants({ variant: "outline"})}>
                <Link />
            </a>
        </Card.Action>
    </Card.Header>
    <Card.Footer>
        <div class="flex gap-2">
            {@render children()}
        </div>
    </Card.Footer>
</Card.Root>