<script>
  import { tick } from "svelte";
import { useParams, navigate } from "svelte-navigator";
  import { programmes } from "../stores/stores";
  const params = useParams();
  const programme = $programmes.find(
    (programme) => programme.title == $params.title
  );
  const whiteBannerText = ['blå', 'grøn', 'orange', 'pink', 'gul', 'rød', 'sort', 'brun'];
  const changeToWhite = whiteBannerText.includes(programme.colorName) ? true : false;
  const blackSchdeuleText = programme.colorName == 'hvid';
  const black_bg = programme.colorName == 'hvid'; 
</script>

<!-- blå, grøn, orange, pink, gul, rød skal skiftes   -->

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
        <a target="_blank" href="https://www.facebook.com/groups/533253438593751/">Tilmeld facebook gruppe, KEA DIGITAL</a>
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
        <a target="_blank" href="https://www.instagram.com/kea.digital/">Følg @kea.digital</a>
      </div>

      <div class="discord1">
        <!-- <img class="discord-icon" src={"../static/images/discord_icon.png"} alt="discord"/> -->
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16">
          <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
        </svg>
        {#if programme.title === "Datamatiker" || programme.title === "Multimediedesign" ||  programme.title === "Business Økonomi-IT"}
        Tilmeld dig din klasses discord kanal her:
        {:else}
          {#if programme.title === "IT-Arkitektur"} 
            <a target="_blank" href="https://discord.gg/UrWTRSbjmx">Tilmeld dig din klasses discord kanal</a>
          {/if}
          {#if programme.title === "Webudvikling"} 
            <a target="_blank" href="https://discord.gg/GcaJpkXTEp">Tilmeld dig din klasses discord kanal</a>
          {/if}
          {#if programme.title === "Softwareudvikling"} 
            <a target="_blank" href="https://discord.gg/rVyEQcx9DH">Tilmeld dig din klasses discord kanal</a>
          {/if}
          {#if programme.title === "Digital Konceptudvikling"} 
            <a target="_blank" href="https://discord.gg/tCUSzVBkeZ">Tilmeld dig din klasses discord kanal</a>
          {/if}
          {#if programme.title === "IT-Sikkerhed"} 
            <a target="_blank" href="https://discord.gg/nQFeEfVKjs">Tilmeld dig din klasses discord kanal</a>
        {/if}
        {/if}
      </div>
      <div class="discord2">
        
        {#if programme.title === "Datamatiker"}
        <a target="_blank" href="https://discord.gg/SuYpdEva4w">Dat22a</a>
        <a target="_blank" href="https://discord.gg/kenaD6q5y9">Dat22b</a>
        <a target="_blank" href="https://discord.gg/a7wmTuMuuH">Dat22c</a>
        <a target="_blank" href="https://discord.gg/MaBy9XDGA9">Dat22d</a>
        {/if}

        {#if programme.title === "Multimediedesign"}
          <a target="_blank" href="https://discord.gg/9uFkVPdgQj">MMD22 A</a>
          <a target="_blank" href="https://discord.gg/dXz4YgyYdG">MMD22 B</a>
          <a target="_blank" href="https://discord.gg/pdPnA9mUHP">MMD22 C</a>
        {/if}

        {#if programme.title === "Business Økonomi-IT"}
          <a target="_blank" href="https://discord.gg/kgXNPQ76Bs">BEIT22 A</a>
          <a target="_blank" href="https://discord.gg/eZpvNzG3RA">BEIT22 B</a>
        {/if}
      </div>
    </div>


    
    <div class="poem">
      <h2>Din pakkeliste</h2>
      <p>
        Hey du der, pludselig stod du i bare tæer, du skal huske dine sko, fordi
        du skal til introuge, øhh nej, dage. Husk en <b>roulade</b>, gerne med
        mælkechokolade eller marmelade, vi håber ikke du kommer til skade på din
        håndflade. Vi gerne se dig den 19 august, fredag kl. 12, hvor du vil
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
      <p><b>Så husk</b><br/>
        1) Tilmeld dig Facebook gruppen (så bliver du også tilmeldt introdagene) <br/>
        2) Ankom iført tøj i farven <b class:black-bg={black_bg} style="color: {programme.color};">{programme.colorName}</b><br/>
        3) Medbring en <b>roulade</b>, en <b>kikkert</b> og en <b>selfiestang</b></p>
    </div>

    <div class="schedule" class:black={blackSchdeuleText} style="background-color: {programme.color};">
      <h1>PROGRAM FOR DE FEDE DAGE</h1>
      <div class="schedule_day">
        <p class="dato">19 <br /> AUG</p>
        <p class="description">
          <b> TOUR DE CAMPUS & AKTIVITETER</b><br />
          Kl. 12.00-16.00 <br />
          Guldbergsgade 29N, 2200 København N
        </p>
      </div>

      <div class="schedule_day">
        <p class="dato">20 <br /> AUG</p>
        <p class="description">
          <b> DYSTEN OM DEN GYLDNE STØVLE</b> <br />
          Kl. 12.00-16.00 <br />
          Trianglen Metro St. ved Fælledparken <br/> <br/>
          <b> PRISOVERRÆKNING OG FEST</b> <br />
          Kl. 19.00-01.00 <br />
          Guldbergsgade 29N, 2200 København N <br/>
          I kantinen
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
    padding: 1rem;
  }

  .facebook a,
  .insta a {
    color: black;
  }
  .social {
    margin: 2rem 0 1rem 1rem;
  }

  .facebook,
  .insta{
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  .discord1 {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  .discord2 {
    display: flex;
    /* align-items: center; */
    flex-direction: column;
    text-decoration: none;
  }
  .poem {
    width: 90vw;
    margin: 0 1rem 2rem;
  }

  .schedule {
    display: flex;
    flex-direction: column;
  }

  .schedule h1 {
    text-align: center;
    color: white;
    padding-top: 2rem;
    font-weight: 600;
  }

  .schedule_day {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
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

  .black p, .black h1 {
    color: black;
  }

  .black-bg {
    background-color: black;
  }

  .discord-icon {
        max-width: 1.9em;
        max-height: 1.9em;

        border-radius: 5em;
    }
</style>
