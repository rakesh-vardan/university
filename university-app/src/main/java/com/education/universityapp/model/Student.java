package com.education.universityapp.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Student {
    private String _id;
    private String gender;
    private Name name;
    private Location location;
    private String email;
    private Login login;
    private Dob dob;
    private Registered registered;
    private String phone;
    private String cell;
    private Id id;
    private Picture picture;
    private String nat;
}

@Getter
@Setter
class Name {
    private String title;
    private String first;
    private String last;
}

@Getter
@Setter
class Coordinates {
    private String latitude;
    private String longitude;
}

@Getter
@Setter
class Timezone {
    private String offset;
    private String description;
}

@Getter
@Setter
class Login {
    private String uuid;
    private String username;
    private String password;
    private String salt;
    private String md5;
    private String sha1;
    private String sha256;
}

@Getter
@Setter
class Dob {
    private String date;
    private int age;
}

@Getter
@Setter
class Registered {
    private String date;
    private int age;
}

@Getter
@Setter
class Id {
    private String name;
    private String value;
}

@Getter
@Setter
class Picture {
    private String large;
    private String medium;
    private String thumbnail;
}