<script>
    import { useParams, navigate } from "svelte-navigator";
    const params = useParams();
</script>

<style>
    .wrapper {
        display: flex;
    }

    .container {

    }
</style>

<div class="wrapper">
    <div class="container">
        <button on:click="{() => navigate(-1)}">Back</button>
        <h1>Velkommen til {$params.navn}</h1>
    </div>
</div>