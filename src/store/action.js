const ActionType = {
  CITY_ON_CHANGE: `city/CITY_ON_CHANGE`,
  ADD_PROPERTYES: `property/ADD_PROPERTYES`,
};


const ActionCreator = {
  cityOnChange: (cityName) => ({
    type: ActionType.CITY_ON_CHANGE,
    payload: cityName
  }),
  addPropertyes: (propertyes) => ({
    type: ActionType.ADD_PROPERTYES,
    payload: propertyes
  })
};

export {ActionType, ActionCreator};
