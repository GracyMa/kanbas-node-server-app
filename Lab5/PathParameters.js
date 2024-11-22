export default function QueryParameters(app) {
    app.get("/lab5/calculator", (req, res) => {
      const { a, b, operation } = req.query; // Extract query parameters
      let result = 0;
  
      switch (operation) {
        case "add":
          result = parseInt(a) + parseInt(b);
          break;
        case "subtract":
          result = parseInt(a) - parseInt(b);
          break;
        case "multiply":
          result = parseInt(a) * parseInt(b); // Multiply
          break;
        case "divide":
          if (parseInt(b) === 0) {
            return res.status(400).send("Division by zero is not allowed"); // Handle division by zero
          }
          result = parseInt(a) / parseInt(b); // Divide
          break;
        default:
          result = "Invalid operation";
      }
  
      res.send(result.toString()); // Return result as a string
    });
  }
  