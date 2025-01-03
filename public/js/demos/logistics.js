document.addEventListener("mousemove", function (e) {
  var followMouse = document.getElementById("followMouse");
  followMouse.style.top = e.clientY + "px";
  followMouse.style.left = e.clientX + "px";
});

function selectListItem(listItem) {
  $("#list-container li").css("color", "white");
  $(listItem).css("color", "#0052CD");

  var index = $(listItem).index();
  switch (index) {
    case 0:
      orderManagement();
      break;
    case 1:
      inventoryManagementSolutions();
      break;
    case 2:
      shippingManagementSystem();
      break;
    case 3:
      fleetManagementSolutions();
      break;
    case 4:
      fleetFuelManagementSolutions();
      break;
    case 5:
      vehicleHealthManagement();
      break;
    case 6:
      WarehouseManagement();
      break;
    case 7:
      digitalLockSolutions();
      break;
    case 8:
      expenseManagementSystem();
      break;
    case 9:
      driverBehaviorMonitoring();
      break;
    case 10:
      customerSupport();
      break;
    default:
      break;
  }
}

function orderManagement() {
  $("#beyond-bookshell-img").attr("src", "img/logistics/order (1) 1.png");
  $("#paragraph").html(
    "<ul><li>From <strong>Initial Order</strong> to <strong>Final Order Delivery,</strong> our logistics order management system ensures <strong>Smooth Processing, Accurate Order Distribution </strong> and <strong>Effective Communication</strong> with your customers.</li><li>With <strong>Digital Order Processing System,</strong> logistics businesses can create an <strong>Digital Receipt</strong> with a QR code printed on it, making it easy for businesses and customers to get the order shipment details.</li><li>Additionally, our logistics order management system can manage <strong>Back Orders</strong> and can even facilitate <strong>Orders Return Processing</strong> with in-depth data for logistics business analysis and reporting.</li></ul>"
  );
}

function inventoryManagementSolutions() {
  $("#beyond-bookshell-img").attr(
    "src",
    "img/logistics/stock-keeping-unit 1.png"
  );
  $("#paragraph").html(
    "<ul><li>With our inventory management, each order can be tagged with a <strong>Automatic Identification and Data Capture (AIDC)</strong> code, providing <strong>Unique Identification</strong> for every logistics inventory item. Moreover with this Automatic Identification and Data Capture (AIDC) code logistics businesses can streamlines their inventory tasks like <strong>Order Receiving, Picking, Packing, and Shipping.</strong></li><li>With our inventory management solution, logistics business service providers can streamline the transfer of logistics inventory directly from <strong>Inbound Shipments</strong> to <strong>Outbound Shipments</strong> without the need of <strong>Storage,</strong> reducing logistics businesses <strong>Handling Costs</strong> and speeding up order fulfillment.</li><li>Logistics Businesses can also access their inventory data and perform inventory tasks on the go using <strong>Mobile Devices,</strong> improving operational <strong>Efficiency</strong> and <strong>Flexibility.</strong></li></ul>"
  );
}

function shippingManagementSystem() {
  $("#beyond-bookshell-img").attr("src", "img/logistics/distribution 1.png");
  $("#paragraph").html(
    "<ul><li>With our advanced shipment management system, businesses can generate <strong>Shipping Labels,</strong> including <strong>Carrier-Specific</strong> labels with <strong>Automatic Identification and Data Capture (AIDC)</strong> code and integrate it with the orders for efficient <strong>Package Tracking.</strong></li><li>With <strong>Batch Processing</strong> feature in our shipment management solution, logistics business can process <strong>Multiple Shipments</strong> at once in the form of batches, saving businesses crucial time and manual processing of bulk shipments.</li><li>Additionally, logistics businesses can easily manage <strong>Order Return Shipments,</strong> including generating <strong>Return Labels,</strong> to differentiate the return order from the rest.</li></ul>"
  );
}

function fleetManagementSolutions() {
  $("#beyond-bookshell-img").attr(
    "src",
    "img/logistics/logistics-delivery 1.png"
  );
  $("#paragraph").html(
    "<ul><li>With our fleet management system, businesses can create a <strong>Automatic Identification and Data Capture (AIDC)</strong> code for each <strong>Fleet Vehicle</strong> and associate it with logistics orders scheduled for that route, simplifying <strong>Real-Time</strong> order tracking.</li><li>Additionally with fleet management system logistics businesses can <strong>Plan</strong> and <strong>Optimize Delivery Routes</strong> to minimize fleet <strong>Fuel Consumption, Reduce Driving Time,</strong> improving overall fleet efficiency and timely order delivery.</li><li>Also, our fleet logistics management system allows logistics business to utilize <strong>Electronic Logging Device (ELD's)</strong> to accurately record driver hours and ensure compliance with <strong>Hours of Service (HOS)</strong> regulations, reducing the risk of fines and penalties.</li></ul>"
  );
}

function fleetFuelManagementSolutions() {
  $("#beyond-bookshell-img").attr("src", "img/logistics/fuel-pump 1.png");
  $("#paragraph").html(
    "<ul><li>With fleet fuel management system, businesses have the capability to monitor <strong>Real-Time Fleet Fuel Consumption</strong> and <strong>Vehicle Fuel Utilization.</strong> Additionally, with access to <strong>Real-Time Fuel Prices,</strong> businesses can adjust shipping routes accordingly for optimal efficiency.</li><li>With our fleet management system, businesses can <strong>Detect</strong> and <strong>Deter Fuel</strong> theft or unauthorized fuel usage using <strong>Sophisticated Monitoring</strong> and <strong>Alert Systems.</strong></li><li>Additionally, fleet managers can access fleet fuel management features and data on-the-go using <strong>Mobile Devices,</strong> enabling them to monitor fuel usage and performance from anywhere.</li></ul>"
  );
}

function vehicleHealthManagement() {
  $("#beyond-bookshell-img").attr("src", "img/logistics/logistics 1.png");
  $("#paragraph").html(
    "<ul><li>With vehicle health management solution, logistics businesses can access <strong>Real-Time</strong> performance metrics of their fleet vehicles, including <strong>Tyre Pressure, Oil Pressure, Coolant Level,</strong> and <strong>Engine Temperature</strong> which enables logistics businesses to early identify potential issues, and prevent costly vehicle breakdowns.</li><li> Logistics Businesses can also enhance their fleet logistics vehicle utilization by analyzing <strong>Vehicle Usage Patterns,</strong> identifying opportunities for efficiency improvement, <strong>Minimizing Idle Time,</strong> and maximizing productivity.</li><li>Furthermore, utilizing a vehicle health management solution enables logistics businesses to oversee <strong>Vehicle Compliance</strong> with regulatory standards such as <strong>Emissions</strong> and <strong>Safety Inspections,</strong> thereby preventing potential <strong>Penalties</strong> and <strong>Overhead Costs</strong> associated with vehicle non-compliance.</li></ul>"
  );
}

function WarehouseManagement() {
  $("#beyond-bookshell-img").attr("src", "img/logistics/warehouse 1.png");
  $("#paragraph").html(
    "<ul><li>With our advanced logistics management software, logistics businesses can centrally manage their multiple<strong> Agencies</strong> and <strong>Logistics Warehouses</strong> across various demographics, allowing logistics businesses to efficiently coordinate and oversee their entire <strong>Logistics Network,</strong> including <strong>Warehouse Operations, Inventory Management,</strong> and much more. </li><li>Business can also track logistics inventory by <strong>Batch</strong> or <strong>Lot Numbers</strong> across their multiple logistics warehouses to ensure <strong>Traceability</strong> and compliance with regulatory requirements.</li><li>Through our agency & warehouse logistics management solution businesses can also implement automation technologies such as <strong>Barcode Scanning, RFID (Radio Frequency Identification),</strong> and <strong>Automated Storage and Retrieval Systems (AS/RS)</strong> to improve efficiency and accuracy across their warehouses.</li></ul>"
  );
}

function digitalLockSolutions() {
  $("#beyond-bookshell-img").attr("src", "img/logistics/digital-door 1.png");
  $("#paragraph").html(
    "<ul><li>With a digital lock solution, our logistics management software ensures that only authorized person can access goods and facilities, as digital locks are equipped with <strong>Keyless Entry Systems, Biometric Authentication,</strong> or <strong>Digital Key Access.</strong></li><li>Businesses can also maintain a detailed audit trail of access events, including <strong>Timestamps</strong> and <strong>User Identities,</strong> providing visibility into who accessed the lock and when enhancing security and accountability.</li><li>Businesses can also oversee the status of locks and access events in <strong>Real-Time,</strong> promptly receiving alerts for any <strong>Unauthorized Access</strong> attempts or security breaches.</li></ul>"
  );
}

function expenseManagementSystem() {
  $("#beyond-bookshell-img").attr("src", "img/logistics/cash-flow 1.png");
  $("#paragraph").html(
    "<ul><li>With expense management solutions logistic businesses can track expenses incurred throughout the logistics process, including <strong>Transportation Costs, Fuel Expenses,</strong> and <strong>Labor Costs</strong> to calculate the overall profit they made in the entire shipping process.</li><li>Our expense management solution additionally facilitates support for <strong>Multiple Currencies,</strong> allowing <strong>Accurate Conversion</strong> and reporting of expenses incurred in international operations across various currency denominations.</li><li>Our system also preserves a comprehensive audit trail of <strong>Expense Transactions,</strong> recording the progression of <strong>Expense Approvals, Modifications,</strong> and <strong>Adjustments,</strong> serving compliance and audit objectives.</li></ul>"
  );
}

function driverBehaviorMonitoring() {
  $("#beyond-bookshell-img").attr("src", "img/logistics/driver 1.png");
  $("#paragraph").html(
    "<ul><li>Our <strong>AI-Based</strong> driver behavior tracking system allows fleet managers to know the exact location of vehicles at a point of time, helping fleet managers to monitor and ensure drivers stick to assigned <strong>Routes</strong> and <strong>Schedules.</strong></li><li>With driver behavior monitoring system, fleet managers can access <strong>real-time</strong> data on <strong>Vehicle Speed,</strong> instances of <strong>Harsh Braking,</strong> and detect signs of <strong>Driver Fatigue,</strong> which helps them to identify key areas of improvements and provide targeted coaching and training. </li><li>Our system is equipped to promptly alert fleet drivers in case if they exceed <strong>Speed Limits,</strong> neglect to fasten their <strong>Seat Belts,</strong> or exhibit unusual <strong>Driving Behavior.</strong></li></ul>"
  );
}

function customerSupport() {
  $("#beyond-bookshell-img").attr(
    "src",
    "img/logistics/customer-service 2.png"
  );
  $("#paragraph").html(
    "<ul><li>Customers can log their queries regarding their logistics order from multiple channels like <strong>Email, WhatsApp,</strong> through <strong>AI Chatbot,</strong> and directly from <strong>Calls.</strong> </li><li>Our logistics management software sends an automated updates to customers about their <strong>Order Status,</strong> including <strong>Dispatch, Transit Updates,</strong> and <strong>Delivery Confirmations.</strong> </li><li>Communication tools enable customer service teams to communicate seamlessly internally and with <strong>Customers,</strong> ensuring that all important information about a customer's issue is <strong>Available</strong> and <strong>Actionable.</strong></li></ul>"
  );
}
