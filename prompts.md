# Prompts.md

## AI Usage Log

The following prompts were used during the development of this project for learning, debugging, architecture decisions, and understanding backend development concepts.

---

### Project Planning

1. Explain the responsibilities of a REST API server in a full-stack application architecture.

2. What are the standard REST endpoints required for CRUD operations on a Blog resource?

3. Explain the difference between GET, POST, PUT, and DELETE requests with practical examples.

---

### Express.js Fundamentals

4. Explain how Express.js processes incoming HTTP requests and routes them to handlers.

5. What is the purpose of `express.json()` middleware and why is it needed for POST requests?

6. Explain how route parameters work in Express.js and how they are accessed using `req.params`.

---

### CRUD Implementation

7. Explain how an in-memory array can be used to simulate a database during development.

8. What are the advantages and limitations of using an in-memory data store instead of a real database?

9. Explain different approaches for generating unique IDs for blog posts.

10. Review my CRUD implementation and suggest improvements for maintainability and readability.

---

### Middleware Understanding

11. Explain the middleware execution flow in Express.js.

12. How can I create a custom logging middleware that records request method, URL, and timestamp?

13. Explain the role of the `next()` function inside middleware.

---

### REST API Design

14. Review my API endpoints and verify whether they follow RESTful design principles.

15. Explain common HTTP status codes used in REST APIs and when they should be returned.

16. What response structure is recommended for successful and failed API requests?

---

### Validation and Error Handling

17. Explain how to validate incoming request data before processing it.

18. Review my input validation logic and identify potential edge cases.

19. What types of invalid requests should be handled in a blog API?

---

### Project Refactoring

20. Explain the benefits of separating Express applications into routers and controllers.

21. Review my project structure and recommend improvements based on industry practices.

22. Compare a single-file Express application versus a controller-router architecture.

23. Explain why strict equality (`===`) is preferred over loose equality (`==`) in JavaScript.

24. Explain why route parameters should be converted to numbers before comparison.

---

### API Testing

25. Explain a systematic approach for testing CRUD APIs using Thunder Client.

26. What test cases should be executed for Create, Read, Update, and Delete operations?

27. Review my API responses and suggest improvements for consistency.

---

### Authentication Concepts

28. Explain the purpose of JWT authentication in modern web applications.

29. What information is typically stored inside a JWT token?

30. Explain how a mock authentication endpoint differs from a production authentication system.

---

### Code Review Support

31. Analyze reviewer feedback and explain the technical improvements being requested.

32. Review my refactored implementation and verify whether all code review requirements have been satisfied.

33. Explain how my current implementation could be extended to support MongoDB in the future.

---

### Future Learning

34. Explain how Mongoose integrates with Express applications.

35. Compare in-memory storage, MongoDB, PostgreSQL, and MySQL for backend applications.

36. What backend engineering concepts should I learn next after completing this REST API project?

---

## Purpose of AI Usage

AI assistance was used for:

* Concept clarification
* Architecture guidance
* Code review interpretation
* Debugging support
* Best practice recommendations
* Learning backend development principles

AI was not used as a substitute for testing, project execution, GitHub management, or API verification. All endpoints were manually tested using Thunder Client.
