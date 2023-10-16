
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





function sendSorry() {
  Office.context.mailbox.item.subject.setAsync("Thanks for contacting us");
  // Office.context.mailbox.item.body.setAsync("This is the body of the email.");
  prependHtmlBody(`<p>Hi!</p><br>

<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Thank you for your interest in this property.&nbsp; Unfortunately, we've accepted an application on the property and should be collecting the deposit within a day or so.&nbsp; I&#39;ll certainly keep your contact information nearby in the event that something comes up with our current applicant.&nbsp; Thanks again, and sorry for the inconvenience. Please follow us on your favorite social media platform and be the first to hear about new listings as they come available. Thanks! Customer Service Team</p><br>

<p><a href="https://www.facebook.com/MoveZenPropertyManagement" target="_blank">Follow us on Facebook to Receive Automatic Updates on Price Reductions and New Listings</a></p><br>

<p><a href="https://twitter.com/movezen" target="_blank">Follow us on Twitter to Receive Automatic Updates on Price Reductions and New Listings</a></p>`);

}




function sendApp() {
  Office.context.mailbox.item.subject.setAsync("How to get your MoveZen application moving forward fast!");
  // Office.context.mailbox.item.body.setAsync("This is the body of the email.");
  prependHtmlBody(` <p>Thank you for beginning the application process!<br />
  <br />
  Our application process is broken down to two main parts. Payment, and background information submission. &nbsp;You will need to get us both of those before we can move forward. Here&#39;s how..<br />
  <br />
  If you haven&#39;t submitted your application payment yet, you can do so with the link below:<br />
  <a href="https://form.jotform.com/202136698758064">Just to pay the $79 application&nbsp;fee.</a>&nbsp; This is the last step if you&nbsp;haven&#39;t paid, but have submitted your personal information</p>
  
  <p>&nbsp;</p>
  
  <p>If you have paid, but haven&#39;t submitted your legal information for our background check,&nbsp;<a href="https://victoryre.appfolio.com/listings/">you can do that here</a><br />
  &nbsp;<br />
  We&#39;re excited to get started with finalizing! &nbsp;Please, it&#39;s very important that you review this&nbsp;introductory information to make sure we hit the ground running with aligned expectations.<br />
  <br />
  We&#39;ll often email or text important questions and info which is often sent to spam or promotion folders, so whitelist us or regularly check those folders<br />
  <br />
  Below you&#39;ll find a sample lease &amp; the rules of the road which you have hopefully already reviewed, if not you must do so as they will be included with your lease. &nbsp;<br />
  <br />
  You&#39;ll also find crucial information on how to address pre-move in repairs and if you hope to get a pet during your time in the home. &nbsp;<br />
  <br />
  <a href="https://movezen.sharepoint.com/:b:/s/marketing/ES2Srz4GLp5FmuqPlcojIewB2SR-_d4o1nvMf8eaWf3dvg?e=4cqWeS">MoveZen Rules &amp; Regulations Link</a><br />
  <br />
  <a href="https://movezen360.com/ncsamplelease/">Sample NC lease</a></p><br><br>
  <a href="https://movezen360.com/applicationstart/">Help / FAQ for Applications</a></p>`);

}




function sendVendor() {
  Office.context.mailbox.item.subject.setAsync("Thanks for your interest in working with us!");
  // Office.context.mailbox.item.body.setAsync("This is the body of the email.");
  prependHtmlBody(`<p>​Hello!<br />
  <br />
  <p>Thanks for reaching out. &nbsp;We cover a pretty wide area, and have account managers who mostly choose their own vendors based on the information they. &nbsp;What you provided is helpful but there&#39;s a bit more than can really increase your odds of success. &nbsp;So we set this simple quick form to help get you routed as close to the people who will make these decisions as possible. &nbsp;If you don&#39;t mind please fill out this form and you can copy / paste this info in the details section as well</p>

<p>Thanks! Customer Service Team&nbsp;</p>

<p><a href="https://forms.office.com/r/eXb3pNS0fs">https://forms.office.com/r/eXb3pNS0fs</a></p>
  `);

}





function sendRentalResponse() {
  Office.context.mailbox.item.subject.setAsync("Thanks for your interest in this MoveZen home!");
  // Office.context.mailbox.item.body.setAsync("This is the body of the email.");
  prependHtmlBody(`<p>Thank&nbsp;you&nbsp;so much for contacting us! We appreciate&nbsp;your&nbsp;interest and will do whatever we can to find&nbsp;you&nbsp;the perfect home.&nbsp;</p>

  <br><br>
  
  <p>If&nbsp;you&nbsp;would like to go ahead and easily schedule a viewing,&nbsp;you&nbsp;can bypass this email altogether, and use the link below.&nbsp; Many of our properties are available for instant access at any time that&nbsp;you&nbsp;choose between 8am and 8pm.</p>
  
  <br><br>
  
  <p><a href="https://movezen360.com/schedule-a-self-showing/" target="_blank">Link to Access Self Showings</a></p>
  
  <br><br>
  
  <p>The home&nbsp;you&nbsp;inquired about is a really great deal, and I&rsquo;m sure&nbsp;you&nbsp;will love it once&nbsp;you&nbsp;have a chance to take a closer look! To&nbsp;make&nbsp;the process a little quicker, the following information would be helpful&hellip;</p>
  
  <br><br>
  
  <p>When are&nbsp;you&nbsp;looking&nbsp;to&nbsp;make&nbsp;your&nbsp;big&nbsp;move&nbsp;and&nbsp;become&nbsp;a&nbsp;MoveZen&nbsp;resident?&nbsp;</p>
  
  <br><br>
  
  <p>Would&nbsp;you&nbsp;have a problem with a credit check, if&nbsp;you&nbsp;decide&nbsp;you&nbsp;want to rent?</p>
  
  <br><br>
  
  <p>Please describe any pets&nbsp;you&nbsp;have that will be in the home.</p>
  
  <br><br>
  
  <p>Who will the tenants be, and what is their job/cosign situations?</p>
  
  <br><br>
  
  <p>What kind of term are&nbsp;you&nbsp;looking&nbsp;for?&nbsp; Would&nbsp;you&nbsp;consider a 2-year lease?</p>
  
  <br><br>
  
  <p>Do&nbsp;you&nbsp;have a past landlord reference?</p>
  
  <br><br>

  <p>At MoveZen we take very good care of our customers. Should&nbsp;you&nbsp;choose one of our premium homes,&nbsp;you&nbsp;will enjoy the following conveniences: the fastest response in the industry to maintenance issues; courteous, professional, office staff; timely processing of applications and repairs.&nbsp; We operate with the highest level of honor and integrity. Whether in the best interest of our tenants, or homeowners,&nbsp;you&nbsp;can always count on us to act in perfect accordance with the law, and just good neighborhood service.&nbsp;</p><br><br>
  
  <p>Here are some common steps you may find helpful</p><br><br>

  <p>For questions on the application process, start here.&nbsp; If this doesn&#39;t cover it (it usually does and much more), let us know your specific question and we'll nail it down.&nbsp;<a href="https://movezen360.com/application-acceptance-qualification-general-faq/">https://movezen360.com/application-acceptance-qualification-general-faq/</a></p><br><br>

  <p>Many of our homes allow self showings, but either way you will want to initiate the process to view any home using this link. Once registered we will have your information, and if the home isn&#39;t quite available to view now we&#39;ll be in touch with updates as to when that will be.&nbsp; If a home isn&#39;t available to show, we&#39;ll be limited in how much we can do for you until it is, but don&#39;t worry your info will be included in the process though that&#39;s not to say you&#39;ll get a chance to view a home in a busy market. In 2022 only about 1/3rd of potential contacts were able to view, but that&#39;s gotten much better in 2023</p><br><br>

  <p><a href="https://movezen360.com/schedule-a-self-showing/">https://movezen360.com/schedule-a-self-showing/</a></p><br><br>

  <p>If you would like to apply you can do that here</p><br><br>

  <p><a href="https://movezen360.com/apply-for-a-victory-property-management-rental-home/">https://movezen360.com/apply-for-a-victory-property-management-rental-home/</a></p>

  <br><br>

  <p>Finally you can often find answers faster using this helpful policy and questions search</p><br><br>

  <p><a href="https://movezen360.com/helpcenter/">https://movezen360.com/helpcenter/</a></p>

  <br><br>

  <p>Please let us know if you have any questions!&nbsp;&nbsp;Customer Service Team</p>`);

}





function sendPayslip() {
  Office.context.mailbox.item.subject.setAsync("Still Paying Rent With a Check or Money Order?");
  // Office.context.mailbox.item.body.setAsync("This is the body of the email.");
  prependHtmlBody(`<p>We have a much better solution using a payment process through your nearby WalMart or CVS!&nbsp; Among others</p>

  <p>&nbsp;</p>
  
  <p>All you do is walk in with a barcode that we would provide to you by text or email, they scan it, you pay, and your rent is instantly&nbsp;funded and will&nbsp;show up on our end that way. It&#39;s the best way to avoid late fees</p>
  
  <p>&nbsp;</p>
  
  <p>More importantly, it&#39;s a lot cheaper than buying multiple money orders</p>
  
  <p>&nbsp;</p>
  
  <p>Finally it&#39;s low risk. With WalMart you know it&#39;s legitimate and safe. Just keep your receipt, and it&#39;s safer&nbsp;than a money order also</p>
  
  <p>&nbsp;</p>
  
  <p>Contact us today and we&#39;ll send yours out!&nbsp; Customer Service Team</p>
  `);

}





function sendOwnerMove() {
  Office.context.mailbox.item.subject.setAsync("We wanted to let you know that our resident is moving out");
  // Office.context.mailbox.item.body.setAsync("This is the body of the email.");
  prependHtmlBody(`
 <table align="center" cellspacing="0" style="border-collapse:collapse; max-width:600px; width:100%">
	<tbody>
		<tr>
			<td style="border-bottom:0px; border-top:0px; vertical-align:top">
			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table align="left" cellspacing="0" style="border-collapse:collapse; max-width:100%; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td style="vertical-align:top">
									<h4 style="text-align:center"><span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><span style="font-size:20px"><span style="color:#949494"><span style="font-family:Georgia"><em><span style="color:#696969"><span style="font-size:14px"><span style="font-family:tahoma,verdana,segoe,sans-serif">Unfortunately, your renter has given us notice that they intend to end their lease as soon as possible, which is usually about 60 days from now.&nbsp; We need to consider a couple critical issues to decide where we go from here.&nbsp; Delays right now tend to have a major effect on how quickly we get the home rented so be decisive and clear</span></span></span></em></span></span></span></span></span></span></h4>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table align="left" cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td style="text-align:center; vertical-align:top"><img alt="" class="gmail_canned_response_image" src="https://ci6.googleusercontent.com/proxy/bllWmKk12ceyPNUSCu0_31xcLzo_irur8Nn3DxHCWPOk9ZsdmdYUoqKSS_BX-3RvXyRIbqI4IhGGnbZ-sZa0TKLiVWFIOWIoshnW0ZTFG7XMosnyDRdqqRGgJwfIxQzWMaTA0SEdpykliq_zL_wo2onaWA7dkoMPiAo=s0-d-e1-ft#https://gallery.mailchimp.com/550bd6ef99c9bde377800aeef/images/a6cc3d63-36a9-45ee-a279-6323028af4b4.jpg" style="border:0px; display:inline; height:auto; max-width:1280px; outline:none; padding-bottom:0px; vertical-align:bottom; width:564px" /></td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; table-layout:fixed; width:100%">
				<tbody>
					<tr>
						<td>
						<table cellspacing="0" style="border-collapse:collapse; border-top:2px solid #eaeaea; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td>&nbsp;</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table align="left" cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td>
									<table cellspacing="0" style="background-color:#dc7d44; border-collapse:collapse; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td style="background-color:#dc7d44; text-align:center; vertical-align:top"><span style="font-size:14px"><span style="color:#f2f2f2"><span style="font-family:Helvetica"><strong>The most important thing to consider</strong> is whether you want to relist the home for rent and continue as usual, or if you want to make some other arrangement such as listing it for sale, or moving back in<br />
												<br />
												<strong>Why is this important?</strong>&nbsp; Well for one, if we are rerenting we like to list right away to ensure the best possible outcome, so a delay starts to chip away at our marketing options.<br />
												<br />
												<strong>Why else?</strong>&nbsp; One major matter we need to consider is how tenant paid repairs will be handled.&nbsp; If we&#39;re relisting for rent the process is simple and will be in line with how we have handled them in the past.&nbsp; Basically we&#39;ll handle it and you have nothing to worry about.&nbsp; If however you are doing something different with the property, it usually makes more sense for us to simply charge the deposit, and send you those funds so you can handle the repairs yourself.<br />
												<br />
												<strong>Why?&nbsp;</strong> The answer is simple, when we do repairs we try our hardest to keep costs as low as possible without hurting our chances of rerental.&nbsp; Also due to security deposit laws we are restricted to mostly targeted fixes rather than general improvement. So rental repairs or updates are vastly different from sales or owner occupied updates.&nbsp; A prime example would be paint.&nbsp; We typically focus on specific walls, touch up, and where we can get the most bang for the buck.&nbsp; This almost always excludes doors and trim.&nbsp; After 5 years on the rental market we may be able to squeak by without painting trim, but if you attempt that approach on the sales market you&#39;ll regret it.&nbsp; A sales quality paint job will likely run 3X what we would have charged.&nbsp; We discuss this issue in depth <a href="https://movezen360.com/investment-property-rent-ready-sell-ready-whats-difference/" style="color:#007c89" target="_blank">here...</a></span></span></span></td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; table-layout:fixed; width:100%">
				<tbody>
					<tr>
						<td>
						<table cellspacing="0" style="border-collapse:collapse; border-top:2px solid #eaeaea; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td>&nbsp;</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table align="left" cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td>
									<table cellspacing="0" style="background-color:#1d8387; border-collapse:collapse; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td style="background-color:#1d8387; text-align:center; vertical-align:top">
												<p><span style="font-size:14px"><span style="color:#f2f2f2"><span style="font-family:Helvetica"><strong><img class="gmail_canned_response_image" src="https://ci6.googleusercontent.com/proxy/ldJaFjXeNMt_JHRkudvMQnMzUTHw2hyldk3ulfWZdA8cNmFeKOE-L4t_slw0knJoT-K68vIXIySiIgaNjHo4xAHb7FbhPcfdMN2sWqs6qVRdWn5JqQJOZ_YenZOdOqQ3P4qHtfj9V338ko9BRRWRt3DqK0gEA0GwrBc=s0-d-e1-ft#https://gallery.mailchimp.com/550bd6ef99c9bde377800aeef/images/76a56d71-e60a-4fe5-9630-fa08cc99d3d4.jpg" style="border:0px; float:right; height:166px; margin-left:10px; margin-right:10px; outline:none; width:250px" />So what steps should you take from here?&nbsp; If you are not planning to rerent you want to notify us immediately, and include how you&#39;d like us to handle tenant charges / repairs.&nbsp; You also want to make sure that the utilities are transferred to your name on time so that we can do a proper inspection.<br />
												<br />
												<br />
												Planning to rerent?&nbsp; Follow these critical steps asap!</strong></span></span></span></p>
												</td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table cellspacing="0" style="border-collapse:collapse; width:100%">
							<tbody>
								<tr>
									<td style="vertical-align:top">
									<table align="left" cellspacing="0" style="border-collapse:collapse; width:264px">
										<tbody>
											<tr>
												<td style="vertical-align:top"><img alt="" class="gmail_canned_response_image" src="https://ci6.googleusercontent.com/proxy/PfYUBTKmTzL4jG_W7JUJhSxFzsT1tHMIBJLL9iaI9A-yKQC2pkk4EARWla8GcJgOVEtPz8rLzYdaCkkBujTaqJOyWiCh-wXYlTNpAtNv8TZZde6Y8juNFv40vq2Tl6GXwrEiHvGsBPuyxhZpW6AnpIxJsovqnQb0bg4=s0-d-e1-ft#https://gallery.mailchimp.com/550bd6ef99c9bde377800aeef/images/0f02dff7-4654-4f54-9b15-a4dc1d329224.jpg" style="border:0px; height:auto; max-width:30px; outline:none; vertical-align:bottom; width:30px" /></td>
											</tr>
										</tbody>
									</table>

									<table align="right" cellspacing="0" style="border-collapse:collapse; width:264px">
										<tbody>
											<tr>
												<td style="vertical-align:top"><span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><span style="color:#000000"><span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:15px">Make sure power &amp; water are set up to revert to your name rather than being shut off.&nbsp; This is important</span></span></span></span></span></span></td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table align="left" cellspacing="0" style="border-collapse:collapse; max-width:100%; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td style="vertical-align:top"><span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><span style="color:#000000"><span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:15px">for several reasons.&nbsp; 1.&nbsp; We cannot properly inspect a home without utilities, and should things be missed as a result, we can&#39;t be held responsible.&nbsp; 2.&nbsp; We cannot properly market a home without utilities obviously.&nbsp; 3.&nbsp; Especially in winter, not having the power on is likely to result in busted pipes / floods</span></span></span></span></span></span></td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table cellspacing="0" style="border-collapse:collapse; width:100%">
							<tbody>
								<tr>
									<td style="vertical-align:top">
									<table align="left" cellspacing="0" style="border-collapse:collapse; width:264px">
										<tbody>
											<tr>
												<td style="vertical-align:top"><img alt="" class="gmail_canned_response_image" src="https://ci6.googleusercontent.com/proxy/PfYUBTKmTzL4jG_W7JUJhSxFzsT1tHMIBJLL9iaI9A-yKQC2pkk4EARWla8GcJgOVEtPz8rLzYdaCkkBujTaqJOyWiCh-wXYlTNpAtNv8TZZde6Y8juNFv40vq2Tl6GXwrEiHvGsBPuyxhZpW6AnpIxJsovqnQb0bg4=s0-d-e1-ft#https://gallery.mailchimp.com/550bd6ef99c9bde377800aeef/images/0f02dff7-4654-4f54-9b15-a4dc1d329224.jpg" style="border:0px; height:auto; max-width:30px; outline:none; vertical-align:bottom; width:30px" /></td>
											</tr>
										</tbody>
									</table>

									<table align="right" cellspacing="0" style="border-collapse:collapse; width:264px">
										<tbody>
											<tr>
												<td style="vertical-align:top"><span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><span style="color:#000000"><span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:15px">Prepare for a break in monthly income / payments.&nbsp; It can be tough to rerent a property that&#39;s tenant occupied, and therefore you&#39;ll want to prepare for the potential of not receiving any rent</span></span></span></span></span></span></td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table align="left" cellspacing="0" style="border-collapse:collapse; max-width:100%; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td style="vertical-align:top"><span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><span style="color:#000000"><span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:15px">for a couple of months.&nbsp; Also there are almost always a few minor costs that NC requires landlords to shoulder and this will result in reduced income as well.&nbsp; If the tenant leaves the unit relatively clean we&#39;ll still have to come in and spruce it up.&nbsp; While we try to require tenants to have carpets professionally cleaned it&#39;s actually not something we can legally enforce.&nbsp; If the tenant has been in the property for more than a year we&#39;ll also likely have to do some touch-up painting.&nbsp; These are all charges that NC specifically forbids landlords / managers from charging deposits for.&nbsp; We also often take this transition period to address other minor issues like annual bush trimming, gutter cleaning (chargeable in some situations but not others mainly involving length of time in the property), exterior paint /pressure wash etc.&nbsp; It&#39;s a good rule of thumb to expect to spend a months rent getting a home back in shape while turning over a tenant.&nbsp; Remember though, there is likely to be vacancy as well so expecting a 2-month total delay should be your minimum preparation.</span></span></span></span></span></span></td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table cellspacing="0" style="border-collapse:collapse; width:100%">
							<tbody>
								<tr>
									<td style="vertical-align:top">
									<table align="left" cellspacing="0" style="border-collapse:collapse; width:264px">
										<tbody>
											<tr>
												<td style="vertical-align:top"><img alt="" class="gmail_canned_response_image" src="https://ci6.googleusercontent.com/proxy/PfYUBTKmTzL4jG_W7JUJhSxFzsT1tHMIBJLL9iaI9A-yKQC2pkk4EARWla8GcJgOVEtPz8rLzYdaCkkBujTaqJOyWiCh-wXYlTNpAtNv8TZZde6Y8juNFv40vq2Tl6GXwrEiHvGsBPuyxhZpW6AnpIxJsovqnQb0bg4=s0-d-e1-ft#https://gallery.mailchimp.com/550bd6ef99c9bde377800aeef/images/0f02dff7-4654-4f54-9b15-a4dc1d329224.jpg" style="border:0px; height:auto; max-width:30px; outline:none; vertical-align:bottom; width:30px" /></td>
											</tr>
										</tbody>
									</table>

									<table align="right" cellspacing="0" style="border-collapse:collapse; width:264px">
										<tbody>
											<tr>
												<td style="vertical-align:top"><span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><span style="color:#000000"><span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:15px">If we know in advance that the home is going to need a relatively significant amount of repairs, either from delayed spruce up expenses or a tough tenant,</span></span></span></span></span></span></td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table align="left" cellspacing="0" style="border-collapse:collapse; max-width:100%; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td style="vertical-align:top"><span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><span style="color:#000000"><span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:15px">we will go ahead and hold the final months rent to help with these costs.&nbsp; If we&#39;re going that route we&#39;ll notify you as soon as possible.&nbsp; Since it&#39;s only reasonable to expect a fair amount of income deductions around this time, expect and be prepared for this potential right from the beginning.&nbsp; Whether it&#39;s deducted from the last month, or the upcoming tenant&#39;s first month there is no hiding from these costs so there is no reason to delay.&nbsp; You also have the option of sending us funds but most owners would prefer not to&nbsp;</span></span></span></span></span></span></td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table cellspacing="0" style="border-collapse:collapse; width:100%">
							<tbody>
								<tr>
									<td style="vertical-align:top">
									<table align="left" cellspacing="0" style="border-collapse:collapse; width:264px">
										<tbody>
											<tr>
												<td style="vertical-align:top"><img alt="" class="gmail_canned_response_image" src="https://ci6.googleusercontent.com/proxy/PfYUBTKmTzL4jG_W7JUJhSxFzsT1tHMIBJLL9iaI9A-yKQC2pkk4EARWla8GcJgOVEtPz8rLzYdaCkkBujTaqJOyWiCh-wXYlTNpAtNv8TZZde6Y8juNFv40vq2Tl6GXwrEiHvGsBPuyxhZpW6AnpIxJsovqnQb0bg4=s0-d-e1-ft#https://gallery.mailchimp.com/550bd6ef99c9bde377800aeef/images/0f02dff7-4654-4f54-9b15-a4dc1d329224.jpg" style="border:0px; height:auto; max-width:30px; outline:none; vertical-align:bottom; width:30px" /></td>
											</tr>
										</tbody>
									</table>

									<table align="right" cellspacing="0" style="border-collapse:collapse; width:264px">
										<tbody>
											<tr>
												<td style="vertical-align:top"><span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><span style="color:#000000"><span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:15px">Now is a perfect time to reassess&nbsp;where you stand on insurance, from general liability to wind &amp; hail, and finally flood.&nbsp; In light of more frequent and powerful hurricanes around our region, it&#39;s a good idea to</span></span></span></span></span></span></td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table align="left" cellspacing="0" style="border-collapse:collapse; max-width:100%; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td style="vertical-align:top"><span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><span style="color:#000000"><span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:15px">have a strong policy.&nbsp; A lost rent subsidy can be a life saver if your tenant has to move due to major damage</span></span></span></span></span></span></td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table cellspacing="0" style="border-collapse:collapse; width:100%">
							<tbody>
								<tr>
									<td style="vertical-align:top">
									<table align="left" cellspacing="0" style="border-collapse:collapse; width:264px">
										<tbody>
											<tr>
												<td style="vertical-align:top"><img alt="" class="gmail_canned_response_image" src="https://ci6.googleusercontent.com/proxy/PfYUBTKmTzL4jG_W7JUJhSxFzsT1tHMIBJLL9iaI9A-yKQC2pkk4EARWla8GcJgOVEtPz8rLzYdaCkkBujTaqJOyWiCh-wXYlTNpAtNv8TZZde6Y8juNFv40vq2Tl6GXwrEiHvGsBPuyxhZpW6AnpIxJsovqnQb0bg4=s0-d-e1-ft#https://gallery.mailchimp.com/550bd6ef99c9bde377800aeef/images/0f02dff7-4654-4f54-9b15-a4dc1d329224.jpg" style="border:0px; height:auto; max-width:30px; outline:none; vertical-align:bottom; width:30px" /></td>
											</tr>
										</tbody>
									</table>

									<table align="right" cellspacing="0" style="border-collapse:collapse; width:264px">
										<tbody>
											<tr>
												<td style="vertical-align:top"><span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><span style="color:#000000"><span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:15px">Be decisive.&nbsp; If we list a home for rent, show it, and negotiate with renters only to have you change your mind about rerenting we will have to bill to cover our time and any refunded app fees.&nbsp; We are not a backup plan.&nbsp; If we put in the work things must move forward or we&#39;ll need to be reimbursed</span></span></span></span></span></span></td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table cellspacing="0" style="border-collapse:collapse; width:100%">
							<tbody>
								<tr>
									<td style="vertical-align:top">
									<table align="left" cellspacing="0" style="border-collapse:collapse; width:264px">
										<tbody>
											<tr>
												<td style="vertical-align:top"><img alt="" class="gmail_canned_response_image" src="https://ci6.googleusercontent.com/proxy/PfYUBTKmTzL4jG_W7JUJhSxFzsT1tHMIBJLL9iaI9A-yKQC2pkk4EARWla8GcJgOVEtPz8rLzYdaCkkBujTaqJOyWiCh-wXYlTNpAtNv8TZZde6Y8juNFv40vq2Tl6GXwrEiHvGsBPuyxhZpW6AnpIxJsovqnQb0bg4=s0-d-e1-ft#https://gallery.mailchimp.com/550bd6ef99c9bde377800aeef/images/0f02dff7-4654-4f54-9b15-a4dc1d329224.jpg" style="border:0px; height:auto; max-width:30px; outline:none; vertical-align:bottom; width:30px" /></td>
											</tr>
										</tbody>
									</table>

									<table align="right" cellspacing="0" style="border-collapse:collapse; width:264px">
										<tbody>
											<tr>
												<td style="vertical-align:top"><span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><span style="color:#000000"><span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:15px">Have things changed?&nbsp; Was lawn maintenance included but won&#39;t be any longer?&nbsp; Utilities?&nbsp; New address / contact information?&nbsp; Who is reporting the income for tax purposes?&nbsp; Notify us asap!&nbsp; Contact your manager directly</span></span></span></span></span></span></td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table align="left" cellspacing="0" style="border-collapse:collapse; max-width:100%; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td style="vertical-align:top"><span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><span style="color:#000000"><span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:15px">for contact or&nbsp;payment / tax changes.&nbsp;</span></span></span></span></span></span></td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table align="left" cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td>
									<table cellspacing="0" style="background-color:#dc7d44; border-collapse:collapse; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td style="background-color:#dc7d44; text-align:center; vertical-align:top">
												<p><span style="font-size:14px"><span style="color:#f2f2f2"><span style="font-family:Helvetica"><strong>We CANNOT stress this enough, the #1 cause of delays in getting a home rerented is due to failure to connect power &amp; water prior to your tenant leaving the home.&nbsp; Once the exact move out date is nailed down, make absolutely sure you put in a request for transfer early.&nbsp; This can save you reconnect fees as well.&nbsp; If the tenant vacates early they are required to notify us, and we&#39;ll make sure you know to change the billing start date as well</strong></span></span></span></p>
												</td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table align="left" cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td>
									<table cellspacing="0" style="background-color:#1d8387; border-collapse:collapse; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td style="background-color:#1d8387; text-align:center; vertical-align:top">
												<p><span style="font-size:14px"><span style="color:#f2f2f2"><span style="font-family:Helvetica"><img class="gmail_canned_response_image" src="https://ci4.googleusercontent.com/proxy/sR1A3uiYMruxKn2Pf1Dts3zCJwJDBgd0BkJYgcn5eEziTgHAnkCh7hDhlqK6cxTYJ-S2l4uYOqjBgdRva4sqVK5vBbvgaVCMvq93ipD6f2DWuK3rUdY2Pjnf-2Y_KUn4PUBcgit7hWVwWk73sToTqI-CeHBJ-kGowA0=s0-d-e1-ft#https://gallery.mailchimp.com/550bd6ef99c9bde377800aeef/images/f5938170-8db6-47b0-9535-5031f99b86dc.jpg" style="float:right; height:160px; margin-left:10px; margin-right:10px; outline:none; width:235px" /><strong>Repair Info </strong>- If we are dealing with a tenant paid repair, we will simply move forward and handle it without involving you.&nbsp; We&#39;ll have our contractor handle as quickly as possible, bill the tenant, and you&#39;ll have no need to get involved.</span></span></span></p>

												<p><br />
												<span style="font-size:14px"><span style="color:#f2f2f2"><span style="font-family:Helvetica">Now is a great time though to consider if you want to <strong>proactively address preventative maintenance.</strong>&nbsp; Since many owners are skeptical of optional repair recommendations we usually don&#39;t make them.&nbsp; This means that if you want to address termite spraying, minor wood rot, refinishing wood floors, or other items that don&#39;t directly effect our ability to get the home rented and are mostly preservation type tasks, you&#39;ll want to stress to your account manager a desire to focus on these issues and address them.&nbsp; Obviously we will not let a home degrade to a major degree, but we have a philosophy of focusing on marketing / maximizing income, then doing renovations in bulk.&nbsp; That however can sometimes stress out unprepared landlords after years of delayed renovations.&nbsp; Know the consequences of your strategy and remember, you can&#39;t have it both ways.&nbsp; If you&#39;re saving a lot of money today you will definitely have to spend some to get the home into great shape for selling etc.</span></span></span></p>
												</td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; table-layout:fixed; width:100%">
				<tbody>
					<tr>
						<td>
						<table cellspacing="0" style="border-collapse:collapse; border-top:2px solid #eaeaea; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td>&nbsp;</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; table-layout:fixed; width:100%">
				<tbody>
					<tr>
						<td>
						<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td>&nbsp;</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; table-layout:fixed; width:100%">
				<tbody>
					<tr>
						<td>
						<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td>&nbsp;</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table align="left" cellspacing="0" style="border-collapse:collapse; width:282px">
							<tbody>
								<tr>
									<td style="vertical-align:top"><img alt="" class="gmail_canned_response_image" src="https://ci5.googleusercontent.com/proxy/tXtDnUFER6IPw-eAoehdHrK_IYJmgBzdMEKyqd-wyr_YsNcYEj30miEvzTtSkAk0iaxY5_NbbECfRgqdW7bniRjZ5CREFZEAoZHxyOJCUXkhDvRoQXE35H7wNdh7w-eQAMaj-kEEbiJPiiPfYbY-CdtERPPxN9IiCMU=s0-d-e1-ft#https://gallery.mailchimp.com/550bd6ef99c9bde377800aeef/images/d3699700-7215-4d68-82f4-5d719f9ab189.jpg" style="border:0px; height:auto; max-width:1280px; outline:none; vertical-align:bottom; width:264px" /></td>
								</tr>
								<tr>
									<td style="vertical-align:top; width:282px">
									<p><br />
									<span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><strong>Landlords, in Light of a </strong><strong>Huge</strong><strong>&nbsp;Run Up in Rents &amp; Sale Prices, Do You Have an Endgame?</strong><br />
									<br />
									<span style="font-size:14px">You&#39;ve bought your rental property for the income stream and perhaps even in hope of future appreciation. While you may plan to own the property for a long, long time, a wise investor will have an endgame for your real estate. How long should you hold your real estate investment? When is a good time to sell the rental?&nbsp; &nbsp;<a href="https://movezen360.com/landlords-light-huge-run-rents-sale-prices-endgame-2/" style="color:#007c89" target="_blank"><span style="font-family:tahoma,verdana,segoe,sans-serif">Read more...</span></a></span></span></span></span></p>
									</td>
								</tr>
							</tbody>
						</table>

						<table align="right" cellspacing="0" style="border-collapse:collapse; width:282px">
							<tbody>
								<tr>
									<td style="vertical-align:top"><a href="https://movezen360.com/the-hidden-cost-of-vacancy-to-landlords-rental-owners/" target="_blank" title=""><img alt="" class="gmail_canned_response_image" src="https://ci5.googleusercontent.com/proxy/CwfPP2Gm-5YfYvz5K6444Dg9roPKWkfhdd7OXtlSfZmSRuEA1XQlqiZwULb8I_YwQWLKUNKp6Nb6uevEOhWaLWl1OvJ5HlH9zj2tzRir3Cm1t9vPquO0x9pteiuSci22RoBnhg7ro38lLKQ1TYrW2N_n6qeczo8GpnM=s0-d-e1-ft#https://gallery.mailchimp.com/550bd6ef99c9bde377800aeef/images/2b2d3f7c-7177-4467-99ae-85167e03537a.jpg" style="border:0px; height:auto; max-width:1280px; outline:none; text-decoration-line:none; vertical-align:bottom; width:264px" /> </a></td>
								</tr>
								<tr>
									<td style="vertical-align:top; width:282px"><br />
									<span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><strong>The Hidden Cost&nbsp;of Vacancy to Landlords &amp; Rental Owners</strong></span></span></span>
									<p style="text-align:left"><span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><span style="font-size:14px">Each day your property sits vacant costs you. We strive to market your property aggressively to get the best quality tenant in the home at the best rate. We have said </span><span style="font-size:14px">may</span><span style="font-size:14px"> times before that a quality tenant will not overpay because they watch and compare for the best price. They too are looking for the best return on investment, just like you as the homeowner.</span></span></span></span></p>

									<p style="text-align:left"><span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><span style="font-size:14px">Most homes lose at least $30 a day when vacant.&nbsp; <a href="https://movezen360.com/the-hidden-cost-of-vacancy-to-landlords-rental-owners/" style="color:#007c89" target="_blank">Read more...</a></span></span></span></span></p>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>
			</td>
		</tr>
	</tbody>
</table>`);

}





function sendApprovedNotice() {
  Office.context.mailbox.item.subject.setAsync("Your MoveZen Application is Approved!");
  // Office.context.mailbox.item.body.setAsync("This is the body of the email.");
  prependHtmlBody(`<p>Thank you again for your interest in partnering with us and the homeowner</p><br>

  <p>We are starting the process of getting you set up to move in! &nbsp;From here we need the first month&#39;s rent (nonrefundable) hold payment made within 48 hours. &nbsp;<br />
  <br />
  We&#39;ll collect your security deposit just prior to move in, or you can pay both now. &nbsp;In most cases only the first month&#39;s rent will be non-refundable should you not be able to move forward, so any additional payments are refundable, deposits, pet fees, etc. &nbsp;If we hold a home longer than 45 days the daily prorate hold charges will apply from day 46 on<br />
  <br />
  Your hold payment will ensure that no one else can secure the property, a signed lease doesn&#39;t. &nbsp;You have to pay the full hold payment to fully secure the property. You&#39;ll receive a copy of your lease in just a bit, and it must be signed within 3 days or you risk losing the home. &nbsp;No home is completely secured until we have a signed agreement, and consideration (payment)<br />
  <br />
  From this point forward we&#39;ll send several very important emails and texts, so be sure to safelist us or keep an eye on your junk folder. &nbsp;Your tenant portal invite will arrive momentarily, and you are welcome to pay online via your portal IF your move-in is more than 7 days away from your payment date, otherwise, you must per company policy pay by certified check / money order delivered to our office or staff. &nbsp;There are never exceptions to that rule due to significant fraud risks. Please do not miss it. If you pay online, you would have to pay again in certified funds to move in within 7 days, and we&#39;d credit the uncleared funds to the next month<br />
  <br />
  <a href="https://movezen.sharepoint.com/:b:/s/Teams/Ed6cnS8o6Q5ChC7kduknd2oBhPoqj51MZdUXYuipKqtySQ?e=d5nokc">Consult the &quot;rules of the road&quot; if you have additional questions</a><br />
  <br />
  We&#39;re looking forward to having you! &nbsp;Customer Service Team</p>`);

}





function sendEvictNotice() {
  Office.context.mailbox.item.subject.setAsync("Why it's crucial you avoid an eviction filing this week");

  prependHtmlBody(`<p>Hello, as of now we haven&#39;t received your payment for this month and you are at risk of imminent&nbsp;eviction.&nbsp; At this point we will file soon, most likely&nbsp;immediately&nbsp;if the owner demands it.&nbsp;</p><br>

  <p>We&#39;ll try to buy you another day or two but that&#39;s not a given, and gets harder the more we do this so get that payment in now and avoid that devastating experience.&nbsp; Just the filing is so bad that we almost never rent to residents who have those on their background, so you will find it much harder to find housing for nearly a decade.&nbsp; Get help if need be, but get something done because there is no time left.</p><br>
  
  <p>This is a final warning that failing to pay by the 16th again will result in an automatic 30 day notice to vacate that is enforceable in court because the lease will have been officially violated, and that allows us to end the relationship. That is our general company policy and account managers are not allowed to make exceptions without direct owner approval which is rare</p><br>
  
  <p>Thanks, Customer Team</p><br><br>
  
  <p><a href="https://MoveZen360.com/why-you-should-never-allow-yourself-to-be-evicted-hint-we-never-accept-past-evictions/">https://MoveZen360.com/why-you-should-never-allow-yourself-to-be-evicted-hint-we-never-accept-past-evictions/</a></p>`);

}






function sendMoveInReminders() {
  Office.context.mailbox.item.subject.setAsync("Move In Info - Thank you for choosing MoveZen!");

  prependHtmlBody(`<table align="center" cellspacing="0" id="m_-5455835037964899298m_-1598750376468129031gmail-m_1119163153852469884bodyTable" style="border-collapse:collapse; height:4165.69px; padding:0px; width:599.965px">
	<tbody>
		<tr>
			<td style="height:4165.69px; vertical-align:top; width:599.965px">
			<table cellspacing="0" style="border-collapse:collapse; width:100%">
				<tbody>
					<tr>
						<td style="border-bottom:0px; border-top:0px; vertical-align:top">
						<h2>MoveZen Customer Service Team</h2>
						</td>
					</tr>
					<tr>
						<td style="border-bottom:0px; border-top:0px; vertical-align:top">
						<table align="center" cellspacing="0" style="border-collapse:collapse; max-width:600px; width:100%">
							<tbody>
								<tr>
									<td style="border-bottom:0px; border-top:0px; vertical-align:top">
									<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td style="vertical-align:top">
												<table align="left" cellspacing="0" style="border-collapse:collapse; max-width:100%; min-width:100%; width:100%">
													<tbody>
														<tr>
															<td style="vertical-align:top">
															<h4 style="text-align:center"><span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><span style="font-size:20px"><span style="color:#949494"><span style="font-family:Georgia"><em><span style="color:#696969"><span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:23px"><strong>Pre Move-In Reminders</strong></span></span></span><br />
															&nbsp;</em></span></span></span></span></span></span></h4>

															<p><span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica">We hope everything is coming together with your move.&nbsp; In this email we&#39;ll cover a few&nbsp;reminders that were mentioned in the initial welcome email, but are important.&nbsp; We&#39;ll also provide a couple of move in checklists that we have compiled over the years that can be quite helpful</span></span></span></p>
															</td>
														</tr>
													</tbody>
												</table>
												</td>
											</tr>
										</tbody>
									</table>

									<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td style="vertical-align:top">
												<table align="left" cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
													<tbody>
														<tr>
															<td style="text-align:center; vertical-align:top"><img alt="" class="gmail_canned_response_image" src="https://ci6.googleusercontent.com/proxy/bllWmKk12ceyPNUSCu0_31xcLzo_irur8Nn3DxHCWPOk9ZsdmdYUoqKSS_BX-3RvXyRIbqI4IhGGnbZ-sZa0TKLiVWFIOWIoshnW0ZTFG7XMosnyDRdqqRGgJwfIxQzWMaTA0SEdpykliq_zL_wo2onaWA7dkoMPiAo=s0-d-e1-ft#https://gallery.mailchimp.com/550bd6ef99c9bde377800aeef/images/a6cc3d63-36a9-45ee-a279-6323028af4b4.jpg" style="border:0px; display:inline; height:auto; max-width:1280px; outline:none; padding-bottom:0px; vertical-align:bottom; width:564px" /></td>
														</tr>
													</tbody>
												</table>
												</td>
											</tr>
										</tbody>
									</table>

									<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td style="vertical-align:top">
												<table align="left" cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
													<tbody>
														<tr>
															<td>
															<table cellspacing="0" style="background-color:#dc7d44; border-collapse:collapse; min-width:100%; width:100%">
																<tbody>
																	<tr>
																		<td style="background-color:#dc7d44; text-align:center; vertical-align:top"><span style="font-size:14px"><span style="color:#f2f2f2"><span style="font-family:Helvetica"><span style="font-size:15px"><span style="font-family:tahoma,verdana,segoe,sans-serif">Remember : The first thing you must do after walking in the door of your new home is test all smoke and carbon monoxide detectors, and report to us if any don&#39;t function or you need replacement batteries. You must have a carbon monoxide detector if the home has any fossil fuels (gas, propane, not wood) OR an attached garage</span></span></span></span></span></td>
																	</tr>
																</tbody>
															</table>
															</td>
														</tr>
													</tbody>
												</table>
												</td>
											</tr>
										</tbody>
									</table>

									<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td style="vertical-align:top">
												<table align="left" cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
													<tbody>
														<tr>
															<td>
															<table border="1" cellspacing="0" style="border-collapse:collapse; border:1px solid; min-width:100%; width:100%">
																<tbody>
																	<tr>
																		<td style="text-align:center; vertical-align:top"><span style="font-size:14px"><span style="font-family:Helvetica"><span style="font-family:tahoma,verdana,segoe,sans-serif">The main purpose of this email is to outline the process to ensure&nbsp;</span><span style="font-family:tahoma,verdana,segoe,sans-serif">you</span><span style="font-family:tahoma,verdana,segoe,sans-serif">&nbsp;get your deposit refunded at move out, &amp; to confirm that you will have utilities (water, electric, gas, trash) available for your move in.&nbsp; All homeowners place a stop order on all utilities not outlined in the lease, (rare) effective the day your lease begins, so you will not have utilities&nbsp;unless you connect them.&nbsp; Here are some tips...</span><br />
																		&nbsp;</span></span></td>
																	</tr>
																</tbody>
															</table>
															</td>
														</tr>
													</tbody>
												</table>
												</td>
											</tr>
										</tbody>
									</table>

									<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td style="vertical-align:top">
												<table style="background-color:#1d8387; border-radius:3px">
													<tbody>
														<tr>
															<td style="background-color:#1d8387; vertical-align:middle"><span style="font-size:16px"><span style="font-family:Arial">Remember we need cleared / certified funds in full before you can move in. Contact your manager to let them know your move in plans. If after hours and you are paid in full and have utilities transferred we can usually offer check in by lockbox</span></span></td>
														</tr>
													</tbody>
												</table>
												</td>
											</tr>
										</tbody>
									</table>

									<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td style="vertical-align:top">
												<table align="left" cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
													<tbody>
														<tr>
															<td>
															<table border="1" cellspacing="0" style="border-collapse:collapse; border:1px solid; min-width:100%; width:100%">
																<tbody>
																	<tr>
																		<td style="text-align:center; vertical-align:top"><span style="font-size:14px"><span style="font-family:Helvetica"><span style="font-family:tahoma,verdana,segoe,sans-serif">If moving locally the best approach is to call your existing providers and they will do all the work for you</span></span></span></td>
																	</tr>
																</tbody>
															</table>
															</td>
														</tr>
													</tbody>
												</table>
												</td>
											</tr>
										</tbody>
									</table>

									<table cellspacing="0" style="border-collapse:collapse; min-width:100%; table-layout:fixed; width:100%">
										<tbody>
											<tr>
												<td>
												<table cellspacing="0" style="border-collapse:collapse; border-top:2px solid #eaeaea; min-width:100%; width:100%">
													<tbody>
														<tr>
															<td>&nbsp;</td>
														</tr>
													</tbody>
												</table>
												</td>
											</tr>
										</tbody>
									</table>

									<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td style="vertical-align:top">
												<table align="left" cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
													<tbody>
														<tr>
															<td>
															<table border="1" cellspacing="0" style="border-collapse:collapse; border:1px solid; min-width:100%; width:100%">
																<tbody>
																	<tr>
																		<td style="text-align:center; vertical-align:top"><span style="font-size:14px"><span style="font-family:Helvetica"><span style="font-family:tahoma,verdana,segoe,sans-serif">With very rare exceptions Duke Energy serves all of our markets<br />
																		<br />
																		With very rare exceptions PSNC gas serves all of our markets.&nbsp; Most inland homes require gas to run the heat or water heater.&nbsp; Even for coastal rentals, be sure to confirm if you need gas or you could be scrambling to connect after move in</span></span></span></td>
																	</tr>
																</tbody>
															</table>
															</td>
														</tr>
													</tbody>
												</table>
												</td>
											</tr>
										</tbody>
									</table>

									<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td style="vertical-align:top">
												<table style="background-color:#1d8387; border-radius:3px">
													<tbody>
														<tr>
															<td style="background-color:#1d8387; vertical-align:middle"><span style="font-size:16px"><span style="font-family:Arial">It&#39;s a great idea to review your welcome email checklist, now &amp; 3 days prior to move in</span></span></td>
														</tr>
													</tbody>
												</table>
												</td>
											</tr>
										</tbody>
									</table>

									<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td style="vertical-align:top">
												<table align="left" cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
													<tbody>
														<tr>
															<td>
															<table border="1" cellspacing="0" style="border-collapse:collapse; border:1px solid; min-width:100%; width:100%">
																<tbody>
																	<tr>
																		<td style="text-align:center; vertical-align:top"><span style="font-size:14px"><span style="font-family:Helvetica"><span style="font-family:tahoma,verdana,segoe,sans-serif">Water, sewer &amp; trash are tougher to identify.&nbsp; In some&nbsp;</span><span style="font-family:tahoma,verdana,segoe,sans-serif">areas</span><span style="font-family:tahoma,verdana,segoe,sans-serif">&nbsp;it&#39;s the city, (most Triangle locations) and in&nbsp;</span><span style="font-family:tahoma,verdana,segoe,sans-serif">others</span><span style="font-family:tahoma,verdana,segoe,sans-serif">&nbsp;it&#39;s privately handled, sometimes with a lot of options. (Wilmington)&nbsp;&nbsp;</span></span></span></td>
																	</tr>
																</tbody>
															</table>
															</td>
														</tr>
													</tbody>
												</table>
												</td>
											</tr>
										</tbody>
									</table>

									<table cellspacing="0" style="border-collapse:collapse; min-width:100%; table-layout:fixed; width:100%">
										<tbody>
											<tr>
												<td>
												<table cellspacing="0" style="border-collapse:collapse; border-top:2px solid #eaeaea; min-width:100%; width:100%">
													<tbody>
														<tr>
															<td>&nbsp;</td>
														</tr>
													</tbody>
												</table>
												</td>
											</tr>
										</tbody>
									</table>

									<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td style="vertical-align:top">
												<table align="left" cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
													<tbody>
														<tr>
															<td>
															<table border="1" cellspacing="0" style="border-collapse:collapse; border:1px solid; min-width:100%; width:100%">
																<tbody>
																	<tr>
																		<td style="text-align:center; vertical-align:top"><span style="font-size:14px"><span style="font-family:Helvetica"><span style="font-family:tahoma,verdana,segoe,sans-serif">For&nbsp;</span><span style="font-family:tahoma,verdana,segoe,sans-serif">media</span>&nbsp;<span style="font-family:tahoma,verdana,segoe,sans-serif">we&#39;re</span><span style="font-family:tahoma,verdana,segoe,sans-serif">&nbsp;mostly served by Spectrum &amp; AT&amp;T but you can use Google for more options. Your account manager will be happy to help out with power, gas, and water connections but we do not get involved in media</span></span></span></td>
																	</tr>
																</tbody>
															</table>
															</td>
														</tr>
													</tbody>
												</table>
												</td>
											</tr>
										</tbody>
									</table>

									<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td style="vertical-align:top">
												<table style="background-color:#1d8387; border-radius:3px">
													<tbody>
														<tr>
															<td style="background-color:#1d8387; vertical-align:middle"><span style="font-size:16px"><span style="font-family:Arial">Some utilities don&#39;t allow stop orders, which could result in charges to the owner that will then be prorated and added to your balance.&nbsp; We charge a $50 fee for this process.&nbsp; This isn&#39;t a fee for profit, but to discourage the problem</span></span></td>
														</tr>
													</tbody>
												</table>
												</td>
											</tr>
										</tbody>
									</table>

									<table cellspacing="0" style="border-collapse:collapse; min-width:100%; table-layout:fixed; width:100%">
										<tbody>
											<tr>
												<td>
												<table cellspacing="0" style="border-collapse:collapse; border-top:2px solid #eaeaea; min-width:100%; width:100%">
													<tbody>
														<tr>
															<td>&nbsp;</td>
														</tr>
													</tbody>
												</table>
												</td>
											</tr>
										</tbody>
									</table>

									<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td style="vertical-align:top">
												<table align="left" cellspacing="0" style="border-collapse:collapse; max-width:300px; width:100%">
													<tbody>
														<tr>
															<td style="vertical-align:top"><br />
															<span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><a href="https://MoveZen360.com/utility-hub-makes-moving-easier/" style="color:#007c89" target="_blank"><img class="gmail_canned_response_image" src="https://ci4.googleusercontent.com/proxy/RFCVjjodwQdGQ9D55D_dXkkBjleVQEpiR0haqonsnvUK-Bsn9SbQ8EjjWvmT-E-0EGYmePj6ABSKh9HWzjQhlIkmy5eWpKOTIOXYVJNrkXLsxYfpAw0vGY9jcKNv82z1o2aDFOd3X1RCn0L9vB5c_KOm1GWJJWhj1d0=s0-d-e1-ft#https://gallery.mailchimp.com/550bd6ef99c9bde377800aeef/images/4df8a1a9-68d7-4725-a63b-21616f5d225c.png" style="height:34px; outline:none; text-decoration-line:none; width:233px" /></a></span></span></span></td>
														</tr>
													</tbody>
												</table>

												<table align="left" cellspacing="0" style="border-collapse:collapse; max-width:300px; width:100%">
													<tbody>
														<tr>
															<td style="vertical-align:top"><span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><span style="color:#000000"><span style="font-size:14px"><span style="font-family:tahoma,verdana,segoe,sans-serif">We haven&#39;t used this service for long, but they have phenomenal reviews and it&#39;s worth a shot!</span></span></span></span></span></span></td>
														</tr>
													</tbody>
												</table>
												</td>
											</tr>
										</tbody>
									</table>

									<table cellspacing="0" style="border-collapse:collapse; min-width:100%; table-layout:fixed; width:100%">
										<tbody>
											<tr>
												<td>
												<table cellspacing="0" style="border-collapse:collapse; border-top:2px solid #eaeaea; min-width:100%; width:100%">
													<tbody>
														<tr>
															<td>&nbsp;</td>
														</tr>
													</tbody>
												</table>
												</td>
											</tr>
										</tbody>
									</table>

									<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td style="vertical-align:top">
												<table align="left" cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
													<tbody>
														<tr>
															<td>
															<table cellspacing="0" style="background-color:#dc7d44; border-collapse:collapse; min-width:100%; width:100%">
																<tbody>
																	<tr>
																		<td style="background-color:#dc7d44; text-align:center; vertical-align:top"><span style="font-size:14px"><span style="color:#f2f2f2"><span style="font-family:Helvetica"><span style="font-size:15px"><span style="font-family:tahoma,verdana,segoe,sans-serif">Want to receive a full deposit refund?<br />
																		<br />
																		We&#39;ve already provided a list of common charges, as well as the &quot;rules of the road&quot;, but an important final step in the process is a thorough &quot;move-in inspection.&quot;&nbsp;&nbsp;</span></span></span></span></span></td>
																	</tr>
																</tbody>
															</table>
															</td>
														</tr>
													</tbody>
												</table>
												</td>
											</tr>
										</tbody>
									</table>

									<table cellspacing="0" style="border-collapse:collapse; min-width:100%; table-layout:fixed; width:100%">
										<tbody>
											<tr>
												<td>
												<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
													<tbody>
														<tr>
															<td>&nbsp;</td>
														</tr>
													</tbody>
												</table>
												</td>
											</tr>
										</tbody>
									</table>

									<table cellspacing="0" style="border-collapse:collapse; min-width:100%; table-layout:fixed; width:100%">
										<tbody>
											<tr>
												<td>
												<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
													<tbody>
														<tr>
															<td>&nbsp;</td>
														</tr>
													</tbody>
												</table>
												</td>
											</tr>
										</tbody>
									</table>

									<table cellspacing="0" style="border-collapse:collapse; width:100%">
										<tbody>
											<tr>
												<td style="vertical-align:top">
												<table align="left" cellspacing="0" style="border-collapse:collapse; width:282px">
													<tbody>
														<tr>
															<td style="vertical-align:top"><img alt="" class="gmail_canned_response_image" src="https://ci5.googleusercontent.com/proxy/tXtDnUFER6IPw-eAoehdHrK_IYJmgBzdMEKyqd-wyr_YsNcYEj30miEvzTtSkAk0iaxY5_NbbECfRgqdW7bniRjZ5CREFZEAoZHxyOJCUXkhDvRoQXE35H7wNdh7w-eQAMaj-kEEbiJPiiPfYbY-CdtERPPxN9IiCMU=s0-d-e1-ft#https://gallery.mailchimp.com/550bd6ef99c9bde377800aeef/images/d3699700-7215-4d68-82f4-5d719f9ab189.jpg" style="border:0px; height:auto; max-width:1280px; outline:none; vertical-align:bottom; width:264px" /></td>
														</tr>
														<tr>
															<td style="vertical-align:top; width:282px">
															<p><span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:15px"><strong>Here are some move checklists we&#39;ve compiled over the years</strong></span></span><br />
															<br />
															<span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:15px">Upack</span></span><span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:15px">&nbsp;moving checklist 2 months&nbsp;</span></span><span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:15px">till</span></span><span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:15px">&nbsp;moving day&nbsp;<a href="https://movezen360.com/wp-content/uploads/2018/02/Moving_Checklist.pdf" style="color:#007c89" target="_blank">here</a><br />
															<br />
															Trulia general moving tips &amp; checklist&nbsp;<a href="https://movezen360.com/wp-content/uploads/2018/02/Trulia-Moving-Checklist.pdf" style="color:#007c89" target="_blank">here</a><br />
															<br />
															33 Moving tips to make life easier&nbsp;<a href="https://www.buzzfeed.com/peggy/brilliant-moving-tips?utm_term=.twbx7qAne#.ynN3YDyem" style="color:#007c89" target="_blank">here</a></span></span><br />
															<br />
															<span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:15px">Movezen</span></span><span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:15px">&nbsp;21 tips for a seamless move&nbsp;<a href="https://movezen360.com/21-tips-for-a-seamless-move/" style="color:#007c89" target="_blank">here</a></span></span></span></span></span></p>
															</td>
														</tr>
													</tbody>
												</table>

												<table align="right" cellspacing="0" style="border-collapse:collapse; width:282px">
													<tbody>
														<tr>
															<td style="vertical-align:top"><a href="https://movezen360.com/landlords-property-managers-can-make-rental-property-inspections/" style="color:#1155cc" target="_blank" title=""><img alt="" class="gmail_canned_response_image" src="https://ci6.googleusercontent.com/proxy/H_jOkJp9daAEDpLLTXB4ab5q9sQH1wGwTOcOSyxF3bW6xdqq48QgkfywGw7-DtaySlFfx-M1DfrgWn7Gl_4JD_FrX_y9dsy09kYYiG9i0K_cFCjvTd3yna1M-I12HzHNGtIRJUCprd9eQ9Ny7TDiksNA5ILluRGrvAM=s0-d-e1-ft#https://gallery.mailchimp.com/550bd6ef99c9bde377800aeef/images/59cbc7b5-e21b-452a-8e68-0ce14611b5a2.jpg" style="border:0px; height:auto; max-width:1024px; outline:none; text-decoration-line:none; vertical-align:bottom; width:264px" /></a></td>
														</tr>
														<tr>
															<td style="vertical-align:top; width:282px">
															<p><span style="font-size:16px"><span style="color:#757575"><span style="font-family:Helvetica"><span style="font-size:15px"><span style="font-family:tahoma,verdana,segoe,sans-serif"><strong>Download&nbsp;move-in inspection&nbsp;<a href="https://movezen360.com/landlords-property-managers-can-make-rental-property-inspections/" style="color:#007c89; font-weight:normal" target="_blank">here</a></strong><br />
															<br />
															Tips to make the most of your inspection<br />
															<br />
															Be thorough when filling out this form!<br />
															<br />
															Do not forget to return this form to us within 10 days of your lease date, it&#39;s important and often helps us to deal with unreasonable owners<br />
															<br />
															Supplement&nbsp;with photos!&nbsp; There are tons of free photo storage options</span></span></span></span></span></p>
															</td>
														</tr>
													</tbody>
												</table>
												</td>
											</tr>
										</tbody>
									</table>

									<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td style="vertical-align:top">
												<table align="left" cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
													<tbody>
														<tr>
															<td style="text-align:center; vertical-align:top"><img alt="" class="gmail_canned_response_image" src="https://ci3.googleusercontent.com/proxy/UdA51acQbOoJCP0cYs1QzUdhc5e-sT0F25J3xNYeKIfX_N7nuMjXzmvlT7N67oUPYzsJmkuYTDInorJwGB_SoUxmrWElPY0gG8fuZC4_BDmpRZYGTR3MsSKb--O-zN6OG-_Chm8jmtomVeJg_7vlyH1j0oSNFQTVkrc=s0-d-e1-ft#https://gallery.mailchimp.com/550bd6ef99c9bde377800aeef/images/39283d76-05fd-4613-a001-067895f94023.jpg" style="border:0px; display:inline; height:auto; max-width:1280px; outline:none; padding-bottom:0px; vertical-align:bottom; width:564px" /></td>
														</tr>
													</tbody>
												</table>
												</td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
					<tr>
						<td style="border-bottom:0px; border-top:0px; vertical-align:top">
						<table align="center" cellspacing="0" style="border-collapse:collapse; max-width:600px; width:100%">
							<tbody>
								<tr>
									<td style="border-bottom:0px; border-top:0px; vertical-align:top">
									<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td style="vertical-align:top">
												<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
													<tbody>
														<tr>
															<td>
															<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
																<tbody>
																	<tr>
																		<td style="vertical-align:top">
																		<table align="center" cellspacing="0" style="border-collapse:collapse">
																			<tbody>
																				<tr>
																					<td style="vertical-align:top">
																					<table align="left" cellspacing="0" style="border-collapse:collapse; display:inline">
																						<tbody>
																							<tr>
																								<td style="vertical-align:top"><a href="https://www.facebook.com/MoveZenPropertyManagement" style="color:#1155cc" target="_blank"><img alt="Facebook" class="gmail_canned_response_image" src="https://ci4.googleusercontent.com/proxy/qFht05wXKJYPVChSqXPNvc1fKWeX0ARJAOjh8GXW1FekOnnQWwgFxvi0sXmeC_gX7kPGmh9zqs_BK5qi-OggZUWwUDTVmFzl2nMLYVkeLOJG1GLy2GMDw2FSwi1lRUI=s0-d-e1-ft#https://cdn-images.mailchimp.com/icons/social-block-v2/color-facebook-96.png" style="border:0px; display:block; height:auto; max-width:48px; outline:none; text-decoration-line:none; width:48px" /></a></td>
																							</tr>
																						</tbody>
																					</table>

																					<table align="left" cellspacing="0" style="border-collapse:collapse; display:inline">
																						<tbody>
																							<tr>
																								<td style="vertical-align:top"><a href="https://twitter.com/movezen" style="color:#1155cc" target="_blank"><img alt="Twitter" class="gmail_canned_response_image" src="https://ci5.googleusercontent.com/proxy/N2Tp0PRtOw2d9fxkOv0uzHayVDLBY_VzizxiL-Dd48Fy12YDJsF-76WbOkn_oZRohKFnaZxIVseSCa0mIwH9gmJ7NAZmurDqOv26ZZGroibd2YTyVdsKHxKbz_-DpQ=s0-d-e1-ft#https://cdn-images.mailchimp.com/icons/social-block-v2/color-twitter-96.png" style="border:0px; display:block; height:auto; max-width:48px; outline:none; text-decoration-line:none; width:48px" /></a></td>
																							</tr>
																						</tbody>
																					</table>

																					<table align="left" cellspacing="0" style="border-collapse:collapse; display:inline">
																						<tbody>
																							<tr>
																								<td style="vertical-align:top"><a href="https://www.youtube.com/victoryrealty0621a" style="color:#1155cc" target="_blank"><img alt="YouTube" class="gmail_canned_response_image" src="https://ci5.googleusercontent.com/proxy/ukLwIcq0_BwHp3MKQ3JVcL_RusbSuHQBmUyVvwBEVwmTd9REOVwaGuRnIni4_8kBFxo7w90bclIRASj-q9ooUtGrh1Gsuvcw9yFyYoj7zImRlzTGD2bM_hH6zqpjPQ=s0-d-e1-ft#https://cdn-images.mailchimp.com/icons/social-block-v2/color-youtube-96.png" style="border:0px; display:block; height:auto; max-width:48px; outline:none; text-decoration-line:none; width:48px" /></a></td>
																							</tr>
																						</tbody>
																					</table>

																					<table align="left" cellspacing="0" style="border-collapse:collapse; display:inline">
																						<tbody>
																							<tr>
																								<td style="vertical-align:top"><a href="https://www.linkedin.com/company/movezen-property-management" style="color:#1155cc" target="_blank"><img alt="LinkedIn" class="gmail_canned_response_image" src="https://ci6.googleusercontent.com/proxy/HqEBoUAkA3N5YazBXzVCbXCrr77KHTKEGZGql2Q6PeAuAglM245sN6V5A3Aow5J19qeDhbx3aiPlMBPMaZO6WCGmlFUYGjgssF5Yep15n9n7Tz9ACNxbN5yi3dlhGsk=s0-d-e1-ft#https://cdn-images.mailchimp.com/icons/social-block-v2/color-linkedin-96.png" style="border:0px; display:block; height:auto; max-width:48px; outline:none; text-decoration-line:none; width:48px" /></a></td>
																							</tr>
																						</tbody>
																					</table>

																					<table align="left" cellspacing="0" style="border-collapse:collapse; display:inline">
																						<tbody>
																							<tr>
																								<td style="vertical-align:top"><a href="https://movezen360.com/property-management/" style="color:#1155cc" target="_blank"><img alt="Website" class="gmail_canned_response_image" src="https://ci4.googleusercontent.com/proxy/FsqqIPY-Nm2D_Bf5k5DgsUKhKOEwTAS6vKaecLtDq_Tq6x2vbHC_vsCGW9RAFS9OP1aZvcKTwGg22EslrJNCslVk361E_pOQ541PKuxb84ZyXgRNw0WgDMiMaQ=s0-d-e1-ft#https://cdn-images.mailchimp.com/icons/social-block-v2/color-link-96.png" style="border:0px; display:block; height:auto; max-width:48px; outline:none; text-decoration-line:none; width:48px" /></a></td>
																							</tr>
																						</tbody>
																					</table>

																					<table align="left" cellspacing="0" style="border-collapse:collapse; display:inline">
																						<tbody>
																							<tr>
																								<td style="vertical-align:top"><a href="mailto:rent@movezen360.com" style="color:#1155cc" target="_blank"><img alt="Email" class="gmail_canned_response_image" src="https://ci4.googleusercontent.com/proxy/Q2GeX3Ltv09AGX_4HZwNpXsmmwQY0KQIB0fHvN2En05EvcjnqfX7is6jynxwIKUMo6m4WU7ICSAQ38Ay4ZJDx_wW5BWZ63cwp7tKE1M1ArQuuZFjgjAblgbA7tT-2mXuKQG7Q8I6=s0-d-e1-ft#https://cdn-images.mailchimp.com/icons/social-block-v2/color-forwardtofriend-96.png" style="border:0px; display:block; height:auto; max-width:48px; outline:none; text-decoration-line:none; width:48px" /></a></td>
																							</tr>
																						</tbody>
																					</table>
																					</td>
																				</tr>
																			</tbody>
																		</table>
																		</td>
																	</tr>
																</tbody>
															</table>
															</td>
														</tr>
													</tbody>
												</table>
												</td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>
			</td>
		</tr>
	</tbody>
</table>`);

}






function sendUtilityNotice() {
  Office.context.mailbox.item.subject.setAsync("It's important you connect utilities before your move, here's a tool to help");

  prependHtmlBody(`<p>Hi!</p><br>

  <p>This is a friendly reminder that it&#39;s time to set up your utilities for your new home.&nbsp;</p><br>
  
  <p>As a reminder, we'll' need your account numbers for your utilities as well as your renter&#39;s insurance before we can release your new home&#39;s keys.</p><br>
  
  <p>If you haven't set up utilities yet, we&#39;ve made it simple for you to do so!&nbsp;</p><br>
  
  <p>Set up your utilities for FREE without the headache through Utility Hub - a trusted MoveZen partner to ease your moving experience. With the help of Utility Hub, our residents now have the option to compare utility rates and set up their new accounts (or transfer) for ALL of their utilities and renters insurance with one simple form.&nbsp;</p><br><br>
  
  <p><a href="https://www.theutilityhub.net/partners-page/victory-property-management" target="_blank">Activate Your Utilities Here With Utility Hub</a></p><br><br>
  
  <p><a href="https://movezen360.com/utility-hub-makes-moving-easier/" target="_blank">Read more about Utility Hub</a></p>`);

}






function sendGeneralRentInfo() {
  Office.context.mailbox.item.subject.setAsync("Thanks for your interest. Here's some info to help you get started");

  prependHtmlBody(`<p>Here are some common steps you may find helpful</p><br>

  <p>For questions on the application process, start here.&nbsp; If this doesn&#39;t cover it (it usually does and much more), let us know your specic question and we'll nail it down.&nbsp;<a href="https://movezen360.com/application-acceptance-qualification-general-faq/">https://movezen360.com/application-acceptance-qualification-general-faq/</a></p><br>
  
  <p>Many of our homes allow self showings, but either way you will want to initiate the process to view any home using this link. Once registered we will have your information, and if the home isn&#39;t quite available to view now we&#39;ll be in touch with updates as to when that will be.&nbsp; If a home isn&#39;t available to show, we&#39;ll be limited in how much we can do for you until it is, but don&#39;t worry your info will be included in the process though that&#39;s not to say you&#39;ll get a chance to view a home in a busy market. In 2022 only about 1/3rd of potential contacts were able to view, but that&#39;s gotten much better in 2023</p><br><br>
  
  <p><a href="https://movezen360.com/schedule-a-self-showing/">https://movezen360.com/schedule-a-self-showing/</a></p><br>
  
  <p>If you would like to apply you can do that here</p><br>
  
  <p><a href="https://movezen360.com/apply-for-a-victory-property-management-rental-home/">https://movezen360.com/apply-for-a-victory-property-management-rental-home/</a></p>
  
  <br><br>
  
  <p>Finally you can often find answers faster using this helpful policy and questions search</p><br>
  
  <p><a href="https://movezen360.com/helpcenter/">https://movezen360.com/helpcenter/</a></p>
  
  <br><br>
  
  <p>Please let us know if you have any questions!&nbsp;&nbsp;Customer Service Team</p>`);

}






// function sendTurnoverReserve() {
//   Office.context.mailbox.item.subject.setAsync("Let's nail down the needed turnover funds now to avoid critical delays");

//   prependHtmlBody(`asdf`);

// }





function sendVendorInsur() {
  Office.context.mailbox.item.subject.setAsync("Let's get your insurance updated to avoid critical delays");

  prependHtmlBody(`<p>Hi!</p>

  <p>It looks like your liability insurance with Victory Real Estate Inc, dba MoveZen Property Management listed as an additional insured is out of date on our end</p>
  
  <p>Please have your insurance company send us an updated a current COI with&nbsp;&quot;Victory Real Estate Inc, dba MoveZen Property Management listed as an additional insured.&nbsp;<br />
  <br />
  COI, Additional Insured/Interest is as follows:<br />
  Victory Real Estate Inc<br />
  4002 1/2 Oleander Dr. Suite 1A</p>
  
  <p>Wilmington, NC 28403&nbsp;<br />
  <br />
  Thanks! MoveZen&nbsp; (we&#39;ll legally change our name in late 2024, this is dba)</p>`);

}





function sendTurnoverReserve() {
  Office.context.mailbox.item.subject.setAsync("Efficiently turning over a rental starts long before your tenant has moved out");

  prependHtmlBody(`<p>Hi!</p><br>
  
  <p>Hope you're doing well.<br><br>
  
  Even for the best of moves we&#39;ll have to clean the home, carpet, and touch up paint in most cases.&nbsp; NC is clear t hat we are not to make security deposit deductions for those items in particular.&nbsp; So we know at a minimum we&#39;ll need what we call the &quot;basics&quot;, and that small list often runs a good portion of one months rent on their own</p>
  
  <p>&nbsp;</p>
  
  <p>It&#39;s very rare that we wouldn&#39;t need you to send us funds relatively close to one month&#39;s rent before we can get started, and it&#39;s not a good idea to show homes these days unless they are close to move in ready</p>
  
  <p>&nbsp;</p>
  
  <p>So we came up with a simple solution.&nbsp; Most hold a large reserve for your entire time with them. In our case, if you&#39;ll authorize your account manager to keep the final months rent before your tenant moves out, in most cases we won&#39;t need you to send additional funds and won&#39;t have to risk any delays</p>
  
  <p>&nbsp;</p>
  
  <p>If the figures seem as though they may far exceed that ask for an estimate on total cost and let&#39;s rough out a budget together with your AM based on the pre move out photos, and we can report on any issues as we move forward</p>
  
  <p>&nbsp;</p>
  
  <p>We don&#39;t keep a months rent without specific bills, or a direct approval to do that so we&#39;ll need you to initiate this process</p>
  
  <p>&nbsp;</p>
  
  <p>Let us know if you have any questions. Thanks!&nbsp; Customer Service Team</p>`);

}




function sendMoveInspectionRemind() {
  Office.context.mailbox.item.subject.setAsync("The move in inspection is meant for no other reason than to protect you");

  prependHtmlBody(`<p> I hope your move-in went smoothly and you're enjoying the home!</p>

  <p>&nbsp;</p>
  
  <p>We know you&#39;re busy but please complete this form within 10 days of your move-in date. It&#39;s to protect you so document all pre-existing damage, heavy wear and tear, or missing items. So you can be open about adding every little thing (please do), this is just a report, not a repair request. If you have repairs you can submit those in your portal</p>
  
  <p>&nbsp;</p>
  
  <p>Click&nbsp;<a href="https://docs.google.com/forms/d/e/1FAIpQLSfvmT5NPpg104WVXuCqaf1vtsnV4KyNls6Q5mC-xm67QiUuRQ/viewform?usp=sf_link" style="color:#1155cc" target="_blank">here</a>&nbsp;to fill out the move-in inspection form online.&nbsp; Or you can fill out this paper copy, either is perfectly fine:&nbsp;<a href="https://movezen360.com/moveininspection/" style="color:#1155cc">Paper move in inspection</a></p>
  
  <p>&nbsp;</p>
  
  <p>One crucial piece of advice, If at all possible try to group your minor service requests together.&nbsp; For most of the work we have to do, the majority of cost is tied up in getting someone out.&nbsp; If we can limit the number of trips by thoroughly&nbsp;reporting everything at once, it will dramatically increase our odds of getting things approved.&nbsp; Nothing will cause an owner to clamp down faster than contacting them several times within a few weeks for minor issues</p>
  
  <p>&nbsp;</p>
  
  <p>&nbsp;If it&#39;s pretty serious, or a major repair is needed, please mention that in a text or email asap.&nbsp; This speeds up scheduling so your requests can be taken care of efficiently&nbsp;</p>
  
  <p>&nbsp;</p>
  
  <p>Thanks!&nbsp;</p>
  `);

}




function sendComplaintResponse() {
  Office.context.mailbox.item.subject.setAsync("We hear you and we're working on it");

  prependHtmlBody(`<p>Hi</p>

  <p>&nbsp;</p>
  
  <p>Thank you for providing this information.&nbsp; Clarity in these situations is crucial so to confirm I understand you properly, you have concerns about ********</p>
  
  <p>&nbsp;</p>
  
  <p>Is there any additional information you can provide to elaborate on your concerns, or potential issues so we can better look into it?</p>
  
  <p>&nbsp;</p>
  
  <p>What kind of solution might you have in mind?</p>
  
  <p>&nbsp;</p>
  
  <p>We&#39;re sorry for the dissatisfaction&nbsp;you&#39;re feeling, and we&#39;re going to jump on this</p>
  
  <p>&nbsp;</p>
  
  <p>Please allow us some time to research things, and we&#39;ll be back in touch soon.</p>
  
  <p>&nbsp;</p>
  
  <p>Thanks! Customer Service Team</p>`);

}




function sendMoveChecklist() {
  Office.context.mailbox.item.subject.setAsync("The most important email we'll send regarding your move out");

  prependHtmlBody(`<p>​Hi!<br />
  <br />
  We made this checklist to outline the most important steps needed to ensure you get a fair deposit return. &nbsp;Please review, follow the steps below, and let me know if you have any questions. This one is a little longer because it&#39;s very important and covers a complex topic<br />
  <br />
  <br />
  It&#39;s crucial that you know, we don&#39;t own the home, we aren&#39;t directly affected by your move-out, and most of all we don&#39;t profit, enjoy, or want to charge deposits. &nbsp;In fact the whole process is one of the most dreaded and time-consuming parts of our business<br />
  <br />
  <br />
  We are though bound by a common basic contract to literally use our best efforts to return the property in the same condition it was given to us and you, with the exception of basic wear and tear. &nbsp;We have no control outside of that, though some owners are a lot easier to deal with than others<br />
  <br />
  <br />
  We drop the most difficult at a rate no other company can match, but we certainly don&#39;t always agree with the decisions our owners make. Our opinion is legally limited, but &nbsp;we&#39;re a highly reputable company and we try very hard to communicate with our owners at every step of the way to reduce friction between you two, and our firm advice usually carries a lot of weight<br />
  <br />
  <br />
  Particularly if they&#39;re local and do their own inspection, owners often put huge amounts of pressure on us to charge for things we would not. &nbsp;Things get much more personal. Once again, we will fight hard for you if we feel that&rsquo;s right, and often do, but if you leave little for us to defend, there is only one person to blame<br />
  <br />
  <br />
  We also understand the nuances of the law extremely well, and have attorneys we can and do consult, so if we determine a charge is necessary it will be within the law. &nbsp;Again, we don&#39;t profit from this process, but we spend tons of time and effort trying to bring both parties together, on the same page. There&#39;s no reason for us to risk breaking the law or even hurting our reputation over small sums that go to the owner<br />
  <br />
  <br />
  You may be surprised to know but if the owner is going to break the law handling your deposit, we are not permitted to stop them. &nbsp;In instances where we dramatically part ways with the owner we&#39;ll usually make that clear to you, or completely end our relationship with them. &nbsp;In those cases the state is clear we must give them your deposit. &nbsp;Ironically, this seems to work surprisingly well as these owners are a lot more passive when their names are on the checks<br />
  <br />
  Here are crucial terms for your move-out that must be followed to ensure a full refund<br />
  <br />
  &nbsp;</p>
  
  <ul>
    <li>All rent and other account fees must be paid in full. &nbsp;Security deposits are never to be used for rent and would result in an eviction filing before you move out</li>
  </ul>
  
  <p>&nbsp;</p>
  
  <ul>
    <li>We professionally clean all homes, so instead of trying to make a place perfect, just focus on extreme issues like crusted ovens, mildew-covered showers, greasy surfaces etc. &nbsp;Basic cleanings aren&#39;t charged, but extensive ones are</li>
  </ul>
  
  <p>&nbsp;</p>
  
  <ul>
    <li>Carpets need to be professionally cleaned. (Receipt is required from a professional)</li>
  </ul>
  
  <p>&nbsp;</p>
  
  <ul>
    <li>Do not touch up paint or use a magic eraser as they cause more problems than benefits. &nbsp;Fingerprints and light scuffs are best cleaned with light, long strokes using a soft, clean, damp cloth and simple windex. &nbsp;This simple step can reduce paint needs dramatically</li>
  </ul>
  
  <p>&nbsp;</p>
  
  <ul>
    <li>Outside hoses must be disconnected and stored</li>
  </ul>
  
  <p>&nbsp;</p>
  
  <ul>
    <li>Grass, bushes, and flower beds must be in decent condition and mowed</li>
  </ul>
  
  <p>&nbsp;</p>
  
  <ul>
    <li>Clean out your dryer lint trap</li>
  </ul>
  
  <p>&nbsp;</p>
  
  <ul>
    <li>Any items moved from their original places need to be returned</li>
  </ul>
  
  <p>&nbsp;</p>
  
  <ul>
    <li>The refrigerator, stove, oven, and microwave must be reasonably clean, defrosted, and plugged in, running at normal settings</li>
  </ul>
  
  <p>&nbsp;</p>
  
  <ul>
    <li>Empty the ice bucket, and turn off the ice maker off prior to vacating</li>
  </ul>
  
  <p>&nbsp;</p>
  
  <ul>
    <li>All personal property, including furniture, motor vehicles and all other items not on the property when you moved in, must be removed from the home and surrounding property. Anything left behind is abandoned and will be disposed of at your expense. &nbsp;Leaving junk in the property also increases the chances that you&#39;ll be charged for an extensive cleaning</li>
  </ul>
  
  <p>&nbsp;</p>
  
  <ul>
    <li>If you have grass, make sure it&#39;s well-watered before you leave. &nbsp;Daily return trips to water grass to save it, because it&#39;s on its last breath, is a costly charge</li>
  </ul>
  
  <p>&nbsp;</p>
  
  <ul>
    <li>Make your final trash pickup arrangements. Definitely don&#39;t cancel service with full cans. &nbsp;It&#39;s a huge hassle for us to take your trash out. &nbsp;We realize those leaving town can&#39;t return and put them out, and we don&#39;t always charge. If your move-out shows other signs of disrespect we will. &nbsp;So for that reason, trash left in cans after keys are returned is chargeable. If you can&#39;t, please let us know, and what day it&#39;s picked up</li>
  </ul>
  
  <p>&nbsp;</p>
  
  <ul>
    <li>Don&#39;t disconnect utilities early without notifying our office first. &nbsp;It&#39;s not always allowed by the owner, but we usually talk them into transferring early if you like. This is especially crucial in winter as busted pipes will be your responsibility. &nbsp;Set thermostats to 60 degrees in winter, and 78 in summer</li>
  </ul>
  
  <p>&nbsp;</p>
  
  <ul>
    <li>Don&#39;t leave clogged drains</li>
  </ul>
  
  <p>&nbsp;</p>
  
  <ul>
    <li>All doors and windows must be properly locked or fastened</li>
  </ul>
  
  <p>&nbsp;</p>
  
  <ul>
    <li>All keys and garage door remotes must be returned to our office (unless instructed to leave inside) by 5 PM the next day after your move out, including non-business days. Owners have and can force us to charge for those extra days. Also, pool keys, mailbox keys, parking passes, etc</li>
  </ul>
  
  <p><br />
  <br />
  Once keys are returned, you are not given the opportunity to take additional steps to avoid a charge. &nbsp;That&#39;s a common complaint that surprises us. &nbsp;Obviously, do it while you live there. Owners expect us to move quickly on addressing &nbsp;these items and relisting, so waiting on someone else to have them taken care of is not an option<br />
  <br />
  <br />
  We document extremely well with photos, and refund/report within 30 days of your &quot;lease end date&quot;<br />
  <br />
  <br />
  <br />
  Most importantly, use common sense, don&rsquo;t destroy something in an effort to hide or improve it. &nbsp;If you have questions, ask! &nbsp;We are literally here to help smooth this process out now, rather than fight through it later. &nbsp;We often have great tips for problems that could help you a lot<br />
  <br />
  <br />
  Thanks!</p>`);

}




function sendUnseenDisclaimer() {
  Office.context.mailbox.item.subject.setAsync("Site Unseen Company Warning Disclaimer");

  prependHtmlBody(`<p>​Hi!<br />
  <br />
  Below is our site unseen disclaimer. &nbsp;You&#39;ve probably already been warned, but this is consistently one of the biggest mistakes renters make in our experience. &nbsp;We aren&#39;t going to shoulder the responsibility for this decision in any way, that is the price for us not disallowing it altogether. &nbsp;It routinely hurts multiple relationships and creates large amounts of headaches, so we take a zero tolerance view. All potential residents will have to sign an unseen waiver, and that also in our view waives your right to complain about all but egregious failings. &nbsp;That&#39;s how starkly we have to word this process, to avoid being blamed</p>
  
  <p><br />
  <br />
  With most rental homes, even quite new, there are almost always a lot of worn or non functional things here and there. We certainly don&#39;t highlight any shortcomings in our ads.</p>
  
  <p><br />
  <br />
  If you even lean towards the picky side you will surely be disappointed by most rental homes.</p>
  
  <p><br />
  <br />
  The other issue is that before lease signing we can more easily negotiate with the owner if some smaller issue is a deal-breaker.</p>
  
  <p><br />
  <br />
  However, at move-in, they tend to shut down on handling aesthetic repairs which then makes you unhappy with us, even though it&#39;s legally out of our hands and we likely tried hard. We are very limited in what we can decide to do as the owner has the final say on all decisions over a token amount, and they are not likely to invest a lot into a home once a tenant has been secured.</p>
  
  <p><br />
  <br />
  Repairs are always handled, but smaller punch list items, older paint, carpet wear, yard cleanup, cosmetic items etc are examples of items that are completely optional for the owner. If extremely unhappy we can rerent the property so that a new tenant moves in as you are moving out, but the hold payment is non-refundable, and once you move in we are operating under occupied lease terms. Finally, while it has been proven to still be ineffective, if you can have someone preview the home that you trust, that can at least be helpful</p>
  
  <p><br />
  <br />
  Thanks, Customer Service Team</p>`);

}




function sendReferenceQuestions() {
  Office.context.mailbox.item.subject.setAsync("Rental Reference Questions for a Former Tenant");

  prependHtmlBody(`<p>​Hello, we've' received a rental application for -----------------------------.
  <br />
  <br />
  We wanted to write to ask if you could provide us with a reference regarding your experience with them as their landlord. &nbsp;Attached you&#39;ll find their signed authorization. &nbsp;Please let us know if you have any questions. &nbsp;Thanks!<br />
  <br />
  <br />
  Lease term dates?<br />
  <br />
  <br />
  Rental rate?<br />
  <br />
  <br />
  How many late payments have been made throughout the lease term?<br />
  <br />
  <br />
  Any payments after the 15th?<br />
  <br />
  &nbsp;<br />
  Has the unit been inspected recently? What was the condition upon last entrance?<br />
  <br />
  <br />
  Any complaints such as noise, domestic, pet, ect?<br />
  <br />
  <br />
  Are they satisfying the lease term as agreed?<br />
  <br />
  <br />
  Would you rent to this tenant again?<br />
  <br />
  <br />
  Thanks!</p>`);

}




function sendPlacementInfo() {
  Office.context.mailbox.item.subject.setAsync("Here are the next steps for us to neatly finalize things for you");

  prependHtmlBody(`<table cellspacing="0" style="border-collapse:collapse; font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif; width:100%">
	<tbody>
		<tr>
			<td style="border-bottom:0px; border-top:0px; vertical-align:top">
			<table align="center" cellspacing="0" style="border-collapse:collapse; max-width:600px; width:600px">
				<tbody>
					<tr>
						<td style="border-bottom:0px; border-top:0px; vertical-align:top">
						<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td style="vertical-align:top">
									<table align="left" cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td style="text-align:center; vertical-align:top">
												<h2><span style="font-family:&quot;trebuchet ms&quot;,sans-serif">MoveZen Placement Only Information Update</span></h2>
												</td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>
			</td>
		</tr>
		<tr>
			<td style="border-bottom:0px; border-top:0px; vertical-align:top">
			<table align="center" cellspacing="0" style="border-collapse:collapse; max-width:600px; width:600px">
				<tbody>
					<tr>
						<td style="border-bottom:0px; border-top:0px; vertical-align:top">
						<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td style="vertical-align:top">
									<table align="left" cellspacing="0" style="border-collapse:collapse; max-width:100%; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td style="vertical-align:top">
												<h4 style="text-align:center"><span style="font-size:16px"><span style="font-family:Helvetica"><span style="color:#757575"><span style="font-size:20px"><span style="color:#949494"><span style="font-family:Georgia"><em><span style="color:#696969"><span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:23px"><strong>Important Details for Placement Only Management</strong></span></span></span></em></span></span></span></span></span></span></h4>

												<p><span style="font-size:16px"><span style="font-family:Helvetica"><span style="color:#757575">(when we send funds, how contact info is exchanged, etc)</span></span></span></p>
												</td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>

						<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td style="vertical-align:top">
									<table align="left" cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td style="text-align:center; vertical-align:top"><img alt="" class="gmail_canned_response_image" src="https://ci6.googleusercontent.com/proxy/bllWmKk12ceyPNUSCu0_31xcLzo_irur8Nn3DxHCWPOk9ZsdmdYUoqKSS_BX-3RvXyRIbqI4IhGGnbZ-sZa0TKLiVWFIOWIoshnW0ZTFG7XMosnyDRdqqRGgJwfIxQzWMaTA0SEdpykliq_zL_wo2onaWA7dkoMPiAo=s0-d-e1-ft#https://gallery.mailchimp.com/550bd6ef99c9bde377800aeef/images/a6cc3d63-36a9-45ee-a279-6323028af4b4.jpg" style="border:0px; display:inline; height:auto; max-width:1280px; outline:none; padding-bottom:0px; vertical-align:bottom; width:564px" /></td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>

						<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td style="vertical-align:top">
									<table align="left" cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td>
												<table cellspacing="0" style="background-color:#1d8387; border-collapse:collapse; min-width:100%; width:100%">
													<tbody>
														<tr>
															<td style="background-color:#1d8387; text-align:center; vertical-align:top">
															<p><span style="font-size:14px"><span style="font-family:Helvetica"><span style="color:#ffffff">Thank you for choosing MoveZen to handle your tenant placement needs. This email will cover the details of the process from handing the tenant over to you to when we send funds.&nbsp;&nbsp;<br />
															<br />
															First!&nbsp; &nbsp;We need you to email us detailed instructions on where tenants should pay their rent (after move in), and also how they should report maintenance.&nbsp;&nbsp;Remember, the more detailed, the less likely a tenant can claim misunderstanding.&nbsp; Do this now to avoid delays or mistakes!<br />
															<br />
															A few simple points to keep in mind are&hellip;</span></span></span></p>
															</td>
														</tr>
													</tbody>
												</table>
												</td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>

						<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td style="vertical-align:top">
									<table align="left" cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td>
												<table border="1" cellspacing="0" style="border-collapse:collapse; border:1px solid; min-width:100%; width:100%">
													<tbody>
														<tr>
															<td style="text-align:center; vertical-align:top">&nbsp;
															<p><span style="font-size:14px"><span style="font-family:Helvetica">● We never disburse any funds until tenant has taken possession of the property<br />
															&nbsp;</span></span></p>

															<p><span style="font-size:14px"><span style="font-family:Helvetica">● Because we are transferring both tenant funds, and owner funds, we prefer to mail these checks so it&rsquo;s clearly noted on the memo line. However ACH is an option if needed.<br />
															&nbsp;</span></span></p>

															<p><span style="font-size:14px"><span style="font-family:Helvetica">● We finalize accounting around the 10th, and the 19th. Rental funds (owner income) will typically be sent on the next accounting day after move in.<br />
															&nbsp;</span></span></p>

															<p><span style="font-size:14px"><span style="font-family:Helvetica">● Remember the difference between a fee (owner keeps, non refundable) and a deposit (must be refunded or legally applied to the charges it was intended to cover).<br />
															&nbsp;</span></span></p>

															<p><span style="font-size:14px"><span style="font-family:Helvetica">● Funds labeled as deposits are required by law&nbsp;to be held in a NC trust account until the tenant vacates.<br />
															&nbsp;</span></span></p>

															<p><span style="font-size:14px"><span style="font-family:Helvetica">● For that reason, and due to notification requirements, we don&rsquo;t rush tenant deposits to mail. They will usually be sent within a couple weeks of rental funds, or within 30 days.<br />
															&nbsp;</span></span></p>

															<p><span style="font-size:14px"><span style="font-family:Helvetica">● We are phenomenal at handling problem tenants. While we try hard to stand by our work, many avoidable problems arise due to weak management, inattention, or inconsistency. Simply having problems with a tenant is not a direct reflection on our placement choice. Should they arise, we are happy to offer advice at a minimum.<br />
															&nbsp;</span></span></p>

															<p><span style="font-size:14px"><span style="font-family:Helvetica">● Around move in time, you will receive a form outlining what deposits were paid, as well as contact information for your tenant. Your contact information will also be included, &amp; we&rsquo;ll copy both parties. This form will instruct the tenant on important aspects of their lease including where to pay rent.<br />
															&nbsp;</span></span></p>
															<span style="font-size:14px"><span style="font-family:Helvetica">● We use a standard NC lease that&#39;s written by the NC Bar Association and sets the most common standards for NC leasing.&nbsp; One of those standards is not considering rent to be late until after the 5th.&nbsp; We cannot change our lease as it&#39;s copyrighted, and we also are forbidden from writing lengthy clauses.&nbsp; We can use a copy or clause that you provide to us if you&#39;d like.&nbsp; However, we cannot verify the enforceability of your own lease / clauses.</span></span></td>
														</tr>
													</tbody>
												</table>
												</td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>

						<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td style="vertical-align:top">
									<table align="left" cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td>
												<table cellspacing="0" style="background-color:#dc7d44; border-collapse:collapse; min-width:100%; width:100%">
													<tbody>
														<tr>
															<td style="background-color:#dc7d44; text-align:center; vertical-align:top"><span style="font-size:14px"><span style="font-family:Helvetica"><span style="color:#f2f2f2">View a sample lease&nbsp;<a href="https://movezen.sharepoint.com/:b:/s/leadership2/EQSX2QYwvn1EuKIrY8ZCIp0Bt6XqVYN4xtcu6QEgoFGJMA?e=Uqbc6kg" style="color:#007c89" target="_blank">here...</a>&nbsp; Note:&nbsp; For placement we are not listed anywhere on the lease, otherwise this is essentially the copy that we will use so you will want to notify us of any simple additions you might like to make<br />
															<br />
															View a sample of the contact / instruction exchange form we use once a tenant is secured,&nbsp;<a href="https://movezen.sharepoint.com/:b:/s/marketing/Ea1rGelqYjZAsoQV82ing2MBiBWSS0BRKr8wFQgK3X6QVw?e=c3Gkn7" style="color:#007c89" target="_blank">here...</a><br />
															&nbsp;</span></span></span></td>
														</tr>
													</tbody>
												</table>
												</td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>

						<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td style="vertical-align:top">
									<table align="left" cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td>
												<table border="1" cellspacing="0" style="border-collapse:collapse; border:1px solid; min-width:100%; width:100%">
													<tbody>
														<tr>
															<td style="text-align:center; vertical-align:top">
															<p><span style="font-size:14px"><span style="font-family:Helvetica"><span style="font-family:tahoma,verdana,segoe,sans-serif"><img class="gmail_canned_response_image" src="https://ci5.googleusercontent.com/proxy/yCZKQ-hNiQu48WKX0_97NAiauUpNY63VIwWJPAdYKvWcnSxjbptS1mJgNfAmaM_u8adVQGBasi0YRPX12EoCAHBA8pjlde4m_QF9JmbAfjxugm1ZJ77jR_PSFeVrLqFohkGG6DzdVV06Cm0GC36n-zcLpX2CyR9Pluk=s0-d-e1-ft#https://gallery.mailchimp.com/550bd6ef99c9bde377800aeef/images/861d683d-a5d3-47fd-8710-ae3a600461bc.jpg" style="border:0px; float:right; height:106px; margin-bottom:10px; margin-left:10px; margin-right:10px; margin-top:10px; outline:none; width:200px" /></span><span style="font-size:15px"><span style="font-family:tahoma,verdana,segoe,sans-serif">Clarity regarding move out expectations will go a long way toward a smooth experience</span></span><br />
															<br />
															<span style="font-family:tahoma,verdana,segoe,sans-serif">We notify tenants of potential security deposit charges using a predetermined list of costs.&nbsp; These are of course relative and can vary, but it is a very good benchmark that you can use to determine fair and legal charges after your tenant moves out.&nbsp; Take a look and let us know if you have any questions,&nbsp;<a href="https://movezen.sharepoint.com/:b:/s/marketing/EW0I7jTGoKRCt1JnSOcbUT8BgqosQVEz4PC45FAxU2eBNA?e=IzIxpO" style="color:#007c89" target="_blank">here...</a></span></span></span></p>
															</td>
														</tr>
													</tbody>
												</table>
												</td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>

						<table cellspacing="0" style="border-collapse:collapse; min-width:100%; table-layout:fixed; width:100%">
							<tbody>
								<tr>
									<td>
									<table cellspacing="0" style="border-collapse:collapse; border-top:2px solid #eaeaea; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td>&nbsp;</td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>

						<table cellspacing="0" style="border-collapse:collapse; min-width:100%; table-layout:fixed; width:100%">
							<tbody>
								<tr>
									<td>
									<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td>&nbsp;</td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>

						<table cellspacing="0" style="border-collapse:collapse; min-width:100%; table-layout:fixed; width:100%">
							<tbody>
								<tr>
									<td>
									<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td>&nbsp;</td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>

						<table cellspacing="0" style="border-collapse:collapse; width:100%">
							<tbody>
								<tr>
									<td style="vertical-align:top">
									<table align="left" cellspacing="0" style="border-collapse:collapse; width:282px">
										<tbody>
											<tr>
												<td style="vertical-align:top"><img alt="" class="gmail_canned_response_image" src="https://ci5.googleusercontent.com/proxy/tXtDnUFER6IPw-eAoehdHrK_IYJmgBzdMEKyqd-wyr_YsNcYEj30miEvzTtSkAk0iaxY5_NbbECfRgqdW7bniRjZ5CREFZEAoZHxyOJCUXkhDvRoQXE35H7wNdh7w-eQAMaj-kEEbiJPiiPfYbY-CdtERPPxN9IiCMU=s0-d-e1-ft#https://gallery.mailchimp.com/550bd6ef99c9bde377800aeef/images/d3699700-7215-4d68-82f4-5d719f9ab189.jpg" style="border:0px; height:auto; max-width:1280px; outline:none; vertical-align:bottom; width:264px" /></td>
											</tr>
											<tr>
												<td style="vertical-align:top; width:282px">
												<p><span style="font-size:16px"><span style="font-family:Helvetica"><span style="color:#757575"><strong>The Nightmare of Home&nbsp;Warranties for Landlords</strong><br />
												<br />
												More and more single family homes are being marketed with a home warranty policy. This is the seller&rsquo;s way of trying to convince the buyer that if something breaks during the first year of ownership, the warranty policy will cover the expense and the buyer will be 100% satisfied. But, in our personal experience, home warranties are more of a nightmare than a benefit to investors and landlords.&nbsp; More&nbsp;<a href="https://MoveZen360.com/nightmare-home-warranties-landlords/" style="color:#007c89" target="_blank">here...</a></span></span></span></p>
												</td>
											</tr>
										</tbody>
									</table>

									<table align="right" cellspacing="0" style="border-collapse:collapse; width:282px">
										<tbody>
											<tr>
												<td style="vertical-align:top"><a href="https://movezen.sharepoint.com/:b:/s/leadership2/Ee42mjN-s2VOrhgEye3MoMcBdI9qhClnmZAjaS_-XXl0Sg?e=VqmWC2" target="_blank" title=""><img alt="" class="gmail_canned_response_image" src="https://ci6.googleusercontent.com/proxy/H_jOkJp9daAEDpLLTXB4ab5q9sQH1wGwTOcOSyxF3bW6xdqq48QgkfywGw7-DtaySlFfx-M1DfrgWn7Gl_4JD_FrX_y9dsy09kYYiG9i0K_cFCjvTd3yna1M-I12HzHNGtIRJUCprd9eQ9Ny7TDiksNA5ILluRGrvAM=s0-d-e1-ft#https://gallery.mailchimp.com/550bd6ef99c9bde377800aeef/images/59cbc7b5-e21b-452a-8e68-0ce14611b5a2.jpg" style="border:0px; height:auto; max-width:1024px; outline:none; text-decoration-line:none; vertical-align:bottom; width:264px" /></a></td>
											</tr>
											<tr>
												<td style="vertical-align:top; width:282px">
												<p><span style="font-size:16px"><span style="font-family:Helvetica"><span style="color:#757575"><span style="font-size:15px"><span style="font-family:tahoma,verdana,segoe,sans-serif"><strong>Download&nbsp;move-in inspection&nbsp;<a href="https://movezen.sharepoint.com/:b:/s/leadership2/Ee42mjN-s2VOrhgEye3MoMcBdI9qhClnmZAjaS_-XXl0Sg?e=VqmWC2" style="color:#007c89; font-weight:normal" target="_blank">here</a></strong></span></span><br />
												<br />
												We provide tenants with this form, and notify them that it&#39;s important they return it to you within 14 days of move in.&nbsp; It is intended to note damage that was preexisting before they moved in.&nbsp; It is a very good idea to request this from them several times if need be.&nbsp; From there you should inspect it for potential concerns, and finally consider if you should address any of the issues noted<br />
												&nbsp;</span></span></span></p>
												</td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>
			</td>
		</tr>
		<tr>
			<td style="border-bottom:0px; border-top:0px; vertical-align:top">&nbsp;</td>
		</tr>
	</tbody>
</table>`);

}




function sendLeaseBreakNotice() {
  Office.context.mailbox.item.subject.setAsync("Helpful tips and next steps for breaking your lease the safe way");

  prependHtmlBody(`<table align="center" cellspacing="0" style="border-collapse:collapse; max-width:600px; width:600px">
	<tbody>
		<tr>
			<td style="border-bottom:0px; border-top:0px; vertical-align:top">
			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table align="left" cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td style="text-align:center; vertical-align:top">
									<h2>MoveZen Tips on Getting Out of Your Lease Early</h2>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>
			</td>
		</tr>
	</tbody>
</table>

<table align="center" cellspacing="0" style="border-collapse:collapse; max-width:600px; width:600px">
	<tbody>
		<tr>
			<td style="border-bottom:0px; border-top:0px; vertical-align:top">
			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table align="left" cellspacing="0" style="border-collapse:collapse; max-width:100%; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td style="vertical-align:top">
									<h4 style="text-align:center"><span style="font-size:16px"><span style="font-family:Helvetica"><span style="color:#757575"><span style="font-size:20px"><span style="color:#949494"><span style="font-family:Georgia"><em><span style="color:#696969"><strong><span style="font-size:23px"><span style="font-family:tahoma,verdana,segoe,sans-serif">Breaking your lease the easy way</span></span></strong><br />
									<span style="font-size:14px"><span style="font-family:tahoma,verdana,segoe,sans-serif">We completely understand that at times breaking your lease is unavoidable.&nbsp; We help tenants through the process all the time, and usually it goes quite smoothly.&nbsp; Assuming you keep the home in great shape, and easily available for showings you should be released from your obligation with relative ease!&nbsp; Be sure to follow these steps and tips well</span></span></span></em></span></span></span></span></span></span></h4>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table align="left" cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td style="text-align:center; vertical-align:top"><img alt="" class="gmail_canned_response_image" src="https://ci6.googleusercontent.com/proxy/bllWmKk12ceyPNUSCu0_31xcLzo_irur8Nn3DxHCWPOk9ZsdmdYUoqKSS_BX-3RvXyRIbqI4IhGGnbZ-sZa0TKLiVWFIOWIoshnW0ZTFG7XMosnyDRdqqRGgJwfIxQzWMaTA0SEdpykliq_zL_wo2onaWA7dkoMPiAo=s0-d-e1-ft#https://gallery.mailchimp.com/550bd6ef99c9bde377800aeef/images/a6cc3d63-36a9-45ee-a279-6323028af4b4.jpg" style="border:0px; display:inline; height:auto; max-width:1280px; outline:none; padding-bottom:0px; vertical-align:bottom; width:564px" /></td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table align="left" cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td>
									<table cellspacing="0" style="background-color:#1d8387; border-collapse:collapse; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td style="background-color:#1d8387; text-align:center; vertical-align:top"><span style="font-size:14px"><span style="font-family:Helvetica"><span style="color:#ffffff">Remember!&nbsp; Everyone is required to keep utilities connected and available, as well as rent payments on schedule even while working to release you from the lease.&nbsp; Not only is it hard to find a replacement when utilities are off, we will connect them and charge a hefty fee.&nbsp; Your move out date is critical as someone else will be right behind you.&nbsp; We can&#39;t have delays.&nbsp; We need a couple days to properly turn the property over so keep that in mind, and if you leave the place in rough shape it will likely lead to delays and additional charges</span></span></span></td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table align="left" cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td>
									<table border="1" cellspacing="0" style="border-collapse:collapse; border:1px solid; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td style="text-align:center; vertical-align:top"><span style="font-size:14px"><span style="font-family:Helvetica"><span style="font-family:tahoma,verdana,segoe,sans-serif">The process of rerenting a home to end any liablity you have under the lease is one of the most technically difficult parts of renting.&nbsp; For that reason we&#39;ve put together a very detailed handout on the issue, complete with practice examples to cover multiple issues.</span><br />
												<br />
												On the surface it&#39;s simple, you&#39;d be responsible for all rent still due per your lease (rent due = number of days left, X your daily rental rate), plus any costs associated with marketing or costs such as an HOA registration fee.&nbsp; So..</span></span>

												<p><br />
												<span style="font-size:14px"><span style="font-family:Helvetica">Then, when we secure a new tenant, they will cover many of the remaining days on your lease.&nbsp; We take their daily&nbsp;rate, multiply that by the days left on your lease, and subtract that from what you owe.&nbsp; Often there is very little cost to you when breaking your lease, but some situations are much tougher.&nbsp; For example, if you rented in summer and we are marketing again in the winter, it&#39;s likely we won&#39;t get the same rate so you&#39;ll owe more than if we get the same rate.&nbsp; Read lengthy details&nbsp;<a href="https://movezen.sharepoint.com/:b:/s/marketing/EckGw6N_6HVJqwLLew_f0yABX0tVCfYJ_r62bQGlVIXpAw?e=c5lMAb" style="color:#007c89" target="_blank">here</a><br />
												<br />
												(Rent due + standard move-in costs) - (daily rate of new tenant X days left on your lease) = Final balance</span></span></p>
												</td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table align="left" cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td>
									<table cellspacing="0" style="background-color:#dc7d44; border-collapse:collapse; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td style="background-color:#dc7d44; text-align:center; vertical-align:top"><span style="font-size:14px"><span style="font-family:Helvetica"><span style="color:#f2f2f2"><span style="font-size:15px"><span style="font-family:tahoma,verdana,segoe,sans-serif">First Thing! : The first thing you must do is send the following form back to us signed.&nbsp; If you would like for us to send a digital copy that you can sign online just let us know.&nbsp;&nbsp;<a href="https://drive.google.com/file/d/1pQIyNNvVp0ICh_FEkhaLn2vqQ1-Mem1-/view?usp=sharing" style="color:#007c89" target="_blank">here...</a></span></span><br />
												<br />
												&nbsp;</span></span></span></td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table align="left" cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td>
									<table border="1" cellspacing="0" style="border-collapse:collapse; border:1px solid; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td style="text-align:center; vertical-align:top">
												<p><span style="font-size:14px"><span style="font-family:Helvetica"><span style="font-family:tahoma,verdana,segoe,sans-serif"><img class="gmail_canned_response_image" src="https://ci5.googleusercontent.com/proxy/yCZKQ-hNiQu48WKX0_97NAiauUpNY63VIwWJPAdYKvWcnSxjbptS1mJgNfAmaM_u8adVQGBasi0YRPX12EoCAHBA8pjlde4m_QF9JmbAfjxugm1ZJ77jR_PSFeVrLqFohkGG6DzdVV06Cm0GC36n-zcLpX2CyR9Pluk=s0-d-e1-ft#https://gallery.mailchimp.com/550bd6ef99c9bde377800aeef/images/861d683d-a5d3-47fd-8710-ae3a600461bc.jpg" style="border:0px; float:right; height:106px; margin-bottom:10px; margin-left:10px; margin-right:10px; margin-top:10px; outline:none; width:200px" />The next thing, assuming you understand how the process works (if not speak up), is to do everything we can do make the home desirable and show ready.&nbsp; We have an in depth document that we spent a lot of time and great experience on, and these tips could make the difference between you owing almost nothing, or&nbsp;having to cover a serious shortfall.&nbsp; You may think it is a good idea to meet prospective tenants yourself, and that often does work out well as you can really sell the situation, but beware of subtle personality quirks.&nbsp; Many tenants and owners aren&#39;t cut out for marketing rentals as people can be very touchy regarding their housing situation.&nbsp; When in doubt, let us handle it.&nbsp; Read about preparing your home&nbsp;<a href="https://movezen.sharepoint.com/:b:/s/marketing/ESpE9qtpMcJNl7TGedhWeBoBZfxk1LQ0le2ypPB9GNN3uQ?e=JbRmA0" style="color:#007c89" target="_blank">here...</a></span></span></span></p>
												</td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table align="left" cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td>
									<table border="1" cellspacing="0" style="background-color:#1d8387; border-collapse:collapse; border:1px solid; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td style="background-color:#1d8387; text-align:center; vertical-align:top"><span style="font-size:14px"><span style="font-family:Helvetica"><span style="color:#ffffff"><span style="font-family:tahoma,verdana,segoe,sans-serif">Once we have received the hold payment from your replacement (cleared funds), you&#39;ll be sent the following document that outlines the ever critical date the new tenant will be moving in (we will need a few days of vacancy to get the place properly turned over so account for that), and your basic costs&nbsp;<a href="https://drive.google.com/open?id=1RbUTe7uCdugwC6xTYudhG_JaV68E6N-V" style="color:#007c89" target="_blank"><span style="color:#ff8c00">here...</span></a></span></span></span></span></td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; table-layout:fixed; width:100%">
				<tbody>
					<tr>
						<td>
						<table cellspacing="0" style="border-collapse:collapse; border-top:2px solid #eaeaea; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td>&nbsp;</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table align="left" cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td>
									<table cellspacing="0" style="background-color:#dc7d44; border-collapse:collapse; min-width:100%; width:100%">
										<tbody>
											<tr>
												<td style="background-color:#dc7d44; text-align:center; vertical-align:top"><span style="font-size:14px"><span style="font-family:Helvetica"><span style="color:#f2f2f2"><span style="font-size:15px"><span style="font-family:tahoma,verdana,segoe,sans-serif">Want to receive a full deposit refund?<br />
												<br />
												<img class="gmail_canned_response_image" src="https://ci5.googleusercontent.com/proxy/CwfPP2Gm-5YfYvz5K6444Dg9roPKWkfhdd7OXtlSfZmSRuEA1XQlqiZwULb8I_YwQWLKUNKp6Nb6uevEOhWaLWl1OvJ5HlH9zj2tzRir3Cm1t9vPquO0x9pteiuSci22RoBnhg7ro38lLKQ1TYrW2N_n6qeczo8GpnM=s0-d-e1-ft#https://gallery.mailchimp.com/550bd6ef99c9bde377800aeef/images/2b2d3f7c-7177-4467-99ae-85167e03537a.jpg" style="border:0px; float:right; height:99px; margin-bottom:10px; margin-left:10px; margin-right:10px; margin-top:10px; outline:none; width:150px" />Since you&#39;ll be moving soon you may want to take a look at how / what we are most often forced to charge for.&nbsp; Anything on this list is almost certain to be deducted from your deposit, so it&#39;s only sensible to take care of it right now so you get the added benefit of a home that shows better and is more desirable.&nbsp; Our contractors can handle any of this for you at great rates, so contact us if you&#39;d like to get that process started.&nbsp; View common charges&nbsp;<a href="https://movezen.sharepoint.com/:b:/s/marketing/EW0I7jTGoKRCt1JnSOcbUT8BgqosQVEz4PC45FAxU2eBNA?e=QS0yXV" style="color:#007c89" target="_blank">here...&nbsp;&nbsp;</a></span></span></span></span></span></td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; table-layout:fixed; width:100%">
				<tbody>
					<tr>
						<td>
						<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td>&nbsp;</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; min-width:100%; table-layout:fixed; width:100%">
				<tbody>
					<tr>
						<td>
						<table cellspacing="0" style="border-collapse:collapse; min-width:100%; width:100%">
							<tbody>
								<tr>
									<td>&nbsp;</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing="0" style="border-collapse:collapse; width:100%">
				<tbody>
					<tr>
						<td style="vertical-align:top">
						<table align="left" cellspacing="0" style="border-collapse:collapse; width:282px">
							<tbody>
								<tr>
									<td style="vertical-align:top"><img alt="" class="gmail_canned_response_image" src="https://ci5.googleusercontent.com/proxy/tXtDnUFER6IPw-eAoehdHrK_IYJmgBzdMEKyqd-wyr_YsNcYEj30miEvzTtSkAk0iaxY5_NbbECfRgqdW7bniRjZ5CREFZEAoZHxyOJCUXkhDvRoQXE35H7wNdh7w-eQAMaj-kEEbiJPiiPfYbY-CdtERPPxN9IiCMU=s0-d-e1-ft#https://gallery.mailchimp.com/550bd6ef99c9bde377800aeef/images/d3699700-7215-4d68-82f4-5d719f9ab189.jpg" style="border:0px; height:auto; max-width:1280px; outline:none; vertical-align:bottom; width:264px" /></td>
								</tr>
								<tr>
									<td style="vertical-align:top; width:282px">
									<p><span style="font-size:16px"><span style="font-family:Helvetica"><span style="color:#757575"><span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:15px"><strong>Here are some move checklists we&#39;ve compiled over the years</strong></span></span><br />
									<br />
									<span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:15px">Upack</span></span><span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:15px">&nbsp;moving checklist 2 months&nbsp;</span></span><span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:15px">till</span></span><span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:15px">&nbsp;moving day&nbsp;<a href="https://movezen360.com/wp-content/uploads/2018/02/Moving_Checklist.pdf" style="color:#007c89" target="_blank">here</a><br />
									<br />
									Trulia general moving tips &amp; checklist&nbsp;<a href="https://MoveZen360.com/wp-content/uploads/2018/02/Trulia-Moving-Checklist.pdf" style="color:#007c89" target="_blank">here</a><br />
									<br />
									33 Moving tips to make life easier&nbsp;<a href="https://www.buzzfeed.com/peggy/brilliant-moving-tips?utm_term=.twbx7qAne#.ynN3YDyem" style="color:#007c89" target="_blank">here</a></span></span><br />
									<br />
									<span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:15px">Movezen</span></span><span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="font-size:15px">&nbsp;21 tips for a seamless move&nbsp;<a href="https://movezen360.com/21-tips-for-a-seamless-move/" style="color:#007c89" target="_blank">here</a></span></span></span></span></span></p>
									</td>
								</tr>
							</tbody>
						</table>

						<table align="right" cellspacing="0" style="border-collapse:collapse; width:282px">
							<tbody>
								<tr>
									<td style="vertical-align:top"><a href="https://movezen360.com/wp-content/uploads/2018/02/MoveInInspection.pdf" target="_blank" title=""><img alt="" class="gmail_canned_response_image" src="https://ci6.googleusercontent.com/proxy/H_jOkJp9daAEDpLLTXB4ab5q9sQH1wGwTOcOSyxF3bW6xdqq48QgkfywGw7-DtaySlFfx-M1DfrgWn7Gl_4JD_FrX_y9dsy09kYYiG9i0K_cFCjvTd3yna1M-I12HzHNGtIRJUCprd9eQ9Ny7TDiksNA5ILluRGrvAM=s0-d-e1-ft#https://gallery.mailchimp.com/550bd6ef99c9bde377800aeef/images/59cbc7b5-e21b-452a-8e68-0ce14611b5a2.jpg" style="border:0px; height:auto; max-width:1024px; outline:none; text-decoration-line:none; vertical-align:bottom; width:264px" /></a></td>
								</tr>
								<tr>
									<td style="vertical-align:top; width:282px">
									<p><span style="font-size:16px"><span style="font-family:Helvetica"><span style="color:#757575"><span style="font-size:15px"><span style="font-family:tahoma,verdana,segoe,sans-serif"><strong>Download&nbsp;move-in inspection&nbsp;<a href="https://movezen.sharepoint.com/:b:/s/leadership2/Ee42mjN-s2VOrhgEye3MoMcBdI9qhClnmZAjaS_-XXl0Sg?e=awZFMW" style="color:#007c89; font-weight:normal" target="_blank">here</a></strong><br />
									<br />
									You should have filled one of these out shortly after moving in.&nbsp; It would be a great idea to do a fresh inspection now, then take out your original inspection and compare the two for differences.&nbsp;<br />
									<br />
									Aside from minor everyday wear and tear any changes will need to be addressed and doing so now will make rerenting much easier!</span></span><br />
									&nbsp;</span></span></span></p>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
				</tbody>
			</table>
			</td>
		</tr>
	</tbody>
</table>`);

}




function sendNoLongHold() {
  Office.context.mailbox.item.subject.setAsync("The home you inquired about isn't available for a pretty good while");

  prependHtmlBody(`<p>Hi!</p>

  <p>&nbsp;</p>
  
  <p><br />
  Thank you&nbsp;very much&nbsp;for your inquiry.&nbsp; Unfortunately, we can&#39;t hold a&nbsp;vacant or soon to be,&nbsp;rental longer&nbsp;than&nbsp;​45&nbsp;days&nbsp;in most cases</p>
  
  <p>&nbsp;</p>
  
  <p>If you check our site though some may show available dates well into the future, and these would be an option.&nbsp; If you see something specific let us know and we&#39;ll nail down the details</p>
  
  <p>&nbsp;</p>
  
  <p><a href="https://movezen360.com/rental-search/?status=for-rent" target="_blank">https://movezen360.com/rental-search/?status=for-rent</a></p>
  
  <p>&nbsp;</p>
  
  <p>If you add us on Facebook you&#39;ll receive updates on properties as&nbsp;they come available.&nbsp;&nbsp;</p>
  
  <p><a href="https://www.facebook.com/MoveZenPropertyManagement" target="_blank">https://www.facebook.com/MoveZenPropertyManagement</a>&nbsp;</p>
  
  <p>&nbsp;</p>
  
  <p>I&#39;d recommend that you track the market, and learn a&nbsp;lot about the&nbsp;communities&nbsp;and traffic&nbsp;patterns​,​&nbsp;which will better serve you in&nbsp;finding the right home&nbsp;once the time is right. The rental market tends to move a lot faster these days</p>
  
  <p>&nbsp;</p>
  
  <p>If you&#39;re traveling and must secure something while you&#39;re in the area,&nbsp;it&#39;ll most likely have to&nbsp;be tenant&nbsp;occupied with a lease ending around the&nbsp;time you&#39;ll be moving.&nbsp; That means scheduled showings etc, but if you think a home is the right one we can usually do that</p>
  
  <p>&nbsp;</p>
  
  <p>We normally list about a month in advance of a home being vacant, however in hot market periods that can shorten up quite a bit</p>
  
  <p>&nbsp;</p>
  
  <p>Hope these tips help a bit in your search.&nbsp; Let us know if we can answer any questions. Thanks!&nbsp;</p>`);

}



function sendPortalResetAll() {
  Office.context.mailbox.item.subject.setAsync("A couple quick portal login steps");

  prependHtmlBody(`<p>​Hi! &nbsp;Sorry you&rsquo;re having trouble getting your portal activated or logged in<br />
  <br />
  The first step is to clear your browser cookies or cache. &nbsp;You can google how to do that relatively easily as it depends on your web browser<br />
  <br />
  <br />
  You could simply try a less commonly used browser, or possibly private/incognito mode if you&rsquo;re familiar with that<br />
  <br />
  <br />
  If you're still having trouble after those two steps, we’ll simply need to delete your login and start from scratch which almost always works, and is fast and simple.  Just reach back out to us and we’ll run that through pretty quickly<br />
  <br />
  <br />
  Thanks!</p>
  `);

}



function sendFieldStaff() {
  Office.context.mailbox.item.subject.setAsync("Thanks for your interest in our field support role!");

  prependHtmlBody(`<p>​Hello!<br />
  <br />
  Thanks for responding to our &nbsp;listing for the field staff 1099 position we have available!<br />
  <br />
  We wanted to ask you a few questions to get the conversation going to see if this relationship makes sense for you<br />
  <br />
  1.) &nbsp;What is your standard availability? &nbsp;While it&#39;s on an when available basis, we frequently get showing requests at the last minute, or quick inspections/field tasks that need to be done same day so we would need a good idea of what availability you have, and if it is only weekend or weekday availability.<br />
  <br />
  2.) &nbsp;If we would like to move forward with bringing you on to work with us, when would you be able to start?<br />
  <br />
  3.) &nbsp;How long are you expecting to be involved with this position? &nbsp;I.e. are you just looking for something temporary (a few weeks, months, etc.) or longer term?<br />
  <br />
  4.) &nbsp;What zipcode do you live in? &nbsp;<br />
  <br />
  5.) &nbsp;This is a question that ties into question 4. &nbsp;How far are you willing to travel for the jobs? &nbsp;Most properties will be close by (within a half an hour), but we do have some properties that are further away and we need to know how far you are willing to travel to get to the properties.<br />
  <br />
  6.) &nbsp;The position consists of property showings, picking up lockboxes, taking photos/completing inspections, posting notices, and various other field-related tasks. &nbsp;Do you have experience in any of these areas? &nbsp;<br />
  <br />
  7.) &nbsp;Lastly, consistent access to reliable transportation is imperative for this position as it is a field service position, not an in-office position. &nbsp;Please confirm whether or not you have consistent access to reliable transportation.<br />
  <br />
  We look forward to hearing back from you!<br />
  <br />
  Thanks!</p>`);

}



function sendShowNotice() {
  Office.context.mailbox.item.subject.setAsync("Sorry, it's the dreaded showing notice");

  prependHtmlBody(`<p>​Hi! &nbsp;Yes this is the dreaded showing notice. &nbsp;We hate to bother you, but owners get really hard to deal with if we aren&#39;t making headway to ensure they don&#39;t go a long period of time with a mortgage and no income. That&#39;s the last thing you want before we have to report your move out to them. &nbsp;In fact, the number 1 way to ensure an owner isn&#39;t a pain after move out, is to have a replacement lined up and moving in not too long after you. They are dramatically less concerned about your potential charges in those cases, it never fails</p>

  <p><br />
  <br />
  Over the next 30-45 days we&#39;ll be contacting you to set up showings, and will give as much notice as we can, and if you can not be contacted we will set them up for 24 hours out between the hours of 9am and 6pm, if you have specific requests in those time periods please just let us know. &nbsp;We want to limit headaches and make this as smooth for you as reasonably possible. &nbsp;We&#39;ll have a lockbox on the door that is only used for staff and licensed agents</p>
  
  <p><br />
  <br />
  We will be respectful of your situation, and ask that you be understanding that every day the house is vacant costs the owner, so we try to cut down on that, and the sooner we can get showings in, the sooner the showings will stop, as we will likely get it rented quicker that way</p>
  
  <p><br />
  <br />
  If you have pets, please keep them in a safe place, and if you have an even slightly potentially aggressive dog/pet, obviously let us know that as well</p>
  
  <p><br />
  <br />
  During the time that we are showing we ask that you keep the house as clean and straight as possible. Tthis will also help it get rented quicker, and help us to stop bothering you!</p>
  
  <p><br />
  <br />
  We will be in touch and appreciate your patience and understanding<br />
  <br />
  Thanks!</p>`);

}



function sendMoveInInfo() {
  Office.context.mailbox.item.subject.setAsync("Final Move In Instructions");

  prependHtmlBody(`<p>Hi!</p>

  <p>&nbsp;</p>
  
  <p>I hope everything is coming together smoothly for your move!&nbsp; I wanted to send you a note to cover the move-in process to ensure there are no hiccups on move-in day!&nbsp;</p>
  
  <p>&nbsp;</p>
  
  <p>Quick reminders.&nbsp; Did you transfer all utilities? Secure renters insurance? Pay in full at least 7 days prior to move in, OR by certified funds? Sign lease? Do you understand and feel comfortable with the information here?&nbsp; If not, contact&nbsp;me asap</p>
  
  <p>&nbsp;</p>
  
  <p>To reduce stress and make it as convenient as possible you&#39;ll use the lockbox to get your entry key for a self move in. You won&#39;t have to meet anyone unless we arrange it specifically.&nbsp;<strong><span style="color:#45818e">The lockbox is located _____________</span></strong></p>
  
  <p>&nbsp;</p>
  
  <p><span style="color:#45818e"><strong>The lockbox code is __________.</strong></span>&nbsp; Please keep the key from this lockbox and leave the lockbox on the door. We&#39;lll swing by to grab it a few days after your move in date!</p>
  
  <p>&nbsp;</p>
  
  <p>We&#39;ve left the following keys, passes, and devices inside <strong><span style="color:#45818e">______</span></strong></p>
  
  <p>&nbsp;</p>
  
  <p>&nbsp;</p>
  
  <p>We&#39;re looking forward to having you, and hope you enjoy your move-in! If you have any questions or need any information at all, please do not hesitate to reach out anytime!&nbsp;</p>
  
  <p>&nbsp;</p>
  
  <p>Thanks!&nbsp;&nbsp;</p>`);

}



function sendRenewalIntro() {
  Office.context.mailbox.item.subject.setAsync("Time is growing short to renew your lease");

  prependHtmlBody(`<p>Hi &nbsp;</p>

  <p>Hope you&rsquo;re doing well today&nbsp;</p>
  
  <p>&nbsp;</p>
  
  <p>We understand renewing or moving decisions are never fun, but those decisions must be made. For a rental owner though, waiting and wondering if your resident will extend can be really difficult, and it&rsquo;s rarely&nbsp;necessary. Even if personal issues aren&#39;t at play, most of our owners are mom and pop types, and it&#39;s a very big deal if they are going to have a couple of months of vacancy, plus turnover costs. &nbsp;We simply can&#39;t saddle them with that kind of stress, and expect them to respond well to future requests. Dragging this process out is a great way to motivate them to sell instead of re-rent&nbsp;</p>
  
  <p>&nbsp;</p>
  
  <p>We try hard to communicate this policy early, often, and clearly because we know it&#39;s tough, and tempting to delay. We&#39;ll work with all requests as best we can, but the lease notice deadline is unavoidable, so difficult or drawn out owner negotiations will quickly end with you having to make a faster and likely much more stressful decision than necessary&nbsp;</p>
  
  <p>&nbsp;</p>
  
  <p>Here&rsquo;s an important tip: Many of our owners partner with us because we write extensively on marketing timing and other nuanced points to rental investment management. &nbsp;Owners are a lot less likely to do repairs if their home takes 3 months to rent, instead of 1. For that reason, you&#39;ll find it hard to end a lease extension on the final day of the month (also great for you due to less vendor competition), July/August, or anytime in Winter except perhaps late February. &nbsp;This is the most important reason it&#39;s crucial that you don&#39;t delay planning, and locking in this renewal as your options will be a bit limited. Our owners rarely allow month to month leases due to the uncertainty that causes, but we can usually negotiate shorter term extensions outside of very slow seasonal periods&nbsp;</p>
  
  <p>&nbsp;</p>
  
  <p>MoveZen is well known for looking out for our residents, but we also try hard to be fair to owners, as well as understand and cater to their highest priorities. This way we can get more of your priorities out of them when needed. While not always clear at the moment, this is a win win approach over the long run&nbsp;</p>
  
  <p>&nbsp;</p>
  
  <p><strong>A few important notes:&nbsp;</strong></p>
  
  <p>&nbsp;</p>
  
  <p>There&#39;s a $345 charge for renewing your lease after the 59-day move-out notice period begins. Otherwise, we never charge&nbsp;for a renewal, so this is a charge no one ever has to pay&nbsp;</p>
  
  <p>&nbsp;</p>
  
  <p>Our team can&#39;t make exceptions to these fees - they&#39;re company policy&nbsp;</p>
  
  <p>&nbsp;</p>
  
  <p>If a renewal hasn&rsquo;t been signed by all parties 60 days prior to the end date on your most recent lease or renewal, this will serve as notice to vacate on your lease end date of the most recent lease&nbsp;</p>
  
  <p>&nbsp;</p>
  
  <p>And lastly, all changes to your lease need to be in writing. Negotiations can go in many directions, but the active terms are clearly outlined in your current lease until we sign a new one&nbsp;</p>
  
  <p>&nbsp;</p>
  
  <p>We&#39;re here to help you navigate this process, so please don&#39;t hesitate to reach out if you have any questions or need some extra guidance. We&#39;re all about making this a win-win situation for you and our owners&nbsp;</p>
  
  <p>&nbsp;</p>
  
  <p>If you have problems,&nbsp;or feel there are unnecessary delays, the help desk is a great way to get a second opinion. Feel free to use it for minor questions. An owner not offering terms you like is out of our hands. We likely advised them against it several times. Those are the terms, and you will need to decide within them&nbsp;</p>
  
  <p>&nbsp;</p>
  
  <p>Thanks so much for your understanding. We appreciate you being a part of our MoveZen community!&nbsp;</p>`);
};



Office.onReady(info => {
  if (info.host === Office.HostType.Outlook) {
    document.getElementById("insertSorry").onclick = sendSorry;
    document.getElementById("insertApp").onclick = sendApp;
    document.getElementById("insertVendor").onclick = sendVendor;
    document.getElementById("insertRentalResponse").onclick = sendRentalResponse;
    document.getElementById("insertPayslip").onclick = sendPayslip;
    document.getElementById("insertOwnerMove").onclick = sendOwnerMove;
    document.getElementById("insertEvictNotice").onclick = sendEvictNotice;
    document.getElementById("insertMoveInInfo").onclick = sendMoveInInfo;
    document.getElementById("insertUtilityNotice").onclick = sendUtilityNotice;
    document.getElementById("insertGeneralRentInfo").onclick = sendGeneralRentInfo;
    document.getElementById("insertTurnoverReserve").onclick = sendTurnoverReserve;
    document.getElementById("insertVendorInsur").onclick = sendVendorInsur;
    document.getElementById("insertMoveInReminders").onclick = sendMoveInReminders;
    document.getElementById("insertMoveInspectionRemind").onclick = sendMoveInspectionRemind; 
    document.getElementById("insertComplaintResponse").onclick = sendComplaintResponse;
    document.getElementById("insertMoveChecklist").onclick = sendMoveChecklist;
    document.getElementById("insertUnseenDisclaimer").onclick = sendUnseenDisclaimer; 
    document.getElementById("insertReferenceQuestions").onclick = sendReferenceQuestions; 
    document.getElementById("insertPlacementInfo").onclick = sendPlacementInfo; 
    document.getElementById("insertLeaseBreakNotice").onclick = sendLeaseBreakNotice; 
    document.getElementById("insertNoLongHold").onclick = sendNoLongHold; 
    document.getElementById("insertPortalResetAll").onclick = sendPortalResetAll;  
    document.getElementById("insertFieldStaff").onclick = sendFieldStaff; 
    document.getElementById("insertShowNotice").onclick = sendShowNotice;
	document.getElementById("insertRenewalIntro").onclick = sendRenewalIntro;  
    
  }
});