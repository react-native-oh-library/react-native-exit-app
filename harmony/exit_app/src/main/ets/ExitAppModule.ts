import { TurboModule } from '@rnoh/react-native-openharmony/ts';
import { TM } from "@rnoh/react-native-openharmony/generated/ts"
import { process } from '@kit.ArkTS'
export class ExitAppModule extends TurboModule implements TM.RNExitApp.Spec {
    public exitApp(): void {
      let pro = new process.ProcessManager()
      pro.exit(0);
    }
}