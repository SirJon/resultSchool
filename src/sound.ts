import rainy from "./assets/rainy-bg.jpg";
import summer from "./assets/summer-bg.jpg";
import winter from "./assets/winter-bg.jpg";

import rainMP3 from "./assets/sounds/rain.mp3";
import summerMP3 from "./assets/sounds/summer.mp3";
import winterMP3 from "./assets/sounds/winter.mp3";

import rainSvg from "./assets/icons/cloud-rain.svg";
import summerSvg from "./assets/icons/sun.svg";
import winterSvg from "./assets/icons/cloud-snow.svg";

export interface sound {
  label: string
  img: string
  sound: string
  svg: string
};

export const soundData: sound[] = [
  { label: 'rainy', img: rainy, sound: rainMP3, svg: rainSvg, },
  { label: 'summer', img: summer, sound: summerMP3, svg: summerSvg, },
  { label: 'winter', img: winter, sound: winterMP3, svg: winterSvg, },
];