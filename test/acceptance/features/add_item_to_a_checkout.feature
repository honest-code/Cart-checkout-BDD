Feature: Add item to a checkout
  In order to sell an item to a customer
  As a clerk
  I want to add new item so the total checkout is updated

  Scenario: Add item to an empty checkout
    Given a new checkout with code "1"
    When I add a product with name "Aceite 3"
    And I add a product with name "Sal 0.5"
    Then the checkout has "3.5 EUR" in the total value
