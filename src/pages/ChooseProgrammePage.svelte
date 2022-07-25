<script>
    import ProgrammeCard from "../components/ProgrammeCard.svelte";
    import { Programme } from "../Entities/Programme";
    const programmeArray = [
        new Programme('Multimediedesign', '#A7C5E5'),
        new Programme('Datamatiker', '#BCD6AC'),
        new Programme('Business Økonomi-IT', '#F3CDA2'),
        new Programme('Digital Konceptudvikling', '#8B7FBE'),
        new Programme('IT-Arkitektur'),
        new Programme('Webudvikling', '#B87F9E'),
        new Programme('Softwareudvikling', '#FAD978'),
        new Programme('IT-Sikkerhed', '#DF9D9B')
    ]
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
        width: 60vw;
        justify-content: space-evenly;
        row-gap: 30px;
        column-gap: 10px;
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
    <div class="card-container">
        {#each programmeArray as programme}
            <ProgrammeCard programme={programme}></ProgrammeCard>
        {/each}
    </div>
</div>