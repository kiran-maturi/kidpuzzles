/* Scene library.
 *
 * Every picture in the game is SVG markup written by hand — no image files, so
 * the whole app stays a few tens of KB and works offline the moment it loads.
 *
 * Rules each scene follows, because pieces.js slices them blindly:
 *   - the coordinate space is always 0 0 400 400 (square keeps the grids simple)
 *   - the first element is a full-bleed background rect, so every piece is
 *     fully painted. Unpainted SVG does not receive pointer events, and a piece
 *     with a transparent hole is a piece a small child cannot pick up.
 *   - flat fills and bold shapes only. Thin detail disappears on E Ink and
 *     turns to mush once a 400px picture is cut into 25 pieces.
 */

export const SCENES = [
  {
    id: 'rocket', name: 'Rocket', emoji: '🚀',
    svg: `
      <rect width="400" height="400" fill="#16306b"/>
      <circle cx="54" cy="58" r="6" fill="#ffe082"/>
      <circle cx="330" cy="46" r="8" fill="#ffe082"/>
      <circle cx="366" cy="150" r="5" fill="#ffe082"/>
      <circle cx="40" cy="210" r="5" fill="#ffe082"/>
      <circle cx="300" cy="248" r="7" fill="#ffe082"/>
      <circle cx="96" cy="128" r="4" fill="#ffe082"/>
      <ellipse cx="200" cy="392" rx="170" ry="46" fill="#3f6fbf"/>
      <path d="M200 44c42 54 54 118 54 176h-108c0-58 12-122 54-176z" fill="#f2f5fb"/>
      <path d="M200 44c18 24 30 48 38 74h-76c8-26 20-50 38-74z" fill="#e8473c"/>
      <circle cx="200" cy="158" r="30" fill="#4fc3f7"/>
      <circle cx="200" cy="158" r="30" fill="none" stroke="#1b6ca8" stroke-width="9"/>
      <path d="M146 196l-42 74 42-16z" fill="#e8473c"/>
      <path d="M254 196l42 74-42-16z" fill="#e8473c"/>
      <rect x="146" y="220" width="108" height="26" rx="9" fill="#90a4ae"/>
      <path d="M168 248c10 44 20 68 32 92 12-24 22-48 32-92z" fill="#ffb300"/>
      <path d="M182 248c6 28 12 44 18 60 6-16 12-32 18-60z" fill="#ff6f00"/>
    `
  },
  {
    id: 'cat', name: 'Cat', emoji: '🐱',
    svg: `
      <rect width="400" height="400" fill="#ffe7bd"/>
      <circle cx="330" cy="66" r="34" fill="#ffd54f"/>
      <ellipse cx="200" cy="392" rx="190" ry="40" fill="#f4c98a"/>
      <path d="M232 264c58 0 58 44 0 44-40 0-70-14-70-34" fill="none" stroke="#f57c00" stroke-width="20" stroke-linecap="round"/>
      <ellipse cx="176" cy="268" rx="96" ry="72" fill="#ffa726"/>
      <path d="M104 152l-6-62 58 32z" fill="#ffa726"/>
      <path d="M248 152l6-62-58 32z" fill="#ffa726"/>
      <path d="M112 142l-2-28 26 14z" fill="#f48fb1"/>
      <path d="M240 142l2-28-26 14z" fill="#f48fb1"/>
      <circle cx="176" cy="164" r="84" fill="#ffb74d"/>
      <circle cx="146" cy="152" r="16" fill="#2e2a26"/>
      <circle cx="206" cy="152" r="16" fill="#2e2a26"/>
      <circle cx="151" cy="146" r="5" fill="#ffffff"/>
      <circle cx="211" cy="146" r="5" fill="#ffffff"/>
      <path d="M176 178l-14 12h28z" fill="#f48fb1"/>
      <path d="M176 192c-8 12-22 10-26 0M176 192c8 12 22 10 26 0" fill="none" stroke="#2e2a26" stroke-width="7" stroke-linecap="round"/>
      <path d="M100 168H56M100 186l-42 14M252 168h44M252 186l42 14" stroke="#2e2a26" stroke-width="7" stroke-linecap="round"/>
    `
  },
  {
    id: 'fish', name: 'Fish', emoji: '🐠',
    svg: `
      <rect width="400" height="400" fill="#7fd4f5"/>
      <rect y="340" width="400" height="60" fill="#f3d9a4"/>
      <circle cx="96" cy="70" r="12" fill="#c8eefc"/>
      <circle cx="130" cy="36" r="8" fill="#c8eefc"/>
      <circle cx="322" cy="112" r="10" fill="#c8eefc"/>
      <path d="M60 344c-14-56 24-80 8-128 28 40-4 76 16 128z" fill="#2e9e5b"/>
      <path d="M340 344c18-64-28-96-6-152-34 48 2 88-22 152z" fill="#2e9e5b"/>
      <path d="M258 200l86-54v108z" fill="#ff7043"/>
      <ellipse cx="184" cy="200" rx="92" ry="66" fill="#ffa726"/>
      <path d="M150 140c0 44 0 76 0 120M198 138c0 46 0 78 0 124" stroke="#ff7043" stroke-width="18" stroke-linecap="round"/>
      <path d="M160 136c30-8 54 6 66 26-24 10-52 6-66-26z" fill="#ffca28"/>
      <circle cx="120" cy="184" r="19" fill="#ffffff"/>
      <circle cx="116" cy="184" r="10" fill="#2e2a26"/>
      <path d="M96 232c18 10 40 10 58 0" fill="none" stroke="#e65100" stroke-width="8" stroke-linecap="round"/>
    `
  },
  {
    id: 'house', name: 'House', emoji: '🏠',
    svg: `
      <rect width="400" height="400" fill="#9fdcff"/>
      <circle cx="58" cy="60" r="34" fill="#ffd54f"/>
      <ellipse cx="290" cy="64" rx="52" ry="26" fill="#ffffff"/>
      <ellipse cx="250" cy="72" rx="34" ry="20" fill="#ffffff"/>
      <rect y="300" width="400" height="100" fill="#66bb6a"/>
      <rect x="96" y="186" width="208" height="128" fill="#fff3e0"/>
      <path d="M200 96l128 98H72z" fill="#e8473c"/>
      <rect x="168" y="232" width="64" height="82" rx="6" fill="#8d6e63"/>
      <circle cx="218" cy="274" r="7" fill="#ffd54f"/>
      <rect x="112" y="212" width="46" height="46" fill="#4fc3f7" stroke="#ffffff" stroke-width="8"/>
      <rect x="242" y="212" width="46" height="46" fill="#4fc3f7" stroke="#ffffff" stroke-width="8"/>
      <rect x="252" y="112" width="30" height="54" fill="#8d6e63"/>
      <circle cx="344" cy="300" r="34" fill="#2e7d32"/>
      <rect x="338" y="300" width="12" height="40" fill="#5d4037"/>
      <circle cx="60" cy="336" r="10" fill="#fff59d"/>
      <circle cx="96" cy="352" r="10" fill="#ef9a9a"/>
    `
  },
  {
    id: 'truck', name: 'Truck', emoji: '🚚',
    svg: `
      <rect width="400" height="400" fill="#bde3ff"/>
      <circle cx="336" cy="58" r="30" fill="#ffd54f"/>
      <rect y="288" width="400" height="112" fill="#8d9499"/>
      <rect y="338" width="400" height="12" fill="#ffffff"/>
      <rect x="34" y="150" width="184" height="132" rx="10" fill="#42a5f5"/>
      <rect x="54" y="176" width="144" height="42" rx="6" fill="#bbdefb"/>
      <rect x="214" y="186" width="96" height="96" rx="10" fill="#e8473c"/>
      <rect x="232" y="206" width="58" height="42" rx="6" fill="#90caf9"/>
      <rect x="298" y="240" width="22" height="42" rx="6" fill="#c62828"/>
      <circle cx="104" cy="288" r="42" fill="#37474f"/>
      <circle cx="104" cy="288" r="18" fill="#cfd8dc"/>
      <circle cx="268" cy="288" r="42" fill="#37474f"/>
      <circle cx="268" cy="288" r="18" fill="#cfd8dc"/>
      <rect x="30" y="268" width="290" height="16" rx="8" fill="#546e7a"/>
      <circle cx="318" cy="200" r="9" fill="#ffee58"/>
    `
  },
  {
    id: 'butterfly', name: 'Butterfly', emoji: '🦋',
    svg: `
      <rect width="400" height="400" fill="#d7f2c4"/>
      <circle cx="54" cy="56" r="26" fill="#ffd54f"/>
      <path d="M0 352c60-24 120 12 200-8 70-18 140 10 200-10v66H0z" fill="#7cb342"/>
      <ellipse cx="128" cy="150" rx="82" ry="66" fill="#ab47bc"/>
      <ellipse cx="272" cy="150" rx="82" ry="66" fill="#ab47bc"/>
      <ellipse cx="140" cy="258" rx="62" ry="54" fill="#7e57c2"/>
      <ellipse cx="260" cy="258" rx="62" ry="54" fill="#7e57c2"/>
      <circle cx="116" cy="146" r="22" fill="#ffca28"/>
      <circle cx="284" cy="146" r="22" fill="#ffca28"/>
      <circle cx="140" cy="262" r="16" fill="#ffca28"/>
      <circle cx="260" cy="262" r="16" fill="#ffca28"/>
      <rect x="186" y="116" width="28" height="196" rx="14" fill="#4e342e"/>
      <circle cx="200" cy="106" r="24" fill="#4e342e"/>
      <path d="M188 88c-12-18-30-24-42-22M212 88c12-18 30-24 42-22" fill="none" stroke="#4e342e" stroke-width="8" stroke-linecap="round"/>
      <circle cx="146" cy="66" r="9" fill="#4e342e"/>
      <circle cx="254" cy="66" r="9" fill="#4e342e"/>
      <circle cx="192" cy="102" r="5" fill="#ffffff"/>
      <circle cx="210" cy="102" r="5" fill="#ffffff"/>
    `
  },
  {
    id: 'rainbow', name: 'Rainbow', emoji: '🌈',
    svg: `
      <rect width="400" height="400" fill="#c9ecff"/>
      <path d="M40 330a160 160 0 0 1 320 0h-34a126 126 0 0 0-252 0z" fill="#e8473c"/>
      <path d="M74 330a126 126 0 0 1 252 0h-34a92 92 0 0 0-184 0z" fill="#ffa726"/>
      <path d="M108 330a92 92 0 0 1 184 0h-34a58 58 0 0 0-116 0z" fill="#ffd54f"/>
      <path d="M142 330a58 58 0 0 1 116 0h-34a24 24 0 0 0-48 0z" fill="#66bb6a"/>
      <path d="M176 330a24 24 0 0 1 48 0z" fill="#42a5f5"/>
      <circle cx="342" cy="66" r="32" fill="#ffee58"/>
      <ellipse cx="72" cy="122" rx="54" ry="30" fill="#ffffff"/>
      <ellipse cx="112" cy="132" rx="38" ry="24" fill="#ffffff"/>
      <ellipse cx="322" cy="196" rx="48" ry="28" fill="#ffffff"/>
      <rect y="330" width="400" height="70" fill="#7cb342"/>
      <circle cx="56" cy="360" r="11" fill="#fff59d"/>
      <circle cx="338" cy="366" r="11" fill="#f48fb1"/>
    `
  },
  {
    id: 'tree', name: 'Apple tree', emoji: '🌳',
    svg: `
      <rect width="400" height="400" fill="#bfe9ff"/>
      <circle cx="54" cy="58" r="28" fill="#ffd54f"/>
      <rect y="312" width="400" height="88" fill="#7cb342"/>
      <rect x="176" y="208" width="48" height="118" fill="#8d6e63"/>
      <path d="M200 240l-52-34M200 216l52-34" stroke="#8d6e63" stroke-width="18" stroke-linecap="round"/>
      <circle cx="200" cy="150" r="88" fill="#2e7d32"/>
      <circle cx="122" cy="188" r="58" fill="#388e3c"/>
      <circle cx="278" cy="188" r="58" fill="#388e3c"/>
      <circle cx="200" cy="96" r="52" fill="#43a047"/>
      <circle cx="158" cy="146" r="17" fill="#e8473c"/>
      <circle cx="240" cy="122" r="17" fill="#e8473c"/>
      <circle cx="210" cy="190" r="17" fill="#e8473c"/>
      <circle cx="286" cy="176" r="15" fill="#e8473c"/>
      <circle cx="116" cy="200" r="15" fill="#e8473c"/>
      <ellipse cx="96" cy="348" rx="34" ry="14" fill="#558b2f"/>
      <circle cx="318" cy="342" r="16" fill="#e8473c"/>
    `
  },
  {
    id: 'boat', name: 'Sailboat', emoji: '⛵',
    svg: `
      <rect width="400" height="400" fill="#a8e4ff"/>
      <circle cx="64" cy="66" r="30" fill="#ffee58"/>
      <ellipse cx="300" cy="72" rx="48" ry="24" fill="#ffffff"/>
      <rect y="274" width="400" height="126" fill="#1e88e5"/>
      <path d="M0 300c40-16 60 16 100 0s60 16 100 0 60 16 100 0 60 16 100 0v-26H0z" fill="#42a5f5"/>
      <rect x="192" y="66" width="14" height="208" fill="#795548"/>
      <path d="M182 250V96L86 250z" fill="#ffffff"/>
      <path d="M216 250V96l96 154z" fill="#e8473c"/>
      <path d="M62 250h276l-42 52H104z" fill="#8d6e63"/>
      <rect x="62" y="244" width="276" height="16" rx="8" fill="#5d4037"/>
      <path d="M206 66l52 18-52 18z" fill="#ffd54f"/>
      <circle cx="120" cy="330" r="12" fill="#90caf9"/>
      <circle cx="286" cy="352" r="10" fill="#90caf9"/>
    `
  },
  {
    id: 'dino', name: 'Dinosaur', emoji: '🦕',
    svg: `
      <rect width="400" height="400" fill="#ffe9b8"/>
      <circle cx="338" cy="58" r="30" fill="#ff8a65"/>
      <rect y="320" width="400" height="80" fill="#c5a35a"/>
      <path d="M20 300c26-8 42-42 34-78-10-42 18-66 56-60" fill="none" stroke="#66bb6a" stroke-width="34" stroke-linecap="round"/>
      <ellipse cx="200" cy="240" rx="116" ry="80" fill="#66bb6a"/>
      <path d="M254 176c8-58 30-88 68-92 34-4 50 24 40 46-8 18-28 20-38 8" fill="none" stroke="#66bb6a" stroke-width="40" stroke-linecap="round"/>
      <circle cx="326" cy="98" r="30" fill="#66bb6a"/>
      <circle cx="336" cy="90" r="8" fill="#2e2a26"/>
      <path d="M352 106c10 2 18 0 22-6" fill="none" stroke="#2e7d32" stroke-width="7" stroke-linecap="round"/>
      <path d="M140 300v48M200 306v46M262 300v48" stroke="#43a047" stroke-width="34" stroke-linecap="round"/>
      <path d="M150 158l22-38 22 38zM206 150l24-40 22 40z" fill="#2e7d32"/>
      <path d="M96 190l22-36 20 36z" fill="#2e7d32"/>
      <circle cx="150" cy="248" r="14" fill="#a5d6a7"/>
      <circle cx="216" cy="272" r="14" fill="#a5d6a7"/>
      <circle cx="252" cy="222" r="12" fill="#a5d6a7"/>
    `
  },
  {
    id: 'train', name: 'Train', emoji: '🚂',
    svg: `
      <rect width="400" height="400" fill="#cfe9ff"/>
      <ellipse cx="88" cy="70" rx="46" ry="24" fill="#ffffff"/>
      <ellipse cx="300" cy="56" rx="38" ry="20" fill="#ffffff"/>
      <ellipse cx="120" cy="108" rx="26" ry="18" fill="#eceff1"/>
      <ellipse cx="156" cy="88" rx="20" ry="14" fill="#eceff1"/>
      <rect y="318" width="400" height="30" fill="#8d6e63"/>
      <rect y="348" width="400" height="52" fill="#a1887f"/>
      <rect x="34" y="340" width="332" height="14" fill="#6d4c41"/>
      <rect x="196" y="186" width="164" height="130" rx="12" fill="#43a047"/>
      <rect x="216" y="210" width="50" height="50" rx="6" fill="#b3e5fc"/>
      <rect x="288" y="210" width="50" height="50" rx="6" fill="#b3e5fc"/>
      <rect x="34" y="216" width="148" height="100" rx="12" fill="#e8473c"/>
      <rect x="52" y="152" width="56" height="70" rx="8" fill="#c62828"/>
      <rect x="44" y="140" width="72" height="20" rx="10" fill="#8d6e63"/>
      <rect x="120" y="240" width="46" height="46" rx="6" fill="#ffe082"/>
      <circle cx="74" cy="318" r="30" fill="#37474f"/>
      <circle cx="74" cy="318" r="12" fill="#cfd8dc"/>
      <circle cx="152" cy="318" r="30" fill="#37474f"/>
      <circle cx="152" cy="318" r="12" fill="#cfd8dc"/>
      <circle cx="240" cy="318" r="26" fill="#37474f"/>
      <circle cx="318" cy="318" r="26" fill="#37474f"/>
      <rect x="176" y="256" width="28" height="18" rx="6" fill="#455a64"/>
    `
  },
  {
    id: 'flower', name: 'Flower', emoji: '🌻',
    svg: `
      <rect width="400" height="400" fill="#bfe9ff"/>
      <rect y="318" width="400" height="82" fill="#7cb342"/>
      <rect x="188" y="164" width="24" height="170" rx="10" fill="#2e7d32"/>
      <path d="M196 250c-40-6-62-30-64-58 34 2 60 20 64 58z" fill="#43a047"/>
      <path d="M204 290c40-6 62-30 64-58-34 2-60 20-64 58z" fill="#43a047"/>
      <ellipse cx="200" cy="66" rx="30" ry="46" fill="#ffca28"/>
      <ellipse cx="200" cy="222" rx="30" ry="46" fill="#ffca28"/>
      <ellipse cx="122" cy="144" rx="46" ry="30" fill="#ffca28"/>
      <ellipse cx="278" cy="144" rx="46" ry="30" fill="#ffca28"/>
      <ellipse cx="144" cy="88" rx="30" ry="42" transform="rotate(-45 144 88)" fill="#ffb300"/>
      <ellipse cx="256" cy="88" rx="30" ry="42" transform="rotate(45 256 88)" fill="#ffb300"/>
      <ellipse cx="144" cy="200" rx="30" ry="42" transform="rotate(45 144 200)" fill="#ffb300"/>
      <ellipse cx="256" cy="200" rx="30" ry="42" transform="rotate(-45 256 200)" fill="#ffb300"/>
      <circle cx="200" cy="144" r="52" fill="#8d6e63"/>
      <circle cx="200" cy="144" r="34" fill="#6d4c41"/>
      <circle cx="66" cy="352" r="14" fill="#ef9a9a"/>
      <circle cx="334" cy="360" r="14" fill="#fff59d"/>
    `
  }
];

export const sceneById = (id) => SCENES.find((s) => s.id === id) || SCENES[0];
