let lista = [];
for(let i=1; i<=30; i++){
    lista.push(i);
}

var app = new Vue({
 // TODO: Write the vue code
    el: "#app",
    data: {
        setHourss : [1,2,3,4,5,6,7,8,9,10],
        setPayments : lista,

        tasks : [],

        newTask : "",
        newHours : "",
        hourlyPayment : "",
        edit:false,
        currentTask : ""

    },

    methods : {
        add() {
            if (this.newTask && this.newHours){
                this.tasks.push({
                    task : this.newTask,
                    hours: this.newHours,
                });
            }

            this.newTask = "";
            this.newHours = "";
        },

        totalTime(){
            if (this.tasks.length == 0){
                return 0;
            }

            let total = 0;
            for(let i=0; i<this.tasks.length; i++){
                total = total + parseInt(this.tasks[i].hours);
            }
            return total;

        },

        totalMoney(){
            if (this.tasks.length == 0){
                return 0;
            }

            let total = 0;
            for(let i=0; i<this.tasks.length; i++){
                total = total + parseInt(this.tasks[i].hours);
            }

            return total * parseInt(this.hourlyPayment);
        },

        izbrisi(task){
            this.tasks.splice(this.tasks.indexOf(task),1);
        },

        editt(task){
            this.newTask = task.task;
            this.newHours = task.hours;
            this.edit = true;
            this.currentTask = task;

        },

        update(){

            this.currentTask.task = this.newTask;
            this.currentTask.hours = this.newHours;
            this.currentTask = "";
            this.newHours = "";
            this.newTask = "";
            this.edit=false;
        }
    }
});
