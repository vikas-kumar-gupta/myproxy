//--------    GLOBAL VARIABLE AND METHOD DECLARATION    ---------

let goal = 75;
let globalTotalClass = 0;
let globalTotalPresent = 0;
let globalTotalAbsent = 0;
let globalPercentage = function () {
    let per = 0;
    per = (globalTotalPresent / globalTotalClass) * 100;
    per = per.toFixed(1);
    return per;
};

let globalUpdate = function () {
    document.querySelector('#global-percentage').innerText = globalPercentage() + '%';
    document.querySelector('#global-classes').innerText = globalTotalClass;
    document.querySelector('#global-present').innerText = globalTotalPresent;
    document.querySelector('#global-absent').innerText = globalTotalAbsent;
    document.querySelector('#global-percentage-circle').innerText = globalPercentage() + '%';
    if (globalPercentage() < 75) {
        document.querySelector('#top-attendance-circle').classList.remove('main-green');
        document.querySelector('#top-attendance-circle').classList.add('main-red');
    } else {
        document.querySelector('#top-attendance-circle').classList.remove('main-red');
        document.querySelector('#top-attendance-circle').classList.add('main-green');
    }
    calcGlobalStatus(globalTotalPresent, globalTotalClass);
};


//--------   METHOD TO CALCULATE NUMBER OF CLASSES TO MISS   -------------

let calcGlobalStatus = function (totalAttend, totalClasses) {
    let innerPercentage = (globalTotalPresent / globalTotalClass) * 100;
    let bunkClass = 0;
    let tempTotalClass = globalTotalClass;
    let tempTotalPresent = globalTotalPresent;

    if (totalAttend < Math.ceil(0.75 * totalClasses)) {
        let classToAttend = Math.ceil(((0.75 * totalClasses) - totalAttend) / 0.25);
        document.querySelector('#note').innerText = 'Attend next ' + classToAttend + " class to get back on track."
        document.querySelector('#note').classList.add('text-danger');
    }
    else {
        while (innerPercentage >= 75) {
            tempTotalClass++;
            innerPercentage = (tempTotalPresent / tempTotalClass) * 100;
            if (innerPercentage >= 75) {
                bunkClass++;
            }
        }
        if (bunkClass == 0) {
            document.querySelector('#note').innerText = 'Yor Are On Track, You Can Not Miss Next Class';
        } else if (bunkClass == 1) {
            document.querySelector('#note').innerText = 'Yor Are On Track, You May Miss Next Class';
        } else {
            document.querySelector('#note').innerText = 'Yor Are On Track, You May Miss Next ' + bunkClass + ' Classes';
        }
        document.querySelector('#note').classList.remove('text-danger');
        document.querySelector('#note').classList.add('text-success');
    }
}


//--------    SUBJECT OBJECT DECLARATION    ---------

class Subject {
    constructor() {
        this.present = 0;
        this.absent = 0;
    }
    totalClasses() {
        return this.absent + this.present;
    }
    percentage() {
        let per = 0;
        per = (this.present / this.totalClasses()) * 100;
        per = per.toFixed(1);
        return per;
    }
    attendance() {
        return this.present + "/" + this.totalClasses();
    }
}


let s1 = new Subject();
let s2 = new Subject();
let s3 = new Subject();
let s4 = new Subject();
let s5 = new Subject();
let s6 = new Subject();
let s7 = new Subject();
let s8 = new Subject();


let updatePresent = function () {
    globalTotalPresent++;
    globalTotalClass++;
    globalUpdate();
};

let updateAbsent = function () {
    globalTotalAbsent++;
    globalTotalClass++;
    globalUpdate();
}

//---------------------------- SUBJECT - 1

document.querySelector('#s1-present').addEventListener('click', function () {
    s1.present++;
    s1UpdateAttendance();
    updatePresent();
});

document.querySelector('#s1-absent').addEventListener('click', function () {
    s1.absent++;
    s1UpdateAttendance();
    updateAbsent();
});

let s1UpdateAttendance = function () {
    document.querySelector('#s1-attendance').innerText = s1.attendance();
    document.querySelector('#s1-percent').innerText = s1.percentage() + '%';
    document.querySelector('#s1-progress').style.width = s1.percentage() + '%';
}


//---------------------------- SUBJECT - 2

document.querySelector('#s2-present').addEventListener('click', function () {
    s2.present++;
    s2UpdateAttendance();
    updatePresent();
});

document.querySelector('#s2-absent').addEventListener('click', function () {
    s2.absent++;
    s2UpdateAttendance();
    updateAbsent();
});

let s2UpdateAttendance = function () {
    document.querySelector('#s2-attendance').innerText = s2.attendance();
    document.querySelector('#s2-percent').innerText = s2.percentage() + '%';
    document.querySelector('#s2-progress').style.width = s2.percentage() + '%';
}


//---------------------------- SUBJECT - 3

document.querySelector('#s3-present').addEventListener('click', function () {
    s3.present++;
    s3UpdateAttendance();
    updatePresent();
});

document.querySelector('#s3-absent').addEventListener('click', function () {
    s3.absent++;
    s3UpdateAttendance();
    updateAbsent();
});

let s3UpdateAttendance = function () {
    document.querySelector('#s3-attendance').innerText = s3.attendance();
    document.querySelector('#s3-percent').innerText = s3.percentage() + '%';
    document.querySelector('#s3-progress').style.width = s3.percentage() + '%';
}


//---------------------------- SUBJECT - 4

document.querySelector('#s4-present').addEventListener('click', function () {
    s4.present++;
    s4UpdateAttendance();
    updatePresent();
});

document.querySelector('#s4-absent').addEventListener('click', function () {
    s4.absent++;
    s4UpdateAttendance();
    updateAbsent();
});

let s4UpdateAttendance = function () {
    document.querySelector('#s4-attendance').innerText = s4.attendance();
    document.querySelector('#s4-percent').innerText = s4.percentage() + '%';
    document.querySelector('#s4-progress').style.width = s4.percentage() + '%';
}


//---------------------------- SUBJECT - 5

document.querySelector('#s5-present').addEventListener('click', function () {
    s5.present++;
    s5UpdateAttendance();
    updatePresent();
});

document.querySelector('#s5-absent').addEventListener('click', function () {
    s5.absent++;
    s5UpdateAttendance();
    updateAbsent();
});

let s5UpdateAttendance = function () {
    document.querySelector('#s5-attendance').innerText = s5.attendance();
    document.querySelector('#s5-percent').innerText = s5.percentage() + '%';
    document.querySelector('#s5-progress').style.width = s5.percentage() + '%';
}


//---------------------------- SUBJECT - 6

document.querySelector('#s6-present').addEventListener('click', function () {
    s6.present++;
    s6UpdateAttendance();
    updatePresent();
});

document.querySelector('#s6-absent').addEventListener('click', function () {
    s6.absent++;
    s6UpdateAttendance();
    updateAbsent();
});

let s6UpdateAttendance = function () {
    document.querySelector('#s6-attendance').innerText = s6.attendance();
    document.querySelector('#s6-percent').innerText = s6.percentage() + '%';
    document.querySelector('#s6-progress').style.width = s6.percentage() + '%';
}


//---------------------------- SUBJECT - 7

document.querySelector('#s7-present').addEventListener('click', function () {
    s7.present++;
    s7UpdateAttendance();
    updatePresent();
});

document.querySelector('#s7-absent').addEventListener('click', function () {
    s7.absent++;
    s7UpdateAttendance();
    updateAbsent();
});

let s7UpdateAttendance = function () {
    document.querySelector('#s7-attendance').innerText = s7.attendance();
    document.querySelector('#s7-percent').innerText = s7.percentage() + '%';
    document.querySelector('#s7-progress').style.width = s7.percentage() + '%';
}


//---------------------------- SUBJECT - 8

document.querySelector('#s8-present').addEventListener('click', function () {
    s8.present++;
    s8UpdateAttendance();
    updatePresent();
});

document.querySelector('#s8-absent').addEventListener('click', function () {
    s8.absent++;
    s8UpdateAttendance();
    updateAbsent();
});

let s8UpdateAttendance = function () {
    document.querySelector('#s8-attendance').innerText = s8.attendance();
    document.querySelector('#s8-percent').innerText = s8.percentage() + '%';
    document.querySelector('#s8-progress').style.width = s8.percentage() + '%';
}