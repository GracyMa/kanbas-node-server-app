import Database from "../Database/index.js";

export function findAllCourses() {
  
    return Database.courses;
}

export function findCoursesForEnrolledUser(userId) {

    const { courses } = Database;
    const enrolledCourses = courses;
    return enrolledCourses;
}
// export function findCoursesForEnrolledUser(userId) {
//     const { courses, enrollments } = Database;
//     const enrolledCourses = enrollments
//       .filter(enrollments => enrollments.user === userId)  // Filtering enrollments by userId
//       .map(enrollments => courses.find(course => course._id === enrollments.course));
//     return enrolledCourses;
// }

export function createCourse(course) {
    
    const newCourse = { ...course, _id: Date.now().toString() };
    Database.courses = [...Database.courses, newCourse];
    return newCourse;
}

export function deleteCourse(courseId) {

    const { courses, enrollments } = Database;
    Database.courses = courses.filter((course) => course._id !== courseId);
    Database.enrollments = enrollments.filter(
      (enrollment) => enrollment.course !== courseId
  );
}

export function updateCourse(courseId, courseUpdates) {
    const { courses } = Database;
    const course = courses.find((course) => course._id === courseId);
    Object.assign(course, courseUpdates);
    return course;
}  