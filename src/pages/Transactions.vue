<template>
	<div>Transactions</div>
	<div v-if="transactions.length">
		<div class="item" v-for="transaction in transactions">
			<router-link
				:to="{
					name: 'transation-details-router',
					params: { id: transaction.id },
				}"
				:key="transaction.id"
			>
				{{ transaction.name }}
			</router-link>
			<div class="price">Price: {{ transaction.price }}</div>
		</div>
	</div>
	<!-- loading -->
	<div v-else>Loading transactions...</div>
</template>

<script setup>
import { ref } from 'vue'

const transactions = ref([])
const error = ref(null)

fetch('http://localhost:3000/transactions')
	.then((response) => response.json())
	.then((data) => {
		transactions.value = data
	})
	.catch((err) => {
		error.value = err.message
	})
</script>

<style scoped></style>
