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
import useTransactions from '../uses/fetchTransactions'

const { transactions, fetchAll } = useTransactions()

fetchAll()

console.log('transactions', transactions)
</script>

<style scoped></style>
