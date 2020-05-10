const express = require("express");
const router = express.Router();
const tournamentController = require("../controllers/tournamentController");
const { check } = require("express-validator");

router.post("/", 
    [
        check('organizingClubId', 'Llego el campo del id del club organizador vacio es obligatorio').not().isEmpty(),
        check('tournamentName', 'Llego el campo del torneo vacio y es obligatorio').not().isEmpty(),
        check('tournamentType', 'Llego el campo del tipo de torneo vacio y es obligatorio').not().isEmpty(),
    ],
    tournamentController.createTournament
);

router.get("/", tournamentController.getTournaments);

module.exports = router;
