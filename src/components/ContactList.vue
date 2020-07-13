<template>
  <div>
    <b-list-group>
      <contact-list-item
        v-for="c in contacts"
        v-bind:key="c.id"
        v-bind:contact="c"
      />
    </b-list-group>
  </div>
</template>

<script>
import ContactListItem from "./ContactListItem.vue";
export default {
  components: {
    ContactListItem
  },
  props: {
    contacts: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
</script>

<style>
</style>