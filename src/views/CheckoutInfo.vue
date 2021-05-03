<template>
  <div class="container fullscreen p-5">
    <h2>{{ $t("tripInfo.name") }}</h2>
    <div class="justify-content-center row my-5">
      <div class="col-8">
        <div class="card">
          <div class="card-info">
            <label>{{ $t("tripInfo.id") }}</label>
            <span>23123123</span>
          </div>
          <div class="card-info">
            <label>{{ $t("tripInfo.destination") }}</label>
            <span>{{ desStop.value }}</span>
          </div>
          <div class="card-info">
            <label>{{ $t("tripInfo.route") }}</label>
            <span>{{ route.name }}</span>
          </div>
          <div class="card-info">
            <label>Fair</label>
            <span>1.2x</span>
          </div>
          <div class="card-info">
            <label>Car No.</label>
            <span>14D23</span>
          </div>
        </div>
        <Button class="col-6">{{ $t("tripInfo.confirm") }}</Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import iButtonVue from "@/components/iButton.vue";
import store from "@/store";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Button: iButtonVue,
  },
  setup() {
    return {
      desStop: store.state.destionation,
      route: store.state.route,
    };
  },
});
</script>

<style lang="scss">
.card {
  border: 0 !important;
}
.card-info {
  padding: 0.5rem 1rem;
  font-size: 1.4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: 0.1rem solid var(--ivan-primary);
  border-radius: 0.3rem;
  margin: 0.4rem 0;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
  &:hover {
    background: var(--ivan-primary);
    color: var(--ivan-secondary);
  }
}
</style>
