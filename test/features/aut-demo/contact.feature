Feature: Validate Contact Page

    Background: Navigate to Contact page
      Given Contact page is opened

    Scenario: Contact page shows relevant errors for missing mandatory fields
      When I click on submit with out entering mandatory data
      Then Contact page shows the following errors for missing mandatory fields
        | MissingField  | ExpectedFieldError  |
        | ForeName      | Forename is required |
        | Email         | Email is required  |
        | Message       | Message is required|


    Scenario: Validate successful contact submission message
          When I enter the following data in the contact page
            | Field         | InputValue  |
            | ForeName      | AutoTestForename |
            | Email         | auto@autotest.com  |
            | Message       | Automation with JS is cool|
          And I click on submit
          Then "Thanks AutoTestForename, we appreciate your feedback." message is shown to the user


