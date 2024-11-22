import Database from "../Database/index.js";

export function fetchAssignmentsForCourse(cid) {

    const { assignments } = Database;
    return assignments.filter((assignment) => assignment.course === cid);
}

export function createAssignment(newAssignment) {

    Database.assignments = [...Database.assignments, newAssignment];
}

export function updateAssignment(updatedAssignment) {

    const { assignments } = Database;
    const assignment = assignments.find((assignment) => assignment._id === updatedAssignment._id);
    Object.assign(assignment, updatedAssignment);
    return assignment;
}

export function deleteAssignment(_id) {
    
    Database.assignments = Database.assignments.filter((x) => x._id !== _id);
}