<script>
    import {scale, fade} from 'svelte/transition'
</script>
<div class="container" tabindex="-1">
    <h1 tabindex="-1" in:scale out:fade>About this page</h1>
</div>


<style>
    .container {
        display: flex;
        justify-content: center;
    }
</style>