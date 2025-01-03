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
            one();
            break;
        case 1:
            two();
            break;
        case 2:
            three();
            break;
        case 3:
            four();
            break;
        case 4:
            five();
            break;
        case 5:
            six();
            break;
        case 6:
            seven();
            break;
        case 7:
            eight();
            break;
        default:
            break;
    }
}

function one() {
    $("#beyond-bookshell-img").attr("src", "img/enterprises/award 1.png");
    $("#paragraph").html(`<ul><p class="text-dark mt-2">Our reward management system includes various features for businesses such as - </p> <li><strong>Multiple Rewards:</strong> Businesses can manage diverse reward programs with customizable rules.</li><li><strong>Define Rules:</strong> Businesses can define reward criteria based on their user behavior.</li><li><strong>Reward Conditions:</strong> Businesses can set expiration dates of rewards & conditions for higher user engagement.</li><li><strong>Referral Rewards:</strong> Businesses can incentivize their customers for referring their friends and family with unique and personalized referral codes.</li></ul>`);
}

function two() {
    $("#beyond-bookshell-img").attr("src", "img/enterprises/catalogue 1.png");
    $("#paragraph").html("<ul><li>With our customizable reward catalogue management system businesses can categories and create customizable reward categories to match their audience preferences. </li> <li>With Easy Point Redemption feature, customers can easily redeem their points by scanning the QR code from their mobile.</li><li>Moreover businesses can can dynamically update the reward options in real-time to keep offerings fresh and relevant for their customers.</li>   </ul>");
}

function three() {
    $("#beyond-bookshell-img").attr("src", "img/enterprises/map 1.png");
    $("#paragraph").html(`<ul><p class="text-dark mt-2">Our Visit Management module includes various features such as -  </p> <li><strong>Efficient Route Planning and Management Module:</strong> Effortlessly create, assign, and manage staff routes with real-time tracking, ensuring timely completion of tasks and improved efficiency.</li><li><strong>Optimized Routes for Time and Cost Savings Module:</strong> Optimize travel routes to maximize efficiency, reduce travel time, and minimize operational costs, allowing your business to operate more effectively.</li><li><strong>Customizable Routes for Specific Needs Module:</strong>Tailor travel routes to meet specific business requirements, such as visiting key retailer locations, ensuring that your staff covers the most important stops.</li></ul>`);
}

function four() {
    $("#beyond-bookshell-img").attr("src", "img/enterprises/risk-management 1.png");
    $("#paragraph").html(`<ul> <p class="text-dark mt-2">Key features included in our compliance & risk management module are:-   </p>
                                        <li><strong>Automated Regulatory Compliance Management :</strong>With automated regulatory compliance management system business can track real-time regulatory changes and can update the compliance rules.</li>
                                        <li><strong>Risk Assessment & Management:</strong> With risk assessment & management module business can run simulation on different risk scenarios to prepare for future outcomes and prepare mitigation strategies.</li>
                                        <li><strong>Continuous Monitoring and Auditing:</strong>With continuous monitoring and auditing module, businesses can automate the audit process with predefined checklists and criteria.</li></ul>`);
}

function five() {
    $("#beyond-bookshell-img").attr("src", "img/enterprises/financial-management 1.png");
    $("#paragraph").html(`<ul><p class="text-dark mt-2">The financial management module in our ERP system includes various features such as -</p>
                                        <li><strong>Automated Financial Reporting: </strong>With our financial management module businesses can generate accurate financial statements, balance sheets, and income reports automatically, reducing the manual errors and saving their crucial time.</li>
                                        <li><strong>Real-Time Budgeting and Forecasting: </strong> Businesses can monitor and adjust budgets in real-time, with tools that provide insights into financial performance and future projections.   </li>
                                        <li><strong>Comprehensive Compliance Management: </strong> Moreover, businesses can ensure adherence to regulatory requirements with built-in compliance checks, audit trails, and financial controls, minimizing the overall financial risk.</li></ul>`);
}

function six() {
    $("#beyond-bookshell-img").attr("src", "img/enterprises/catalogue 2.png");
    $("#paragraph").html(`<ul> <p class="text-dark mt-2">In our product & Catalogue management system, we have - </p>
                                        <li><strong>Comprehensive Catalogue Management Module: </strong>In comprehensive catalogue management module, users can effortlessly browse rewards through a detailed and well-organized catalogue, enhancing their selection experience</li>
                                        <li><strong>Product Details: </strong> Users can access detailed information of various products, including descriptions and images, directly from the mobile app, making informed decisions easier.</li>
                                        <li><strong>Search and Filter: </strong> Users can quickly find products using filters by category, points, or popularity, streamlining their search for the perfect reward.</li>
                                        <li><strong>Instant Updates: </strong> Users also receive real-time notifications alerts on product availability, ensuring they stay up-to-date with the latest offerings.</li>  </ul>`);
}

function seven() {
    $("#beyond-bookshell-img").attr("src", "img/enterprises/expert-team 1.png");
    $("#paragraph").html(`<ul><p class="text-dark mt-2">In our loyalty management system we have integrated various features such as -  </p>
                                        <li><strong>Reward Points System: </strong>With our Loyalty Management module, customers can earn valuable points with every purchase, encouraging repeat business and enhancing customer retention</li>
                                        <li><strong>Tiered Rewards System: </strong>Businesses can set up tiered reward structures, offering customized incentives based on customer engagement or spending levels, driving higher customer loyalty and satisfaction.</li>
                                        <li><strong>Flexible Redemption Options: </strong>Our Loyalty Management module allows customers to redeem their points for a variety of rewards, including discounts, freebies, and exclusive perks, providing a personalized and rewarding experience.</li>
 </ul>`);
}

function eight() {
    $("#beyond-bookshell-img").attr("src", "img/enterprises/data-analytics 1.png");
    $("#paragraph").html(`<ul><li>With our Advanced Data Analytics & Reporting feature, businesses can delve deeply into <strong>Complaint Trends</strong>, discover <strong>Reoccurring Issues</strong>, and accurately <strong>Evaluate Consumer Complaints.</strong> </li>
                                        <li>Customizable reporting dashboards provide stakeholders with <strong>Real-Time</strong> visibility into important <strong>Key Performance Indicators</strong>, enabling <strong>Proactive Intervention</strong> and continuous improvement programs.</li></ul>`);
}



