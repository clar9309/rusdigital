<script>
    import { fly } from "svelte/transition"
    export let vejlederInfo;
    const { navn, imgSrc, studie, semester, beskrivelse, ig } = vejlederInfo;
    function redirectIG() {
        console.log("Redirected..")
        window.open("https://www.instagram.com/" + ig)
    }

    function vejlederColor() {
        switch(studie) {
            case "Datamatiker": return "#81C259"
            case "Multimediedesigner": return "#348feb"
            case "Økonomi & IT": return "#F39C39"
            case "Software Udvikling": return "#FFD954"
            case "Webudvikling": return "#FF9FE4"
            case "Digital Konceptudvikling": return "#FFFFFF"
            default: ""
            break
        }
    }

    function vejlederBeskrivelse() {
        if(studie.length > 18) {
            return "20%"
        } else {
            return "25%"
        }
    }
</script>

<div style:background-color={vejlederColor()} class="card" in:fly="{{x: 200, duration: 500}}">
    <h2>{navn} </h2>
    <h3>{studie}, {semester}. semester</h3>

    <img src={imgSrc} alt="" />

    <div style:height={vejlederBeskrivelse()} id="description-wrapper">
        <p id="description">{beskrivelse}</p>
    </div>
    <div class="socials">
        {#if ig !== undefined}
        <img class="icon" src={"static/images/ig_icon.png"} alt="insta" on:click={redirectIG}/>
        {/if}
    </div>
</div>

<style>
    p {
        color:rgba(0, 0, 0, 1)
    }
    h2 {
        margin-block-start: 0.5em;
        margin-block-end: 0.3em;
    }
    h3 {
        margin-block-start: 0.3em;
        margin-block-end: 0.5em;
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
        margin: .5em;
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
        height: 25%;
        overflow: hidden;
    }

    #description {
        text-align: left;
    }
    
    .socials {
        display: flex;
        flex-direction: row;
    }

    .icon {
        max-width: 3em;
        max-height: 3em;

        border-radius: 5em;
    }
</style>