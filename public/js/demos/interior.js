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
        case 8:
            nine();
            break;
        case 9:
            ten();
            break;
        default:
            break;
    }
}

function one() {
    $("#beyond-bookshell-img").attr("src", "img/interior/room 1.png");
    $("#paragraph").html("<ul><li>The Space Planning tools offer features such as <strong>Drag-And-Drop</strong> functionality, and <strong>Pre-Built</strong> templates, with various configuration option that make it easy to create accurate <strong>Floor and Wall Designs</strong>.</li><li><strong>Measurement Tools</strong> in Space Planning tools help your customers to ensure the <strong>Proper Scale</strong> and proportions of elements, while <strong>Grid And Snap Tools</strong> help you to organize the precise placement and alignment of elements.</li> <li><strong>Layering Systems</strong> help customers to organize <strong>Different Design Components</strong>, with different <strong>View Modes</strong> allowing your customers to visualize <strong>Floors and Walls</strong> from different perspectives. </li></ul>");
}

function two() {
    $("#beyond-bookshell-img").attr("src", "img/interior/model 1.png");
    $("#paragraph").html("<ul><li>Our <strong>3D Modelling & Rendering</strong> feature includes powerful modeling capabilities for creating intricate <strong>Structures and Objects</strong>, such as <strong>Walls, Floors, Furniture, and Fixtures</strong>, with precise dimensions and proportions. </li><li> Integration with <strong>Texture Mapping</strong> and material libraries in 3D Modelling & Rendering helps your customers to realistically place <strong>Surface Finishes</strong>, such as <strong>Wood, Metal, Fabric, and Glass</strong>. </li><li>  Advanced rendering image engines produce <strong>High-Quality Images</strong> and <strong>Visualizations</strong>, leveraging techniques like <strong>Ray Tracing and Global Illumination</strong> to simulate realistic light interactions and shadows.</li></ul>");
}

function three() {
    $("#beyond-bookshell-img").attr("src", "img/interior/fabric 1.png");
    $("#paragraph").html("<ul><li>With <strong>Materials And Finishes Libraries</strong>, our system offers a wide range of <strong>Materials, Finishes, Fabrics, Textures, and Patterns</strong>, giving your customers a wide range of choices when designing interiors for their home.</li><li>Key features in our Material & Finish Libraries include <strong>Categorized</strong> and <strong>Searchable Databases</strong> that makes it easy for customers to search specific materials or finishes tailored to their home requirements.</li><li>With Detailed material information, such as <strong>Durability, Maintenance Requirements</strong>, and <strong>Cost</strong>, helps your customers to make informed decisions about material selection based on <strong>Functional</strong> and <strong>Aesthetic Considerations.</strong></li></ul>");
}

function four() {
    $("#beyond-bookshell-img").attr("src", "img/interior/package 1.png");
    $("#paragraph").html("<ul><li>With Property Inventory Management your customers can strategically <strong>Catalog Furniture, Fixtures, Materials, Finishes</strong>, and <strong>Other Items.</strong></li><li>Customers can create detailed inventories for each project and specify <strong>Quantities, Descriptions, Dimensions</strong>, and other relevant information for each item</li><li>Custom field settings allow your customers to <strong>Add Custom Fields</strong> to your inventories and attributes to learn more about the project or customer requirements.</li></ul>");
}

function five() {
    $("#beyond-bookshell-img").attr("src", "img/interior/spending 1.png");
    $("#paragraph").html("<ul><li>A key feature of our Payment Collection Management Solution is <strong>Automatic Invoicing</strong>, which allows you to <strong>Create</strong> and <strong>Send</strong> invoices to your clients immediately upon <strong>Project Completion</strong> or at <strong>Pre-Defined Milestones.</strong></li><li>Online payment processing capabilities enable your customers to conveniently make payments using <strong>Credit Cards, Bank Transfers</strong>, or other preferred methods.</li><li>Automatic payment reminders and alerts help you manage <strong>Late Payments</strong> and maintain healthy cash flow, while comprehensive <strong>Reporting And Analysis</strong> tools provide insight into <strong>Revenue Trends, Outstanding Balances</strong>, and <strong>Payment Performance.</strong></li></ul>");
}

function six() {
    $("#beyond-bookshell-img").attr("src", "img/interior/rent 1.png");
    $("#paragraph").html("<ul><li>Integration of Rental Management Solution with Property Inventory Management enables you to track <strong>Rental Items</strong>, including <strong>Furniture, Accessories</strong>, and <strong>Decor Pieces</strong>, with detailed information such as availability and condition.</li><li>Advanced scheduling tools facilitate efficient resource allocation by allowing businesses to schedule rentals for specific <strong>Projects</strong>, assign items to rooms or spaces within the design, and manage <strong>Rental Durations</strong> and <strong>Return Dates</strong>.</li><li>Additionally, reporting and analytics capabilities provide insights into <strong>Rental Utilization, Revenue Generation</strong>, and <strong>Inventory Trends</strong>, empowering businesses to make informed decisions regarding rental investments and resource allocation.</li></ul>");
}

function seven() {
    $("#beyond-bookshell-img").attr("src", "img/interior/broker 1.png");
    $("#paragraph").html("<ul><li>With a broker management solution, our platform allows you to store detailed profiles of brokers, including their <strong>Contact Information, Commission Structures, Previous Projects</strong>, and <strong>Communication Histories</strong>.</li><li>Businesses can easily match brokers with potential clients based on clients' <strong>Specializations, Budgets</strong>, and <strong>Design Preferences</strong>.</li><li>Reporting and analytics in broker management solutions can help businesses to understand <strong>Broker Performance</strong>, their <strong>Project Profitability</strong>, and find key areas for improvement.</li></ul>");
}

function eight() {
    $("#beyond-bookshell-img").attr("src", "img/interior/estimation 1.png");
    $("#paragraph").html("<ul><li>Budget and cost estimation management allows businesses to estimate project costs based on criteria such as <strong>Materials, Labor</strong>, and other <strong>Expenses</strong>, and then present an estimated budget to the client.</li><li>The system also gives users access to <strong>Pricing Databases</strong> and <strong>Supplier Catalogs</strong>, making it easier to estimate costs accurately. </li><li>Budgeting tools enable users to create <strong>Project Budgets, Track Expenditure</strong>, and compare expenses to assigned funds in real-time.</li></ul>");
}

function nine() {
    $("#beyond-bookshell-img").attr("src", "img/interior/holographic 1.png");
    $("#paragraph").html("<ul><li>Client Presentation Tools enables businesses to <strong>Customize Presentation Templates</strong>, allowing them to build <strong>Visually Attractive Presentations</strong> that are suited to the unique project and client requirements.</li><li>Integration with 3D modeling and rendering capabilities allows businesses to exhibit <strong>Realistic Simulations</strong> of suggested <strong>Designs</strong>, including detailed representations of <strong>Furniture, Finishes</strong>, and <strong>Lighting.</strong></li><li>Annotation tools enable organizations to use <strong>Notes, Labels</strong>, and annotations to emphasize <strong>Critical Design Components</strong> and explain concepts to clients.</li></ul>");
}

function ten() {
    $("#beyond-bookshell-img").attr("src", "img/interior/devices 1.png");
    $("#paragraph").html("<ul><li>With mobile compatibility, our system provides a responsive design interface tailored for <strong>Smaller Screens</strong>, resulting in a <strong>Smooth</strong> and intuitive user experience on mobile devices</li><li>Businesses can view and change <strong>Floor Plans, Wall Plans, Furniture Layouts, Material Selections</strong>, and <strong>Project Information</strong>, allowing for more effective communication and cooperation with clients, contractors, and team members.</li><li>Integration with <strong>Cloud-Based</strong> storage solutions enables businesses to synchronize project data across various <strong>Devices</strong>, ensuring that they have access to the most recent <strong>Information</strong> and <strong>Updates</strong>.</li></ul>");
}