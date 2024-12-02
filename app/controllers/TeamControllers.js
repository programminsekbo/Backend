import { createTeamService, deleteTeamService, getTeamByIdService, getTeamsService, updateTeamService } from "../Services/Teamservices.js";



// Get all team members
export const getTeams = async (req, res) => {
  const result = await getTeamsService();
  return res.status(200).json(result);
};

// Get a single team member by ID
export const getTeamById = async (req, res) => {
  const result = await getTeamByIdService(req);
  return res.status(200).json(result);
};

// Create a new team member
export const createTeam = async (req, res) => {
  const result = await createTeamService(req);
  return res.status(200).json(result);
};

// Update an existing team member
export const updateTeam = async (req, res) => {
  const result = await updateTeamService(req);
  return res.status(200).json(result);
};

// Delete a team member
export const deleteTeam = async (req, res) => {
  const result = await deleteTeamService(req);
  return res.status(200).json(result);
};