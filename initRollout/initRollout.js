import AsyncStorage from '@react-native-community/async-storage';
import Rox from 'rox-react-native';
import {featureFlags} from './featureFlags';

const ROLLOUT_API_KEY = '5d96379b83af6a4158d5fd18';

const rolloutContainer = {
  AsyncStorage,
};

export const initRollout = async () => {
  Rox.register('featureFlags', featureFlags);

  const rolloutFlags = Rox.flags;

  //   console.log(`Rox.getValue('feeds'):`, Rox.getValue("feeds"));

  try {
    const rolloutInstance = await Rox.setup(ROLLOUT_API_KEY, rolloutContainer);

    console.log('*** Rollout Initialized ***:', rolloutInstance);
    console.log('rolloutFlags:', rolloutFlags);

    rolloutFlags.forEach(flag => {
      console.log(
        `%cROX flag "${flag.name}" is enabled?: ${flag.isEnabled()}`,
        'color:pink',
      );
    });

    return true;
  } catch (error) {
    rolloutFlags.forEach(flag => {
      console.log(
        `%cROX WITH ERROR: flag "${
          flag.name
        }" is enabled?: ${flag.isEnabled()}`,
        'color:pink',
      );
    });
    return false;
  }
};
