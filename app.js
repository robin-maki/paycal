const d = new Date();

const App = {
    data() {
        return {
            people: [],
            date: {year: d.getFullYear(), month: d.getMonth() + 1}
        }
    },
    methods: {
        prevMonth() {
            this.date.month--;
            if(this.date.month <= 0) {
                this.date.month += 12;
                this.date.year--;
            }
        },
        nextMonth() {
            this.date.month++;
            if(this.date.month >= 13) {
                this.date.month -= 12;
                this.date.year++;
            }
        },
        addPerson() {
            let name = prompt('추가할 사람의 이름을 입력하세요:');
            if(name) {
                this.people.push({name, date: []});
            }
        },
        addDate(person) {
            $('#modal-date').modal('show');
        }
    },
    computed: {
        weeks() {
            let month = new Date(this.year, this.month - 1);
            
        }
    }
}

Vue.createApp(App).mount('#app');