<template>
  <div class="hello">
    {{ this.$store.state.count }}
    <p>{{ this.$store.getters.getCount }} </p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <br/>
    <p>{{count1}}</p>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex" 
export default {
  name: 'HelloWorld',
  data () {
    return {
      count: this.$store.state.count
    }
  },
  computed: {
    ...mapState({
      count1: state => state.count
    })
  },
  methods: {
    increment() {
      this.$store.dispatch('increment')
      // this.$store.commit('increment')
    },
    decrement() {
      this.$store.dispatch('decrement')
      // this.$store.commit('decrement')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
