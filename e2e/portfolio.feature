Feature: Portfolio
		As a visitor
		I want to view the owner's brief information right away
		So that I can find relevant work and reach out

		Background:
				Given I am on the homepage

		Scenario: Viewing owner's introduction
				Then I should see the portfolio owner's name
				And I should see the title named after the owner
				And I should see the owner's job
				And I should see some brief introduction
				And I should see a navigation menu with Home, My Story, Projects and Contacts

		Scenario: Viewing my story section
				When I scroll down to the story section
				Then I should see a section titled "My Story"
				And I should see a short description about the owner’s background or journey
				And I should see one or more images related to the owner’s story
				Then I should see a link or button to view the full story page

		Scenario: Viewing owner's projects
				When I scroll down to the projects section
				Then I should see the owner's brief list of projects
				And I should see each project associated with a version
				And I should see each project associated with a build status
				And I should see each project linked with a github link
		
		# Scenario: Viewing technologies & skills
		# 		When I scroll down
		# 		Then I should see a section titled "Technologies & Skills"
		# 		And I should see a list of technologies
		# 		And I should see a list of skills the owner excels at
		# 		And each technology or skill should have an associated icon or visual indicator
		#
		# Scenario: Viewing contact form
		# 		When I scroll down
		# 		Then I should see a form titled "Contact me"
		# 		And I should see the "Name" input field
		# 		And I should see the "Email" input field
		# 		And I should see the "Message" input field
		# 		And I should see the "Send" button
		#
		# Scenario: Quick link to contact form
		# 		When I click the button indicating going down to the contact form
		# 		Then I should see a form titled "Contact me"
		# 		And I should see the "Name" input field
		# 		And I should see the "Email" input field
		# 		And I should see the "Message" input field
		# 		And I should see the "Send" button
