import './style.scss';
import { sound, soundData } from "./sound";

const defaultChecked: number = Math.round((soundData.length - 1) / 2);

class SoundItem {
  element: sound
  li: HTMLLIElement
  input: HTMLInputElement
  label: HTMLLabelElement
  img: HTMLImageElement
  svg: HTMLImageElement
  audio: HTMLAudioElement
  imgBackground: HTMLImageElement
  defaultChecked: boolean
  wrapper: Node

  constructor(element: sound, audio: HTMLAudioElement, imgBackground: HTMLImageElement, defaultChecked: boolean, wrapper: Node) {
    this.element = element;
    this.defaultChecked = defaultChecked;
    this.audio = audio;
    this.imgBackground = imgBackground;
    this.wrapper = wrapper;

    this.li = document.createElement("li");
    this.li.setAttribute("class", "item");

    this.input = document.createElement("input");
    this.input.setAttribute("class", "input");
    this.input.setAttribute("type", "radio");
    this.input.setAttribute("id", element.label);
    this.input.setAttribute("name", "sound");
    this.input.addEventListener("click", () => {
      this.audio.paused === true
        ? this.play()
        : this.pause()
    });
    this.input.addEventListener("change", () => {
      this.audio.setAttribute("src", element.sound);
      this.play();

      this.imgBackground.setAttribute("src", element.img);
    });

    this.label = document.createElement("label");
    this.label.setAttribute("for", element.label);
    this.label.setAttribute("class", "label");

    this.img = document.createElement("img");
    this.img.setAttribute("class", "img--mini");
    this.img.setAttribute("src", element.img);
    this.img.setAttribute("alt", element.label);
    this.label.appendChild(this.img);

    this.svg = document.createElement("img");
    this.svg.setAttribute("class", "img--svg");
    this.svg.setAttribute("src", element.svg);
    this.svg.setAttribute("alt", element.label);
    this.label.appendChild(this.svg);

    if (defaultChecked) {
      this.audio.setAttribute("src", element.sound);
      this.imgBackground.setAttribute("src", element.img);
      this.input.setAttribute("checked", "checked");
    }

    this.li.appendChild(this.input);
    this.li.appendChild(this.label);
  }

  play(): void {
    this.audio.play();
  }

  pause(): void {
    this.audio.pause();
  }

  stop(): void {
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  render(): void {
    this.wrapper.appendChild(this.li)
  }
}

const img: HTMLImageElement = document.createElement("img");
img.setAttribute("class", "img--background");
img.setAttribute("alt", "background");

const audio: HTMLAudioElement = document.createElement("audio");
const ul: HTMLUListElement = document.createElement("ul");
ul.setAttribute("class", "list");
const app: HTMLDivElement = document.querySelector<HTMLDivElement>('#app')!;

const range: HTMLInputElement = document.createElement("input");
range.setAttribute("class", "range");
range.setAttribute("type", "range");
range.setAttribute("min", "0");
range.setAttribute("max", "100");
range.setAttribute("value", "70");
audio.volume = range.valueAsNumber / 100;
range.addEventListener("change", (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target) audio.volume = target.valueAsNumber / 100;
})

app.appendChild(img);
app.appendChild(audio);
app.appendChild(ul);
app.appendChild(range);

soundData.forEach((it, i: number) => {
  const item = new SoundItem(it, audio, img, defaultChecked === i, ul);
  item.render();
})
