<script>
    import { fly } from "svelte/transition"
    export let vejlederInfo;
    const { navn, imgSrc, studie, semester, beskrivelse } = vejlederInfo;
    function redirectSocial() {
        console.log("Redirected..")
    }
</script>

<div class="card" on:click={redirectSocial} in:fly="{{x: 200, duration: 500}}">
    <h2>{navn} </h2>
    <h3>{studie}, {semester}. semester</h3>

    <img src={imgSrc} alt="" />

    <div id="description-wrapper">
        <p id="description">{beskrivelse}</p>
    </div>
</div>

<style>
    p {
        color:rgba(0, 0, 0, 1)
    }
    .card {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: flex-start;
        width: 20em;
        height: 30em;
        border-radius: 10px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
        transition: box-shadow 0.3s ease-in-out;
        padding: 0em 1em;
        margin: 1em;
        background-color: rgba(255, 255, 255, 0.25) ;
        cursor: pointer;
    }

    .card:hover {
        box-shadow: 5px 10px 15px rgb(13, 103, 239);
    }

    img {
        width: 20em;
        height: 13em;
        object-fit: contain;
        background-color: rgba(128, 128, 128, 0.25);
    }

    #description-wrapper {
        height: 20%;
        overflow: hidden;
    }

    #description {
        text-align: left;
    }
</style>