<script>
export default {
  data() {
    return {
      name: 'John Doe',
      status: 'pending',
      tasks: ['Task One','Task Two','Task Three'],
      link: 'https://www.google.com'
    }
  },
  methods: {
    toggleStats() {
      if(this.status == 'active'){
        this.status = 'pending';
      } else if (this.status == 'pending'){
        this.status = 'inactive';
      } else {
        this.status = 'active';
      }
    }
  }
}
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else="status">User is {{ status }}</p>

  <h3>Tasks: </h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <!-- <a v-bind:href="link">Click for Google</a> -->
  <a :href="link">Click for Google</a>
  <br>
  <br>
  <button @click="toggleStats">Change status</button>
</template>