import AsyncStorage from "@react-native-async-storage/async-storage";

export const setUserStorage = async (key, data) => {
  const setData = JSON.stringify(data);
  await AsyncStorage.setItem(`${key}`, setData);
};

export const getUserStorage = async (key) => {
  const jsonValue = await AsyncStorage.getItem(`${key}`);
  return jsonValue != null ? JSON.parse(jsonValue) : null;
};
