import { useCompression } from 'h3-compression';

export default defineNitroPlugin((nitro) => {
  console.log('defineNitroPlugin:init');
  nitro.hooks.hook('render:response', async (response, { event }) => {
    console.log('defineNitroPlugin:hook > render:response');
    if (!response.headers?.['content-type'].startsWith('text/html')) return;
    console.log('defineNitroPlugin:hook > render:response > exec');
    await useCompression(event, response);
  });
});
