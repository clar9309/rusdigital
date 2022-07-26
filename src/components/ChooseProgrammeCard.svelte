<script>
    import { navigate } from "svelte-navigator";
    export let programme;
    const { title, color } = programme;

    const goToProgrammePage = () => {
        navigate(`uddannelse/${title}`);
    }
</script>

<style>
    .card {
        width: 25vw;
        height: 45vh;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
</style>

<div class="card" style="background-color: {color};" on:click={ () => goToProgrammePage() }>
    <h2>{title}</h2>
</div>