package com.education.universityapp;

import com.education.universityapp.model.Result;
import com.education.universityapp.model.Student;
import com.education.universityapp.model.StudentUpdate;
import io.restassured.http.ContentType;
import io.restassured.mapper.ObjectMapper;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;

import java.util.List;

import static io.restassured.RestAssured.given;

public class TestDataUtils {

    public static void main(String[] args) {

        String URL = "https://randomuser.me/api/?results=1&nat=in";
        String URL2 = "https://crudcrud.com/api/17052c86fc2d432680f34627496592ee/students";

        for(int i=0; i < 10; i++) {
            Result result = given().when().get(URL).as(Result.class);
            Student student = result.getResults().get(0);
            given().body(getUpdatedStudent(student)).contentType(ContentType.JSON).when().post(URL2)
                    .then().statusCode(201);
        }
    }

    private static StudentUpdate getUpdatedStudent(Student student) {
        StudentUpdate st = new StudentUpdate();
        st.setLocation(student.getLocation());
        st.setId(student.getId());
        st.setCell(student.getCell());
        st.setDob(student.getDob());
        st.setGender(student.getGender());
        st.setLogin(student.getLogin());
        st.setNat(student.getNat());
        st.setEmail(student.getEmail());
        st.setPhone(student.getPhone());
        st.setName(student.getName());
        st.setPicture(student.getPicture());
        st.setRegistered(student.getRegistered());
        return st;
    }
}
