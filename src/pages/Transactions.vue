<template>
	<div>Transactions</div>
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
		<div class="price">Price: {{ transaction.amount }}</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			transactions: [
				{
					id: 1,
					name: 'Salary',
					amount: 5000,
					type: 'income',
					date: '2021-01-01',
				},
				{
					id: 2,
					name: 'Rent',
					amount: 1000,
					type: 'expense',
					date: '2021-01-02',
				},
				{
					id: 3,
					name: 'Car',
					amount: 2000,
					type: 'expense',
					date: '2021-01-03',
				},
				{
					id: 4,
					name: 'Food',
					amount: 500,
					type: 'expense',
					date: '2021-01-04',
				},
				{
					id: 5,
					name: 'Bonus',
					amount: 1000,
					type: 'income',
					date: '2021-01-05',
				},
			],
		}
	},
}
</script>

<style scoped></style>
