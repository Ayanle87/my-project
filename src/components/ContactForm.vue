<template>
  <div class="huvud">
    <h1>Kontakta oss!</h1>
    <p>Fyll i dina kontaktuppgifter nedan:</p>
  </div>
  <div id="ruta">
    <div>
      <form>
        <label for="FirstName" class="label">Förnamn:</label>
        <input class="input" type="text" required v-model="firstName" />
        <label for="LastName" class="label">Efternamn:</label>
        <input class="input" type="text" required v-model="lastName" />
        <label for="email" class="label">Email:</label>
        <input class="input" type="email" required v-model="email" />
        <div id="prenumera">
          <label>
            Vill du prenumerera på vårt nyhetsbrev?
            <input type="checkbox" v-model="subscribe" />
          </label>
        </div>
        <button @click.prevent="onClick" type="button" id="button">
          Registrera
        </button>
      </form>
      <div class="innehåll">
        <p>Förnamn: {{ firstName }}</p>
        <p>Efternamn: {{ lastName }}</p>
        <p>E-post: {{ email }}</p>
        <p>Prenumerera: {{ subscribe ? 'Ja' : 'Nej' }}</p>
      </div>
    </div>
    <div v-if="isRegistered">
      <PropsProps v-if="x !== null" :names="x" />
    </div>
  </div>
</template>
<script>
  import PropsProps from './PropsProps.vue'

  export default {
    components: {
      PropsProps
    },
    name: 'ContactForm',
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        subscribe: false,
        isRegistered: false,
        x: null
      }
    },
    methods: {
      onClick() {
        this.isRegistered = true
        this.x = this.firstName
        this.firstName = ''
        this.lastName = ''
        this.email = ''
        this.subscribe = false

        setTimeout(() => {
          this.x = null
        }, 5000)
      }
    }
  }
</script>
<style>
  body {
    font-family: sans-serif, Arial, Helvetica, sans-serif;
    font-weight: 600;
  }
  .input {
    padding: 20px 10px;
    width: 100%;
    border-radius: 10px;
    border: 1px solid;
    box-shadow: 1px 5px;
  }
  .label {
    display: block;
    padding: 15px 0;
  }
  #ruta {
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 40px;
  }
  .huvud {
    text-align: center;
    padding-top: 50px;
  }
  #button {
    transition-duration: 0.3s;
    width: 90px;
    padding: 5px 0;
    border-radius: 3px;
    margin-left: 10px;
  }

  #button:hover {
    background-color: steelblue;
    color: white;
  }
  .innehåll {
    margin-top: 40px;
    margin-right: 320px;
  }
  #prenumera {
    margin-top: 20px;
  }
</style>
