const {createApp} = Vue
createApp({
    data() {
      return {
        
        apiMailRandom : 'https://flynn.boolean.careers/exercises/api/random/mail',

        emails:[]
      }
    },
    methods: {
        generaMail(){
            axios.get( this.apiMailRandom ).then((oggetto) => {
                //console.log(oggetto)
                //console.log(oggetto.data.response);
                this.emails.push(oggetto.data.response)
            });
        }
    },
    mounted() {
        console.log("ciao Vue")
        
        for (let i = 0; i < 10; i++) {
            this.generaMail();
        }
    }
}).mount('#app')