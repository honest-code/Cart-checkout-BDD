# Automatically generated by HonestCode
# Do not edit this file as it will be overwritten

Feature: Heartbeat
    As a client application
  I want to know the server status

  Scenario: Get Heartbeat
    When I request the heartbeatffff
    Then the response code is 200
