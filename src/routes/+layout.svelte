<script lang="ts">
const { children } = $props();

import Footer from "$lib/components/layout/Footer.svelte";
import Navbar from "$lib/components/layout/Navbar.svelte";
import "../app.css";
</script>

<Navbar />

<main class="px-12">
    {@render children()}
</main>

<Footer />



