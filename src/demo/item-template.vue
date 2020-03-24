<template>
  <div>
    <b>{{ item.id }}</b>
  </div>
</template>

<script>
export default {
  props: {
    item: { required: true },
  },
};
</script>
