<template>
  <div>
    <div>
      First name: {{ contact.firstName }}
    </div>
    <div>
      Last name: {{ contact.lastName }}
    </div>
    <div>
      Email: {{ contact.email }}
    </div>
    <div>
      Phone: {{ contact.phone }}
    </div>
  </div>
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
  },
  methods: {}
};
</script>

<style>
</style>