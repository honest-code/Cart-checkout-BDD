Feature: promotion
    In order to apply a promotion to a checkout
    As a clerk
    I want the total checkout with the discount applied

    Scenario: Add item without promotion code
        Given a new checkout with code "1"
        When I add a product with name "Vino 10"
        And I add a product with name "Aceite 3"
        Then the checkout has "13 EUR" in the total value

    Scenario: Add item with promotion code
        Given a new checkout with code "1"
        When I add a product with name "Vino 10"
        And I add a product with name "Vino 10"
        And I add a product with name "Vino 10"
        And I add a promotion with code "2x1"
        Then the checkout has "20 EUR" in the total value

    Scenario: Add item without promotion code
        Given a new checkout with code "1"
        When I add a product with name "Vino 10"
        And I add a product with name "Aceite 3"
        And I add a product with name "Vino 10"
        And I add a product with name "Vino 10"
        Then the checkout has "33 EUR" in the total value
