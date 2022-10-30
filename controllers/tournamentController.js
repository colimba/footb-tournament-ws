const Tournament = require("../models/Tournament");
const { validationResult } = require("express-validator");

exports.createTournament = async (req, res) => {
  // revisar errores de request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // validar duplicados
  const { organizingClubId, tournamentName, tournamentType } = req.body;
  try {
    let tournament = await Tournament.findOne({
      $and: [
        { organizingClubId: organizingClubId },
        { tournamentName: tournamentName },
        { tournamentType: tournamentType },
      ],
    });

    if (tournament) {
      return res.status(400).json({ msg: "Ya existe ese torneo :/" });
    }

    tournament = new Tournament(req.body);
    await tournament.save();
    res.json({ msg: "Torneo creado exitosamente" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Ocurrio un error imprevisto :/");
  }
};

exports.getTournaments = async (req, res) => {
  try {
    const tournament = await Tournament.find();
    res.json({ tournament });
  } catch (error) {
    console.log(error);
    res.status(500).send("Ocurrio un error imprevisto :/");
  }
};

// TODO: agregar validaciones
