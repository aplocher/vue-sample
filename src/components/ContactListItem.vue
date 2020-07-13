<template>
  <b-list-group-item href="#">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">
        {{ contact.firstName }} {{ contact.lastName }}
      </h5>
      <span
        v-show="contact.isActive"
        class="badge badge-primary mb-1 mt-1"
      >Active</span>
      <span
        v-show="!contact.isActive"
        class="badge badge-warning mb-1 mt-1"
      >Inactive</span>
    </div>
  </b-list-group-item>
</template>
<script>
export default {
  props: {
    contact: {
      type: Object,
      default: function() {
        return null;
      }
    }
  }
};
</script>

<style>
</style>