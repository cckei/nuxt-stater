<script setup>
import { useCounterStore } from '~/stores/useCounterStore'

const { locale, setLocale } = useI18n()
const counter = useCounterStore()
</script>

<template>
  <div>
    <div>
      i18n sample:
      <br />
      Current locale: {{ locale }}
      <div><button @click="setLocale('en')">en</button> | <button @click="setLocale('tc')">tc</button>
      </div>
      <p>{{ $t('hello') }}</p>
    </div>

    <hr />

    <div>
      Store example: {{ counter.count }}
      <br />
      <div><button @click="counter.increment">Increment +</button></div>
      <div><button @click="counter.decrement">Decrement -</button></div>
      <div>
        Getter: {{ counter.doubledCount }}
      </div>
    </div>
  </div>
</template>
