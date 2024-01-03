# HTTP Request Tester API

This project is an Express server that provides endpoints to test different HTTP methods and status codes. It integrates Swagger UI for interactive API documentation.

## Installation

To run this project locally, follow these steps:

1. Clone this repository:

         git clone https://github.com/OGCfumea/HttpTest.git

2. Navigate to the project directory:

         cd HttpTest

3. Install the dependencies:

         npm install express swagger-ui-express yamljs

4. Start the server:

         node server.js

5. Open your browser and navigate to `http://localhost:3000/api-docs` to view the Swagger UI documentation.

## API Endpoints

### Swagger UI

The Swagger UI for this API can be accessed at <http://localhost:3000/api-docs>. Here, you can explore the available endpoints and interact with the API.
Endpoints

### Test Endpoints

    GET /testGet - Test GET request
    POST /testPost - Test POST request
    PUT /testPut - Test PUT request
    PATCH /testPatch - Test PATCH request
    DELETE /testDelete - Test DELETE request
    GET /test401 - Test 401 Unauthorized
    GET /test403 - Test 403 Forbidden
    GET /test404 - Test 404 Not Found
    GET /test405 - Test 405 Method Not Allowed
    GET /test418 - Test 418 I’m a teapot

## Usage

The server responds with different status codes for each endpoint, simulating various HTTP requests. You can interact with the server using tools like cURL, Postman, or your web browser.

## License

This project is licensed under the GNU License - see the [LICENSE](LICENSE) file for details.
