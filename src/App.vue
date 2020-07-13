<template>
  <b-container>
    <b-jumbotron
      header="Contacts"
      lead="Small sample app built by Adam Plocher"
    >
      <p>A vue.js demo to get a handle on vue.js. Includes <b>Bootstrap</b> and <b>Webpack</b></p>
      <b-btn
        variant="primary"
        href="https://github.com/aplocher/vue-sample"
      >
        Github Link
      </b-btn>
    </b-jumbotron>

    <contact-list :contacts="getContacts" />
  </b-container>
</template>
<script>
import ContactList from "./components/ContactList.vue";
export default {
  components: {
    ContactList
  },
  computed: {
    getContacts() {
      return [
        {
          id: 1,
          isActive: true,
          firstName: "Adam",
          lastName: "Plocher",
          phone: "916-555-5555",
          email: "test@email.com"
        },
        {
          id: 2,
          isActive: true,
          firstName: "Jane",
          lastName: "Doe",
          phone: "222-222-2222",
          email: "jane@doe.com"
        },
        {
          id: 3,
          isActive: false,
          firstName: "John",
          lastName: "Doe",
          phone: "111-111-1111",
          email: "john@doe.com"
        }
      ];
    }
  }
};
</script>
