<template>
	<v-app>
		<v-app-bar app color="primary" dark>
			<span><img src="./assets/favicon.png" alt=""/></span>
			<v-toolbar-title
				>第9回シンデレラガール総選挙 出口調査集計
			</v-toolbar-title>
		</v-app-bar>

		<v-content>
			<v-container>
				<v-card>
					<v-select
						v-model="select"
						:items="states"
						item-text="label"
						item-value="value"
						label="選択してください"
					></v-select>
					<v-data-table
						:headers="headers"
						:items="items"
						:loading="loading"
						:items-per-page="50"
					>
						<template v-slot:item.rank="{ item }">
							{{ item.rank }}位
						</template>
					</v-data-table>
				</v-card>
			</v-container>
		</v-content>
	</v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { defineComponent, ref, onMounted, watch } from "@vue/composition-api";
import axios from "axios";

type Item = {
	rank: number;
	name: string;
	type: "cute" | "cool" | "passion";
	total: number;
};
type Header = {
	text: string;
	value: string;
	align?: "start" | "center" | "end";
	sortable?: boolean;
	filterable?: boolean;
	divider?: boolean;
	class?: string | string[];
	width?: string | number;
	filter?: (value: any, search: string, item: any) => boolean;
	sort?: (a: any, b: any) => number;
};
type Result = {
	rank: number;
	name: string;
	type: "cute" | "cool" | "passion";
	voice?: boolean;
	sum: number;
};

export default defineComponent({
	setup() {
		const items = ref<Item[]>([]);
		const headers = ref<Header[]>([
			{ text: "順位", value: "rank", sortable: true },
			{ text: "アイドル名", value: "name", sortable: false },
			{ text: "属性", value: "type", sortable: false, filterable: true },
			{ text: "集計数", value: "total", sortable: true }
		]);
		const loading = ref(true);
		const states = ref([
			{ label: "第9回シンデレラガール総選挙", value: "cinderella" },
			{ label: "ボイスアイドルオーディション", value: "voiceidol" }
		]);
		const select = ref("cinderella");

		const getData = async (p: string) => {
			loading.value = true;
			await axios
				.get(
					"https://script.google.com/macros/s/AKfycbwFocE3UbBzy7b7xUl575sUnbmU4WUZCdjIGZLl3mJZT6tQOEhL/exec",
					{ params: { p: p } }
				)
				.then(res => {
					console.log(res.data);
					//var values = JSON.parse(res.data)
					items.value = res.data.map((item: Result) => {
						return {
							rank: item.rank,
							name: item.name,
							type: item.type,
							total: item.sum
						};
					});
					loading.value = false;
				})
				.catch(e => {
					console.error(e);
				});
		};
		watch(select, async (newVal, oldVal) => {
			getData(select.value);
		});

		return {
			items,
			headers,
			loading,
			states,
			select,
			getData
		};
	}
});
</script>
