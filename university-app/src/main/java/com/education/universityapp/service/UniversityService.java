package com.education.universityapp.service;

import com.education.universityapp.model.University;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.specification.RequestSpecification;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;

import static io.restassured.RestAssured.given;

@Service
public class UniversityService {

    @Value("${app.base.url}")
    private String appBaseUrl;

    public List<University> getDefaultUniversities() {
        RequestSpecification specification = this.getRequestSpecification("India");
        List<University> universityList = this.getList(specification);
        return universityList.stream().limit(5).toList();
    }

    public List<University> getUniversities(String country) {
        RequestSpecification specification = this.getRequestSpecification(country);
        List<University> universityList = this.getList(specification);
        return universityList.stream().limit(5).toList();
    }

    private RequestSpecification getRequestSpecification(String country) {
        return new RequestSpecBuilder().setBaseUri(appBaseUrl)
                .addQueryParam("country", country)
                .build();
    }

    private List<University> getList(RequestSpecification specification) {
        return (List<University>) given().spec(specification).get().as(List.class);
    }

}
