<template>
  <div>
    <b-list-group>
      <contact-list-item
        v-for="c in contacts"
        :key="c.id"
        :contact="c"
        @selected-contact-changed="selectContact"
      />
    </b-list-group>

    <b-modal
      id="modal-1"
      title="Contact form"
    >
      <contact :contact="selectedContact" />
    </b-modal>
  </div>
</template>

<script>
import ContactListItem from "./ContactListItem.vue";
import Contact from "./Contact.vue";
export default {
  components: {
    ContactListItem,
    Contact
  },
  props: {
    contacts: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data: function() {
    return {
      selectedContact: {
        type: Object,
        default: function() {
          return null;
        }
      }
    };
  },
  methods: {
    selectContact(value) {
      this.selectedContact = value;
    }
  }
};
</script>

<style>
</style>