@only
Feature: Create new checkout
    In order to know which is the total of a checkout
    As a clerk
    I want retrieve the current state of the checkout

    Scenario: Create a new empty checkout
        Given a new checkout with code "1"
        Then the checkout has "0 EUR" in the total value

    Scenario: Retrieve an existing checkout
        Given a new checkout with code "1"
        When I queries the checkout "1" current state
        Then the checkout should exist
        And the checkout has "0 EUR" in the total value

    Scenario: Retrieve a non existing checkout
        When I queries the checkout "2" current state
        Then the checkout should not exist
