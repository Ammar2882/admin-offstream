export const baseUrl = "https://backend--ofstream-api.herokuapp.com";

export const ADMINCREATEUSER = `${baseUrl}/api/v1/users/auth/adminCreateUser`;
export const GETARTISTS = `${baseUrl}/api/v1/users/auth/getArtists`;
export const adminAllActionUser = (id) => {
  return `${baseUrl}/api/v1/users/auth/adminUser/${id}`;
};
export const UPDATEUSER = (id) => {
  return `${baseUrl}/api/v1/users/auth/updateuser/${id}`;
};

export const GETALLPLACEMENT = `${baseUrl}/api/v1/placement/`;
export const ADDPLACEMENT = `${baseUrl}/api/v1/placement/`;
export const getUserPlacements = (id) => {
  return `${baseUrl}/api/v1/placement/userPlacements/${id}`;
};
export const allActionPlacement = (id) => {
  return `${baseUrl}/api/v1/placement/${id}`;
};

export const GETALLPROJECTS = `${baseUrl}/api/v1/project/`;
export const ADDPROJECT = `${baseUrl}/api/v1/project/`;
export const getUserSongs = (id) => {
  return `${baseUrl}/api/v1/project/userProject/${id}`;
};
export const allActionSong = (id) => {
  return `${baseUrl}/api/v1/project/${id}`;
};

export const GETALLPAYOUTS = `${baseUrl}/api/v1/payout/`;
export const ADDPAYMENT = `${baseUrl}/api/v1/payout/`;
export const getUserPayouts = (id) => {
  return `${baseUrl}/api/v1/payout/userPayouts/${id}`;
};
export const allActionPayout = (id) => {
  return `${baseUrl}/api/v1/payout/${id}`;
};
