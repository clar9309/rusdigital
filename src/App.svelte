<script>
	import {
		Router,
		Link,
		Route,
	} from "svelte-navigator";
	import { SvelteToast } from "@zerodevx/svelte-toast";
	import { faker } from '@faker-js/faker';
	import FrontPage from './pages/FrontPage.svelte'
	import About from './pages/About.svelte'
	import VejlederPage from './pages/VejlederPage.svelte'
	import ChooseProgrammePage from "./pages/ChooseProgrammePage.svelte";
	import ProgrammePage from "./pages/ProgrammePage.svelte";

	function randomActivity() {
		// Random timer i sekunder
		const randomTimer = Math.floor(Math.random() * 10)
		// Random name
		const randomName = faker.name.findName();
		// Toast
		toast.push(randomName + " deltager til Dysten om Den Gyldne Støvle!", {
                theme: {
                  '--toastBackground': '#F56565',
                  '--toastBarBackground': '#C53030'
                }
            })
		setTimeout(() => {

		}, randomTimer * 1000)	
	}

	// Timer så der går 5 sekunder før aktiviteter kan starte
	setTimeout(() => {
		randomActivity()
	}, 500)
</script>
<Router>
	<!-- Navbar -->
	<!-- <div id="navDiv">
		<nav>
			<ul>
				<li><Link to="/">Frontpage</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="vejledere">Vejledere</Link></li>

			</ul>
		</nav>
	</div> -->

	<Route path="/" primary={false}>
		<FrontPage/>
	</Route>
	<Route path="/about">
		<About/>
	</Route>
	<Route path="vejledere">
		<VejlederPage/>
	</Route>
	<Route path="uddannelse">
		<ChooseProgrammePage/>
	</Route>
	<Route path="uddannelse/:title">
		<ProgrammePage/>
	</Route>
</Router>

<style></style>