import './style.scss';
import { sound, soundData } from "./sound";

// class Item {
//   element: sound
//   li: Node
//   input: HTMLInputElement
//   label: HTMLLabelElement
//   img: HTMLImageElement
//   audio: HTMLAudioElement
//   checked: boolean
//   activ: string

//   constructor(element: sound, activ: string) {
//     this.element = element;
//     this.activ = activ;

//     this.li = document.createElement("li");
//     this.checked = false;

//     this.input = document.createElement("input");
//     this.input.setAttribute("type", "radio");
//     this.input.setAttribute("id", element.label);
//     this.input.setAttribute("name", "sound");
//     this.input.addEventListener("click", (e: Event) => {
//       // const { target } = e;
//       // if ((target as HTMLInputElement).checked) {
//       //   this.audio.paused === true
//       //     ? this.play()
//       //     : this.pause()
//       // } else {
//       //   this.stop();
//       // }
//       this.activ = 
//     });

//     this.label = document.createElement("label");
//     this.label.setAttribute("for", element.label);

//     this.img = document.createElement("img");
//     this.img.setAttribute("src", element.img);
//     this.img.setAttribute("alt", element.label);
//     this.img.setAttribute("class", "img--mini");
//     this.label.appendChild(this.img);

//     this.audio = document.createElement("audio");
//     this.audio.setAttribute("src", element.sound);

//     this.li.appendChild(this.input);
//     this.li.appendChild(this.label);
//     this.li.appendChild(this.audio);
//   }

//   play(): void {
//     this.audio.play();
//   }

//   pause(): void {
//     this.audio.pause();
//   }

//   stop(): void {
//     this.audio.pause();
//     this.audio.currentTime = 0;
//   }

//   render(): void {
//     document.querySelector<HTMLDivElement>('#app ul')!.appendChild(this.li)
//   }
// }

// document.querySelector<HTMLDivElement>('#app')!.appendChild(
//   document.createElement("ul")
// )
// const test1 = new Item(soundData[0]);
// test1.render()
// const test2 = new Item(soundData[1]);
// test2.render()


const soundHTML: string = soundData
  .map((it: sound) => (`
    <li>
      <input type="radio" id="${it.label}" name="sound">
      <label for="${it.label}">
        <img class="img--mini" src="${it.img}" alt="${it.label}">
      </label>
      <audio
        controls
        src="${it.sound}"
      >
      </audio>
    </li>
  `))
  .join(' ');

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
 <div class="wrapper">
    <img class="img--background" src="" alt="background">
    <ul>
      ${soundHTML}
    </ul>
 </div>
 `;

const audios: NodeListOf<HTMLAudioElement> = document.querySelectorAll("audio");
const checkbox: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
const backgroundImage: HTMLImageElement = document.querySelector(".img--background")!;

checkbox.forEach((it: HTMLInputElement, i: number) => {
  it.addEventListener("click", () => {
    audios[i].paused ? audios[i].play() : audios[i].pause();
    backgroundImage.src = soundData[i].img;

  })
  it.addEventListener("change", () => {
    audios.forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    })
    audios[i].play();

  })
})

console.log(audios)
console.log(checkbox)
