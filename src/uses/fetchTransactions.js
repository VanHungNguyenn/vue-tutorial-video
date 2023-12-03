import { ref } from 'vue'

export default function () {
	const transactions = ref([])
	const error = ref(null)

	const fetchAll = async () => {
		try {
			const res = await fetch('http://localhost:3000/transactions')
			if (!res.ok) {
				throw Error('No data available')
			}

			transactions.value = await res.json()
		} catch (err) {
			error.value = err.message
			console.log(error.value)
		}
	}

	return { transactions, error, fetchAll }
}
