//Switch statement
//Employee Role Access System
role = prompt("Enter your role (admin, manager, employee):");

switch (role) {
  case "admin":
    alert("Access granted. You have full access to the system.");
    break;
  case "manager":
    alert(
      "Access granted. You have limited access to the system.,Team Management Access",
    );
    break;
  case "Developer":
    alert("Access granted. to the system.,Code Management Access");
    break;
  case "intern":
    alert("Access granted. to the system.,Limited Access");
    break;
  default:
    alert("Access denied. Invalid role.");
}
//Online Payment Method Selection
paymentmethod = prompt(
  "Enter your payment method (credit card, debit card, PayPal, bank transfer):",
);
switch (paymentmethod) {
  case "credit card":
    alert("You have selected credit card as your payment method.");
    break;
  case "debit card":
    alert("You have selected debit card as your payment method.");
    break;
  case "PayPal":
    alert("You have selected PayPal as your payment method.");
    break;
  case "bank transfer":
    alert("You have selected bank transfer as your payment method.");
    break;
  default:
    alert("Invalid payment method.");
}
// Order Status Checker
orderstatus = prompt(
  "Enter your order status (pending, processing, shipped, delivered, canceled):",
);
switch (orderstatus) {
  case "pending":
    alert("Your order is pending. Please wait for confirmation.");
    break;
  case "processing":
    alert("Your order is being processed.");
    break;
  case "shipped":
    alert("Your order has been shipped.");
    break;
  case "delivered":
    alert("Your order has been delivered.");
    break;
  case "canceled":
    alert("Your order has been canceled.");
    break;
  default:
    alert("Invalid order status.");
}
//Office Working Day Checker
workingday = prompt(
  "Enter the day of the week (Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday):",
);
switch (workingday) {
  case "Monday":
    alert("It's Monday. The office is open.Busy day ahead.");
    break;
  case "Tuesday":
    alert("It's Tuesday. The office is open. Productive day ahead.");
    break;
  case "Wednesday":
    alert("It's Wednesday. The office is open. Midweek productivity.");
    break;
  case "Thursday":
    alert("It's Thursday. The office is open. Almost the end of the week.");
    break;
  case "Friday":
    alert("It's Friday. The office is open. Weekend is almost here.");
    break;
  case "Saturday":
    alert("It's Saturday. The office is closed. Enjoy your weekend!");
    break;
  case "Sunday":
    alert("It's Sunday. The office is closed. Rest and relaxation.Holiday.");
    break;
  default:
    alert("Invalid day of the week. try again later.");
}
