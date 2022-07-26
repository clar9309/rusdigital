<script>
	import {
		Router,
		Link,
		Route,
	} from "svelte-navigator";
	import FrontPage from './pages/FrontPage.svelte'
	import About from './pages/About.svelte'
	import VejlederPage from './pages/VejlederPage.svelte'
	import ChooseProgrammePage from "./pages/ChooseProgrammePage.svelte";
	import ProgrammePage from "./pages/ProgrammePage.svelte";
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