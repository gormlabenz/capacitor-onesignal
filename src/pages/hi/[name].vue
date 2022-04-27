<script setup>
const props = defineProps({ name: string })
const router = useRouter()
</script>

<template>
  <div>
    <div i-carbon-pedestrian class="text-4xl inline-block" />
    <p>Hi, {{ props.name }}</p>
    <p class="text-sm op50">
      <em>Dynamic route!</em>
    </p>

    <div>
      <button class="btn m-3 text-sm mt-8" @click="router.back()">Back</button>
    </div>
  </div>
</template>
