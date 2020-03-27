<template>
  <div style="text-align: center; width: 100%;">
    <vue-suggestion :items="items" :setLabel="setLabel" @changed="inputChange"></vue-suggestion>

    <vue-suggestion :items="items" :setLabel="setLabel" @changed="inputChange"></vue-suggestion>

    <template v-if="item && item.id">
      <p>Selected item:</p>
      <code>{{ item }}</code>
    </template>
  </div>
</template>

<script>
import animals from "./demo/animals";

export default {
  name: "demo",
  data() {
    return {
      itemsApi: [],
      item: {},
      items: [],
      isLoading: true
    };
  },
  methods: {
    setLabel(item) {
      return item.name;
    },
    inputChange(text) {
      this.items = animals.filter(item =>
        new RegExp(text.toLowerCase()).test(item.name.toLowerCase())
      );
    }
  }
};
</script>

<style>
.vue-suggestion {
  width: 50%;
  max-width: 400px;
  margin: 0 auto;
}
.vue-suggestion .vs__input-group .vs__input {
  width: 100%;
  display: block;
  margin: 0 auto;
  padding: 0.5rem 0.7rem;
  font-size: 0.9rem;
  line-height: 1.25;
  color: #464a4c;
  outline: none;
  background-color: #fff;
  background-image: none;
  background-clip: padding-box;
  border: 1px solid #cecece;
  border-radius: 0.25rem;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}

.vue-suggestion .vs__input-group .vs__input:focus {
  border: 1px solid #023d7b;
}

.vue-suggestion .vs__list {
  width: 100%;
  text-align: left;
  border: none;
  border-top: none;
  max-height: 400px;
  overflow-y: auto;
  border-bottom: 1px solid #023d7b;
}

.vue-suggestion .vs__list .vs__list-item {
  cursor: pointer;
  background-color: #fff;
  padding: 10px;
  border-left: 10px solid #023d7b;
  border-right: 1px solid #023d7b;
}

.vue-suggestion .vs__list .vs__list-item:last-child {
  border-bottom: none;
}

.vue-suggestion .vs__list .vs__list-item:hover {
  background-color: #eee !important;
}
</style>
