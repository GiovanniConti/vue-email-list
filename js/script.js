Vue.config.devtools = true;

window.addEventListener("DOMContentLoaded", () => {

  new Vue({
    el: '#root',
    data: {
      title: 'Email List',
      url: 'https://flynn.boolean.careers/exercises/api/random/mail',
      emailsList: [],
      counter: 0,
      complete: false,
    },
    methods: {

      emailsListGenerator(){
        do{
          this.generateEmail()
        } while(this.counter < 10)
      },

      generateEmail(){
        if(this.counter === 10){
          this.counter = 0;
          this.emailsList = [];
          this.complete = false;
        }
        this.counter++;

        axios.get(this.url).then((apiResponse) => {
          const email = apiResponse.data.response;
          this.emailsList.push(email);
          if(this.emailsList.length === 10){
            this.complete = true;
          }
        });

      },

    },

  });
});