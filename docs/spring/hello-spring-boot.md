---
title: Hello Spring Boot
editLink: false
prev:
  text: Dev Notes
  link: /notes/
next:
  text: Sample Page
  link: /notes/sample.md
---

## Getting Start with Spring Boot

### Overview

Well, nowaday everything is connect through APIs. So, let's see how Spring Boot makes building APIs easy...! Here's what we're going to do:
- Build a simple Spring Boot Rest API
- One endpoint that says "Hello Spring Boot"
- One endpoint that greets you with your name

### Setup

We can use [Spring Initializr](https://start.spring.io/) to generate our base project, OR use your IDE to initialize the base project.

Here I'm using the following setup:
- **Maven** Project
- **Java 11**
- Spring Boot **2.7.0**
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

### Project Structure

![Project Structure](/spring/project-structure.png)
