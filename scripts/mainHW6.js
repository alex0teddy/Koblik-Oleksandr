
class Human {
    constructor(height, width, name, date, gender, disability) {
        this.height = height;
        this.width = width;
        this.name = name;
        this.date = date;
        this.gender = gender;
        this.disability = !!disability;
    }

    sayHi () {
        console.log( `Hello, my name ${this.name}`);
    }

    get getInfo () {
        const info = {
            height: this.height,
            width: this.width,
            name: this.name,
            date: this.date,
            gender: this.gender,
            disability: this.disability,
        }
        console.log(info);
    }

    set setNewName (name) {
        this.name = name;
    }

    set setNewDisability (disability) {
        this.disability = disability;
    }
}

const firstHuman = new Human(182,78, "Alex", new Date(1997,9,20),"male","have");
firstHuman.sayHi();
console.log(firstHuman);
firstHuman.getInfo;
firstHuman.setNewName = "Timmy";
firstHuman.setNewDisability = false;
console.log(firstHuman);


class frontendDeveloper extends Human {
    constructor(height, width, name, date, gender, disability, careerStart, previouseCompanies) {
        super(height, width, name, date, gender, disability);
        this.cacareerStart = careerStart;
        this.previouseCompanies = [{
            start: new Date(2009, 4, 18),
            end: new Date(2010, 11, 28),
            salaryPerMonth: Number(7000),
            position: "senior",
            companyName: 'Oracle',
        },{
            start: new Date(2007, 3, 12),
            end: new Date(2009, 8, 28),
            salaryPerMonth: Number(4000),
            position: 'middle',
            companyName: 'Band',
        } ];
    }

    get getInfo() {
        return super.getInfo;
    }

    sayHi2 () {
        console.log(`Привет, меня зовут ${this.name}, я Фронтенд разработчик. Работаю с ${this.cacareerStart}`);
    }

    allSalaryPerMonth () {
        let salaryInCompany;
        this.previouseCompanies.forEach((num) => {
            let salaryYear = (num.end.getFullYear() - num.start.getFullYear()) * 12;
            let salaryMonth = salaryYear + (num.end.getMonth() - num.start.getMonth());
            salaryInCompany = num.salaryPerMonth * salaryMonth;
        })
        console.log(salaryInCompany, `salaryInCompany`);
    }

    nameCompany () {
       let companyName = prompt("Enter name of company", "Oracle");
       this.previouseCompanies.filter((num) => {
           if (num.companyName === companyName) {
               console.log(num);
           }
           });
    }

    setNewCompany (newCompany) {
        this.previouseCompanies.push(newCompany);
        console.log(this.previouseCompanies);
    }

}
const firstFrontendDeveloper = new frontendDeveloper(183,85,"Marv",new Date(1985,10,10),"male",false, new Date(2015,9,9) );
console.log(firstFrontendDeveloper);
firstFrontendDeveloper.sayHi2();
firstFrontendDeveloper.allSalaryPerMonth();
firstFrontendDeveloper.nameCompany();
let newWork = {
    start: new Date(2003,5,6),
    end: new Date(2005,8,20),
    salaryPerMonth: 2000,
    position: 'junior',
    companyName: 'Pareto',
}
firstFrontendDeveloper.setNewCompany(newWork);
firstFrontendDeveloper.getInfo;


class builder extends Human {
    constructor(height, width, name, date, gender, disability,constructionSiteLocation, setOfTools,speed) {
        super(height, width, name, date, gender, disability);
        this.constructionSiteLocation = constructionSiteLocation;
        this.setOfTools = setOfTools;
        this.speed = Number(speed);
    }

    get getInfo() {
        return super.getInfo;
    }

    bildinHouse() {
        let squeareMeter = prompt("Enter squeare Meters");
        let hourOfWOrk = (this.speed * squeareMeter) / 60;

        let day = 0;
        let week = 0;
        let month = 0;
        let year = 0;

        if (hourOfWOrk < 24) {
            console.log(`На стройку уйдет ${hourOfWOrk} часов !`);
        }else if (hourOfWOrk >= 24 && hourOfWOrk <= 168) {
            day = (hourOfWOrk / 24).toString();

            hourOfWOrk = day[2] || 0;

            console.log(`На стройку уйдет ${parseInt(day)} дней и ${hourOfWOrk} часов!`);
        } else if (hourOfWOrk >= 168 && hourOfWOrk < 730) {
            week = (hourOfWOrk / 168).toString();

            day = week[2];
            hourOfWOrk = week[3];
            console.log(`На стройку уйдет ${parseInt(week)} недель, ${day} дней и ${hourOfWOrk} часов!`);
        } else if ( hourOfWOrk >= 730 && hourOfWOrk < 8760) {
            month = (hourOfWOrk / 730).toString();
            week = month[2];
            day = month[3];
            hourOfWOrk = month[4];

            console.log(`На стройку уйдет ${parseInt(month)} месяцев, ${week} недель, ${day} дней и ${hourOfWOrk} часов!`);
        } else  {
            year = (hourOfWOrk / 8760).toString()
            month = year[2];
            week = year[3];
            day = year [4];
            hourOfWOrk = year[5];
            console.log(`На стройку уйдет ${parseInt(year)} лет, ${month} месяцев, ${week} недель, ${day} дней и ${hourOfWOrk} часов!`);
        }
    }
}

const firstBuilder = new builder(190,99,"Bob",new Date(1980,10,3), "male","have","Palm Springs",["кирка", "топор"],35);
console.log(firstBuilder);
firstBuilder.bildinHouse();
firstBuilder.getInfo;