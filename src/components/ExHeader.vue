<template>
	<header>
		<img
			src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVJHeXYSv8g_cUQlB1cwa255f4VOgZ7Zi85w&usqp=CAU"
			alt=""
		/>
		<nav>
			<ul>
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/video">Video</router-link></li>
				<li><router-link to="/Mapa">Mapa</router-link></li>
			</ul>
		</nav>
	</header>
</template>

<script>
export default {};
</script>

<style>
header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: red;
	padding: 5px 20px;
}
ul {
	display: flex;
	justify-content: space-between;
	list-style: none;
	margin-right: 20px;
}
ul li {
	margin-right: 20px;
}

li a {
	color: white;
	text-decoration: none;
	font-size: 20px;
	font-weight: bold;
}
</style>
