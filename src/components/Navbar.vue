<template>
	<nav class="nav">
		<router-link :to="{ name: 'overview-router' }">Overview</router-link>
		<router-link :to="{ name: 'transactions-router' }"
			>Transaction</router-link
		>
		<router-link to="/">Budgets</router-link>
		<router-link to="/">Reports</router-link>
		<router-link to="/">Settings</router-link>
	</nav>
</template>

<script setup></script>

<style scoped>
.nav {
	display: flex;
	align-items: center;
	gap: 20px;
}
</style>
