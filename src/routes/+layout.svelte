<script lang="ts">
    const { children } = $props();

    import "../app.css";

    import Footer from "$lib/components/layout/Footer.svelte";
    import Navbar from "$lib/components/layout/Navbar.svelte";
</script>

<Navbar />

<main class="px-12">
    {@render children()}
</main>

<Footer />
