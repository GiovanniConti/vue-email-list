Vue.config.devtools = true;

window.addEventListener("DOMContentLoaded", () => {

  new Vue({
    el: '#root',
    data: {
      title: 'Email List',
      url: 'https://flynn.boolean.careers/exercises/api/random/mail',
      emailList: [],
      counter: 0,
    },
    methods: {
      emailListGenerator(){
        do{
          this.generateEmail()
        } while(this.counter < 10)
      },

      generateEmail(){
        if(this.counter === 10){
          this.counter = 0;
          this.emailList = [];
        }
        this.counter++;

        axios.get(this.url).then((apiResponse) => {
          const email = apiResponse.data.response;
          this.emailList.push(email);
        });

      },

    },

  });
});