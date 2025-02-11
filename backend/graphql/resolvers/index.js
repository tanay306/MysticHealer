const  {
    authUser,
    registerUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getDoctors,
    deleteUser,
    getUserById,
    updateUser,
    searchDoctorByName,
    searchDoctorBySpecialization,
    searchParticularDoctor,
    getStatistics_Users,
    getStatistics_Doctors,
    forgotPassword,
    addReview,
  } = require('./user.js');

const {
  createAppointment,
  viewAppointment,
  cancelAppointment,
  changeStatus,
  getAllAppointments,
  getAllUpcomingAppointments,
  getAllPreviousAppointments,
  getStatistics_Appointment,
  getStatistics_Successful_App,
  isValid,
  graph,
} = require('./appointment.js')

const {
  createGroup,
  viewAllGroups
} = require("./group.js");

  module.exports = {
    //users
    authUser: authUser,
    registerUser: registerUser,
    getUserProfile: getUserProfile,
    updateUserProfile: updateUserProfile,
    getUsers: getUsers,
    getDoctors: getDoctors,
    deleteUser: deleteUser,
    getUserById: getUserById,
    updateUser: updateUser,
    searchDoctorByName: searchDoctorByName,
    searchDoctorBySpecialization: searchDoctorBySpecialization,
    searchParticularDoctor: searchParticularDoctor,
    getStatistics_Users: getStatistics_Users,
    getStatistics_Doctors: getStatistics_Doctors,
    forgotPassword: forgotPassword,
    addReview: addReview,
    //appointment
    createAppointment: createAppointment,
    viewAppointment: viewAppointment,
    cancelAppointment: cancelAppointment,
    changeStatus: changeStatus,
    getAllAppointments: getAllAppointments,
    getAllUpcomingAppointments: getAllUpcomingAppointments,
    getAllPreviousAppointments: getAllPreviousAppointments,
    getStatistics_Appointment: getStatistics_Appointment,
    getStatistics_Successful_App: getStatistics_Successful_App,
    isValid: isValid,
    graph: graph,
    // groups
    createGroup: createGroup,
    viewAllGroups: viewAllGroups,
  };