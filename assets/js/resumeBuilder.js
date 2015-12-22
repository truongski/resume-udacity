/**
 * Resume info.
 */

var data = "%data%";

var bio = {
    name: "Alexander Truong",
    role: "Applications Developer",
    contacts: {
        mobile: "316-518-0939",
        email: "alexctruong@gmail.com",
        github: "https://github.com/truongski",
        twitter: "https://twitter.com/alexctruong",
        location: "Wichita, KS",
    },
    welcomeMessage: "Currently, I work at NIAR writing the back end for mobile apps and web using .NET, creating virtual reality simulations, and writing internal tools. In May 2015, I graduated with my computer science degree and am working on my masters in CS. My goal is to be more familiar with front end development.",
    skills: [
        "ASP.NET MVC",
        "Django",
        "HTML",
        "jQuery"
    ],
    biopic: "http://i.imgur.com/QI5zY3B.jpg",
    display: function () {
        $(".header")
                .prepend(HTMLheaderRole.replace(data, bio.role))
                .prepend(HTMLheaderName.replace(data, bio.name));

        $(".contacts")
            .append(HTMLemail.replace(data, bio.contacts.email))
            .append(HTMLmobile.replace(data, bio.contacts.mobile))
            .append(HTMLgithub.replace(data, bio.contacts.github))
            .append(HTMLtwitter.replace(data, bio.contacts.twitter))
            .append(HTMLlocation.replace(data, bio.contacts.location));

        $(".header")
            .append(HTMLwelcomeMsg.replace(data, bio.welcomeMessage))
            .append(HTMLbioPic.replace(data, bio.biopic));

        $(".header")
            .append($(HTMLskillsStart));

        for (var i in bio.skills) {
            var skill = bio.skills[i];

            $("#skills").append(HTMLskills.replace(data, skill));
        }
    },
};

var education = {
    schools: [
        {
            name: "Wichita State University",
            location: "Wichita State University",
            degree: "Bachelor of Engineering",
            majors: [
                "Computer Science",
                "Computer Engineering",
            ],
            dates: 2015,
            url: "http://www.wichita.edu",
        },
    ],
    onlineCourses: [
        {
            title: "Front End Development",
            school: "Udacity",
            date: 2015,
            url: "https://www.udacity.com",
        },
    ],
    display: function () {
        for (var i in education.schools) {
            var school = education.schools[i];

            $(".education")
                .append("<h2>Education</h2>")
                .append($(HTMLschoolStart)
                    .append(HTMLschoolName.replace(data, school.name) +
                        HTMLschoolDegree.replace(data, school.degree))
                    .append(HTMLschoolDates.replace(data, school.dates))
                    .append(HTMLschoolLocation.replace(data, school.location))
                    .append(HTMLschoolMajor.replace(data, school.majors)));
        }

        for (var i in education.onlineCourses) {
            var onlineCourse = education.onlineCourses[i];

            $(".education")
                .append(HTMLonlineClasses)
                .append($(HTMLschoolStart)
                    .append(HTMLonlineTitle.replace(data, onlineCourse.title) +
                        HTMLonlineSchool.replace(data, onlineCourse.school))
                    .append(HTMLonlineDates.replace(data, onlineCourse.date))
                    .append(HTMLonlineURL.replace(data, onlineCourse.url)));
        }
    },
};

var work = {
    jobs: [
        {
            employer: "National Institute for Aviation Research",
            title: "Senior Student Assistant",
            location: "National Center for Aviation Research",
            dates: "2013-2015",
            description: "A student assistant at NIAR typically works on projects for various companies \
                such as Textron and Spirit and learns skills relevant to the industry. \
                My particular position is as a programmer at the Virtual Reality lab at NIAR \
                to design and develop Virtual Reality simulations, web applications, \
                and internal tools using .NET, Unity, 3DVIA Studio Pro, and Unreal Engine 4. ",
        },
        {
            employer: "United School District 259",
            title: "AVID Tutor",
            location: "Wichita High School South",
            dates: "2010-2012",
            description: "A college tutor that is trained in AVID techniques. \
                The responsibilities of an AVID tutor include guiding students \
                to improve their study skills and habits, assisting teachers in \
                classroom activities and lectures, and tutoring students on \
                assignments."
        },
    ],
    display: function () {
        for (var i in work.jobs) {
            var job = work.jobs[i];

            $(".work-experience")
                .append("<h2>Work Experience</h2>")
                .append($(HTMLworkStart)
                    .append(HTMLworkEmployer.replace(data, job.employer) +
                        HTMLworkTitle.replace(data, job.title))
                    .append(HTMLworkDates.replace(data, job.dates))
                    .append(HTMLworkLocation.replace(data, job.location))
                    .append(HTMLworkDescription.replace(data, job.description)));
        }
    },
};

var projects = {
    projects: [
        {
            title: "Shuttle Tracker",
            dates: "2014",
            description: "The Shuttle Tracker was developed for Wichita State University after \
                shuttles were introduced to transport people between off-campus parking and campus. \
                Its purpose is to display where the shuttles are on the map in real-time and predict \
                the estimated time to a shuttle stop. ",
            images: [
            ],
        },
    ],
    display: function () {
        for (var i in projects.projects) {
            var project = projects.projects[i];

            $(".projects")
                .append("<h2>Projects</h2>")
                .append($(HTMLprojectStart)
                    .append(HTMLprojectTitle.replace(data, project.title))
                    .append(HTMLprojectDates.replace(data, project.dates))
                    .append(HTMLprojectDescription.replace(data, project.description)));
        }
    },
};