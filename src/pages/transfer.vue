<template>
  <transfer :data="data" rightTitle="已选择机型" />
</template>

<script setup>
  const data = [
    {
      title: "华为",
      data: [
        {
          id: 1,
          phone_name: "Meta 40 Pro",
          disabled: false
        },
        {
          id: 2,
          phone_name: "P40 Pro",
          disabled: true
        },
        {
          id: 3,
          phone_name: "P50 Pro",
          disabled: false
        },
        {
          id: 4,
          phone_name: "Meta Xs 2",
          disabled: false
        }
      ]
    },
    {
      title: "小米",
      data: [
        {
          id: 5,
          phone_name: "小米1",
          disabled: false
        },
        {
          id: 6,
          phone_name: "小米 P40 Pro",
          disabled: false
        },
        {
          id: 7,
          phone_name: "小米 P50 Pro",
          disabled: false
        },
        {
          id: 8,
          phone_name: "小米 Meta Xs 2",
          disabled: true
        }
      ]
    }
  ]
</script>

<style></style>
