<template>
  <div class="container fullscreen p-5">
    <h2>{{ $t("destination") }}</h2>
    <div class="justify-content-center row my-5">
      <div class="col-8">
        <i-select
          @valueChange="submitDestintation"
          :value="0"
          :data="destinations"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import i18n from "@/i18n";
import { defineComponent } from "vue";
import iSelect from "@/components/iSelect.vue";
import store from "@/store";
import router from "@/router";
export default defineComponent({
  components: {
    iSelect,
  },
  data() {
    return {
      destinations: ["Dokki", "Haram", "Zayed"],
    };
  },
  methods: {
    submitDestintation(item: any) {
      store.state.destionation.id = item;
      store.commit("setDestination", {
        id: item,
        value: this.destinations[item],
      });
      router.push("routes");
    },
  },
});
</script>

<style lang="scss"></style>
