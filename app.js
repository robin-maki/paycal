const d = new Date();

const App = {
    data() {
        return {
            people: [],
            date: {year: d.getFullYear(), month: d.getMonth() + 1},
            weeks: []
        }
    },
    methods: {
        prevMonth() {
            this.date.month--;
            if(this.date.month <= 0) {
                this.date.month += 12;
                this.date.year--;
            }
            this.generateWeeks();
        },
        nextMonth() {
            this.date.month++;
            if(this.date.month >= 13) {
                this.date.month -= 12;
                this.date.year++;
            }
            this.generateWeeks()
        },
        addPerson() {
            let name = prompt('추가할 사람의 이름을 입력하세요:');
            if(name) {
                this.people.push({name, date: []});
            }
        },
        addDate(person) {
            $('#modal-date').modal('show');
        },
        generateWeeks() {
            //this.weeks = [];
            let month = new Date(this.date.year, this.date.month - 1, 1);
            let day = month.getDay();
            for(let i = 0; i < day; i++) {
                this.weeks.push({display: '-'});
            }
            month.setMonth(month.getMonth() + 1);
            month.setDate(0);
            for(let i = 1; i <= month.getDate(); i++) {
                this.weeks.push({display: i.toString()});
            }
        }
    },
    created() {
        this.generateWeeks();
    }
}

Vue.createApp(App).mount('#app');