import ScanbotSDK from "scanbot-web-sdk/ui";

export default defineNuxtPlugin( async (nuxtApp) => {
   const config = useRuntimeConfig()
   // The path to the Scanbot SDK WebAssembly modules is made available by the static-copy plugin,
   // which is configured in the vite.config.ts file.
   const enginePath = 'scanbot-web-sdk';
   
   //const LICENSE_KEY: string = config.public.scanbotLicence;
   const LICENSE_KEY: string = '';
   const scanbotSDK: ScanbotSDK = await ScanbotSDK.initialize({ licenseKey: LICENSE_KEY, engine: enginePath, allowThreads: true, verboseLogging: true});
   
   return {
      provide: {
         scanbotSDK
      }
   }
});