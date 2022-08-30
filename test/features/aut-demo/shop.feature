Feature: Validate Shop Page

    Background: Navigate to Shop page
      Given <Shop> page is opened

    Scenario: User should be able to add the products in the cart and the cart details should reflect correctly
      When user selects the following products from the shop page
        | ProductName       | ProductQuantity   |
        | Stuffed Frog      | 2                 |
        | Fluffy Bunny      | 5                 |
        | Valentine Bear    | 3                 |
      And user navigates to Cart Page
      Then the Cart page will be updated with the following data
        | ProductName       | ProductQuantity   | ProductPrice | SubTotal |
        | Stuffed Frog      | 2                 | $10.99       | $21.98   |
        | Fluffy Bunny      | 5                 | $9.99        | $49.95   |
        | Valentine Bear    | 3                 | $14.99       | $44.97   |
      And the Cart page total will be of value "116.9"