Feature: Login Api

@high @smoke_test @regression  
  Scenario: Login successfully
    Given Prepare data to request
    When Send request to login
    Then Verify data should be response success


@high @regression
  Scenario: Login failure with all field is invalid
    Given Prepare data to request
    When Send request to login with all field is invalid
    Then Verify data should be response bad request


@high @regression  
  Scenario: Login failure when server error 
    Given Prepare data to request
    When Send request to login for server down
    Then Verify data should be response server down
