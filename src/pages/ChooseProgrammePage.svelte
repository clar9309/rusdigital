<script>
    import DeviceDetector from "svelte-device-detector";
    import ChooseProgrammeCard from "../components/ChooseProgrammeCard.svelte";
    import { programmes } from "../stores/stores";
</script>

<style>
    .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .card-container {
        display: flex;
        flex-wrap: wrap;
        max-width: 90vw;
        justify-content: space-evenly;
        row-gap: 30px;
        column-gap: 5px;
    }

    .mobile-card-container {
        display: flex;
        flex-wrap: wrap;
        max-width: 99vw;
        justify-content: space-evenly;
        row-gap: 1vh;
        column-gap: 2vw;
    }
    .title {
        text-align: center;
        font-family: 'Schocka Serif', 'Serif';
        font-size: calc(1rem + 1vw);
    }
</style>

<div class="main">
    <div class="title">
        <h1>VÆLG DIN LINJE</h1>
    </div>
    <DeviceDetector showInDevice="desktop">
        <div class="card-container">
            {#each $programmes as programme}
                <ChooseProgrammeCard programme={programme}></ChooseProgrammeCard>
            {/each}
        </div>
    </DeviceDetector>
    <DeviceDetector showInDevice="mobile">
        <div class="mobile-card-container">
            {#each $programmes as programme}
                <ChooseProgrammeCard programme={programme}></ChooseProgrammeCard>
            {/each}
        </div>
    </DeviceDetector>
</div>