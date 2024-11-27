// code your solution here
function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity ="go to the office") => `This Monday, I will ${activity}.`

const wrapAdjective = (flair = "*")=> {
    return function (something = "special") {
        return `You are ${flair}${something}${flair}!`
    }
}