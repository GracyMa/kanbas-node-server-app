import * as assignmentDao from "./dao.js";

export default function AssignmentRoutes(app) {

    app.delete("/api/assignments/:assignmentId", (req, res) => {

        const { assignmentId } = req.params;
        assignmentDao.deleteAssignment(assignmentId);
        res.sendStatus(204);
    });

    app.get("/api/assignments/:cid", (req, res) => {

        const { cid } = req.params;
        res.json(assignmentDao.fetchAssignmentsForCourse(cid));
    });

    app.post("/api/assignments", (req, res) => {

        assignmentDao.createAssignment(req.body);
        res.sendStatus(204);
    });

    app.put("/api/assignments", (req, res) => {

        const updatedAssignment = req.body;
        assignmentDao.updateAssignment(updatedAssignment);
        res.sendStatus(204);
    });
}