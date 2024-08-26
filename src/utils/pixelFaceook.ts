
import ReactPixel, { fbq } from 'react-facebook-pixel';

// pixelFacebook.ts



export const teste = () => {
  if (typeof window !== 'undefined') {
    // Use os métodos fornecidos pelo objeto ReactPixel
    ReactPixel.track('test');
  }
};
