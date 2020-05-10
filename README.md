# footb-tournament-ws
API para gestionar los campeonatos de la aplicación **_FOOT-BOOKING_**

## Levantando el server
**Con perfil de desarrollo: ** ```npm run dev```
El String de coneccion lo encontramos en _variables.env_

**Con perfil productivo: ** ```npm run start```

## Endpoints de la API - _todavía en etapa de análisis_
* **_ABM campeonato_**
- /showTournament -> GET
- /newTournament -> POST 
- /tournament -> PUT (editar info)
- /cancelTournament -> DELETE/POST
* **_AMB inscripcion_**
- /showParticipants -> GET
- /enrollTeam -> POST (persona inscribe al equipo)								¯| ambos son similares se puede simplificar
- /enrollTeams -> POST (club o owner de campeonato inscribe varios equipos) 	-| de a cuerdo a las restricciones de negocio
- /unsubscribeTeam -> DELETE/POST
* **_Campeonato_**
- /tournamentRaffle -> POST
- /tournamentStage -> GET (todas las fases o todos los grupos -> partidos a jugarse)
* **_Partidos / Rondas_**
- /registerMatchResult


## Solicitar acceso a BD en mongoDB Atlas
De momento la base esta centralizada en la cuenta de Andrés Giacosa mandar un mail o whatsapp con la IP pública para que se agregue a la whitelist o para que cree un usuario en caso de ser requerido. De momento es usuario tiene rol de admin pero debería cambiarse a un usuario propio de la API.
