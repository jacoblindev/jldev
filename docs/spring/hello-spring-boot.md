---
title: Hello Spring Boot
editLink: false
prev:
  text: Dev Notes
  link: /notes/
# next:
#   text: Sample Page
#   link: /notes/sample.md
---

## Getting Start with Spring Boot

### Overview

Well, nowaday everything is connect through APIs. So, let's see how Spring Boot makes building APIs easy...! Here's what we're going to do:
- Build a simple Spring Boot Rest API
- One endpoint that says "Hello Spring Boot"
- One endpoint that greets you with your name

### Project Structure

![Project Structure](/spring/project-structure.png)

- **src**: Source code of the project
- **pom.xml**: Information about the project and configuration details used by Maven to build the project. 
- **.gitignore**: Specify what file or folder to be ignore by git.

- **target**: Target of the build codes. (ignore by git)
- **HELP.md**: Helpful infos for you to start with Spring Boot project.
- **mvnw & mvnw.cmd**: The `mvnw` file is for Linux (bash) and the `mvnw.cmd` is for the Windows environment. This allows you to run the Maven project without having Maven installed and present on the path. It downloads the correct Maven version if it's not found. 

::: tip Maven Wrapper
To create or update all necessary Maven Wrapper files execute the following command:

``` cmd
mvn -N io.takari:maven:wrapper
```

To use a different version of maven you can specify the version as follows:

``` cmd
mvn -N io.takari:maven:wrapper -Dmaven=3.3.3
```

Both commands require maven on PATH (add the path to maven bin to Path on System Variables) if you already have mvnw in your project you can use `./mvnw` instead of `mvn` in the commands.
:::

### Setup Dependencies

We can use [Spring Initializr](https://start.spring.io/) to generate our base project, OR use your IDE to initialize the base project.

Here I'm using the following setup:
- **Maven** Project
- **Java 11**
- Spring Boot **2.6.8**
- Packaging: **Jar** 
- Dependencies:
    - **Spring Web**
    - **Spring Boot DevTools** (for LiveReload if you use VScode, it won't work on IntelliJ...!)

After initialized it, you'll see the following dependencies in your `pom.xml` :

``` xml:no-line-numbers
...
<dependencies>
	<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-web</artifactId>
	</dependency>

	<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-devtools</artifactId>
		<scope>runtime</scope>
		<optional>true</optional>
	</dependency>
	<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-test</artifactId>
		<scope>test</scope>
	</dependency>
</dependencies>
...
```

Add another dependency from [Maven Repository](https://mvnrepository.com/) call **"springdoc-openapi-ui"**, so that we can easily test our APIs right in the browser. It's a library for automate the generation of API documentation using spring boot projects.

``` xml:no-line-numbers
...
<dependency>
	<groupId>org.springdoc</groupId>
	<artifactId>springdoc-openapi-ui</artifactId>
	<version>1.6.9</version>
</dependency>
...
```

### Setup springdoc-openapi

After adding the dependency we can run the application and visit the following path to see the Swagger doc by default:

::: tip API-Docs(JSON) Link
[http://localhost:8080/v3/api-docs/](http://localhost:8080/v3/api-docs/)
:::

::: tip Swagger-UI-Docs Link
[http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)
:::

To customize the path, we can set it in `application.properties`:

``` properties:no-line-numbers
# For the OpenAPI definitions
springdoc.api-docs.path=/api-docs
# For Swagger API documentation
springdoc.swagger-ui.path=/swagger-ui-custom.html
# To sort the API paths in order of their HTTP methods
springdoc.swagger-ui.operationsSorter=method
```

Next add some general description to the API by adding an OpenAPI bean to our `HelloSpringBootApplication.java`:

``` java:no-line-numbers
...
@Bean
public OpenAPI customOpenAPI() {
	return new OpenAPI().info(new Info()
			.title("Hello Spring Boot API")
			.version("v1")
			.contact(new Contact().name("Jacob Lin")
					.email("jacoblindev@gmail.com")
					.url("https://jacoblindev.github.io/jldev/"))
			.description("Hello Spring Boot API created with springdocs - " +
					"a library for OpenAPI 3 with spring boot.")
			.termsOfService("http://swagger.io/terms/")
			.license(new License().name("Apache 2.0")
					.url("http://springdoc.org")));
}
...
```

### Create @RestController

To create the two endpoints, all we need is a java class that annotate with `@RestController`. Then annotate the path we want with `@RequestMapping`. At the class level it will apply to all methods in the class; at method level it will append after the class level one if. We can also annotate with `@GetMapping` or `PostMapping` ... to specify Http methods.

``` java
package com.jldev.hellospringboot;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class HelloController {

    @GetMapping("/hello")
    public ResponseEntity<String> sayHello() {
        return ResponseEntity.ok("Hello Spring Boot");
    }

    @PostMapping("/greeting")
    public ResponseEntity<String> greeting(@RequestBody String name) {
        return ResponseEntity.ok("Hello, " + name + "!");
    }
}
```

### Run Application

Finally, we run the application. If it's successful, you'll see the following logs:

``` log:no-line-numbers
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::                (v2.6.8)

...
INFO 11701 --- [  restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''
INFO 11701 --- [  restartedMain] c.j.h.HelloSpringBootApplication         : Started HelloSpringBootApplication in 2.519 seconds (JVM running for 3.216)
INFO 11701 --- [nio-8080-exec-1] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring DispatcherServlet 'dispatcherServlet'
INFO 11701 --- [nio-8080-exec-1] o.s.web.servlet.DispatcherServlet        : Initializing Servlet 'dispatcherServlet'
INFO 11701 --- [nio-8080-exec-1] o.s.web.servlet.DispatcherServlet        : Completed initialization in 1 ms
```

### Try Out the API

[http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)

![Swagger-UI](/spring/swagger-ui.png)

GET - [http://localhost:8080/api/hello](http://localhost:8080/api/hello)

![GET - /api/hello](/spring/get-endpoint.png)

POST - [http://localhost:8080/api/greeting](http://localhost:8080/api/greeting)

![POST - /api/greeting](/spring/post-endpoint.png)