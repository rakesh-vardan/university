package com.education.universityapp.model;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class University {

    private String name;
    private List<String> domains;
    private String stateProvince;
    private String country;
    private String alphaTwoCode;
    private List<String> webPages;
}
