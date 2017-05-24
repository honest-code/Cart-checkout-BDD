Feature: promotion
    As a client application
    I want to know the server status

    Scenario: Add item with promotion code
        Given a new checkout with code "1"
        When I add a product with name "Vino"
        And I add a product with name "Vino"
        And I add a product with name "Vino"
        And I add a promotion with code "2x1"
        Then the checkout has "20 EUR" in the total value

    Scenario: Add item without promotion code
        Given a new checkout with code "1"
        When I add a product with name "Vino"
        And I add a product with name "Vino"
        And I add a product with name "Vino"
        Then the checkout has "30 EUR" in the total value
