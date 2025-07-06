<script lang="ts">
import { buttonVariants } from "$lib/components/ui/button";
import { Github, Hammer, House } from "@lucide/svelte";
import NavLink from "./NavLink.svelte";
</script>

<header class="sticky top-0 z-50 flex w-full justify-center border-b px-8 bg-background/80 backdrop-blur-md">
    <nav class="flex h-14 w-full max-w-6xl items-center justify-between">
        <div class="flex gap-4">
            <NavLink href="/" text="Inicio" label="Ir al inicio">
                <House size=20 />
            </NavLink>
            <NavLink href="/projects" text="Proyectos" label="Ir a los proyectos">
                <Hammer size=20 />
            </NavLink>
        </div>
        <div>
            <a href="https://github.com/Ermianr" target="_blank" aria-label="Ir a github" class="flex {buttonVariants({ variant: "outline" })}">
                <Github />
            </a>
        </div>
    </nav>
</header>