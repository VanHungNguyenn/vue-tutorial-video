<template>
	<h1>Transaction Detail</h1>
	<h2>{{ transactionId }}</h2>
	<div class="item" v-if="transaction">
		<div class="name">{{ transaction.name }}</div>
		<div class="price">Price: {{ transaction.price }}</div>
	</div>
	<div v-else>Loading transaction {{ transactionId }}...</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const transactionId = route.params.id
const transaction = ref(null)

onMounted(() => {
	fetch(`http://localhost:3000/transactions/${transactionId}`)
		.then((response) => response.json())
		.then((data) => {
			transaction.value = data
		})
		.catch((error) => {
			console.error('Error fetching transaction:', error)
		})
})
</script>

<style scoped></style>
