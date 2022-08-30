Feature: Validate Contact Page

    Background: Navigate to Contact page
      Given <Contact> page is opened

    Scenario: Contact page shows relevant errors for missing mandatory fields
      When user clicks on submit with out entering mandatory data
      Then Contact page shows the following errors for missing mandatory fields
        | MissingField  | ExpectedFieldError  |
        | ForeName      | Forename is required |
        | Email         | Email is required  |
        | Message       | Message is required|


    Scenario: Fill the mandatory fields, submit form and validate success message
          When user submits form with "AutoTestForename", "auto@autotest.com" and "Automation with JS is cool" data in the contact page
          Then "Thanks AutoTestForename, we appreciate your feedback." message is shown to the user


