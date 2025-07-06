<script lang="ts">
import ProjectCard from "$lib/components/layout/ProjectCard.svelte";
import { Badge } from "$lib/components/ui/badge/index.js";
import Button from "$lib/components/ui/button/button.svelte";
import { MoveRight } from "@lucide/svelte";
</script>

<section class="mx-auto mt-9 max-w-4xl">
    <h1 class="bg-gradient-to-l from-purple-600 via-pink-400 to-orange-500 bg-clip-text text-transparent">
        Hola, ¡Soy Kevin!
    </h1>
    <p>
        Soy un desarrollador de 21 años de Colombia, apasionado por la programación y siempre conocer las cosas a fondo, actualmente me encuentro trabajando en una librería de websockets para conectarme al gateway de discord y crear bots de manera fácil y amigable.
    </p>
</section>

<section class="mx-auto mt-9 max-w-4xl">
    <h2>Mis proyectos</h2>
    <div class="w-full">
        <ProjectCard
            title="Tindalos"
            description="Una librería para diseñar bots de discord con una sintaxis sencilla y completamente asíncrona de manera nativa."
            href=#
            class="bg-custom-background-card mt-9 p-6"
        >
            <Badge variant="secondary">Python</Badge>
            <Badge variant="secondary">aiohttp</Badge>
            <Badge variant="secondary">uvloop</Badge>
        </ProjectCard>
    </div>
    <div class="mt-6 flex items-center justify-center gap-2 transition-all duration-150 ease-in-out hover:translate-x-4 hover:text-purple-700">
        <a href="#">Mas proyectos</a>
        <MoveRight class="cursor-pointer"/>        
    </div>
</section>

<section class="mx-auto mt-9 max-w-4xl">
    <h2>Tecnologías que utilizo en mis proyectos</h2>
    <div class="mt-4">
        <h3>Herramientas</h3>
        <div class="flex gap-2">
            <Button variant="outline">Git</Button>
            <Button variant="outline">Github</Button>
            <Button variant="outline">Visual Studio Code</Button>
            <Button variant="outline">Bun</Button>
            <Button variant="outline">Vite</Button>
        </div>
        <h3>Lenguajes</h3>
        <div class="flex gap-2">
            <Button variant="outline">Python</Button>
            <Button variant="outline">Java</Button>
            <Button variant="outline">JavaScript</Button>
            <Button variant="outline">TypeScript</Button>
            <Button variant="outline">Zig</Button>
        </div>
        <h3>Frontend Frameworks</h3>
        <div class="flex gap-2">
            <Button variant="outline">Svelte</Button>
            <Button variant="outline">Reflex</Button>
        </div>
        <h3>Backend Frameworks</h3>
        <div class="flex gap-2">
            <Button variant="outline">FastAPI</Button>
            <Button variant="outline">Reflex</Button>
        </div>
    </div>
</section>