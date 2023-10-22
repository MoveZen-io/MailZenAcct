
function prependHtmlBody(bodyVar) {
  // Prepare your HTML content
  var htmlContent = bodyVar;

  // Prepend the HTML into the body
  Office.context.mailbox.item.body.prependAsync(htmlContent, { coercionType: Office.CoercionType.Html }, function(result) {
      if (result.status === Office.AsyncResultStatus.Succeeded) {
          console.log('HTML body prepend successfully');
      } else {
          console.error(`Failed to prepend HTML body. Error: ${result.error.message}`);
      }
  });
}





function sdRefund() {
  Office.context.mailbox.item.subject.setAsync("Security Deposit Refund - [Property Address]");
  // Office.context.mailbox.item.body.setAsync("This is the body of the email.");
  prependHtmlBody(`<p>Hello from MoveZen Accounting,</p><br>

<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We hope you're doing well. Your security deposit disposition is attached to this email. The refund process for your deposit has been initiated, and a check will be sent to the forwarding address you provided, which can be found in the disposition document.</p><br>

<p>If a financially responsible party provided their account information and you're entitled to a full refund, it will be issued via E-Check, and an additional email will be sent to the account holder.</p><br>

<p>If you have any questions or concerns regarding your security deposit refund, please feel free to reach out to us. We also want to take this moment to express our appreciation for your tenancy with MoveZen Property Management. We wish you the very best in all your future endeavors.</p><br>

<p>Thanks! MoveZen</p>

`);

}




function sdBalance() {
  Office.context.mailbox.item.subject.setAsync("Security Deposit Close Out, Balance Due [Property Address]");
  // Office.context.mailbox.item.body.setAsync("This is the body of the email.");
  prependHtmlBody(` <p>Hello from MoveZen Accounting,<br />

  <p>You have a balance due for past-due charges and/or move-out charges. Your security deposit has been applied to this balance, but there is still a remaining amount owed. </p><br>

  <p>The balance due is noted on the attached disposition.  Please be advised that this balance must be paid in full within the next 30 days. If the balance is not paid in full by this time, the past-due balance will be turned over to collections.</p><br>

  <p>We understand that unforeseen circumstances may arise and that you may be experiencing financial difficulty. If this is the case, please contact us as soon as possible to discuss potential payment arrangements. It is in everyone's best interest to resolve this matter as soon as possible.</p><br>

  <p>Thank you for your prompt attention to this matter. MoveZen</p><br>

  `);

}




function sdTransfer() {
  Office.context.mailbox.item.subject.setAsync("Security Deposit Transfer [Property Address]");
  // Office.context.mailbox.item.body.setAsync("This is the body of the email.");
  prependHtmlBody(`<p>Security Deposit Transfer [Property Address]</p><br>

<p>We hope you're well. We're reaching out to inform you that your security deposit has been transferred to the property owner. Attached is your disposition for your records.</p><br>

<p>You can now contact the property owner directly for any inquiries or concerns regarding your security deposit. Their contact information is provided below:</p><br>

<p>Owner's Name: [OWNER'S NAME]</p><br>
<p>Owner's Email: [OWNER'S EMAIL]</p><br>
<p>Owner's Phone Number: [OWNER'S PHONE NUMBER]</p><br>
<p>Owner's Mailing Address: [OWNER'S MAILING ADDRESS]</p><br>

<p>We'd also like to take this opportunity to express our appreciation for your tenancy with MoveZen Property Management. We wish you all the best in your future endeavors.</p><br>

<p>Best regards, MoveZen</p><br>


  `);

}





function sdNewMan() {
  Office.context.mailbox.item.subject.setAsync("Security Deposit Transfer [Property Address]");
  // Office.context.mailbox.item.body.setAsync("This is the body of the email.");
  prependHtmlBody(`<p>Hello from MoveZen Accounting,</p><br>

  <p>We hope you're doing well. We wanted to inform you that your security deposit has been transferred to a new management company. They will now handle and manage your security deposit. Here are their details:</p><br>

  <p>[NEW MANAGEMENT COMPANY NAME]</p><br>
  <p>[NEW MANAGEMENT COMPANY EMAIL]</p><br>
  <p>[NEW MANAGEMENT COMPANY PHONE NUMBER]</p><br>
  <p>[NEW MANAGEMENT COMPANY ADDRESS]</p><br>

  <p>For all future inquiries and requests, please reach out to the new management company directly. We suggest contacting them to confirm your deposit's receipt and discuss any potential questions or concerns.</p<br>

  <p>We'd also like to express our appreciation for your tenancy with MoveZen Property Management. We wish you the best in your future endeavors. Thank you for your cooperation during this transition, and we hope you have a positive experience with the new management.</p><br>

  <p>Warm regards, MoveZen</p><br>
  
  `);

}





function filterRemoved() {
  Office.context.mailbox.item.subject.setAsync("We Removed the Filter Charge!");
  // Office.context.mailbox.item.body.setAsync("This is the body of the email.");
  prependHtmlBody(`<p>Hello from MoveZen Accounting,</p><br>

  <p>We hope this message finds you well. We wanted to inform you that we've taken action on your account. Specifically, we've removed one or more HVAC Filter Delivery charges and applied a credit to your account. This credit will automatically offset future rent charges. Please refer to your attached ledger for detailed information.</p><br>

  <p>If you have any questions or require assistance, kindly reach out to your dedicated account manager.</p><br>

  <p>Thanks for choosing MoveZen!</p><br>
  
  `);

}





function payPlan() {
  Office.context.mailbox.item.subject.setAsync("Payment Plan Proposal Request");
  // Office.context.mailbox.item.body.setAsync("This is the body of the email.");
  prependHtmlBody(`<p>Hello from MoveZen Accounting,</p><br>
 
  <p>Thanks for your interest in setting up a payment plan for the balance due. We appreciate your proactive approach and would like to request your payment plan proposal. In order to proceed, we kindly ask you to provide us with the following details:</p><br>

  <p>1. Number of payments</p><br>
  <p>2. Payment amount for each installment</p><br>
  <p>3. Dates on which you intend to make the payments</p><br>

  <p>Once we receive your payment plan proposal, our team will promptly review it and respond with a decision. If you have any questions in the meantime, please let us know. </p><br>

  <p>Regards, MoveZen</p><br>
 
  `);

}





function eCheck() {
  Office.context.mailbox.item.subject.setAsync("E-Check Information - MoveZen Property Management ");
  // Office.context.mailbox.item.body.setAsync("This is the body of the email.");
  prependHtmlBody(`<p>Hello from MoveZen Accounting,</p><br>
  
  <p>We're excited to introduce the option of direct deposit payments for our valued vendors. With E-Check, you'll enjoy faster payments without the wait for paper checks. If this interests you, simply log in to your vendor portal and update your payment method.</p><br>

  <p>If you prefer not to provide your bank information via the portal, please complete the linked form and send it back to us at your convenience.</p><br>

  <p><a href="https://movezen.sharepoint.com/:b:/s/accounting/EZ3b2F0TrYFEp6MVfWadqngB6QM8X_z02f7tQ7dMERXCaw?e=ZatiY7">ACH Form to Submit</a></p><br>

  <p>Should you have any questions or concerns, please feel free to reach out.</p><br>

  <p>Thanks, MoveZen</p><br>
 
  `);

}





function w9Request() {
  Office.context.mailbox.item.subject.setAsync("Information Needed - W9");

  prependHtmlBody(`<p>Hello from MoveZen Accounting,</p><br>
 
  <p>We hope you're doing well. We're reaching out to request a copy of your W9 form for our records. Ensuring our vendor information is accurate and up-to-date is vital for tax compliance and maintaining precise financial records.</p><br>

  <p>Please provide a copy of your W9 form, including your taxpayer identification number (TIN) or social security number (SSN), legal name, and business address. Having this information on hand will facilitate payment processing and help us stay in compliance with tax regulations.</p><br>

  <p>You can access the blank W9 form here: </p><br>

  <p>LINKKKKK</p><br>

  <p>To streamline the process, kindly attach the completed W9 form to your reply. If you have any questions or need assistance, please don't hesitate to email or text us at (910) 795.1668.</p><br>

  <p>Your prompt attention to this matter is appreciated, and we thank you in advance for your cooperation. We value your services and anticipate a continued successful collaboration.</p><br>

  <p>Thanks, MoveZen</p><br>
 
  `);

}








// function sendPortalResetAll() {
//   Office.context.mailbox.item.subject.setAsync("A couple quick portal login steps");

//   prependHtmlBody(`<p>​Hi! &nbsp;Sorry you&rsquo;re having trouble getting your portal activated or logged in<br />
//   <br />
//   The first step is to clear your browser cookies or cache. &nbsp;You can google how to do that relatively easily as it depends on your web browser<br />
//   <br />rouble after those two steps, we’ll simply need to delete your login and start from scratch which almost always works, and is fast and simple.  Just reach back out to us and we’ll run that through pretty quickly<br />
//   <br />
//   <br />
//   Thanks!</p>
//   `);

// }







Office.onReady(info => {
  if (info.host === Office.HostType.Outlook) {
    document.getElementById("insertsdRefund").onclick = sdRefund;
    document.getElementById("insertsdBalance").onclick = sdBalance;
    document.getElementById("insertsdTransfer").onclick = sdTransfer;
    document.getElementById("insertsdNewMan").onclick = sdNewMan;
    document.getElementById("insertfilterRemoved").onclick = filterRemoved;
    document.getElementById("insertpayPlan").onclick = payPlan;
    document.getElementById("inserteCheck").onclick = eCheck;
    document.getElementById("insertw9Request").onclick = w9Request;
  }
});