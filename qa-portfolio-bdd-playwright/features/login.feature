Feature: Login na aplicação SauceDemo

  Scenario: Login bem-sucedido
    Given que estou na página de login
    When eu insiro credenciais válidas
    And clico no botão de login
    Then devo ver a lista de produtos
