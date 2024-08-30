import type { TurboModule } from 'react-native/Libraries/TurboModule/RCTExport';
import { TurboModuleRegistry } from 'react-native';
export interface Spec extends TurboModule {
    exitApp: () => void;
}
 
export default TurboModuleRegistry.get<Spec>('RNExitApp') as Spec | null;