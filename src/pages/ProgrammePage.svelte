<script>
    import { useParams, navigate } from "svelte-navigator";
    import { programmes } from "../stores/stores";
    const params = useParams();
    const programme = $programmes.find((programme) => programme.title == $params.title)
</script>

<style>
    .wrapper {
        display: flex;
    }

    .container {

    }
</style>

<div class="wrapper" style="background-color: {programme.color};">
    <div class="container">
        <button on:click="{() => navigate(-1)}">Back</button>
        <h1>Velkommen til {programme.title}</h1>
    </div>
</div>