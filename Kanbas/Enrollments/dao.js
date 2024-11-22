import Database from "../Database/index.js";

export function enrollUserInCourse(userId, courseId) {
 
    const { enrollments } = Database;
    enrollments.push({ _id: Date.now(), user: userId, course: courseId });
}

export function addEnrollment(newEnrollment) {

    Database.enrollments = [...Database.enrollments, newEnrollment];
}

export function deleteEnrollment(deleteId, userID) {

    Database.enrollments = Database.enrollments.filter((enrollment) => ((enrollment.course !== deleteId) || (enrollment.user !== userID)));
}

export function fetchEnrollments(userID) {
    
    return Database.enrollments.filter((enr) => enr.user === userID);
}