Feature: Heartbeat
  As a client application
  I want to know the server status

  Scenario: Get Heartbeat
    When I request the heartbeat
    Then the response code is 200
