<template>
  <div>
    <b-form
      @submit="onSubmit"
      @reset="onReset"
    >
      <b-row>
        <b-col>
          <b-form-group label="First name:">
            <b-form-input
              id="firstNameInput"
              v-model="contact.firstName"
            />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Last name:">
            <b-form-input
              id="lastNameInput"
              v-model="contact.lastName"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group label="Email:">
            <b-form-input
              id="emailInput"
              v-model="contact.email"
            />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Phone:">
            <b-form-input
              id="phoneInput"
              v-model="contact.phone"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group>
            <b-form-checkbox
              v-model="contact.isActive"
              name="check-button"
              switch
            >
              {{ contact.isActive ? "Active" : "Inactive" }}
            </b-form-checkbox>
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>
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
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.contact));
    },
    onReset() {}
  }
};
</script>

<style>
</style>