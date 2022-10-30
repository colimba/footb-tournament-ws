const mongoose = require("mongoose");

const TournamentSchema = mongoose.Schema({
  //agregar unique
  //refinar si solo un club puede crear o tambien puede un jugador/usuario comun
  organizingClubId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Club'
  },
  tournamentName: {
    type: String,
    requiered: true,
    trim: true,
  },
  tournamentType: {
    type: String,
    requiered: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  startDate: {
    type: Date,
    trim: true,
  },
  endDate: {
    type: Date,
    trim: true,
  },
  maxTeams: {
    type: Number,
    trim: true,
  },
  minTeams: {
    type: Number,
    trim: true,
  },
  cost: {
    type: Number,
    trim: true,
  },
  registry: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Tournament", TournamentSchema);
