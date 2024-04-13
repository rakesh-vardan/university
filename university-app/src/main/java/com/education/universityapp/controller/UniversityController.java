package com.education.universityapp.controller;

import com.education.universityapp.model.University;
import com.education.universityapp.service.UniversityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequestMapping("/universities")
public class UniversityController {

    @Autowired
    private UniversityService universityService;

    @GetMapping("/v1")
    public String getUniversitiesIndia(Model model) {
        List<University> universityList = universityService.getDefaultUniversities();
        model.addAttribute("universities_v1", universityList);
        return "universities_v1";
    }

    @GetMapping("/v2")
    public String getUniversities(@RequestParam(value = "country", required = false,
            defaultValue = "india") String countryInfo, Model model) {
        List<University> universityList = universityService.getUniversities(countryInfo);
        model.addAttribute("universities_v2", universityList);
        return "universities_v2";
    }


}
