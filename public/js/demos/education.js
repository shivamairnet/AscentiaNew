// document.addEventListener('mousemove', function (e) {
//     var followMouse = document.getElementById('followMouse');
//     followMouse.style.top = e.clientY + 'px';
//     followMouse.style.left = e.clientX + 'px';
// });

function selectListItem(listItem) {
    $('#list-container li').css('color', 'white');
    $(listItem).css('color', '#0052CD');

    var index = $(listItem).index();
    switch (index) {
        case 0:
            digitizedAdmission();
            break;
        case 1:
            mobileApp();
            break;
        case 2:
            dynamicTrackingModule();
            break;
        case 3:
            studentTrackingModule();
            break;
        case 4:
            busManagement();
            break;
        case 5:
            curriculumManagement();
            break;
        case 6:
            libraryManagement();
            break;
        case 7:
            examinationManagement();
            break;
        case 8:
            staffManagement();
            break;
        case 9:
            humanResourceManagement();
            break;
        case 10:
            portfolioManagement();
            break;
        case 11:
            mediaAppModule();
            break;
        case 12:
            communicationModule();
            break;
        default:
            break;
    }
}

function digitizedAdmission() {
    $("#beyond-bookshell-img").attr("src", "img/education/writing (1) 1.png");
    $("#paragraph").html("<ul><li>Streamline the academic admission process with our platform, from initial inquiry and appointment booking to final registration.</li> <li>Admission staff can easily manage student documents and track applications, while students benefit from secure online payment options for fees like prospectus, application, and admission.</li><li> Optimize efficiency and simplify your admissions process with our user-friendly system.</li></ul>");
}

function mobileApp() {
    $("#beyond-bookshell-img").attr("src", "img/education/knowledge 1.png");
    $("#paragraph").html("<ul><li>Our school CRM efficiently manages <strong>Student Academic Portfolios, Lesson Plans </strong> and track<strong> Academic Progress.</strong></li> <li>With our platform, teachers can assign <strong> Activities</strong>, track <strong>Student Attendance</strong>, give <strong>Homework, Assignments,</strong> and input <strong>Assessment</strong> results for student centered learning.</li><li>Parents can access academic portfolios of their child via our school app to track their <strong>Academic Progress, Lesson Plans,</strong> view <strong>Homework</strong> & <strong>Assignments,</strong> and <strong>Achievements</strong> in real-time.</li></ul>");
}

function dynamicTrackingModule() {
    $("#beyond-bookshell-img").attr("src", "img/education/receipt 1.png");
    $("#paragraph").html("<ul><li>Our <strong>School CRM</strong> revolutionizes student finances by providing a <strong>Dynamic Fee Head</strong> feature. </li><li>Admins can create different fee heads for different <strong>Classes, Batches,</strong> & <strong>For Individual Students.</strong> </li><li>Admins can also create different types of fees like <strong>Registration Fees, Brochure Fees, Quarterly Fees, Semester Fees, Tuition Fees, Application Fees, Admission Fees,</strong> and much more.</li></ul>");
}

function studentTrackingModule() {
    $("#beyond-bookshell-img").attr("src", "img/education/locations 1.png");
    $("#paragraph").html("<ul><li>With our student tracking module, students can mark attendance by scanning the <strong>QR code</strong> via mobile app, and with <strong>Facial Detection</strong> feature it captures <strong>Real-Time</strong> images of students for parental awareness of their child's surroundings.</li><li>Additionally, with the <strong>Pick-Up/Drop-Off</strong> feature, the child's guardian is required to present and scan the assigned <strong>QR Code</strong> before retrieving the child from the academic premises, ensuring child security.</li><li>Within the student tracking module we have integrated <strong>Bus Management Module,</strong> so that administrators and parents can see the <strong>Real-Time</strong> location of school bus & can even contact bus drivers, which further increases safety and convenience.</li></ul>");
}

function busManagement() {
    $("#beyond-bookshell-img").attr("src", "img/education/tracking-app 1.png");
    $("#paragraph").html("<ul><li>The bus management module allows system administrators to optimize <strong>Bus Routes, Schedules & Stops,</strong> which ensures safe and reliable transportation to and from academic premises.</li><li>The bus management module allows system administrators to easily <strong>Plan</strong> and <strong>Adjust</strong> bus routes based on factors like <strong>Student Locations, Traffic Patterns</strong> and <strong>Capacity Limits.</strong></li><li>The module facilitates <strong>Communication</strong> with administrators and parents through <strong>Notifications & Alerts,</strong> informing them of bus time changes or delays.</li></ul>");
}

function curriculumManagement() {
    $("#beyond-bookshell-img").attr("src", "img/education/curriculum 1.png");
    $("#paragraph").html("<ul><li>The Subjects & Curriculum Management module in our School CRM allows teachers and administrators to <strong>Define </strong>& <strong>Manage Curriculum Design, Courses,</strong> and <strong>Academic Programs</strong>  to impart quality education to students.</li><li>Admin & teachers can easily <strong>Create</strong> and <strong>Edit</strong> lesson plans by specifying learning objectives. </li><li>The module also allows teachers to monitor <strong>Course Curriculum Coverage,</strong> which enables seamless coordination of <strong>Lesson Plans,</strong> & <strong>Teacher Assignments,</strong> improving overall teaching effectiveness.</li></ul>");
}

function libraryManagement() {
    $("#beyond-bookshell-img").attr("src", "img/education/online-library 1.png");
    $("#paragraph").html("<ul><li>Our school CRM digital library management module facilitates efficient use of educational resources with features such as <strong>E-Books, Cataloging, Distribution of Books</strong> & <strong>Inventory Management.</strong></li><li>Our school CRM system allow students and teachers to easily <strong>Search & Borrow</strong> books & with other e-learning materials.</li><li>With our system, librarians can keep up-to-date records of <strong>Library Inventory, Track Borrowing Patterns,</strong> & generate meaningful resource usage reports as required by the learning centers.</li></ul>");
}

function examinationManagement() {
    $("#beyond-bookshell-img").attr("src", "img/education/exam 1.png");
    $("#paragraph").html("<ul><li>Through our school CRM examiners can facilitate the <strong>Creation, Scheduling & Administration</strong> of diverse types of <strong>Assessments,</strong> including <strong>Quizzes, Tests, & Examinations</strong> to foster value education.</li><li>Our School CRM exam module enables seamless <strong>Exam Planning, Students Seating Arrangement, Classroom Management, Assigning Invigilators,</strong> thus ensuring smooth conductance of exams.</li><li>The Exam module also facilitates efficient <strong>Review & Analysis</strong> of exam results, providing teachers, students and their parents with valuable information about <strong>Student Performance & Progress.</strong></li></ul>");
}

function staffManagement() {
    $("#beyond-bookshell-img").attr("src", "img/education/management 1.png");
    $("#paragraph").html("<ul><li>With our School's CRM, administrators can manage staff profiles and set <strong>User Access Controls</strong> based on <strong>Roles & Designations.</strong></li><li>Our portal enables school administration to monitor staff <strong>Attendance</strong> by location, including <strong>Check-In</strong> and <strong>Check-Out</strong> times.</li><li>Our staff management module maintain the teacher records and also promote <strong>Openness</strong> and active staff involvement through <strong>Communication</strong> of various <strong>Staff Announcements & Their Accomplishments.</strong></li></ul>");
}

function humanResourceManagement() {
    $("#beyond-bookshell-img").attr("src", "img/education/teamwork 1.png");
    $("#paragraph").html("<ul><li>The module makes it easy to <strong>Recruit, Engage,</strong> and <strong>Manage</strong> institution's staff information.</li><li>The module also allows administrators to manage staff <strong>Profiles, store Staff Records, Contracts</strong> and <strong>Performance Reviews.</strong></li><li>The module allows administrators to <strong>Plan, Schedule</strong> and manage different <strong>Training Programs</strong> and <strong>Workshops</strong> thereby improving teaching methods, strategies and overall teaching philosophy. </li><li>Within the module, we have integrated a <strong>Payroll Module</strong> that enables automated payroll processing and <strong>Attendance Tracking,</strong> which ensures the accuracy of <strong>Payroll Management.</strong></li></ul>");
}

function portfolioManagement() {
    $("#beyond-bookshell-img").attr("src", "img/education/ui-design 1.png");
    $("#paragraph").html("<ul><li>Integrated parent-teacher-student module enables parents to track <strong>Academic Progress, Attendance,</strong> and <strong>School Announcements,</strong> fostering greater parental involvement.</li><li>Staff can use the portal to view & mark their <strong>Location-Specific</strong> attendance, view the <strong>Assigned Classes,</strong> and much more.</li><li>Students can easily access to <strong>Assignments, Lesson Plans, Timetables,</strong> and <strong>Learning Resources,</strong> empowering them to take charge of their learning.</li></ul>");
}

function mediaAppModule() {
    $("#beyond-bookshell-img").attr("src", "img/education/interaction 1.png");
    $("#paragraph").html("<ul><li>Through the <strong>Image Slider</strong> and <strong>Image Gallery</strong> features, administrators can effortlessly showcase highlights from <strong>Events, Sports Competitions, Cultural Performances,</strong> and other <strong>Extracurricular Activities</strong> from their education institution</li><li>Additionally, administrators can upload and share links to <strong>YouTube</strong> videos capturing memorable moments or promotional content related to upcoming intutional functions. </li></ul>");
}

function communicationModule() {
    $("#beyond-bookshell-img").attr("src", "img/education/speech-bubble 1.png");
    $("#paragraph").html("<ul><li>With this module, administrators can send <strong>Announcements, Newsletters,</strong> and provides important updates through <strong>Notice Board</strong> to specific <strong>Classes, Batches,</strong> or to <strong>Individual Students.</strong></li><li>Teachers can use the system to communicate <strong>Lesson Plans, Assignments,</strong> with <strong>Classroom Updates</strong> to students and parents.</li><li>The module also supports two-way communication, <strong>WhatsApp Integration</strong> and other <strong>Chat</strong> features that allow teachers and parents to chat in <strong>Real-Time</strong> and quickly respond to students academic concerns for overall  <strong>Professional Development </strong> of students.</li></ul>");
}

//section-4

function roleBasedAccess() {
    $("#mastering-library-img").attr("src", "img/travel/woman-scanning-fingerprint-with-futuristic-interface-smart-technology 2.svg");
    $("#mastering-library-h5").text("Role-Based Access");
    $("#mastering-library-p").html("<ul><li>With role-based access feature admins can dynamically assign the roles based on factors such as department, location, or project assignment, ensuring that access rights remain aligned with organizational changes.</li><br/><li>Whether it's processing customer bookings, queries or supervising financial transactions, our Role-Based Access features gives your travel company to hold & change your staff access controls, protecting sensitive information and increase efficiency across the board.</li></ul>");
}

function systemSettings() {
    $("#mastering-library-img").attr("src", "img/travel/businessman-pointing-his-business-presentation-high-technology-digital-screen 1.svg");
    $("#mastering-library-h5").text("System Settings");
    $("#mastering-library-p").html("<ul><li>Through our panel administrators ensure that system settings align with your travel company specific needs and goals.</li><br/><li>From setting up Payment Gateways and Defining User Permissions to customizing Notifications and changing Booking Settings, admins play a pivotal role in optimizing your travel company for seamless business operations. </li></ul>");
}

function orderManagement() {
    $("#mastering-library-img").attr("src", "img/travel/close-up-people-planning-trip 1.svg");
    $("#mastering-library-h5").text("Order Management");
    $("#mastering-library-p").html("<ul><li>Through our platform panel administrators can manage User Accounts, Update Their Information, and monitor their Bookings with customers' Travel & Payment queries.</li><br/><li>By effectively managing the orders, admins facilitate smooth operations, optimize resource allocation, and enhance the overall experience for both travel companies and travelers.</li></ul>");
}

function travelerSupport() {
    $("#mastering-library-img").attr("src", "img/travel/medium-shot-woman-working-office-travel-agency 1.svg");
    $("#mastering-library-h5").text("Traveler Support");
    $("#mastering-library-p").html("<ul><li>Through our panel administrators play a crucial role in providing a seamless travel experience for your customers. </li><br/><li>Admins serve as the primary point of contact for your customers offering travel Guidance & Recommendations, and solutions to enhance their travel experience.</li><br/><li>With a focus on Efficiency and Customer Satisfaction, admins ensure that your customers feel supported and valued every step of the way in their travel journey.</li></ul>");
}