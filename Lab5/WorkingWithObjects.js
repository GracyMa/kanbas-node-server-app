const assignment = {
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  };
  
  const module = {
    id: "101",
    name: "Introduction to NodeJS",
    description: "Learn the basics of Node.js and Express.js",
    course: "Backend Development",
  };
  
  export default function WorkingWithObjects(app) {
    // Route to retrieve the entire assignment object
    app.get("/lab5/assignment", (req, res) => {
      res.json(assignment);
    });
  
    // Route to retrieve the assignment's title
    app.get("/lab5/assignment/title", (req, res) => {
      res.json(assignment.title);
    });
  
    // Route to update the assignment's title
    app.get("/lab5/assignment/title/:newTitle", (req, res) => {
      const { newTitle } = req.params;
      assignment.title = newTitle;
      res.json(assignment);
    });
  
    // Route to update the assignment's completed property
    app.get("/lab5/assignment/completed/:completed", (req, res) => {
      const { completed } = req.params;
      assignment.completed = completed === "true";
      res.json(assignment);
    });
  
    // Route to update the assignment's score
    app.get("/lab5/assignment/score/:newScore", (req, res) => {
      const { newScore } = req.params;
      assignment.score = parseInt(newScore);
      res.json(assignment);
    });
  
    // Route to retrieve the entire module object
    app.get("/lab5/module", (req, res) => {
      res.json(module);
    });
  
    // Route to retrieve the module's name
    app.get("/lab5/module/name", (req, res) => {
      res.json(module.name);
    });
  
    // Route to update the module's name
    app.get("/lab5/module/name/:newName", (req, res) => {
      const { newName } = req.params;
      module.name = newName;
      res.json(module);
    });
  
    // Route to update the module's description
    app.get("/lab5/module/description/:newDescription", (req, res) => {
      const { newDescription } = req.params;
      module.description = newDescription;
      res.json(module);
    });

  }
  