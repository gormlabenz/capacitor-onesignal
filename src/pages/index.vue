<script setup>
const name = ref('')
const router = useRouter()
const go = () => {
  if (name) router.push(`/hi/${encodeURIComponent(name)}`)
}
</script>

<template>
  <div>
    <div i-carbon-campsite class="text-4xl inline-block" />
    <p>
      <a
        rel="noreferrer"
        href="https://github.com/antfu/vitesse-lite"
        target="_blank"
      >
        Vitesse Lite
      </a>
    </p>
    <p>
      <em class="text-sm op75">
        Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
        IpsumLorem Ipsum
      </em>
    </p>

    <div py-4 />

    <input
      id="input"
      v-model="name"
      placeholder="What's your name?"
      type="text"
      autocomplete="false"
      class="w-full px-4 py-2 text-lg border border-gray-300 rounded-lg"
      @keydown.enter="go"
    />

    <div>
      <button class="m-3 text-sm btn" :disabled="!name" @click="go">Go</button>
    </div>
  </div>
</template>
