import { NativeModules, Platform } from 'react-native';

const info = NativeModules.DeviceTypeCheckerModule;
let emulator;
export function isEmulator() {
  if (emulator === undefined) {
    if (Platform.OS === 'android') {
      emulator = info?.isEmulator();
    } else {
      emulator = info?.isSimulator;
    }
  }
  return emulator;
}

module.exports = {
  isEmulator
};
