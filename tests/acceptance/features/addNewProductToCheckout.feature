Feature: Add item to a checkout
  In order to sell an item to a customer
  As a clerk
  I want to add new item so the total checkout is updated
@only
  Scenario: Add item to an empty checkout
    Given an existing checkout with code "1"
    When a clerk want to add "Aceite"
    And a clerk want to add "Sal"
    Then the checkout has "6.66 EUR" in the total value
    And a clerk want to add "Sal"
    And the checkout has "8.09 EUR" in the total value
