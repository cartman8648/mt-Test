<template>
  <div>
    <button class="btn bg-base-100 btn-lg w-11/12" @click="openScanner">Neuer Auftrag</button>
  </div>
</template>

<script setup lang="ts">
  import ScanbotSDK from 'scanbot-web-sdk/ui';
  import type { BarcodeItem, BarcodeMappedData, BarcodeScannerConfiguration, BarcodeRecognizerConfiguration } from 'scanbot-web-sdk/@types/ui2/configuration';


  async function openScanner() {
    const config = new ScanbotSDK.UI.Config.BarcodeScannerConfiguration() as BarcodeScannerConfiguration;
    const result = await ScanbotSDK.UI.createBarcodeScanner(config);

    if (result?.items) {
        console.log(result?.items);
    }
}

</script>