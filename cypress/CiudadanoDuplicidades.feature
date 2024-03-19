################################################################
# Ambito Ciudadano - Duplicidades
################################################################

Feature: Duplicidades

    Background:
        Given que el ciudadano accede al aplicativo y inicia la solicitud
        And rellena las preguntas previas del IMV
        When accede al paso de Verificar la identidad como solicitante con el documento <doc>
        And introduce un NIF válido <nif>

    @ciudadano-Duplicidades-001
    Scenario: Duplicidad por existir DNI como solicitante de un expediente en trámite.
        Then debería aparecer una ventana modal indicando que el ciudadano ya tiene una solicitud en trámite
        And debería acceder a la gestión de la solicitud

    @ciudadano-Duplicidades-002
    Scenario: Duplicidad por existir NIE como solicitante de un expediente en trámite.
        Then debería aparecer una ventana modal indicando que el ciudadano ya tiene una solicitud en trámite
        And debería acceder a la gestión de la solicitud

    @ciudadano-Duplicidades-003
    Scenario: Duplicidad por existir DNI como conviviente de un expediente en trámite.
        Then debería aparecer una ventana modal indicando que el ciudadano ya tiene una solicitud en trámite
        And debería acceder a la gestión de la solicitud

    @ciudadano-Duplicidades-004
    Scenario: Duplicidad por existir NIE como conviviente de un expediente en trámite.
        Then debería aparecer una ventana modal indicando que el ciudadano ya tiene una solicitud en trámite
        And debería acceder a la gestión de la solicitud

    Examples:
        | N | nif_miem_1 | doc_miem_1 | nif_miem_2 | doc_miem_2 |
        |---|------------|------------|------------|------------|
        | 1 | dni        | 94559671R  |            |            |
        | 2 |            |            | nie        | Y5511978L  |
        | 3 | dni        | 58089410N  | dni        | 94559671R  |
        | 4 | dni        | 46764293A  | nie        | Y5511978L  |


Feature: PDR_DUP_007 - Duplicidad por existir DNI-SOPORTE como solicitante de un expediente en trámite

  Test ID: 322

  Scenario: Comprobar que no es posible continuar con la solicitud cuando el solicitante tiene un expediente en trámite

    Description: El presente caso de prueba verifica que no se puede proceder con una nueva solicitud si el solicitante ya tiene un expediente en trámite.

    Preconditions:
      - Disponer de un par DNI/SOPORTE que esté como solicitante de un expediente en trámite.

    Given el ciudadano accede para presentar una nueva solicitud y responde el cuestionario de preguntas previas
    When llega al apartado de identificación
    Then debería avanzar por el cuestionario sin bloqueos

    Given se encuentra en el formulario de identificación
    When informa un par DNI/SOPORTE para el cual ya existe un expediente en trámite
    And rellena el resto de los datos correctamente
    And pulsa en [Siguiente]
    Then debería aparecer una ventana modal indicando que el ciudadano ya tiene una solicitud presentada y en trámite, con la opción de acceder a la gestión de la solicitud

    Given se muestra la ventana modal de solicitud en trámite
    When se accede a gestionar la solicitud
    Then se solicitan de manera habitual los datos de acceso a la solicitud que se enviaron al momento de realizarse

    Given se ingresan correctamente los datos de acceso
    Then se debería acceder correctamente a la gestión de la solicitud antigua y en trámite
