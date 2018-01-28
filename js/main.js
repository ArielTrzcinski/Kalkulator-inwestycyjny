const sectionStep1 = document.querySelector('#step1');
const sectionStep2 = document.querySelector('#step2');
const sectionStep3 = document.querySelector('#step3');
const sectionStep4 = document.querySelector('#step4');
var initialCosts, fixedCosts, income;

////////////////////////////////////////////////////////////////////////////
// NEXT BUTTON CONTROLLER

document.querySelector('.next-step-2').addEventListener('click', function () {
    sectionStep1.style.display = 'none';
    sectionStep2.style.display = 'block';

    initialCosts = {
        deposit: Number(document.querySelector('#deposit').value),
        firstMonth: Number(document.querySelector('#month1').value),
        equip: Number(document.querySelector('#equip').value),
        renovation: Number(document.querySelector('#renovation').value),
        sum: function () {
            return this.deposit + this.firstMonth + this.equip + this.renovation;
        }
    }
});

document.querySelector('.next-step-3').addEventListener('click', function () {
    sectionStep2.style.display = 'none';
    sectionStep3.style.display = 'block';

    fixedCosts = {
        rent1: Number(document.querySelector('#rent1').value),
        rent2: Number(document.querySelector('#rent2').value),
        internet: Number(document.querySelector('#internet').value),
        water: Number(document.querySelector('#water').value),
        electricity: Number(document.querySelector('#electricity').value),
        gas: Number(document.querySelector('#gas').value),
        other: Number(document.querySelector('#other').value),
        sum: function () {
            return this.rent1 + this.rent2 + this.internet + this.water + this.electricity + this.gas + this.other;
        }
    }
});

document.querySelector('.next-step-4').addEventListener('click', function () {
    sectionStep3.style.display = 'none';
    sectionStep4.style.display = 'block';


    income = {
        room1: Number(document.querySelector('#room-1').value),
        room2: Number(document.querySelector('#room-2').value),
        room3: Number(document.querySelector('#room-3').value),
        room4: Number(document.querySelector('#room-4').value),
        room5: Number(document.querySelector('#room-5').value),
        room6: Number(document.querySelector('#room-6').value),
        room7: Number(document.querySelector('#room-7').value),
        room8: Number(document.querySelector('#room-8').value),
        sum: function () {
            return this.room1 + this.room2 + this.room3 + this.room4 + this.room5 + this.room6 + this.room7 + this.room8;
        }
    }

    document.querySelector('.initial-costs').textContent = 'Łączne koszty początkowe: ' + initialCosts.sum() + ' zł';
    document.querySelector('.fixed-costs').textContent = 'Łączne koszty stałe: ' + fixedCosts.sum() + ' zł';
    document.querySelector('.income').textContent = 'Łączny przychód: ' + income.sum() + ' zł';
    document.querySelector('.revenue').textContent = 'Dochód (po odjęciu 19% podatku): ' + ((income.sum() - fixedCosts.sum()) - ((income.sum() - fixedCosts.sum()) * 0.18)) + ' zł';
    document.querySelector('.return').textContent = 'Zwrot inwestycji w: ' + Math.round(initialCosts.sum() / ((income.sum() - fixedCosts.sum()) - ((income.sum() - fixedCosts.sum()) * 0.18))) + ' msc';
});


////////////////////////////////////////////////////////////////////////
// PREVIOUS BUTTON CONTROLLER

document.querySelector('.prev-step-1').addEventListener('click', function () {
    sectionStep2.style.display = 'none';
    sectionStep1.style.display = 'block';
});

document.querySelector('.prev-step-2').addEventListener('click', function () {
    sectionStep3.style.display = 'none';
    sectionStep2.style.display = 'block';
});

document.querySelector('.prev-step-3').addEventListener('click', function () {
    sectionStep4.style.display = 'none';
    sectionStep3.style.display = 'block';
});
