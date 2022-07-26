<script>
  import { useParams, navigate } from "svelte-navigator";
  import { programmes } from "../stores/stores";
  const params = useParams();
  const programme = $programmes.find(
    (programme) => programme.title == $params.title
  );
  const changeToWhite = programme.colorName == "sort" ? true : false;
</script>

<!-- blå, grøn, orange, pink, gul, rød   -->

<body>
  <div class="wrapper">
    <div
      class="header"
      style="background-color: {programme.color};"
      class:white-text={changeToWhite}
    >
      <h1>{programme.title}</h1>
      <h2>
        Din linjes farve er {programme.colorName}, du skal derfor møde op i {programme.colorName}
      </h2>
    </div>

    <div class="social">
      <div class="facebook">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="iconify iconify--ic"
          width="32"
          height="32"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
          ><path
            fill="currentColor"
            d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
          /></svg
        >
        <a href="#">Tilmeld facebook gruppe, KEA DIGITAL</a>
      </div>

      <div class="insta">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="iconify iconify--ph"
          width="32"
          height="32"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 256 256"
          ><path
            fill="currentColor"
            d="M160 128a32 32 0 1 1-32-32a32.1 32.1 0 0 1 32 32Zm68-44v88a56 56 0 0 1-56 56H84a56 56 0 0 1-56-56V84a56 56 0 0 1 56-56h88a56 56 0 0 1 56 56Zm-52 44a48 48 0 1 0-48 48a48 48 0 0 0 48-48Zm16-52a12 12 0 1 0-12 12a12 12 0 0 0 12-12Z"
          /></svg
        >
        <a href="#">Følg @keadigital</a>
      </div>
    </div>

    <div class="poem">
      <h2>Din pakkeliste</h2>
      <p>
        Hey du der, pludselig stod du i bare tæer, du skal huske dine sko, fordi
        du skal til introuge, øhh nej, dage. Husk en <b>roulade</b>, gerne med
        mælkechokolade eller marmelade, vi håber ikke du kommer til skade på din
        håndflade. Vi gerne se dig den 19 august, fredag kl 12, hvor du vil
        blive tildelt et hold, du skal også pakke noget, på en sej måde. Du skal
        medbringe en <b>kikkert</b> det er helt sikkert, og en
        <b>selfiestang</b>, så er vi sgu i gang. Du skal deltage i en
        roulympiade, og der skal du selvfølgelig medtage din fineste roulade. Vi
        ses på Guldbergsgade 29N. fordi det er her alle russer har hjem.
      </p>
      <p>
        Selvom vi skal hygge fredagen lang, så skal det ikke stoppe os for
        sejrssang. Det vil vi gøre lørdag den 20 august kl 12, hvor du skal
        dyste sammenhold eller et skjold, eller måske en støvle i guld, den er
        ihvertfald mega sej tror jeg. Der vil være en sandwich til alle, inden
        dystens ånd vil kalde. Til sidst på dagen vil der blive holdt en fest,
        hvor du er inviteret med som gæst.
      </p>
    </div>

    <div class="schedule" style="background-color: {programme.color};">
      <h2>PROGRAM FOR DE FEDE DAGE</h2>
      <div class="schedule_day">
        <p class="dato">19 <br /> AUG</p>
        <p class="description">
          <b> TOUR DE CAMPUS & AKTIVITETER</b><br />
          Kl. 12.00 <br />
          Guldbergsgade 29N, 2200 Nørrebro
        </p>
      </div>

      <div class="schedule_day">
        <p class="dato">19 <br /> AUG</p>
        <p class="description">
          <b> TOUR DE CAMPUS & AKTIVITETER</b> <br />
          Kl. 12.00 <br />
          Guldbergsgade 29N, 2200 Nørrebro
        </p>
      </div>

      <div class="schedule_day">
        <p class="dato">19 <br /> AUG</p>
        <p class="description">
          <b> TOUR DE CAMPUS & AKTIVITETER</b> <br />
          Kl. 12.00 <br />
          Guldbergsgade 29N, 2200 Nørrebro
        </p>
      </div>
    </div>
  </div>
</body>

<style>
  body {
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }
  .wrapper {
    height: 100vh;
    color: inherit;
    width: 100vw;
  }

  .white-text {
    color: white;
  }

  .header {
    padding: 2rem;
  }

  .facebook a,
  .insta a {
    color: black;
  }

  .social,
  .poem {
    padding: 2rem;
  }

  .facebook,
  .insta {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  .poem {
    width: 90vw;
  }

  .schedule h2 {
    text-align: center;
    color: white;
    padding-top: 2rem;
    font-weight: 600;
  }

  .schedule_day {
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    color: white;
  }

  .dato {
    text-align: center;
    font-size: clamp(2rem, 2.3vw + 1.6rem, 3rem);
    font-weight: bold;
  }

  .description {
    font-weight: 400;
    font-size: clamp(0.5rem, 3.4vw - 0.1rem, 1.6rem);
  }
</style>
