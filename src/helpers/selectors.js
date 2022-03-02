const matchIds = (appointments, ids) => {
    const matched = ids.map(id => appointments[id]);
    return matched;
}

//Go through a state array with a days object and an appointments object
//Match the appointments given in the days object to those in the appointments object
function getAppointmentsForDay(state, day) {
    const output = [];
    for (const elem of state.days) {
        if (elem.name === day) {
            for (const appt of elem.appointments) {
                if (state.appointments[appt]) {
                    output.push(state.appointments[appt]);
                }
            }
        }
    }
    return output;
}

function getInterview(state, interview) {
    if (!interview) {
        return null;
    }

    const interviewerInfo = state.interviewers[interview.interviewer];
    return {
        student: interview.student,
        interviewer: interviewerInfo
    }
}

function getInterviewersForDay(state, day) {
    const output = [];
    for (const elem of state.days) {
        if (elem.name === day) {
            for (const appt of elem.interviewers) {
                if (state.interviewers[appt]) {
                    output.push(state.interviewers[appt]);
                }
            }
        }
    }
    return output;
}

module.exports = { matchIds, getAppointmentsForDay, getInterview, getInterviewersForDay };