/* Your Code Here */
function createEmployeeRecord(array){
    let employeeRecordObj = {
        firstName: array[0] ,
        familyName: array[1] ,
        title: array[2] ,
        payPerHour: array[3] ,
        timeInEvents: [],
        timeOutEvents: [] ,
    }
    return employeeRecordObj;
}

function createEmployeeRecords(array){
  return  array.map(array => createEmployeeRecord(array))
}

const createTimeInEvent = function (date) {
    let splitDate = date.split(" ")
    let timeInObj =  {
        type : 'TimeIn' ,
        hour : parseInt(splitDate[1]),
        date : splitDate[0] ,
    }
   
    this.timeInEvents.push(timeInObj)

    return this
}

const createTimeOutEvent = function(date) {
    let splitDate = date.split(" ")
    let timeOutObj =  {
        type : 'TimeOut' ,
        hour : parseInt(splitDate[1]),
        date : splitDate[0] ,
    }
   
    this.timeOutEvents.push(timeOutObj)

    return this
}

const hoursWorkedOnDate = function(date) {
   let timeIn = this.timeInEvents.find(event => event.date === date)
   let timeOut = this.timeOutEvents.find(event => event.date === date)

   return (timeOut.hour - timeIn.hour) / 100
}

const wagesEarnedOnDate = function(date) {
 return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

const findEmployeeByFirstName = function(srcArray, firstName) {
   return srcArray.find(record => record.firstName === firstName)
}

const reducer = (previous, current) => {
    return previous + current ;
   }
   
const calculatePayroll = function (array){
    let arrayTotal = array.map(rec => allWagesFor.call(rec))
    return arrayTotal.reduce( reducer, 0)
   }
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

