const brandLogos = require.context('../public/brands', false, /\.(png)$/);
const brands = brandLogos.keys().map(filename => filename.replace('./', '/brands/'));
export default brands;