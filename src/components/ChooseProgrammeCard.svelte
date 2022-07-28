<script>
    import { navigate } from "svelte-navigator";
    export let programme;
    const { title, color, colorName } = programme;

    const goToProgrammePage = () => {
        navigate(`uddannelse/${title}`);
    }
    const whiteText = colorName == 'sort';
    const useBorder = colorName == 'hvid';
</script>

<style>
    .card {
        /* width: 25vw;
        height: 45vh; */
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        flex: 0 1 33%;
        overflow-wrap: anywhere;
        font-size: clamp(0.4rem, 2.5vw - 0.1rem, 1.5rem);
    }

    .card:hover {
        filter: drop-shadow(2px 2px 5px rgb(0 0 0 / 0.5));
    }

    .white-text {
        color: white;
    }

    .border {
        border: 1px solid black;
    }
</style>

<div class="card" class:white-text={whiteText} class:border={useBorder} style="background-color: {color};" on:click={ () => goToProgrammePage() }>
    <h2>{title}</h2>
</div>