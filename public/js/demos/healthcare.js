document.addEventListener('mousemove', function (e) {
    var followMouse = document.getElementById('followMouse');
    followMouse.style.top = e.clientY + 'px';
    followMouse.style.left = e.clientX + 'px';
});

function selectListItem(listItem) {
    $('#list-container li').css('color', 'white');
    $(listItem).css('color', '#0052CD');

    var index = $(listItem).index();
    switch (index) {
        case 0:
            patientManagement();
            break;
        case 1:
            electronicMedicalRecord();
            break;
        case 2:
            remoteConsultationManagement();
            break;
        case 3:
            medicalClaimManagement();
            break;
        case 4:
            patientPortal();
            break;
        case 5:
            prescriptionManagement();
            break;
        case 6:
            billingInnovation();
            break;
        case 7:
            laboratoryManagement();
            break;
        case 8:
            opdIpdManagement();
            break;
        case 9:
            analyticsReporting();
            break;
        case 10:
             development();
            break;
        default:
            break;
    }
}

function patientManagement() {
    $("#beyond-bookshell-img").attr("src", "img/healthcare/patient 1.png");
    $("#paragraph").html("<ul><li>Our healthcare management system allows healthcare service providers to seamlessly <strong>Register</strong> their patients by collecting their <strong>Basic Details </strong>and <strong>Medical Information.</strong></li><li>The healthcare management system enables healthcare providers to seamlessly manage their <strong>Patient Flow, Appointments</strong> and other patient related operations.</li><li>Through our integrated <strong>Patient Portal,</strong> patients can view their <strong>Medical Records, Request Prescription Refills,</strong> and access <strong>Educational Health Resources.</strong></li></ul>");
}

function electronicMedicalRecord() {
    $("#beyond-bookshell-img").attr("src", "img/healthcare/medical-record 1.png");
    $("#paragraph").html("<ul><li>Our healthcare management system centralizes patient records so that healthcare service providers can electronically access their patient information, including patient's<strong> Demographics, Medical History,</strong> and <strong>Clinical Data. </strong></li><li>Through EMRM (Electronic Media Record Management) system, healthcare services providers can give <strong>E-Prescriptions</strong>  to their patients, making it easy for healthcare professionals to change the prescriptions of their patients in future.    </li><li>We've also integrated <strong>Medication</strong> and <strong>Order Management</strong> into our EMRM system, which empowers  healthcare service providers to make clinically informed decisions for their healthcare business.    </li></ul>");
}

function remoteConsultationManagement() {
    $("#beyond-bookshell-img").attr("src", "img/healthcare/hospital 1.png");
    $("#paragraph").html("<ul><li>Through our system, patients can <strong>Virtually Consult</strong>  with healthcare professionals for effective healthcare solutions.</li><li>Integration with video conferencing tools enables <strong>Real-Time</strong> communication between patients and healthcare professionals, for online medical diagnosis of the patients. </li><li><strong>Document Sharing</strong> and <strong>Annotations</strong> tools facilitate collaboration during virtual consultations so that the healthcare professionals can take informed decision about patient's health.</li></ul>");
}

function medicalClaimManagement() {
    $("#beyond-bookshell-img").attr("src", "img/healthcare/health-insurance (1) 1.png");
    $("#paragraph").html("<ul><li>With our system, healthcare service providers can <strong>Electronically</strong> submit their patient <strong>Health Claims</strong> to <strong>Medical Insurance Companies or Payers.</strong></li><li>Our system also offers <strong>Real-Time Medical Insurance Claims Tracking</strong> and <strong>Denial Management</strong> tools, that improves overall medical finances and prevent fraud.</li><li>Healthcare service providers can also generate reports on <strong>Claims, Processing,</strong> and <strong>Reimbursement Metrics,</strong> enabling them to optimize their revenue cycle.</li></ul>");
}

function patientPortal() {
    $("#beyond-bookshell-img").attr("src", "img/healthcare/systems 1.png");
    $("#paragraph").html("<ul><li>With our patient portal, patients can electronically receive help with <strong>Scheduling, Rescheduling,</strong> or <strong>Canceling</strong> their medical appointments as needed.</li><li>Patients can also ask for help to check their <strong>Medical Billing Request, Medical Insurance Coverage,</strong> and even get instructions on understanding <strong>Medical Bills</strong> and <strong>Medical Insurance Requirements.</strong></li><li>With our healthcare system, healthcare service providers can also provide <strong>Follow-Up</strong> support to patients after their appointments, including help with <strong>Medications, Scheduling Follow-Up Visits,</strong> and addressing their <strong>Post-Visit</strong> concerns or questions.</li><li>With our integrated <strong>Multilingual</strong> support feature, we ensure that there is no confusion or <strong>Language Barrier</strong> left between patients and healthcare professionals.</li></ul>");
}

function prescriptionManagement() {
    $("#beyond-bookshell-img").attr("src", "img/healthcare/medical-prescription 1.png");
    $("#paragraph").html("<ul><li>With prescription management, our healthcare system allows healthcare services providers to prepare prescriptions and transmit them <strong>Electronically</strong> to pharmacies, which improves <strong>Prescription Accuracy</strong> and <strong>Reduces Errors.</strong></li><li>Additionally, our system stores the medication history of the patient's <strong>Current and Past Medications, Allergies,</strong> and adverse reactions, so that healthcare professionals can make informed decisions about medications for their patients after diagnosis thereby improving overall medical care of their patients.</li></ul>");
}

function billingInnovation() {
    $("#beyond-bookshell-img").attr("src", "img/healthcare/invoice 2.png");
    $("#paragraph").html("<ul><li>With our system, healthcare providers can generate and manage <strong>Medical Bills </strong> of their patient services, <strong>Process Medical Insurance Claims,</strong> and facilitate payment processing through various methods, including, <strong>Cards, UPI, E -Wallet,</strong> with multiple other online payment methods.</li><li>With automatic billing features, healthcare service providers can streamline the <strong>Medical Billing </strong> process of their healthcare business.</li><li>Healthcare service providers can also create and send billing statements to their patients that summarize their <strong>Medical Bill Due Dates, Payments Made,</strong> and other medical related financial information.</li></ul>");
}

function laboratoryManagement() {
    $("#beyond-bookshell-img").attr("src", "img/healthcare/management-service (1) 1.png");
    $("#paragraph").html("<ul><li>From <strong>Test Sample Collection</strong> to their <strong>Analysis and Reporting,</strong> with our healthcare management system healthcare professionals can easily monitor their patient's test samples.</li><li>We have integrated our laboratory management with the <strong>Patient Portal</strong> so that patients can book their <strong>Medical Tests Online</strong>  with ease.</li><li>We have also integrated our laboratory management with the <strong>Inventory Management system</strong> so that healthcare service providers can keep a track of their medical inventory supplies.</li></ul>");
}

function opdIpdManagement() {
    $("#beyond-bookshell-img").attr("src", "img/healthcare/patient (1) 1.png");
    $("#paragraph").html("<ul><li>With our OPD/IPD management, healthcare service providers can easily schedule the <strong>OPD Visits</strong> with the <strong>Real-Time Bed Allotment</strong> to their IPD patients.</li><li>With inbuilt analysis and reporting features, in OPD, IPD management healthcare service providers can have a real-time access to monitor KPIs such as <strong>Patient Volumes, Wait Times, Bed Occupancy Rate,</strong> and much more.</li><li>With the clinical support feature in our OPD/IPD system, health workers can inform and provide the required medication to their patients on time.</li></ul>");
}

function analyticsReporting() {
    $("#beyond-bookshell-img").attr("src", "img/healthcare/data 1.png");
    $("#paragraph").html("<ul><li>With the analytics & reporting module, healthcare service providers can get the detailed information about their <strong>Patient’s Health  Reports</strong> and of their <strong>Healthcare Business.</strong></li><li>Since we have integrated our analytics & reporting module with every other system, so it's easy for health care service providers to get <strong>Timely</strong> and <strong>Accurate Reports </strong> for their patients.</li><li>With analysis of KPI, healthcare service providers can keep a track record of their patient's <strong>Satisfaction Scores, Resource Allocation,</strong> and <strong>Treatment Costs</strong> to identify key areas of medical care improvement in the future.</li></ul>");
}
function development() {
    $("#beyond-bookshell-img").attr("src", "img/healthcare/data 1.png");
    $("#paragraph").html("<ul><li>Through our mobile app healthcare professionals can easily access the <strong> Medical Records/History, Appointment Scheduling</strong>, of the patients with real-time communication facility with patient and healthcare professional. </li><li><strong>Medication Reminders, Health Tracking</strong>, and encrypted messaging help patients manage their health more effectively and conveniently.</li> <li>With the integration of telemedicine functionality patients can virtually consult with the healthcare professionals easily.</li></ul>");
}

