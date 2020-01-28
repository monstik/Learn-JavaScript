let obj = {
    name: 'Test_obj',
    job: 'test',
    timeSeconds: 0,
    timeMiliSeconds: 0,

    test: function () {
        return 'Привет';
    },

    timerSeconds: function(field){
         this.timeSeconds++;
         field.textContent = this.timeSeconds;
    },
    timerMilliSeconds: function(field){
        this.timeMiliSeconds++;
        field.textContent = this.timeMiliSeconds;
    },

    getElement: function (id) {
       return  document.getElementById(id);
    }
};




