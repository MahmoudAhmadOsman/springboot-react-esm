# Spring Boot React ESM

This is a Java project that serves as the backend for the Spring Boot React ESM application. The project utilizes the Spring Boot framework to build a RESTful API that communicates with a React frontend.


## Installation

To install and run this project locally, please follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/MahmoudAhmadOsman/springboot-react-esm.git
```

2. Navigate to the backend directory:

```bash
cd springboot-react-esm/backend
```

3. Build the project using Maven:

```bash
mvn clean install
```

4. Run the project:

```bash
mvn spring-boot:run
```

The backend server should now be running on `http://localhost:8080`.

## Usage

The RESTful API provided by this project supports various endpoints for interacting with the application. These endpoints can be accessed using HTTP methods such as GET, POST, PUT, and DELETE.

To interact with the API, you can use tools like cURL or utilize the frontend application that communicates with this backend.

Please refer to the API documentation or the frontend application for information on how to utilize the available endpoints and their expected input/output.

## Project Structure

The project structure is organized as follows:

```
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── eforce/
│   │   │           ├── controller/
│   │   │           │   ├── AuthController.java
│   │   │           │   ├── ...
│   │   │           ├── exception/
│   │   │           │   ├── AppExceptionHandler.java
│   │   │           │   ├── ...
│   │   │           ├── model/
│   │   │           │   ├── User.java
│   │   │           │   ├── ...
│   │   │           ├── repository/
│   │   │           │   ├── UserRepository.java
│   │   │           │   ├── ...
│   │   │           ├── service/
│   │   │           │   ├── AuthService.java
│   │   │           │   ├── ...
│   │   │           └── SpringBootReactEsmApplication.java
│   │   └── resources/
│   │       ├── application.properties
│   │       └── ...
│   └── test/
│       └── ...
└── ...
```

The main source code is located in the `src/main/java/com/eforce` directory and is organized into the following packages:

- `controller`: Contains the REST controllers responsible for handling HTTP requests and responses.
- `exception`: Provides exception handling classes for handling various types of exceptions thrown by the application.
- `model`: Defines the data models used by the application.
- `repository`: Contains interfaces for interacting with the data storage (e.g., a database) using Spring Data JPA.
- `service`: Implements the business logic of the application.

The `src/main/resources` directory contains configuration files for the application, such as `application.properties` for defining application-specific properties.

The `src/test` directory contains test files for testing the functionality of the application.

## Technologies

The following technologies and frameworks are used in this project:

- Java: The primary programming language used in this project.
- Spring Boot: A