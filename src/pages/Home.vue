<template>
	<div>Homepage is here</div>
	<input type="text" name="" id="" v-model="searchText" />
	<ul>
		<li v-for="customer in customersFilter" :key="customer">
			<div>{{ customer }}</div>
		</li>
	</ul>
</template>

<script setup>
import { computed, reactive, ref, watch, watchEffect } from 'vue'

const props = defineProps({
	theme: {
		type: String,
		default: 'light',
	},
})

const emit = defineEmits(['changeTheme'])

console.log(props)
console.log(emit)

const searchText = ref('')

const customers = reactive([
	'something',
	'Tran Toan',
	'Sky Albert',
	'VanHungNguyen',
])

watch(searchText, (newVal, oldVal) => {
	console.log(newVal, oldVal)
})

watchEffect(() => {
	console.log('watchEffect', searchText.value)
})

const customersFilter = computed(() => {
	return customers.filter((customer) => customer.includes(searchText.value))
})
</script>

<style scoped></style>
