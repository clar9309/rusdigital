<script>
    import VejlederCard from '../components/VejlederCard.svelte'
    import { Vejleder } from '../Entities/Vejleder'
    const vejlederArray = [
        new Vejleder("Frederik", "static/images/Frederik_l.png", "Datamatiker", 5, "LP???", "frederikleonhard"),
        new Vejleder("Markus", "static/images/Markus.jpg", "Økonomi & IT", 2, "Jeg glemte engang min cykel i et S-tog, og fik den aldrig tilbage.", "markusarskog"),
        new Vejleder("Jimmy", "static/images/Jimmy.png", "Datamatiker", 5, "Jeg fandt engang en gratis cykel i S-toget.", "jimmylosang"),
        new Vejleder("Magnus", "static/images/Magnus.jpg", "Multimediedesigner", 4, "Jeg elsker skildpadder.", "magnus3509"),
        new Vejleder("William", "static/images/William.jpg", "Datamatiker", 2, "Efternavn betyder 'Kommer fra Assens'"),
        new Vejleder("Christian", "static/images/Christian.jpg", "Software Udvikling", 2, "Har købt 99 kroketsæt til 98 kr. + fragt.", "carlcrede"),
        new Vejleder("Elisa", "static/images/Elisa.jpg", "Datamatiker", 3, "Jeg lader aldrig en pakke kylling røre mine andre varer, når jeg er ude og handle.", "elisa_madsen"),
        new Vejleder("Naomi", "static/images/Naomi.jpg", "Datamatiker", 3, "Jeg kan kun lide grønne og røde vingummier.", "naomi_ramussen_"),
        new Vejleder("Nanna", "static/images/Nanna.png", "Datamatiker", 3, "Jeg er ret god til at bage.", "nannaoland"),
        new Vejleder("Veronica", "static/images/Veronica.png", "Datamatiker", 2, "Jeg hader gråspurve", "veronicafrydkjaer"),
        new Vejleder("Silas", "static/images/Silas.jpg", "Multimediedesigner", 2, "Jeg elsker is.", "silas_list"),
        new Vejleder("Tobias", "static/images/Tobias.jpg", "Datamatiker", 3, "Jeg har en 2 meter høj kålplante på min altan.", "tobiasras"),
        new Vejleder("Puk", "static/images/Puk.jpg", "Multimediedesigner", 3, "Jeg har altid mindst 1 blåt mærke.", "pukds"),
        new Vejleder("Alina", "static/images/Alina.jpg", "Økonomi & IT", 2, "Jeg har en ting for at stjæle dyr, når jeg er fuld."),
        new Vejleder("Frederik H", "static/images/Frederik_h.jpg", "Datamatiker", 2, "Er engang blevet jagtet gennem en regnskov af en orangutang.", "fhallengreen"),
        new Vejleder("Troels", "static/images/Troels.jpg", "Datamatiker", 3, "Jeg kan fornærme folk på tegnsprog.", "mr_trowsel"),
        new Vejleder("Tomine", "static/images/Tomine.jpg", "Multimediedesigner", 4, "Når jeg er fuld, tror jeg automatisk, at jeg kan dansk.", "tomineodegard"),
        new Vejleder("Zacharias", "static/images/", "Økonomi & IT", 3, "Jeg kan få mit ben bag mit hoved.", "zacharias_lilleso"),
        new Vejleder("Albert", "static/images/Albert.jpg", "Datamatiker", 2, "Fik engang konfiskeret en kniv i lufthavnen."),
        new Vejleder("Charlotte", "static/images/Charlotte.jpg", "Multimediedesigner", 3, "Jeg har engang vundet 100 kr. ved at spise 1 liter is på 14 minutter.", "__franciska__")
    ]

    function randomSort() {
        for(let i = 0; i < vejlederArray.length; i++) {
            const randomIndex = Math.floor(Math.random() * vejlederArray.length - i) + i
            vejlederArray[i] = vejlederArray.splice(randomIndex, 1, vejlederArray[i])[0]
        }
    }

    randomSort()
    
</script>
<div id="table-wrapper">
{#each vejlederArray as vejleder}
    <VejlederCard vejlederInfo={vejleder}/>
{/each}
</div>

<style>
    #table-wrapper {
            display: flex;
            flex-wrap: wrap;
            width: 100vw;
        }
</style>