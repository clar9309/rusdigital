<script>
    import { useParams, navigate } from "svelte-navigator";
    import { programmes } from "../stores/stores";
    const params = useParams();
    const programme = $programmes.find((programme) => programme.title == $params.title);
    const isColorBlack = (programme.colorName == 'sort') ? true: false
</script>

<style>
    .wrapper {
        display: flex;
        height: 100vh;
        color: inherit;
        justify-content: center;
    }

    .white-text {
        color: white;
    }

    .container {
        display: flex;
        flex-direction: column;
        width: 70vw;
    }

    .header, .poem {
        text-align: center;
    }
</style>

<div class="wrapper" class:white-text={isColorBlack} style="background-color: {programme.color};">
    <div class="container">
        <div class="header">
            <h1>{programme.title}</h1>
            <h2>Din linjes farve er {programme.colorName}, du skal derfor møde op i {programme.colorName}</h2>
        </div>
        <div class="poem">
            <h2>Din pakkeliste</h2>
            <p>
                Hey du der, pludselig stod du i bare tæer, du skal huske dine sko, fordi du skal til introuge, øhh nej, dage. 
                Husk en <b>roulade</b>, gerne med mælkechokolade eller marmelade, vi håber ikke du kommer til skade på din håndflade.
                Vi gerne se dig den 19 august, fredag kl 12, hvor du vil blive tildelt et hold, du skal også pakke noget, på en sej måde. Du skal medbringe en <b>kikkert</b> det er helt sikkert, og en <b>selfiestang</b>, så er vi sgu i gang. Du skal deltage i en roulympiade, og der skal du selvfølgelig medtage din fineste roulade. Vi ses på Guldbergsgade 29N. fordi det er her alle russer har hjem.
            </p>
            <p>
                Selvom vi skal hygge fredagen lang, så skal det ikke stoppe os for sejrssang. Det vil vi gøre lørdag den 20 august kl 12, hvor du skal dyste sammenhold eller et skjold, eller måske en støvle i guld, den er ihvertfald mega sej tror jeg. Der vil være en sandwich til alle, inden dystens ånd vil kalde. Til sidst på dagen vil der blive holdt en fest, hvor du er inviteret med som gæst.
            </p>
        </div>
    </div>
</div>