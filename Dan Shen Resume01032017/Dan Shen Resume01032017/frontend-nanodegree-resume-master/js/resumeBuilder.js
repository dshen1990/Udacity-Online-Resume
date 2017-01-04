var bio = {
    "name": "Dan Shen",
    "role": "Software Developer",
    "contacts": {
        "mobile": "419-450-8256",
        "email": "alice.shen90@gmail.com",
        "github": "dshen1990",
        "location": "Clifton Park, NY"
    },
    "biopic": "images/DanShen.png",
    "welcomeMessage": "I'm currently changing my career from a music teacher to a front-end software engineer. ",
    "skills": ["Html5", "CSS3", "SQL", "Javascript", "Java", "Python", "JQuery"]
};
bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    if (bio.skills.length > 0) {
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedPic);
        var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedMessage);
        $("#header").append(HTMLskillsStart);

        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
        });
    }

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    $("#footerContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    $("#footerContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedLocation);
};
bio.display();

var education = {
    "schools": [{
        "name": "University of Toledo",
        "location": "Toledo, OH",
        "degree": "Masters",
        "majors": ["Music Education"],
        "dates": "June 2014 - May 2016",
        "url": "www.utoledo.edu"
    }],

    "onlineCourses": [{
        "school": "Udacity",
        "title": "Front-End Web Developer",
        "dates": "Nov 2016 - Present",
        "url": "www.udacity.com"
    }]
};
education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", school.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
        var formattedURL = HTMLschoolURL.replace("%data%", school.url);

        $(".education-entry:last").append(formattedName + formattedDegree);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedMajor);
        $(".education-entry:last").append(formattedURL);
    });


    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
        var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
        var formattedURL = HTMLonlineURL.replace("%data%", course.url);

        $(".education-entry:last").append(formattedTitle + formattedSchool);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedURL);
    });

};
education.display();

var work = {
    "jobs": [{
            "employer": "Learning Care Group",
            "title": "Lead Teacher",
            "location": "Clifton Park, NY",
            "dates": "August 2016 - Present",
            "description": "I work as a lead teacher and a music teacher for the school."
        },
        {
            "employer": "Performance School of the Art",
            "title": "Music Teacher",
            "location": "Clifton Park, NY",
            "dates": "March 2016 - Present",
            "description": "I work as a music teacher and I teach piano and voice for all level students."
        },
        {
            "employer": "Our World Montessori",
            "title": "Assistant Teacher",
            "location": "Niskayuna, NY",
            "dates": "January 2016 - Aug 2016",
            "description": "I worked as a assisstant teacher and a music teacher for the montessori school"
        }
    ]
};
work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);
    });
};

work.display();

var projects = {
    "projects": [{
            "title": "Online Portfolio",
            "dates": "December 2016",
            "description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer Nanodegree " +
                "Nanodegree.",
            "images": ["images/project.png"],
            "url": "https://github.com/dshen1990/Udacity-build-a-protfolio"
        },
        {
            "title": "Animal Trading Cards",
            "dates": "November 2016",
            "description": "Created a card of the animal as part of Udacity's Front-End Web Developer Degree" +
                "Nanodegree.",
            "images": ["images/card.png"],
            "url": "https://github.com/dshen1990/Udacity-Animal-Trading-Cards"
        }
    ]
};

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescription);

        project.images.forEach(function(image) {
            var formattedImage = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(formattedImage);
        });
        var formattedURL = HTMLonlineURL.replace("%data%", project.url);
    });
};
projects.display();

$("#mapDiv").append(googleMap);
