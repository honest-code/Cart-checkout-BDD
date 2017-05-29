# Automatically generated by HonestCode
# Do not edit this file as it will be overwritten

Feature: Promotions
      As a client application
    I want to know the server status

  Scenario: Add item with promotion code
    Given a new checkout with code "1"
    And the product "Vino" price is 10
    When I add a product with name "Vino"
    And I add a product with name "Vino"
    And I add a product with name "Vino"
    And I add a product with name "Vino"
    And I add a promotion with code "2x1"
    Then the checkout has "20 EUR" in the total value

  Scenario: Add item without promotion code
    Given a new checkout with code "1"
    And the product "Vino" price is 10
    And the product "Aceite" price is 3
    When I add a product with name "Vino"
    And I add a product with name "Aceite"
    And I add a product with name "Vino"
    And I add a product with name "Vino"
    Then the checkout has "31 EUR" in the total value
