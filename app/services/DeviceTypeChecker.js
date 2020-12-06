import { NativeModules, Platform } from 'react-native';

const info = NativeModules.DeviceTypeCheckerModule;
let emulator;
export async function isEmulator() {
  if (emulator === undefined) {
    if (Platform.OS === 'android') {
      emulator = await info?.isEmulator();
    } else {
      emulator = info?.isSimulator;
    }
  }
  return emulator;
}

module.exports = {
  isEmulator
};
