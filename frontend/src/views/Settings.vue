<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn icon to="/">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title>Settings</v-toolbar-title>
    </v-app-bar>
    <v-content class="px-8">
      <div class="d-flex flex-wrap">
        <Raspberry/>
        <Mode />
        <AngleSensor />
        <Machine />
      </div>
      <TargetPoint />
      <Steering />
      <SaveSettingsSuccess />
      <Ntrip />
      
    </v-content>
    <v-footer color="primary lighten-1" dark>
      <v-row justify="center">
        Simplesteer
      </v-row>
    </v-footer>
  </v-app>
</template>
<script>
import AngleSensor from "@/components/settings/AngleSensor.vue";
import Machine from "@/components/settings/Machine.vue";
import TargetPoint from "@/components/settings/TargetPoint.vue";
import Steering from "@/components/settings/Steering.vue";
import SaveSettingsSuccess from '@/components/settings/SaveSettingsSuccess.vue';
import Ntrip from '@/components/settings/Ntrip.vue';
import Raspberry from '@/components/settings/Raspberry.vue';
import Mode from '@/components/settings/Mode.vue';
export default {
  name: "settings",
  components: {
    AngleSensor,
    Machine,
    TargetPoint,
    Steering,
    SaveSettingsSuccess,
    Ntrip,
    Raspberry,
    Mode
  }
};
</script>

<style lang="scss" scoped>
</style>
