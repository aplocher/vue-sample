<template>
  <b-container>
    <b-jumbotron
      header="Contacts"
      lead="Small sample app built by Adam Plocher"
    >
      <p>A vue.js demo to get a handle on vue.js. Includes <b>Bootstrap</b> and <b>Webpack</b></p>
      <b-btn
        variant="primary"
        href="http://www.github.com"
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
				firstName: 'Adam',
				lastName: 'Plocher',
				isActive: true,
				phoneNumbers: [
					{
						type: 'mobile',
						value: '916-555-1212'
					}
				],
				emailAddresses: [
					{
						type: 'personal',
						value: 'test@email.com'
					}
				]
			},
			{
				firstName: 'Jane',
				lastName: 'Doe',
				isActive: true
			},
			{
				firstName: 'John',
				lastName: 'Doe',
				isActive: false
			}
		]
    }
  }
};
</script>
