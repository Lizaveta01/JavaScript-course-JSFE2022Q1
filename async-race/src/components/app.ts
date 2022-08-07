/* eslint-disable @typescript-eslint/no-unused-vars */
import { createCar, deleteCar, deleteWinner, getCar, getCars, getWinner, getWinners, saveWinner, updateCar } from './api';
import { constants } from './constants';
import { ICar} from './interfaces';
import { storage } from './storage';
import { generateCars } from './generate-car';
import { race , startDrive, stopDrive } from './drive';

export async function garageUpdate(): Promise<void> {
  const carInfo = await getCars(storage.garagePage);
  storage.carsCount = carInfo.count;
  storage.cars = carInfo.items;
}

export async function winnersUpdate(): Promise<void> {
  const winnersInfo = await getWinners({
    page: storage.winnersPage,
    limit: constants.defaultWinnersPageLimit,
    sort: storage.sort,
    order: storage.sortOrder,
  });
  storage.winnersCount = winnersInfo.count;
  storage.winners = winnersInfo.items;
}

const renderCar = (color: string) => `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
width="100.000000pt" height="40.000000pt" viewBox="0 0 1280.000000 640.000000"
preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.15, written by Peter Selinger 2001-2017
</metadata>
<g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"
fill=${color} stroke="none">
<path d="M3565 5336 c-106 -30 -101 -26 -108 -111 -4 -42 -9 -80 -12 -85 -6 -10 -246 -105 -590 -234 -448 -167 -1052 -415 -1173 -483 -78 -43 -193 -91 -250 -104 -23 -5 -98 -14 -165 -19 -67 -6 -167 -19 -222 -30 -154 -31 -340 -49 -563 -57 l-203 -6 -43 -66 c-59 -91 -60 -95 -26 -130 37 -37 38 -65 3 -150 -25 -62 -27 -78 -31 -256 l-4 -190 -38 -32 c-91 -78 -133 -209 -134 -418 0 -194 11 -396 26 -482 13 -71 14 -74 72 -122 69 -58 130 -129 158 -184 64 -126 534 -211 1384 -250 l92 -4 -6 119 c-6 142 8 256 49 383 112 352 394 622 756 722 90 26 112 28 278 28 165 0 188 -2 278 -27 201 -56 361 -152 504 -302 140 -145 222 -293 274 -492 21 -79 24 -109 23 -279 -1 -127 -6 -214 -16 -263 l-15 -73 3006 7 c1653 4 3007 8 3009 9 1 1 -8 37 -20 81 -19 67 -22 105 -22 259 -1 166 1 187 27 279 117 421 467 736 885 797 119 17 325 7 432 -21 239 -63 453 -205 601 -399 70 -92 154 -267 185 -386 24 -88 27 -119 27 -260 1 -116 -4 -181 -16 -234 -10 -41 -16 -75 -15 -76 2 -1 62 2 133 6 266 16 458 45 525 79 48 24 97 81 127 146 l24 52 -16 157 c-15 152 -15 163 4 284 63 388 50 680 -35 802 -134 193 -526 336 -1429 519 -737 149 -1322 209 -2033 210 -228 0 -226 0 -347 85 -187 131 -1045 607 -1471 815 -383 187 -788 281 -1439 332
-208 17 -1106 16 -1400 0 -121 -7 -314 -19 -430 -27 -302 -22 -286 -22 -341 10 -140 81 -187 94 -269 71z m1885 -333 c6 -37 38 -238 71 -446 32 -209 66
-422 75 -474 9 -52 15 -96 13 -97 -11 -9 -1699 29 -1951 44 -206 13 -417 36 -485 54 -98 26 -198 119 -249 231 -35 75 -36 172 -5 255 17 45 30 61 68 86 83
54 135 80 253 127 341 136 858 230 1460 267 269 16 270 16 511 18 l227 2 12 -67z m630 47 c264 -18 777 -110 1029 -186 186 -56 445 -188 756 -387 211 -134
274 -181 250 -185 -75 -12 -133 -50 -162 -106 -19 -35 -21 -136 -4 -179 l11 -27 -907 2 -906 3 -59 160 c-110 302 -298 878 -298 916 0 6 95 2 290 -11z"/>
<path d="M2633 3125 c-223 -40 -410 -141 -568 -306 -132 -138 -213 -283 -262 -467 -22 -83 -26 -119 -26 -247 -1 -169 10 -236 65 -382 87 -230 271 -436 493
-551 85 -44 178 -78 271 -98 107 -23 312 -23 419 1 392 84 699 375 802 761 23 86 26 120 27 254 1 158 -5 199 -46 330 -98 310 -355 567 -668 669 -150 50
-354 64 -507 36z m350 -301 c249 -56 457 -247 543 -499 25 -72 28 -95 28 -220 1 -153 -15 -228 -74 -345 -94 -186 -283 -337 -485 -386 -96 -24 -268 -24 -360
0 -320 84 -544 355 -562 681 -20 359 209 673 558 765 94 24 253 26 352 4z"/> 
<path d="M2600 2697 c-36 -13 -85 -36 -109 -51 l-44 -28 116 -115 c81 -82 120 -114 131 -110 14 6 16 29 16 167 0 186 6 178 -110 137z"/>
<path d="M2920 2561 c0 -139 2 -162 16 -168 11 -4 50 28 130 108 l115 114 -28
22 c-34 28 -138 70 -193 79 l-40 7 0 -162z"/>
<path d="M2282 2448 c-28 -36 -92 -191 -92 -225 0 -10 34 -13 165 -13 151 0
165 1 165 18 0 15 -206 232 -221 232 -4 0 -11 -6 -17 -12z"/>
<path d="M3222 2351 c-62 -59 -112 -115 -112 -124 0 -15 17 -17 165 -17 131 0
165 3 165 13 0 40 -69 205 -95 227 -7 6 -48 -27 -123 -99z"/>
<path d="M2781 2332 c-12 -22 11 -62 34 -62 8 0 21 10 29 22 20 28 4 58 -29
58 -13 0 -29 -8 -34 -18z"/>
<path d="M2749 2161 c-32 -33 -37 -67 -14 -110 29 -57 104 -64 151 -14 53 57
9 153 -71 153 -27 0 -44 -8 -66 -29z"/>
<path d="M2570 2125 c-26 -32 13 -81 48 -59 24 16 27 45 6 61 -23 17 -39 16
-54 -2z"/>
<path d="M3006 2124 c-20 -19 -20 -38 -2 -54 23 -19 61 -8 64 18 7 44 -32 67
-62 36z"/>
<path d="M2190 1975 c0 -29 41 -140 72 -194 l31 -53 117 117 c71 71 116 123
113 131 -4 11 -40 14 -169 14 -141 0 -164 -2 -164 -15z"/>
<path d="M3110 1972 c0 -9 51 -68 114 -131 l114 -114 31 54 c30 51 71 165 71
195 0 11 -31 14 -165 14 -151 0 -165 -1 -165 -18z"/>
<path d="M2780 1901 c-7 -15 -5 -24 8 -41 32 -40 85 -4 62 41 -14 25 -56 25
-70 0z"/>
<path d="M2562 1697 c-61 -62 -112 -115 -112 -119 0 -18 208 -108 249 -108 7
0 11 54 11 164 0 140 -2 165 -16 170 -9 3 -16 6 -17 6 -1 0 -53 -51 -115 -113z"/>
<path d="M2933 1803 c-15 -6 -19 -333 -4 -333 46 0 251 88 251 108 0 9 -223
232 -230 231 -3 0 -11 -3 -17 -6z"/>
<path d="M10700 3119 c-390 -84 -696 -376 -797 -759 -31 -117 -41 -292 -24
-411 33 -227 150 -453 318 -609 267 -250 643 -344 993 -249 117 32 283 118
380 196 487 396 518 1128 67 1560 -97 93 -166 140 -290 198 -137 64 -235 86
-407 91 -120 3 -162 0 -240 -17z m445 -313 c238 -81 409 -258 486 -506 30 -96
33 -289 5 -388 -110 -400 -513 -637 -911 -536 -149 38 -313 147 -402 267 -176
238 -203 533 -71 797 34 69 60 103 138 180 77 78 111 104 181 139 129 65 207
81 364 77 109 -3 143 -7 210 -30z"/>
<path d="M10703 2700 c-54 -19 -153 -71 -153 -80 0 -3 51 -57 114 -119 80 -80
119 -112 130 -108 14 5 16 29 16 167 l0 160 -27 -1 c-16 0 -52 -9 -80 -19z"/>
<path d="M11020 2561 c0 -139 2 -162 16 -168 22 -8 247 216 234 232 -17 20
-163 84 -207 91 l-43 7 0 -162z"/>
<path d="M10366 2424 c-29 -44 -76 -165 -76 -194 0 -19 7 -20 165 -20 126 0
165 3 165 13 0 7 -51 63 -114 126 l-114 114 -26 -39z"/>
<path d="M11313 2348 c-61 -62 -109 -119 -106 -125 6 -15 333 -19 333 -4 0 45
-88 241 -108 241 -4 0 -57 -51 -119 -112z"/>
<path d="M10882 2338 c-17 -17 -15 -32 7 -52 16 -14 23 -15 41 -6 31 17 24 64
-10 68 -14 2 -31 -3 -38 -10z"/>
<path d="M10846 2159 c-68 -81 17 -194 110 -144 89 48 56 175 -46 175 -30 0
-44 -6 -64 -31z"/>
<path d="M10670 2126 c-19 -23 -8 -61 18 -64 44 -7 67 32 36 62 -19 20 -38 20
-54 2z"/>
<path d="M11106 2127 c-21 -16 -18 -45 7 -61 37 -23 77 35 41 61 -10 7 -21 13
-24 13 -3 0 -14 -6 -24 -13z"/>
<path d="M10290 1970 c0 -29 43 -141 74 -195 l28 -48 116 116 c81 81 113 120
109 131 -6 14 -29 16 -167 16 -152 0 -160 -1 -160 -20z"/>
<path d="M11207 1978 c-3 -7 47 -66 111 -130 l116 -118 27 43 c27 44 79 177
79 203 0 12 -28 14 -164 14 -122 0 -166 -3 -169 -12z"/>
<path d="M10881 1901 c-14 -25 -5 -48 20 -56 27 -9 51 13 47 44 -4 34 -51 43
-67 12z"/>
<path d="M10662 1697 c-61 -62 -112 -115 -112 -119 0 -20 201 -108 247 -108
10 0 13 34 13 164 0 140 -2 165 -16 170 -9 3 -16 6 -17 6 -1 0 -53 -51 -115
-113z"/>
<path d="M11033 1803 c-10 -3 -13 -47 -13 -169 0 -90 4 -164 8 -164 36 0 186
61 239 98 16 10 -216 242 -234 235z"/>
</g>
</svg>`;

const renderGarageRow = ({ id, name, color }: ICar) => `
  <div class="car-header">
    <div class="select-btns">
      <button class="btn-1 select-btn" id="select-car-${id}">Select</button>
      <button class="btn-1 remove-btn" id="remove-car-${id}">Remove</button>
    </div>
    <div class="car-name">${name}</div>
  </div>
  <div class = "car-row">
    <div class="car-controls">
    <button class="btn-1 start-engine-btn" id="start-engine-car-${id}">Start</button>
    <button class="btn-1 stop-engine-btn" id="stop-engine-car-${id}" disabled>Stop</button>
    </div>
    <div class="road">
        <div class="car" id="car-${id}">
          ${renderCar(color)}
        </div>
      <div class="flag">
      
      </div>
    </div>
  </div>
`;

const renderGarage = () => `
  <h1>Garage (total number of cars: ${storage.carsCount})</h1>
  <h2>Page: ${storage.garagePage} / ${Math.ceil(storage.carsCount / constants.defaultGaragePageLimit)}</h2>
  <ul class="garage">
  ${storage.cars.map((car) => `<li>${renderGarageRow(car)}</li>`).join("")}
  </ul>
`;


const renderWinners = () => `
  <h1>Winners (total number of winners: ${storage.winnersCount})</h1>
  <h2>Page: ${storage.winnersPage} / ${Math.ceil(storage.winnersCount / constants.defaultWinnersPageLimit)}</h2>
  <table class="table" cellspasing="0" border="0" cellpadding="0">
    <thead>
      <th>Number</th>
      <th>Car</th>
      <th>Name</th>
      <th class="table-btn table-wins" id="sort-by-wins">Wins</th>
      <th class="table-btn table-time" id="sort-by-time">Best time (seconds)</th>
    </thead>
    <tbody>
      ${storage.winners
        .map(
          (winner, index) => `
      <tr>
        <td>${(storage.winnersPage - 1) * constants.defaultWinnersPageLimit + index + 1}</td>
        <td>${renderCar(winner.car.color)}</td>
        <td>${winner.car.name}</td>
        <td>${winner.wins}</td>
        <td>${winner.time}</td>
      </tr>
    `
        )
        .join("")}
    </tbody>
  </table>
`;

export const render = async (): Promise<void> => {
  const template = `
    <nav class="menu">
      <button class="btn garage-menu-btn primary" id="garage-menu" disabled>To garage</button>
      <button class="btn winners-menu-btn primary" id="winners-menu">To winners</button>
    </nav>
    <main id="garage-view">
      <div class="winner-message" id="message">
      </div>
      <div>
        <form class="form" id="create">
          <input class="input" id="create-name" name="name" type="text">
          <input class="color" id="create-color" name="color" type="color" value="#000000">
          <button class="btn create-submit" id="create-submit" type="submit">Create</button>
        </form>
        <form class="form" id="update">
          <input class="input" id="update-name" name="name" type="text" disabled>
          <input class="color" id="update-color" name="color" type="color" value="#000000" disabled>
          <button class="btn update-btn" id="update-submit" type="submit" disabled>Update</button>
        </form>
      </div>
      <div class="race-controls">
        <button class="btn race-btn" id="race">Race</button>
        <button class="btn reset-btn" id="reset">Reset</button>
        <button class="btn generator-btn" id="generator">Generate cars</button>
      </div>
      <div id="garage-cars">
        ${renderGarage()}
      </div>
    </main>
    <main id="winners-view" style="display: none">
      ${renderWinners()}
    </main>
    <nav class="pagination">
      <button class="btn-1 prev-btn primary" disabled id="prev">previous</button>
      <button class="btn-1 next-btn primary" disabled id="next">next</button>
    </nav>
  `;
  const root = document.createElement("div");
  root.innerHTML = template;
  document.body.appendChild(root);
};

export function PageButtonsUpdate(): void {
  const prevButton = document.getElementById('prev') as HTMLButtonElement;
  const nextButton = document.getElementById('next') as HTMLButtonElement;
  const garageViewBtn = document.getElementById('garage-menu') as HTMLButtonElement;
  const winnersViewBtn = document.getElementById('winners-menu') as HTMLButtonElement;
  if (storage.view === 'garage') {
    garageViewBtn.disabled = true;
    winnersViewBtn.disabled = false;
    if (storage.garagePage * constants.defaultGaragePageLimit < storage.carsCount) {
      nextButton.disabled = false;
    } else {
      nextButton.disabled = true;
    }
    if (storage.garagePage > 1) {
      prevButton.disabled = false;
    } else {
      prevButton.disabled = true;
    }
  } else if (storage.view === 'winners') {
    garageViewBtn.disabled = false;
    winnersViewBtn.disabled = true;
    if (storage.winnersPage * constants.defaultWinnersPageLimit < storage.winnersCount) {
      nextButton.disabled = false;
    } else {
      nextButton.disabled = true;
    }
    if (storage.winnersPage > 1) {
      prevButton.disabled = false;
    } else {
      prevButton.disabled = true;
    }
  }
}

async function setSortOrder(sort: string) {
  if (storage.sortOrder === 'asc') {
    storage.sortOrder = 'desc';
  } else {
    storage.sortOrder = 'asc';
  }
  storage.sort = sort;
  await winnersUpdate();
  const winnersView = document.getElementById('winners-view') as HTMLElement;
  winnersView.innerHTML = renderWinners();
}

export const addListeners = function (): void {
  const garageCars = document.getElementById('garage-cars') as HTMLElement;
  const createNameInput = document.getElementById('create-name') as HTMLInputElement;
  const createColorInput = document.getElementById('create-color') as HTMLInputElement;
  const createForm = document.getElementById('create') as HTMLFormElement;
  const updateNameInput = document.getElementById('update-name') as HTMLInputElement;
  const updateColorInput = document.getElementById('update-color') as HTMLInputElement;
  const updateBtn = document.getElementById('update-submit') as HTMLButtonElement;
  const updateForm = document.getElementById('update') as HTMLFormElement;
  const winnersBtn = document.getElementById('winners-menu') as HTMLButtonElement;
  const garageBtn = document.getElementById('garage-menu') as HTMLButtonElement;
  const winnersView = document.getElementById('winners-view') as HTMLElement;
  const garageView = document.getElementById('garage-view') as HTMLElement;
  const btnPrev = document.getElementById('prev') as HTMLButtonElement;
  const btnNext = document.getElementById('next') as HTMLButtonElement;
  const btnGenerateCar = document.getElementById('generator') as HTMLButtonElement;
  const raceBtn = document.getElementById('race') as HTMLButtonElement;
  const raceResetBtn = document.getElementById('reset') as HTMLButtonElement;
  const sortCountWins = document.getElementById('sort-by-wins') as HTMLTableElement;
  const sortTime = document.getElementById('sort-by-time') as HTMLTableElement; 

  let selectedCar: ICar | null = null;
  

   btnPrev.addEventListener('click', async () => {
    if (storage.view === 'garage') {
      storage.garagePage -= 1;
      await garageUpdate();
      PageButtonsUpdate();
      garageCars.innerHTML = renderGarage();
    } else {
      storage.winnersPage -= 1;
      await winnersUpdate();
      PageButtonsUpdate();
      winnersView.innerHTML = renderWinners();
    }
   })

   btnNext.addEventListener('click', async () => {
    if (storage.view === 'garage') {
      storage.garagePage += 1;
      await garageUpdate();
      PageButtonsUpdate();
      garageCars.innerHTML = renderGarage();
    } else {
      storage.winnersPage += 1;
      await winnersUpdate();
      PageButtonsUpdate();
      winnersView.innerHTML = renderWinners();
    }
   })
    
    btnGenerateCar.addEventListener('click', async () => {
      btnGenerateCar.disabled = true;
      const cars = generateCars(constants.defaultNumberGenerateCar);
      await Promise.all(cars.map(async (car) => createCar(car)));
      await garageUpdate();
      PageButtonsUpdate();
      garageCars.innerHTML = renderGarage();
      btnGenerateCar.disabled = false;
    })

    winnersBtn.addEventListener('click', async () => {
      console.log('click');
      storage.view = 'winners';
      garageView.style.display = 'none';
      winnersView.style.display = 'block';
      await winnersUpdate();
      winnersView.innerHTML = renderWinners();
      PageButtonsUpdate();
      raceResetBtn.disabled = true;
      storage.cars.map(({ id }) => stopDrive(id));
      raceBtn.disabled = false;
    })

    garageBtn.addEventListener('click', () => {
      console.log('click');
      storage.view = 'garage';
      garageView.style.display = 'block';
      winnersView.style.display =  'none';
      PageButtonsUpdate();
    })

    raceBtn.addEventListener('click', async () => {
      raceBtn.disabled = true;
      const winner = await race();
      await saveWinner(winner);
      winnersUpdate();
      raceResetBtn.disabled = false;
    });
    
    raceResetBtn.addEventListener('click', async () => {
      raceResetBtn.disabled = true;
      storage.cars.map(({ id }) => stopDrive(id));
      raceBtn.disabled = false;
    });
   

    createForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      console.log('create');
      if (createNameInput.value) {
        const bodyCar = {
          name: createNameInput.value,
          color: createColorInput.value
        };
        await createCar(bodyCar);
        await garageUpdate();
        garageCars.innerHTML = renderGarage();
        createNameInput.value = '';
        createColorInput.value = '#000000';
      } else {
        alert('paste name car!')
      }
    })

    

    document.body.addEventListener('click', async (event) => {
      const eventTarget = event.target as HTMLButtonElement;

      if(eventTarget.classList.contains('remove-btn')){
        const id = +eventTarget.id.split('remove-car-')[1];
        await deleteCar(id);
        await deleteWinner(id);
        await garageUpdate();
        garageCars.innerHTML = renderGarage();
        PageButtonsUpdate();
      }

      if (eventTarget.classList.contains('select-btn')){
        selectedCar = await getCar(+eventTarget.id.split('select-car-')[1]);
        updateNameInput.value = selectedCar.name;
        updateColorInput.value = selectedCar.color;
        updateNameInput.disabled = false;
        updateColorInput.disabled = false;
        updateBtn.disabled = false;
      }

      if (eventTarget.classList.contains('start-engine-btn')){
        const id = +eventTarget.id.split('start-engine-car-')[1];

        await startDrive(id);
      } 
      if (eventTarget.classList.contains('stop-engine-btn')){
        const id = +eventTarget.id.split('stop-engine-car-')[1];
        await stopDrive(id);
      }

      updateForm.addEventListener('submit', async () => {
        event.preventDefault();
        const bodyCar = {
          name: updateNameInput.value,
          color: updateColorInput.value
        }
        await updateCar(+eventTarget.id.split('select-car-')[1], bodyCar);
        await garageUpdate();
        updateNameInput.disabled = true;
        updateNameInput.value = '';
        updateColorInput.value = '#000000';
        updateColorInput.disabled = true;
        updateBtn.disabled = true;
        selectedCar = null;
      })

      if (eventTarget.classList.contains('table-wins')){
        await setSortOrder('wins');
        console.log('eee');
      }
      if (eventTarget.classList.contains('table-time')){
       await setSortOrder('time');
        console.log('fefe');
      }
      
    })
      
}  




