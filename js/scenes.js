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

/* The picker's filter chips, in the order they appear. 'all' is not a scene
 * category — it is the chip that clears the filter. */
export const CATEGORIES = [
  { id: 'all', name: 'All', emoji: '🌈' },
  { id: 'animals', name: 'Animals', emoji: '🐾' },
  { id: 'birds', name: 'Birds', emoji: '🐦' },
  { id: 'bugs', name: 'Bugs', emoji: '🐛' },
  { id: 'sea', name: 'Sea', emoji: '🐠' },
  { id: 'go', name: 'Things that go', emoji: '🚚' },
  { id: 'nature', name: 'Nature', emoji: '🌳' },
  { id: 'food', name: 'Food', emoji: '🍎' },
  { id: 'things', name: 'Things', emoji: '🧸' }
];

export const SCENES = [
  {
    id: 'rocket', name: 'Rocket', emoji: '🚀', cat: 'go',
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
    id: 'cat', name: 'Cat', emoji: '🐱', cat: 'animals',
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
    id: 'fish', name: 'Fish', emoji: '🐟', cat: 'sea',
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
    id: 'house', name: 'House', emoji: '🏠', cat: 'things',
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
    id: 'truck', name: 'Truck', emoji: '🚚', cat: 'go',
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
    id: 'butterfly', name: 'Butterfly', emoji: '🦋', cat: 'bugs',
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
    id: 'rainbow', name: 'Rainbow', emoji: '🌈', cat: 'nature',
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
    id: 'tree', name: 'Apple tree', emoji: '🌳', cat: 'nature',
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
    id: 'boat', name: 'Sailboat', emoji: '⛵', cat: 'go',
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
    id: 'dino', name: 'Dinosaur', emoji: '🦕', cat: 'animals',
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
    id: 'train', name: 'Train', emoji: '🚂', cat: 'go',
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
    id: 'flower', name: 'Flower', emoji: '🌻', cat: 'nature',
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
  },
  {
    id: 'dog', name: 'Dog', emoji: '🐶', cat: 'animals',
    svg: `
      <rect width="400" height="400" fill="#e3f2cf"/>
      <circle cx="54" cy="56" r="30" fill="#ffd54f"/>
      <ellipse cx="318" cy="68" rx="46" ry="24" fill="#ffffff"/>
      <rect y="316" width="400" height="84" fill="#8bc34a"/>
      <path d="M288 296c54 2 54-48 12-60" fill="none" stroke="#8d6e63" stroke-width="26" stroke-linecap="round"/>
      <ellipse cx="200" cy="272" rx="98" ry="68" fill="#a1887f"/>
      <ellipse cx="152" cy="330" rx="36" ry="20" fill="#efebe9"/>
      <ellipse cx="248" cy="330" rx="36" ry="20" fill="#efebe9"/>
      <ellipse cx="200" cy="292" rx="58" ry="46" fill="#efebe9"/>
      <circle cx="200" cy="158" r="84" fill="#bcaaa4"/>
      <ellipse cx="122" cy="168" rx="30" ry="58" fill="#8d6e63"/>
      <ellipse cx="278" cy="168" rx="30" ry="58" fill="#8d6e63"/>
      <circle cx="236" cy="140" r="38" fill="#8d6e63"/>
      <rect x="148" y="236" width="104" height="24" rx="12" fill="#e8473c"/>
      <circle cx="200" cy="268" r="14" fill="#ffd54f"/>
      <ellipse cx="200" cy="196" rx="48" ry="34" fill="#f5f5f5"/>
      <ellipse cx="200" cy="180" rx="20" ry="14" fill="#3e2723"/>
      <path d="M200 198v10M200 208c-8 10-20 8-24 0M200 208c8 10 20 8 24 0" fill="none" stroke="#5d4037" stroke-width="7" stroke-linecap="round"/>
      <circle cx="166" cy="140" r="15" fill="#2e2a26"/>
      <circle cx="236" cy="140" r="15" fill="#2e2a26"/>
      <circle cx="171" cy="134" r="5" fill="#ffffff"/>
      <circle cx="241" cy="134" r="5" fill="#ffffff"/>
      <ellipse cx="62" cy="354" rx="30" ry="12" fill="#fff8e1"/>
      <circle cx="36" cy="346" r="13" fill="#fff8e1"/>
      <circle cx="36" cy="362" r="13" fill="#fff8e1"/>
      <circle cx="88" cy="346" r="13" fill="#fff8e1"/>
      <circle cx="88" cy="362" r="13" fill="#fff8e1"/>
    `
  },
  {
    id: 'owl', name: 'Owl', emoji: '🦉', cat: 'birds',
    svg: `
      <rect width="400" height="400" fill="#1b2a63"/>
      <circle cx="328" cy="66" r="40" fill="#fff9c4"/>
      <circle cx="342" cy="54" r="10" fill="#efe1a6"/>
      <circle cx="314" cy="80" r="8" fill="#efe1a6"/>
      <circle cx="52" cy="48" r="8" fill="#ffe082"/>
      <circle cx="112" cy="96" r="6" fill="#ffe082"/>
      <circle cx="42" cy="156" r="7" fill="#ffe082"/>
      <circle cx="366" cy="184" r="6" fill="#ffe082"/>
      <circle cx="68" cy="256" r="6" fill="#ffe082"/>
      <circle cx="348" cy="290" r="7" fill="#ffe082"/>
      <rect y="362" width="400" height="38" fill="#121c42"/>
      <rect y="336" width="400" height="28" rx="14" fill="#6d4c41"/>
      <path d="M112 134l16-50 32 42z" fill="#8d6e63"/>
      <path d="M288 134l-16-50-32 42z" fill="#8d6e63"/>
      <ellipse cx="200" cy="228" rx="104" ry="112" fill="#8d6e63"/>
      <ellipse cx="114" cy="248" rx="32" ry="74" fill="#6d4c41"/>
      <ellipse cx="286" cy="248" rx="32" ry="74" fill="#6d4c41"/>
      <ellipse cx="200" cy="262" rx="62" ry="74" fill="#d7ccc8"/>
      <path d="M172 232h56M164 266h72M174 300h52" fill="none" stroke="#bcaaa4" stroke-width="12" stroke-linecap="round"/>
      <circle cx="158" cy="172" r="46" fill="#fff8e1"/>
      <circle cx="242" cy="172" r="46" fill="#fff8e1"/>
      <circle cx="158" cy="172" r="27" fill="#ffb300"/>
      <circle cx="242" cy="172" r="27" fill="#ffb300"/>
      <circle cx="158" cy="172" r="14" fill="#2e2a26"/>
      <circle cx="242" cy="172" r="14" fill="#2e2a26"/>
      <circle cx="163" cy="166" r="5" fill="#ffffff"/>
      <circle cx="247" cy="166" r="5" fill="#ffffff"/>
      <path d="M200 192l-16 28h32z" fill="#ff8f00"/>
      <path d="M160 334v24M180 334v24M220 334v24M240 334v24" fill="none" stroke="#ff8f00" stroke-width="13" stroke-linecap="round"/>
    `
  },
  {
    id: 'penguin', name: 'Penguin', emoji: '🐧', cat: 'birds',
    svg: `
      <rect width="400" height="400" fill="#b3e5fc"/>
      <circle cx="56" cy="54" r="28" fill="#fff176"/>
      <ellipse cx="298" cy="58" rx="48" ry="24" fill="#ffffff"/>
      <ellipse cx="256" cy="70" rx="32" ry="18" fill="#ffffff"/>
      <path d="M0 298l74-98 66 98z" fill="#d6effc"/>
      <path d="M272 298l66-90 62 90z" fill="#d6effc"/>
      <rect y="294" width="400" height="106" fill="#f6fbff"/>
      <ellipse cx="200" cy="314" rx="152" ry="24" fill="#dff1fb"/>
      <ellipse cx="200" cy="222" rx="96" ry="106" fill="#2b3a42"/>
      <circle cx="200" cy="124" r="76" fill="#2b3a42"/>
      <ellipse cx="200" cy="246" rx="64" ry="82" fill="#fbfbfb"/>
      <ellipse cx="200" cy="148" rx="52" ry="44" fill="#fbfbfb"/>
      <ellipse cx="106" cy="232" rx="28" ry="66" fill="#1d282e"/>
      <ellipse cx="294" cy="232" rx="28" ry="66" fill="#1d282e"/>
      <ellipse cx="154" cy="336" rx="36" ry="15" fill="#ff9800"/>
      <ellipse cx="246" cy="336" rx="36" ry="15" fill="#ff9800"/>
      <circle cx="174" cy="132" r="15" fill="#2e2a26"/>
      <circle cx="226" cy="132" r="15" fill="#2e2a26"/>
      <circle cx="179" cy="126" r="5" fill="#ffffff"/>
      <circle cx="231" cy="126" r="5" fill="#ffffff"/>
      <path d="M200 148l-28 16 28 20 28-20z" fill="#ff9800"/>
      <rect x="130" y="188" width="140" height="26" rx="13" fill="#e8473c"/>
      <rect x="248" y="200" width="28" height="60" rx="14" fill="#c62828"/>
    `
  },
  {
    id: 'frog', name: 'Frog', emoji: '🐸', cat: 'animals',
    svg: `
      <rect width="400" height="400" fill="#bfe9ff"/>
      <circle cx="56" cy="54" r="28" fill="#ffd54f"/>
      <ellipse cx="320" cy="64" rx="44" ry="22" fill="#ffffff"/>
      <rect y="266" width="400" height="134" fill="#4fc3f7"/>
      <path d="M0 292c46-16 68 14 112 0s68 14 112 0 66 14 112 0 46 8 64 0v-26H0z" fill="#29b6f6"/>
      <ellipse cx="200" cy="332" rx="152" ry="46" fill="#66bb6a"/>
      <path d="M200 332l-56 36 56-4z" fill="#4caf50"/>
      <ellipse cx="200" cy="252" rx="106" ry="80" fill="#7cb342"/>
      <ellipse cx="200" cy="278" rx="66" ry="52" fill="#dce775"/>
      <ellipse cx="98" cy="308" rx="48" ry="23" fill="#558b2f"/>
      <ellipse cx="302" cy="308" rx="48" ry="23" fill="#558b2f"/>
      <ellipse cx="200" cy="176" rx="94" ry="70" fill="#8bc34a"/>
      <circle cx="144" cy="132" r="42" fill="#8bc34a"/>
      <circle cx="256" cy="132" r="42" fill="#8bc34a"/>
      <circle cx="144" cy="132" r="28" fill="#ffffff"/>
      <circle cx="256" cy="132" r="28" fill="#ffffff"/>
      <circle cx="144" cy="134" r="15" fill="#2e2a26"/>
      <circle cx="256" cy="134" r="15" fill="#2e2a26"/>
      <circle cx="149" cy="128" r="5" fill="#ffffff"/>
      <circle cx="261" cy="128" r="5" fill="#ffffff"/>
      <path d="M130 202c32 32 108 32 140 0" fill="none" stroke="#33691e" stroke-width="13" stroke-linecap="round"/>
      <circle cx="166" cy="174" r="8" fill="#33691e"/>
      <circle cx="234" cy="174" r="8" fill="#33691e"/>
    `
  },
  {
    id: 'bee', name: 'Bee', emoji: '🐝', cat: 'bugs',
    svg: `
      <rect width="400" height="400" fill="#def3ff"/>
      <circle cx="52" cy="50" r="28" fill="#ffd54f"/>
      <ellipse cx="312" cy="56" rx="42" ry="20" fill="#ffffff"/>
      <rect y="330" width="400" height="70" fill="#8bc34a"/>
      <rect x="48" y="320" width="14" height="60" fill="#558b2f"/>
      <rect x="338" y="312" width="14" height="68" fill="#558b2f"/>
      <circle cx="55" cy="316" r="24" fill="#ef5350"/>
      <circle cx="345" cy="306" r="26" fill="#ec407a"/>
      <circle cx="55" cy="316" r="9" fill="#ffee58"/>
      <circle cx="345" cy="306" r="9" fill="#ffee58"/>
      <ellipse cx="206" cy="232" rx="112" ry="82" fill="#ffca28"/>
      <rect x="168" y="158" width="34" height="150" rx="17" fill="#3e2723"/>
      <rect x="238" y="170" width="34" height="126" rx="17" fill="#3e2723"/>
      <path d="M314 232l50-28v56z" fill="#3e2723"/>
      <ellipse cx="192" cy="136" rx="68" ry="36" transform="rotate(-24 192 136)" fill="#ffffff" stroke="#64b5f6" stroke-width="8"/>
      <ellipse cx="266" cy="152" rx="54" ry="30" transform="rotate(-8 266 152)" fill="#ffffff" stroke="#64b5f6" stroke-width="8"/>
      <circle cx="110" cy="214" r="58" fill="#3e2723"/>
      <circle cx="92" cy="200" r="21" fill="#ffffff"/>
      <circle cx="88" cy="202" r="11" fill="#2e2a26"/>
      <path d="M72 240c22 16 46 12 60-6" fill="none" stroke="#ffffff" stroke-width="9" stroke-linecap="round"/>
      <path d="M100 160c-12-30-30-42-50-40M138 158c6-28 24-44 46-42" fill="none" stroke="#3e2723" stroke-width="10" stroke-linecap="round"/>
      <circle cx="48" cy="118" r="13" fill="#3e2723"/>
      <circle cx="186" cy="114" r="13" fill="#3e2723"/>
    `
  },
  {
    id: 'turtle', name: 'Turtle', emoji: '🐢', cat: 'sea',
    svg: `
      <rect width="400" height="400" fill="#9fdcff"/>
      <circle cx="56" cy="54" r="28" fill="#ffd54f"/>
      <ellipse cx="312" cy="62" rx="44" ry="22" fill="#ffffff"/>
      <ellipse cx="268" cy="74" rx="30" ry="16" fill="#ffffff"/>
      <rect y="284" width="400" height="116" fill="#f3d9a4"/>
      <ellipse cx="200" cy="302" rx="164" ry="26" fill="#e8c98a"/>
      <path d="M66 264l-44 20 44 20z" fill="#66bb6a"/>
      <ellipse cx="104" cy="290" rx="42" ry="26" fill="#66bb6a"/>
      <ellipse cx="292" cy="290" rx="42" ry="26" fill="#66bb6a"/>
      <circle cx="330" cy="236" r="44" fill="#7cb342"/>
      <circle cx="350" cy="222" r="12" fill="#2e2a26"/>
      <circle cx="354" cy="218" r="4" fill="#ffffff"/>
      <path d="M344 258c12 4 22 2 28-6" fill="none" stroke="#33691e" stroke-width="8" stroke-linecap="round"/>
      <path d="M56 274a144 112 0 0 1 288 0z" fill="#a1887f"/>
      <rect x="46" y="268" width="308" height="28" rx="14" fill="#6d4c41"/>
      <path d="M200 174l50 28v54l-50 28-50-28v-54z" fill="#6d4c41"/>
      <circle cx="104" cy="240" r="30" fill="#795548"/>
      <circle cx="296" cy="240" r="30" fill="#795548"/>
      <circle cx="152" cy="190" r="22" fill="#795548"/>
      <circle cx="248" cy="190" r="22" fill="#795548"/>
      <ellipse cx="58" cy="352" rx="22" ry="12" fill="#e0c084"/>
      <ellipse cx="342" cy="364" rx="26" ry="13" fill="#e0c084"/>
    `
  },
  {
    id: 'elephant', name: 'Elephant', emoji: '🐘', cat: 'animals',
    svg: `
      <rect width="400" height="400" fill="#ffe9b8"/>
      <circle cx="52" cy="52" r="32" fill="#ff8a65"/>
      <rect y="308" width="400" height="92" fill="#c5e1a5"/>
      <ellipse cx="200" cy="320" rx="180" ry="24" fill="#aed581"/>
      <path d="M332 244c30-4 40 16 30 34" fill="none" stroke="#78909c" stroke-width="18" stroke-linecap="round"/>
      <ellipse cx="222" cy="226" rx="122" ry="92" fill="#90a4ae"/>
      <rect x="140" y="286" width="58" height="84" rx="20" fill="#78909c"/>
      <rect x="216" y="290" width="58" height="80" rx="20" fill="#78909c"/>
      <rect x="290" y="284" width="54" height="86" rx="20" fill="#90a4ae"/>
      <path d="M80 232c-24 40-22 82 2 100 13 10 27 2 27-11" fill="none" stroke="#b0bec5" stroke-width="44" stroke-linecap="round"/>
      <circle cx="132" cy="190" r="84" fill="#b0bec5"/>
      <ellipse cx="190" cy="186" rx="56" ry="70" fill="#90a4ae"/>
      <ellipse cx="190" cy="186" rx="34" ry="46" fill="#cfd8dc"/>
      <circle cx="108" cy="168" r="15" fill="#2e2a26"/>
      <circle cx="113" cy="162" r="5" fill="#ffffff"/>
      <path d="M138 240c14 10 20 22 16 34" fill="none" stroke="#fffde7" stroke-width="14" stroke-linecap="round"/>
      <circle cx="152" cy="218" r="9" fill="#90a4ae"/>
      <circle cx="56" cy="352" r="16" fill="#ef9a9a"/>
      <circle cx="356" cy="348" r="18" fill="#7cb342"/>
      <circle cx="326" cy="362" r="14" fill="#7cb342"/>
    `
  },
  {
    id: 'lion', name: 'Lion', emoji: '🦁', cat: 'animals',
    svg: `
      <rect width="400" height="400" fill="#ffe082"/>
      <circle cx="338" cy="58" r="34" fill="#ff7043"/>
      <rect y="314" width="400" height="86" fill="#d7a44b"/>
      <ellipse cx="200" cy="326" rx="178" ry="24" fill="#c2913c"/>
      <path d="M340 272c34 4 40 36 18 52" fill="none" stroke="#ffb74d" stroke-width="18" stroke-linecap="round"/>
      <circle cx="360" cy="328" r="19" fill="#e65100"/>
      <ellipse cx="244" cy="266" rx="110" ry="72" fill="#ffb74d"/>
      <ellipse cx="188" cy="328" rx="36" ry="18" fill="#ffcc80"/>
      <ellipse cx="288" cy="328" rx="36" ry="18" fill="#ffcc80"/>
      <circle cx="250" cy="196" r="26" fill="#e65100"/>
      <circle cx="79" cy="125" r="28" fill="#ef6c00"/>
      <circle cx="150" cy="96" r="28" fill="#ef6c00"/>
      <circle cx="221" cy="125" r="28" fill="#ef6c00"/>
      <circle cx="250" cy="196" r="28" fill="#ef6c00"/>
      <circle cx="221" cy="267" r="28" fill="#ef6c00"/>
      <circle cx="150" cy="296" r="28" fill="#ef6c00"/>
      <circle cx="79" cy="267" r="28" fill="#ef6c00"/>
      <circle cx="50" cy="196" r="28" fill="#ef6c00"/>
      <circle cx="150" cy="196" r="102" fill="#e65100"/>
      <circle cx="96" cy="136" r="26" fill="#ffb74d"/>
      <circle cx="204" cy="136" r="26" fill="#ffb74d"/>
      <circle cx="96" cy="136" r="13" fill="#ef9a9a"/>
      <circle cx="204" cy="136" r="13" fill="#ef9a9a"/>
      <circle cx="150" cy="196" r="72" fill="#ffb74d"/>
      <ellipse cx="150" cy="226" rx="48" ry="34" fill="#fff3e0"/>
      <path d="M150 214l-16 14h32z" fill="#8d6e63"/>
      <path d="M150 230c-6 12-18 12-24 2M150 230c6 12 18 12 24 2" fill="none" stroke="#6d4c41" stroke-width="7" stroke-linecap="round"/>
      <circle cx="124" cy="182" r="14" fill="#2e2a26"/>
      <circle cx="176" cy="182" r="14" fill="#2e2a26"/>
      <circle cx="129" cy="176" r="5" fill="#ffffff"/>
      <circle cx="181" cy="176" r="5" fill="#ffffff"/>
    `
  },
  {
    id: 'balloon', name: 'Balloon', emoji: '🎈', cat: 'go',
    svg: `
      <rect width="400" height="400" fill="#bbdefb"/>
      <circle cx="54" cy="52" r="28" fill="#fff176"/>
      <ellipse cx="76" cy="124" rx="52" ry="26" fill="#ffffff"/>
      <ellipse cx="118" cy="136" rx="36" ry="20" fill="#ffffff"/>
      <ellipse cx="344" cy="86" rx="46" ry="24" fill="#ffffff"/>
      <ellipse cx="356" cy="214" rx="40" ry="22" fill="#ffffff"/>
      <path d="M0 356c58-34 116 8 196-10 70-16 146 22 204-8v62H0z" fill="#8bc34a"/>
      <path d="M200 36C120 36 80 96 80 152c0 58 50 98 120 148 70-50 120-90 120-148 0-56-40-116-120-116z" fill="#e8473c"/>
      <path d="M200 36c-48 0-72 60-72 116 0 58 30 98 72 148 42-50 72-90 72-148 0-56-24-116-72-116z" fill="#ffd54f"/>
      <path d="M200 36c-22 0-34 60-34 116 0 58 16 98 34 148 18-50 34-90 34-148 0-56-12-116-34-116z" fill="#42a5f5"/>
      <rect x="172" y="282" width="56" height="18" rx="9" fill="#5d4037"/>
      <path d="M178 300l-8 22M222 300l8 22" fill="none" stroke="#5d4037" stroke-width="9" stroke-linecap="round"/>
      <rect x="160" y="318" width="80" height="58" rx="12" fill="#a1887f"/>
      <rect x="160" y="336" width="80" height="12" fill="#8d6e63"/>
      <rect x="160" y="358" width="80" height="12" fill="#8d6e63"/>
      <circle cx="200" cy="330" r="16" fill="#ffe0b2"/>
      <circle cx="194" cy="328" r="4" fill="#2e2a26"/>
      <circle cx="208" cy="328" r="4" fill="#2e2a26"/>
      <circle cx="52" cy="352" r="14" fill="#fff59d"/>
      <circle cx="348" cy="372" r="14" fill="#ef9a9a"/>
    `
  },
  {
    id: 'plane', name: 'Aeroplane', emoji: '✈️', cat: 'go',
    svg: `
      <rect width="400" height="400" fill="#90caf9"/>
      <circle cx="56" cy="56" r="30" fill="#fff176"/>
      <ellipse cx="300" cy="66" rx="52" ry="26" fill="#ffffff"/>
      <ellipse cx="256" cy="78" rx="34" ry="18" fill="#ffffff"/>
      <ellipse cx="80" cy="306" rx="60" ry="28" fill="#ffffff"/>
      <ellipse cx="124" cy="318" rx="40" ry="20" fill="#ffffff"/>
      <ellipse cx="334" cy="340" rx="50" ry="24" fill="#ffffff"/>
      <path d="M64 196L56 90h40l32 106z" fill="#e8473c"/>
      <path d="M70 212L34 278h36l44-66z" fill="#c62828"/>
      <ellipse cx="200" cy="200" rx="160" ry="54" fill="#f7f7f7"/>
      <path d="M186 222l-48 102 150-44-50-58z" fill="#42a5f5"/>
      <rect x="170" y="250" width="76" height="28" rx="14" fill="#546e7a"/>
      <rect x="184" y="256" width="48" height="16" rx="8" fill="#b0bec5"/>
      <rect x="86" y="206" width="250" height="18" rx="9" fill="#e8473c"/>
      <circle cx="140" cy="184" r="15" fill="#4fc3f7"/>
      <circle cx="186" cy="184" r="15" fill="#4fc3f7"/>
      <circle cx="232" cy="184" r="15" fill="#4fc3f7"/>
      <circle cx="278" cy="186" r="15" fill="#4fc3f7"/>
      <path d="M298 168c28 4 46 14 56 26h-56z" fill="#4fc3f7"/>
      <circle cx="350" cy="202" r="9" fill="#ffee58"/>
    `
  },
  {
    id: 'digger', name: 'Digger', emoji: '⛏️', cat: 'go',
    svg: `
      <rect width="400" height="400" fill="#cfe9ff"/>
      <circle cx="52" cy="52" r="28" fill="#ffd54f"/>
      <ellipse cx="312" cy="60" rx="44" ry="22" fill="#ffffff"/>
      <ellipse cx="270" cy="72" rx="30" ry="16" fill="#ffffff"/>
      <rect y="314" width="400" height="86" fill="#c5a35a"/>
      <path d="M0 352c40-34 92-32 130 4z" fill="#a98743"/>
      <path d="M268 358c34-40 92-42 132-6z" fill="#a98743"/>
      <path d="M198 234l108-80" fill="none" stroke="#ef6c00" stroke-width="30" stroke-linecap="round"/>
      <path d="M306 154l32 74" fill="none" stroke="#ef6c00" stroke-width="26" stroke-linecap="round"/>
      <rect x="26" y="282" width="232" height="68" rx="34" fill="#37474f"/>
      <circle cx="68" cy="316" r="21" fill="#90a4ae"/>
      <circle cx="142" cy="316" r="21" fill="#90a4ae"/>
      <circle cx="216" cy="316" r="21" fill="#90a4ae"/>
      <rect x="54" y="198" width="176" height="92" rx="14" fill="#ffb300"/>
      <rect x="208" y="166" width="20" height="38" rx="10" fill="#546e7a"/>
      <rect x="60" y="134" width="104" height="72" rx="12" fill="#ffca28"/>
      <rect x="76" y="150" width="74" height="44" rx="7" fill="#b3e5fc"/>
      <rect x="66" y="226" width="60" height="18" rx="9" fill="#e65100"/>
      <path d="M318 216l58 10-10 54c-34 2-54-18-48-64z" fill="#546e7a"/>
      <path d="M320 272l12 20 10-18zM348 276l12 18 10-20z" fill="#37474f"/>
      <circle cx="238" cy="206" r="10" fill="#ffee58"/>
    `
  },
  {
    id: 'robot', name: 'Robot', emoji: '🤖', cat: 'things',
    svg: `
      <rect width="400" height="400" fill="#e8eaf6"/>
      <circle cx="56" cy="62" r="28" fill="#c5cae9"/>
      <circle cx="334" cy="80" r="32" fill="#c5cae9"/>
      <circle cx="52" cy="258" r="22" fill="#c5cae9"/>
      <rect y="334" width="400" height="66" fill="#9fa8da"/>
      <rect x="192" y="40" width="16" height="46" fill="#546e7a"/>
      <circle cx="200" cy="34" r="21" fill="#e8473c"/>
      <rect x="90" y="110" width="22" height="50" rx="10" fill="#546e7a"/>
      <rect x="288" y="110" width="22" height="50" rx="10" fill="#546e7a"/>
      <rect x="112" y="78" width="176" height="130" rx="26" fill="#90a4ae"/>
      <rect x="130" y="96" width="140" height="78" rx="14" fill="#263238"/>
      <circle cx="166" cy="130" r="22" fill="#4fc3f7"/>
      <circle cx="234" cy="130" r="22" fill="#4fc3f7"/>
      <circle cx="171" cy="124" r="6" fill="#ffffff"/>
      <circle cx="239" cy="124" r="6" fill="#ffffff"/>
      <rect x="156" y="182" width="88" height="16" rx="8" fill="#37474f"/>
      <rect x="178" y="204" width="44" height="26" fill="#607d8b"/>
      <rect x="118" y="226" width="164" height="118" rx="20" fill="#78909c"/>
      <path d="M282 242l54-44" fill="none" stroke="#607d8b" stroke-width="28" stroke-linecap="round"/>
      <circle cx="346" cy="190" r="27" fill="#90a4ae"/>
      <rect x="54" y="238" width="68" height="28" rx="14" fill="#607d8b"/>
      <circle cx="50" cy="252" r="27" fill="#90a4ae"/>
      <rect x="150" y="248" width="100" height="62" rx="12" fill="#cfd8dc"/>
      <circle cx="176" cy="268" r="12" fill="#e8473c"/>
      <circle cx="208" cy="268" r="12" fill="#ffd54f"/>
      <circle cx="240" cy="268" r="12" fill="#66bb6a"/>
      <rect x="166" y="290" width="68" height="14" rx="7" fill="#546e7a"/>
      <rect x="140" y="338" width="36" height="36" fill="#607d8b"/>
      <rect x="224" y="338" width="36" height="36" fill="#607d8b"/>
      <rect x="118" y="366" width="76" height="28" rx="13" fill="#37474f"/>
      <rect x="206" y="366" width="76" height="28" rx="13" fill="#37474f"/>
    `
  },
  {
    id: 'cow', name: 'Cow', emoji: '🐄', cat: 'animals',
    svg: `
      <rect width="400" height="400" fill="#bfe9ff"/>
      <circle cx="54" cy="54" r="28" fill="#ffd54f"/>
      <ellipse cx="318" cy="60" rx="46" ry="22" fill="#ffffff"/>
      <rect y="296" width="400" height="104" fill="#8bc34a"/>
      <ellipse cx="200" cy="310" rx="178" ry="26" fill="#7cb342"/>
      <path d="M332 212c28 14 32 58 12 82" fill="none" stroke="#fafafa" stroke-width="16" stroke-linecap="round"/>
      <circle cx="344" cy="298" r="17" fill="#3e2723"/>
      <ellipse cx="222" cy="222" rx="118" ry="82" fill="#fafafa"/>
      <rect x="140" y="282" width="46" height="86" rx="16" fill="#fafafa"/>
      <rect x="218" y="286" width="46" height="82" rx="16" fill="#f0f0f0"/>
      <rect x="286" y="282" width="46" height="86" rx="16" fill="#fafafa"/>
      <rect x="140" y="344" width="46" height="24" rx="10" fill="#3e2723"/>
      <rect x="218" y="346" width="46" height="22" rx="10" fill="#3e2723"/>
      <rect x="286" y="344" width="46" height="24" rx="10" fill="#3e2723"/>
      <ellipse cx="188" cy="190" rx="48" ry="38" fill="#3e2723"/>
      <ellipse cx="280" cy="252" rx="42" ry="32" fill="#3e2723"/>
      <circle cx="112" cy="176" r="70" fill="#fafafa"/>
      <ellipse cx="44" cy="156" rx="32" ry="20" fill="#e8e8e8"/>
      <ellipse cx="176" cy="148" rx="30" ry="19" fill="#e8e8e8"/>
      <path d="M76 114l-12-34 36 20zM148 110l14-32-36 18z" fill="#e0c9a6"/>
      <ellipse cx="104" cy="214" rx="46" ry="32" fill="#f8bbd0"/>
      <ellipse cx="88" cy="210" rx="7" ry="10" fill="#c48b9f"/>
      <ellipse cx="120" cy="210" rx="7" ry="10" fill="#c48b9f"/>
      <circle cx="86" cy="162" r="13" fill="#2e2a26"/>
      <circle cx="138" cy="158" r="13" fill="#2e2a26"/>
      <circle cx="90" cy="156" r="4" fill="#ffffff"/>
      <circle cx="142" cy="152" r="4" fill="#ffffff"/>
      <rect x="84" y="248" width="62" height="14" rx="7" fill="#e8473c"/>
      <circle cx="116" cy="270" r="14" fill="#ffd54f"/>
    `
  },
  {
    id: 'pig', name: 'Pig', emoji: '🐷', cat: 'animals',
    svg: `
      <rect width="400" height="400" fill="#dff3c4"/>
      <circle cx="52" cy="52" r="28" fill="#ffd54f"/>
      <ellipse cx="320" cy="58" rx="46" ry="22" fill="#ffffff"/>
      <rect y="302" width="400" height="98" fill="#a98743"/>
      <ellipse cx="200" cy="314" rx="176" ry="26" fill="#8d6e63"/>
      <path d="M332 226c30-6 32 22 14 28-14 4-18-10-6-16" fill="none" stroke="#f06292" stroke-width="13" stroke-linecap="round"/>
      <ellipse cx="220" cy="238" rx="116" ry="80" fill="#f48fb1"/>
      <rect x="150" y="294" width="46" height="74" rx="16" fill="#ec407a"/>
      <rect x="232" y="298" width="46" height="70" rx="16" fill="#f06292"/>
      <rect x="294" y="294" width="46" height="74" rx="16" fill="#ec407a"/>
      <circle cx="120" cy="208" r="76" fill="#f8bbd0"/>
      <path d="M74 140l-16-46 52 22z" fill="#f06292"/>
      <path d="M158 134l24-44-50 18z" fill="#f06292"/>
      <ellipse cx="86" cy="234" rx="40" ry="31" fill="#f06292"/>
      <ellipse cx="74" cy="232" rx="8" ry="11" fill="#ad4a6b"/>
      <ellipse cx="100" cy="232" rx="8" ry="11" fill="#ad4a6b"/>
      <circle cx="96" cy="184" r="13" fill="#2e2a26"/>
      <circle cx="150" cy="180" r="13" fill="#2e2a26"/>
      <circle cx="100" cy="178" r="4" fill="#ffffff"/>
      <circle cx="154" cy="174" r="4" fill="#ffffff"/>
      <ellipse cx="206" cy="196" rx="24" ry="15" fill="#f8bbd0"/>
      <circle cx="48" cy="344" r="20" fill="#8d6e63"/>
      <circle cx="358" cy="358" r="22" fill="#8d6e63"/>
    `
  },
  {
    id: 'sheep', name: 'Sheep', emoji: '🐑', cat: 'animals',
    svg: `
      <rect width="400" height="400" fill="#bfe9ff"/>
      <circle cx="54" cy="52" r="28" fill="#ffd54f"/>
      <ellipse cx="322" cy="58" rx="46" ry="22" fill="#ffffff"/>
      <rect y="300" width="400" height="100" fill="#8bc34a"/>
      <ellipse cx="200" cy="312" rx="178" ry="26" fill="#7cb342"/>
      <rect x="160" y="286" width="34" height="82" rx="14" fill="#5d4037"/>
      <rect x="228" y="286" width="34" height="82" rx="14" fill="#4e342e"/>
      <rect x="292" y="286" width="34" height="82" rx="14" fill="#5d4037"/>
      <ellipse cx="238" cy="224" rx="112" ry="82" fill="#fafafa"/>
      <circle cx="158" cy="190" r="44" fill="#ffffff"/>
      <circle cx="218" cy="158" r="48" fill="#ffffff"/>
      <circle cx="288" cy="166" r="46" fill="#ffffff"/>
      <circle cx="336" cy="214" r="42" fill="#ffffff"/>
      <circle cx="324" cy="274" r="40" fill="#ffffff"/>
      <circle cx="250" cy="294" r="44" fill="#ffffff"/>
      <circle cx="170" cy="272" r="42" fill="#ffffff"/>
      <ellipse cx="108" cy="224" rx="54" ry="62" fill="#4e342e"/>
      <ellipse cx="52" cy="208" rx="32" ry="18" transform="rotate(-18 52 208)" fill="#3e2723"/>
      <ellipse cx="156" cy="200" rx="28" ry="16" transform="rotate(18 156 200)" fill="#3e2723"/>
      <circle cx="112" cy="170" r="42" fill="#ffffff"/>
      <circle cx="88" cy="214" r="12" fill="#fafafa"/>
      <circle cx="128" cy="210" r="12" fill="#fafafa"/>
      <circle cx="88" cy="214" r="6" fill="#2e2a26"/>
      <circle cx="128" cy="210" r="6" fill="#2e2a26"/>
      <ellipse cx="106" cy="256" rx="21" ry="14" fill="#f8bbd0"/>
    `
  },
  {
    id: 'horse', name: 'Horse', emoji: '🐴', cat: 'animals',
    svg: `
      <rect width="400" height="400" fill="#cfe9ff"/>
      <circle cx="54" cy="52" r="28" fill="#ffd54f"/>
      <ellipse cx="322" cy="58" rx="46" ry="22" fill="#ffffff"/>
      <rect y="300" width="400" height="100" fill="#8bc34a"/>
      <ellipse cx="200" cy="312" rx="178" ry="26" fill="#7cb342"/>
      <path d="M334 206c30 20 32 64 12 94" fill="none" stroke="#4e342e" stroke-width="28" stroke-linecap="round"/>
      <path d="M166 236c-18-48-10-88 16-108" fill="none" stroke="#a1887f" stroke-width="66" stroke-linecap="round"/>
      <path d="M206 122c16 28 16 62 4 92" fill="none" stroke="#4e342e" stroke-width="30" stroke-linecap="round"/>
      <ellipse cx="226" cy="230" rx="114" ry="74" fill="#a1887f"/>
      <rect x="152" y="284" width="40" height="86" rx="16" fill="#8d6e63"/>
      <rect x="216" y="288" width="40" height="82" rx="16" fill="#a1887f"/>
      <rect x="282" y="284" width="40" height="86" rx="16" fill="#8d6e63"/>
      <rect x="152" y="348" width="40" height="24" rx="9" fill="#4e342e"/>
      <rect x="216" y="350" width="40" height="22" rx="9" fill="#4e342e"/>
      <rect x="282" y="348" width="40" height="24" rx="9" fill="#4e342e"/>
      <ellipse cx="140" cy="140" rx="50" ry="64" transform="rotate(-22 140 140)" fill="#bcaaa4"/>
      <path d="M112 84l-16-40 40 22zM170 70l22-36-38 20z" fill="#bcaaa4"/>
      <ellipse cx="106" cy="188" rx="36" ry="26" transform="rotate(-22 106 188)" fill="#8d6e63"/>
      <circle cx="94" cy="194" r="7" fill="#4e342e"/>
      <circle cx="136" cy="124" r="14" fill="#2e2a26"/>
      <circle cx="141" cy="117" r="5" fill="#ffffff"/>
    `
  },
  {
    id: 'goat', name: 'Goat', emoji: '🐐', cat: 'animals',
    svg: `
      <rect width="400" height="400" fill="#ffe9b8"/>
      <circle cx="52" cy="52" r="30" fill="#ff8a65"/>
      <path d="M248 304l70-92 82 92z" fill="#d7c3a0"/>
      <rect y="300" width="400" height="100" fill="#c5a35a"/>
      <ellipse cx="200" cy="312" rx="178" ry="26" fill="#b08f45"/>
      <ellipse cx="348" cy="198" rx="24" ry="17" transform="rotate(-34 348 198)" fill="#eceff1"/>
      <ellipse cx="226" cy="236" rx="112" ry="74" fill="#eceff1"/>
      <rect x="156" y="292" width="38" height="78" rx="15" fill="#cfd8dc"/>
      <rect x="220" y="296" width="38" height="74" rx="15" fill="#eceff1"/>
      <rect x="284" y="292" width="38" height="78" rx="15" fill="#cfd8dc"/>
      <rect x="156" y="350" width="38" height="22" rx="9" fill="#546e7a"/>
      <rect x="220" y="352" width="38" height="20" rx="9" fill="#546e7a"/>
      <rect x="284" y="350" width="38" height="22" rx="9" fill="#546e7a"/>
      <circle cx="126" cy="204" r="70" fill="#f5f5f5"/>
      <path d="M100 142c-26-30-22-66 4-80-6 26 2 50 22 64z" fill="#8d6e63"/>
      <path d="M152 140c22-32 20-66-4-82 8 26 0 52-20 66z" fill="#8d6e63"/>
      <ellipse cx="62" cy="188" rx="34" ry="19" transform="rotate(14 62 188)" fill="#cfd8dc"/>
      <ellipse cx="190" cy="186" rx="34" ry="19" transform="rotate(-14 190 186)" fill="#cfd8dc"/>
      <ellipse cx="112" cy="248" rx="42" ry="30" fill="#ffffff"/>
      <ellipse cx="100" cy="244" rx="7" ry="9" fill="#90a4ae"/>
      <ellipse cx="126" cy="244" rx="7" ry="9" fill="#90a4ae"/>
      <path d="M112 278c6 26 2 44-10 54 20-2 30-24 26-54z" fill="#e0e0e0"/>
      <circle cx="98" cy="194" r="13" fill="#2e2a26"/>
      <circle cx="152" cy="192" r="13" fill="#2e2a26"/>
      <circle cx="102" cy="188" r="4" fill="#ffffff"/>
      <circle cx="156" cy="186" r="4" fill="#ffffff"/>
    `
  },
  {
    id: 'llama', name: 'Llama', emoji: '🦙', cat: 'animals',
    svg: `
      <rect width="400" height="400" fill="#bfe9ff"/>
      <circle cx="340" cy="56" r="30" fill="#ffd54f"/>
      <path d="M0 306l96-128 72 128zM154 306l108-150 138 150z" fill="#a1887f"/>
      <path d="M96 178l34 46H62zM262 156l44 60h-88z" fill="#eceff1"/>
      <rect y="306" width="400" height="94" fill="#c5a35a"/>
      <ellipse cx="200" cy="318" rx="178" ry="26" fill="#b08f45"/>
      <ellipse cx="226" cy="256" rx="110" ry="74" fill="#d7b899"/>
      <rect x="156" y="306" width="38" height="68" rx="15" fill="#bfa184"/>
      <rect x="218" y="310" width="38" height="64" rx="15" fill="#d7b899"/>
      <rect x="282" y="306" width="38" height="68" rx="15" fill="#bfa184"/>
      <path d="M150 240c-26-56-20-110 2-142" fill="none" stroke="#e8cfae" stroke-width="60" stroke-linecap="round"/>
      <rect x="132" y="190" width="100" height="26" rx="13" fill="#e8473c"/>
      <rect x="140" y="222" width="86" height="18" rx="9" fill="#42a5f5"/>
      <circle cx="152" cy="88" r="50" fill="#f5e0c3"/>
      <path d="M118 46l-6-40 32 28zM182 42l10-38-34 26z" fill="#e8cfae"/>
      <ellipse cx="128" cy="116" rx="36" ry="28" fill="#ffffff"/>
      <ellipse cx="116" cy="112" rx="7" ry="9" fill="#a1887f"/>
      <ellipse cx="140" cy="112" rx="7" ry="9" fill="#a1887f"/>
      <path d="M112 136c12 10 30 10 42-2" fill="none" stroke="#a1887f" stroke-width="7" stroke-linecap="round"/>
      <circle cx="130" cy="72" r="12" fill="#2e2a26"/>
      <circle cx="176" cy="70" r="12" fill="#2e2a26"/>
      <circle cx="134" cy="66" r="4" fill="#ffffff"/>
      <circle cx="180" cy="64" r="4" fill="#ffffff"/>
      <circle cx="50" cy="352" r="18" fill="#8d6e63"/>
      <circle cx="362" cy="366" r="20" fill="#8d6e63"/>
    `
  },
  {
    id: 'duck', name: 'Duck', emoji: '🦆', cat: 'birds',
    svg: `
      <rect width="400" height="400" fill="#bfe9ff"/>
      <circle cx="54" cy="52" r="28" fill="#ffd54f"/>
      <ellipse cx="320" cy="58" rx="46" ry="22" fill="#ffffff"/>
      <rect y="258" width="400" height="142" fill="#4fc3f7"/>
      <path d="M0 284c46-18 68 14 112 0s68 14 112 0 66 14 112 0 46 8 64 0v-26H0z" fill="#29b6f6"/>
      <path d="M44 318c22-12 44-12 66 0-22 12-44 12-66 0z" fill="#81d4fa"/>
      <path d="M296 350c22-12 44-12 66 0-22 12-44 12-66 0z" fill="#81d4fa"/>
      <path d="M322 224c34 12 36 56 6 70" fill="none" stroke="#ffca28" stroke-width="22" stroke-linecap="round"/>
      <ellipse cx="216" cy="252" rx="114" ry="70" fill="#ffd54f"/>
      <path d="M232 194c38-6 68 10 84 34-34 12-68 6-84-34z" fill="#ffca28"/>
      <circle cx="130" cy="166" r="66" fill="#ffd54f"/>
      <path d="M68 152c-34 4-50 16-50 28 0 12 16 22 50 24z" fill="#ff9800"/>
      <path d="M22 174h46" fill="none" stroke="#ef6c00" stroke-width="6" stroke-linecap="round"/>
      <circle cx="122" cy="142" r="14" fill="#2e2a26"/>
      <circle cx="127" cy="136" r="5" fill="#ffffff"/>
      <path d="M152 100c18-26 42-30 56-18" fill="none" stroke="#ffca28" stroke-width="16" stroke-linecap="round"/>
    `
  },
  {
    id: 'hen', name: 'Hen', emoji: '🐔', cat: 'birds',
    svg: `
      <rect width="400" height="400" fill="#dff3c4"/>
      <circle cx="54" cy="52" r="28" fill="#ffd54f"/>
      <ellipse cx="322" cy="58" rx="46" ry="22" fill="#ffffff"/>
      <rect y="300" width="400" height="100" fill="#c5a35a"/>
      <ellipse cx="200" cy="312" rx="178" ry="26" fill="#b08f45"/>
      <path d="M286 180l84-46-12 80zM292 216l86-12-42 66z" fill="#a1887f"/>
      <ellipse cx="210" cy="244" rx="112" ry="86" fill="#fafafa"/>
      <ellipse cx="248" cy="252" rx="62" ry="54" fill="#eceff1"/>
      <circle cx="126" cy="158" r="62" fill="#fafafa"/>
      <path d="M108 96c-6-22 8-34 22-28-2-20 22-28 32-12 14-10 30 2 26 20 16 2 20 22 4 32z" fill="#e8473c"/>
      <path d="M68 136l-44 10 44 16z" fill="#ff9800"/>
      <path d="M112 212c-12 22-4 40 14 44-20 10-38-6-32-34z" fill="#e8473c"/>
      <circle cx="104" cy="146" r="13" fill="#2e2a26"/>
      <circle cx="108" cy="140" r="4" fill="#ffffff"/>
      <path d="M176 330v26M200 330v26M248 330v26M272 330v26" fill="none" stroke="#ff9800" stroke-width="13" stroke-linecap="round"/>
      <ellipse cx="60" cy="352" rx="26" ry="15" fill="#fff8e1"/>
      <ellipse cx="104" cy="364" rx="26" ry="15" fill="#fff8e1"/>
    `
  },
  {
    id: 'rabbit', name: 'Rabbit', emoji: '🐰', cat: 'animals',
    svg: `
      <rect width="400" height="400" fill="#dff3c4"/>
      <circle cx="54" cy="52" r="28" fill="#ffd54f"/>
      <ellipse cx="322" cy="58" rx="46" ry="22" fill="#ffffff"/>
      <rect y="306" width="400" height="94" fill="#8bc34a"/>
      <ellipse cx="200" cy="318" rx="178" ry="26" fill="#7cb342"/>
      <circle cx="312" cy="286" r="32" fill="#fafafa"/>
      <ellipse cx="208" cy="268" rx="96" ry="78" fill="#eceff1"/>
      <ellipse cx="208" cy="286" rx="58" ry="56" fill="#fafafa"/>
      <ellipse cx="146" cy="330" rx="42" ry="22" fill="#fafafa"/>
      <ellipse cx="254" cy="332" rx="42" ry="22" fill="#fafafa"/>
      <ellipse cx="148" cy="112" rx="30" ry="76" transform="rotate(-10 148 112)" fill="#eceff1"/>
      <ellipse cx="226" cy="108" rx="30" ry="76" transform="rotate(8 226 108)" fill="#eceff1"/>
      <ellipse cx="150" cy="116" rx="15" ry="52" transform="rotate(-10 150 116)" fill="#f8bbd0"/>
      <ellipse cx="224" cy="112" rx="15" ry="52" transform="rotate(8 224 112)" fill="#f8bbd0"/>
      <circle cx="188" cy="208" r="78" fill="#fafafa"/>
      <circle cx="160" cy="194" r="14" fill="#2e2a26"/>
      <circle cx="218" cy="194" r="14" fill="#2e2a26"/>
      <circle cx="165" cy="188" r="5" fill="#ffffff"/>
      <circle cx="223" cy="188" r="5" fill="#ffffff"/>
      <path d="M188 224l-14 12h28z" fill="#f48fb1"/>
      <path d="M188 238c-8 12-22 10-26 0M188 238c8 12 22 10 26 0" fill="none" stroke="#9e9e9e" stroke-width="7" stroke-linecap="round"/>
      <path d="M110 216H62M110 236l-46 14M266 216h48M266 236l46 14" fill="none" stroke="#bdbdbd" stroke-width="7" stroke-linecap="round"/>
      <path d="M52 330l-20-44 46 12z" fill="#ff9800"/>
      <path d="M78 298l24-28M78 298l34-6" fill="none" stroke="#43a047" stroke-width="11" stroke-linecap="round"/>
    `
  },
  {
    id: 'mouse', name: 'Mouse', emoji: '🐭', cat: 'animals',
    svg: `
      <rect width="400" height="400" fill="#ffe9b8"/>
      <circle cx="52" cy="52" r="28" fill="#ffd54f"/>
      <rect y="306" width="400" height="94" fill="#c5a35a"/>
      <ellipse cx="200" cy="318" rx="178" ry="26" fill="#b08f45"/>
      <path d="M312 268c44 2 52 46 24 62" fill="none" stroke="#f8bbd0" stroke-width="15" stroke-linecap="round"/>
      <ellipse cx="206" cy="262" rx="104" ry="80" fill="#b0bec5"/>
      <ellipse cx="206" cy="286" rx="62" ry="54" fill="#eceff1"/>
      <circle cx="116" cy="138" r="54" fill="#90a4ae"/>
      <circle cx="268" cy="136" r="54" fill="#90a4ae"/>
      <circle cx="116" cy="138" r="32" fill="#f8bbd0"/>
      <circle cx="268" cy="136" r="32" fill="#f8bbd0"/>
      <circle cx="192" cy="192" r="80" fill="#b0bec5"/>
      <circle cx="166" cy="178" r="14" fill="#2e2a26"/>
      <circle cx="222" cy="176" r="14" fill="#2e2a26"/>
      <circle cx="171" cy="172" r="5" fill="#ffffff"/>
      <circle cx="227" cy="170" r="5" fill="#ffffff"/>
      <ellipse cx="194" cy="226" rx="17" ry="13" fill="#ec407a"/>
      <path d="M194 240c-8 12-22 10-26 0M194 240c8 12 22 10 26 0" fill="none" stroke="#607d8b" stroke-width="7" stroke-linecap="round"/>
      <path d="M160 226l-48-10M160 240l-44 16M228 224l48-12M228 240l44 14" fill="none" stroke="#78909c" stroke-width="6" stroke-linecap="round"/>
      <path d="M30 356v-54l56-18v72z" fill="#ffd54f"/>
      <circle cx="48" cy="326" r="9" fill="#ffb300"/>
      <circle cx="70" cy="340" r="7" fill="#ffb300"/>
    `
  },
  {
    id: 'hamster', name: 'Hamster', emoji: '🐹', cat: 'animals',
    svg: `
      <rect width="400" height="400" fill="#dff3c4"/>
      <circle cx="52" cy="52" r="28" fill="#ffd54f"/>
      <ellipse cx="322" cy="58" rx="46" ry="22" fill="#ffffff"/>
      <rect y="310" width="400" height="90" fill="#c5a35a"/>
      <ellipse cx="200" cy="322" rx="178" ry="26" fill="#b08f45"/>
      <ellipse cx="200" cy="242" rx="130" ry="118" fill="#ffcc80"/>
      <circle cx="104" cy="134" r="40" fill="#ffb74d"/>
      <circle cx="296" cy="134" r="40" fill="#ffb74d"/>
      <circle cx="104" cy="134" r="22" fill="#f8bbd0"/>
      <circle cx="296" cy="134" r="22" fill="#f8bbd0"/>
      <ellipse cx="200" cy="286" rx="86" ry="70" fill="#fff3e0"/>
      <ellipse cx="96" cy="258" rx="34" ry="48" fill="#ffb74d"/>
      <ellipse cx="304" cy="258" rx="34" ry="48" fill="#ffb74d"/>
      <circle cx="160" cy="206" r="16" fill="#2e2a26"/>
      <circle cx="240" cy="206" r="16" fill="#2e2a26"/>
      <circle cx="166" cy="199" r="5" fill="#ffffff"/>
      <circle cx="246" cy="199" r="5" fill="#ffffff"/>
      <ellipse cx="200" cy="244" rx="18" ry="13" fill="#ef6c00"/>
      <path d="M200 258c-10 14-26 12-30 0M200 258c10 14 26 12 30 0" fill="none" stroke="#ef6c00" stroke-width="7" stroke-linecap="round"/>
      <path d="M186 272v26M214 272v26" fill="none" stroke="#ffffff" stroke-width="14" stroke-linecap="round"/>
      <circle cx="52" cy="346" r="20" fill="#8d6e63"/>
      <circle cx="356" cy="356" r="22" fill="#8d6e63"/>
    `
  },
  {
    id: 'hedgehog', name: 'Hedgehog', emoji: '🦔', cat: 'animals',
    svg: `
      <rect width="400" height="400" fill="#ffe9b8"/>
      <circle cx="52" cy="52" r="28" fill="#ff8a65"/>
      <rect y="306" width="400" height="94" fill="#8bc34a"/>
      <ellipse cx="200" cy="318" rx="178" ry="26" fill="#7cb342"/>
      <path d="M246 108l26 56-62-12zM300 140l42 42-60 14zM328 200l54 20-50 34zM186 104l6 60-56-28zM124 134l-18 58-50-34z" fill="#5d4037"/>
      <ellipse cx="226" cy="242" rx="128" ry="98" fill="#8d6e63"/>
      <circle cx="170" cy="178" r="30" fill="#6d4c41"/>
      <circle cx="244" cy="162" r="32" fill="#6d4c41"/>
      <circle cx="312" cy="196" r="30" fill="#6d4c41"/>
      <circle cx="330" cy="262" r="28" fill="#6d4c41"/>
      <ellipse cx="112" cy="268" rx="72" ry="62" fill="#ffcc80"/>
      <circle cx="104" cy="200" r="26" fill="#e0b074"/>
      <ellipse cx="46" cy="282" rx="30" ry="24" fill="#ffe0b2"/>
      <circle cx="30" cy="282" r="15" fill="#3e2723"/>
      <circle cx="92" cy="246" r="14" fill="#2e2a26"/>
      <circle cx="152" cy="240" r="14" fill="#2e2a26"/>
      <circle cx="97" cy="240" r="5" fill="#ffffff"/>
      <circle cx="157" cy="234" r="5" fill="#ffffff"/>
      <path d="M86 300c18 14 44 12 56-4" fill="none" stroke="#e08f4a" stroke-width="8" stroke-linecap="round"/>
      <circle cx="334" cy="344" r="20" fill="#e8473c"/>
      <circle cx="364" cy="360" r="16" fill="#ef5350"/>
    `
  },
  {
    id: 'parrot', name: 'Parrot', emoji: '🦜', cat: 'birds',
    svg: `
      <rect width="400" height="400" fill="#2e7d32"/>
      <ellipse cx="60" cy="60" rx="70" ry="34" transform="rotate(-30 60 60)" fill="#43a047"/>
      <ellipse cx="344" cy="92" rx="68" ry="32" transform="rotate(24 344 92)" fill="#43a047"/>
      <ellipse cx="72" cy="330" rx="76" ry="36" transform="rotate(20 72 330)" fill="#388e3c"/>
      <ellipse cx="336" cy="348" rx="70" ry="34" transform="rotate(-18 336 348)" fill="#388e3c"/>
      <rect y="268" width="400" height="26" rx="13" fill="#6d4c41"/>
      <path d="M212 150l56 198-34 10-52-196z" fill="#1e88e5"/>
      <ellipse cx="196" cy="206" rx="78" ry="98" fill="#e8473c"/>
      <ellipse cx="236" cy="212" rx="48" ry="78" fill="#ffca28"/>
      <ellipse cx="146" cy="202" rx="40" ry="72" transform="rotate(-10 146 202)" fill="#1e88e5"/>
      <circle cx="186" cy="110" r="62" fill="#e8473c"/>
      <circle cx="166" cy="98" r="16" fill="#ffffff"/>
      <circle cx="162" cy="100" r="9" fill="#2e2a26"/>
      <path d="M128 110c-36 2-48 22-42 44 10 22 36 20 48 0z" fill="#ffca28"/>
      <path d="M126 134c-18 2-24 12-20 22" fill="none" stroke="#ef6c00" stroke-width="7" stroke-linecap="round"/>
      <path d="M190 48c-6-24 10-38 28-30-16 6-22 18-18 32z" fill="#ffca28"/>
      <path d="M212 54c6-24 26-30 38-16-18 0-28 8-30 22z" fill="#e8473c"/>
      <path d="M178 266v22M214 266v22" fill="none" stroke="#546e7a" stroke-width="14" stroke-linecap="round"/>
    `
  },
  {
    id: 'bear', name: 'Bear', emoji: '🐻', cat: 'animals',
    svg: `
      <rect width="400" height="400" fill="#dff3c4"/>
      <circle cx="52" cy="52" r="28" fill="#ffd54f"/>
      <ellipse cx="322" cy="58" rx="46" ry="22" fill="#ffffff"/>
      <circle cx="350" cy="210" r="46" fill="#43a047"/>
      <rect x="342" y="210" width="16" height="110" fill="#5d4037"/>
      <rect y="310" width="400" height="90" fill="#8bc34a"/>
      <ellipse cx="200" cy="322" rx="178" ry="26" fill="#7cb342"/>
      <ellipse cx="200" cy="268" rx="112" ry="96" fill="#8d6e63"/>
      <ellipse cx="200" cy="288" rx="70" ry="70" fill="#d7b899"/>
      <ellipse cx="108" cy="338" rx="44" ry="24" fill="#6d4c41"/>
      <ellipse cx="292" cy="338" rx="44" ry="24" fill="#6d4c41"/>
      <circle cx="112" cy="124" r="40" fill="#8d6e63"/>
      <circle cx="288" cy="124" r="40" fill="#8d6e63"/>
      <circle cx="112" cy="124" r="21" fill="#a1887f"/>
      <circle cx="288" cy="124" r="21" fill="#a1887f"/>
      <circle cx="200" cy="170" r="88" fill="#a1887f"/>
      <ellipse cx="200" cy="208" rx="54" ry="40" fill="#efe0cc"/>
      <ellipse cx="200" cy="190" rx="22" ry="16" fill="#3e2723"/>
      <path d="M200 206v12M200 218c-9 12-23 10-27 0M200 218c9 12 23 10 27 0" fill="none" stroke="#6d4c41" stroke-width="7" stroke-linecap="round"/>
      <circle cx="166" cy="152" r="15" fill="#2e2a26"/>
      <circle cx="234" cy="152" r="15" fill="#2e2a26"/>
      <circle cx="171" cy="146" r="5" fill="#ffffff"/>
      <circle cx="239" cy="146" r="5" fill="#ffffff"/>
      <path d="M44 360v-44h58v44z" fill="#ffb300"/>
      <rect x="36" y="304" width="74" height="18" rx="6" fill="#ef6c00"/>
    `
  },
  {
    id: 'tiger', name: 'Tiger', emoji: '🐯', cat: 'animals',
    svg: `
      <rect width="400" height="400" fill="#dff3c4"/>
      <circle cx="52" cy="52" r="28" fill="#ffd54f"/>
      <ellipse cx="322" cy="58" rx="46" ry="22" fill="#ffffff"/>
      <rect y="306" width="400" height="94" fill="#8bc34a"/>
      <ellipse cx="200" cy="318" rx="178" ry="26" fill="#7cb342"/>
      <path d="M330 268c40 2 46 44 18 60" fill="none" stroke="#ffa726" stroke-width="22" stroke-linecap="round"/>
      <path d="M344 290v16M356 310v16" fill="none" stroke="#3e2723" stroke-width="12" stroke-linecap="round"/>
      <ellipse cx="214" cy="266" rx="116" ry="80" fill="#ffa726"/>
      <rect x="164" y="196" width="22" height="62" rx="11" fill="#3e2723"/>
      <rect x="210" y="190" width="22" height="56" rx="11" fill="#3e2723"/>
      <rect x="256" y="196" width="22" height="58" rx="11" fill="#3e2723"/>
      <rect x="292" y="228" width="20" height="44" rx="10" fill="#3e2723"/>
      <ellipse cx="214" cy="288" rx="66" ry="54" fill="#fff3e0"/>
      <ellipse cx="140" cy="336" rx="40" ry="22" fill="#ffcc80"/>
      <ellipse cx="268" cy="336" rx="40" ry="22" fill="#ffcc80"/>
      <circle cx="110" cy="120" r="36" fill="#ffa726"/>
      <circle cx="238" cy="120" r="36" fill="#ffa726"/>
      <circle cx="110" cy="120" r="18" fill="#3e2723"/>
      <circle cx="238" cy="120" r="18" fill="#3e2723"/>
      <circle cx="174" cy="166" r="86" fill="#ffb74d"/>
      <path d="M140 96v30M174 88v28M208 96v30" fill="none" stroke="#3e2723" stroke-width="13" stroke-linecap="round"/>
      <path d="M96 150l-6 26M252 150l6 26" fill="none" stroke="#3e2723" stroke-width="13" stroke-linecap="round"/>
      <ellipse cx="174" cy="206" rx="54" ry="38" fill="#fff8e1"/>
      <path d="M174 190l-18 14h36z" fill="#e8473c"/>
      <path d="M174 204v12M174 216c-9 12-23 10-27 0M174 216c9 12 23 10 27 0" fill="none" stroke="#6d4c41" stroke-width="7" stroke-linecap="round"/>
      <circle cx="142" cy="156" r="15" fill="#2e2a26"/>
      <circle cx="206" cy="156" r="15" fill="#2e2a26"/>
      <circle cx="147" cy="150" r="5" fill="#ffffff"/>
      <circle cx="211" cy="150" r="5" fill="#ffffff"/>
    `
  },
  {
    id: 'monkey', name: 'Monkey', emoji: '🐵', cat: 'animals',
    svg: `
      <rect width="400" height="400" fill="#c8e6c9"/>
      <ellipse cx="60" cy="54" rx="74" ry="36" transform="rotate(-24 60 54)" fill="#43a047"/>
      <ellipse cx="348" cy="76" rx="70" ry="34" transform="rotate(20 348 76)" fill="#43a047"/>
      <ellipse cx="66" cy="352" rx="78" ry="38" transform="rotate(18 66 352)" fill="#388e3c"/>
      <rect y="92" width="400" height="24" rx="12" fill="#6d4c41"/>
      <path d="M248 116c40 20 46 70 16 92-22 16-46 2-40-18" fill="none" stroke="#8d6e63" stroke-width="20" stroke-linecap="round"/>
      <ellipse cx="190" cy="266" rx="96" ry="84" fill="#8d6e63"/>
      <ellipse cx="190" cy="282" rx="60" ry="62" fill="#e0c9a6"/>
      <path d="M120 170c-28 16-34 56-14 78" fill="none" stroke="#8d6e63" stroke-width="34" stroke-linecap="round"/>
      <path d="M260 170c28 16 34 56 14 78" fill="none" stroke="#8d6e63" stroke-width="34" stroke-linecap="round"/>
      <ellipse cx="146" cy="340" rx="40" ry="22" fill="#a1887f"/>
      <ellipse cx="234" cy="340" rx="40" ry="22" fill="#a1887f"/>
      <circle cx="104" cy="160" r="38" fill="#8d6e63"/>
      <circle cx="276" cy="160" r="38" fill="#8d6e63"/>
      <circle cx="104" cy="160" r="21" fill="#e0c9a6"/>
      <circle cx="276" cy="160" r="21" fill="#e0c9a6"/>
      <circle cx="190" cy="162" r="82" fill="#a1887f"/>
      <ellipse cx="190" cy="186" rx="60" ry="50" fill="#f0dcc0"/>
      <circle cx="166" cy="144" r="15" fill="#2e2a26"/>
      <circle cx="214" cy="144" r="15" fill="#2e2a26"/>
      <circle cx="171" cy="138" r="5" fill="#ffffff"/>
      <circle cx="219" cy="138" r="5" fill="#ffffff"/>
      <ellipse cx="180" cy="180" rx="6" ry="9" fill="#8d6e63"/>
      <ellipse cx="202" cy="180" rx="6" ry="9" fill="#8d6e63"/>
      <path d="M156 202c22 24 56 24 76 0" fill="none" stroke="#8d6e63" stroke-width="9" stroke-linecap="round"/>
      <path d="M28 282c42-24 70-10 78 16-30 18-62 10-78-16z" fill="#ffd54f"/>
    `
  },
  {
    id: 'giraffe', name: 'Giraffe', emoji: '🦒', cat: 'animals',
    svg: `
      <rect width="400" height="400" fill="#bfe9ff"/>
      <circle cx="54" cy="52" r="28" fill="#ffd54f"/>
      <ellipse cx="320" cy="60" rx="46" ry="22" fill="#ffffff"/>
      <rect y="312" width="400" height="88" fill="#c5a35a"/>
      <ellipse cx="200" cy="324" rx="178" ry="26" fill="#b08f45"/>
      <path d="M328 254c30 12 34 56 14 78" fill="none" stroke="#ffca28" stroke-width="16" stroke-linecap="round"/>
      <circle cx="348" cy="336" r="16" fill="#8d6e63"/>
      <ellipse cx="258" cy="268" rx="102" ry="74" fill="#ffca28"/>
      <rect x="192" y="304" width="38" height="72" rx="15" fill="#ffb300"/>
      <rect x="256" y="308" width="38" height="68" rx="15" fill="#ffca28"/>
      <rect x="312" y="304" width="38" height="72" rx="15" fill="#ffb300"/>
      <path d="M176 288c-24-92-20-170 6-212" fill="none" stroke="#ffca28" stroke-width="56" stroke-linecap="round"/>
      <path d="M212 90c14 42 18 112 10 176" fill="none" stroke="#8d6e63" stroke-width="18" stroke-linecap="round"/>
      <circle cx="166" cy="128" r="17" fill="#a1887f"/>
      <circle cx="176" cy="196" r="17" fill="#a1887f"/>
      <circle cx="188" cy="258" r="17" fill="#a1887f"/>
      <circle cx="226" cy="236" r="20" fill="#a1887f"/>
      <circle cx="286" cy="240" r="22" fill="#a1887f"/>
      <circle cx="312" cy="294" r="20" fill="#a1887f"/>
      <circle cx="238" cy="298" r="19" fill="#a1887f"/>
      <ellipse cx="156" cy="80" rx="54" ry="44" fill="#ffd54f"/>
      <ellipse cx="124" cy="104" rx="34" ry="26" fill="#ffe0b2"/>
      <ellipse cx="114" cy="100" rx="6" ry="8" fill="#a1887f"/>
      <ellipse cx="134" cy="100" rx="6" ry="8" fill="#a1887f"/>
      <ellipse cx="96" cy="60" rx="28" ry="17" transform="rotate(-24 96 60)" fill="#ffca28"/>
      <ellipse cx="204" cy="56" rx="28" ry="17" transform="rotate(20 204 56)" fill="#ffca28"/>
      <path d="M140 38v-22M178 36v-22" fill="none" stroke="#8d6e63" stroke-width="11" stroke-linecap="round"/>
      <circle cx="140" cy="14" r="11" fill="#8d6e63"/>
      <circle cx="178" cy="12" r="11" fill="#8d6e63"/>
      <circle cx="146" cy="68" r="12" fill="#2e2a26"/>
      <circle cx="186" cy="66" r="12" fill="#2e2a26"/>
      <circle cx="150" cy="62" r="4" fill="#ffffff"/>
      <circle cx="190" cy="60" r="4" fill="#ffffff"/>
    `
  },
  {
    id: 'zebra', name: 'Zebra', emoji: '🦓', cat: 'animals',
    svg: `
      <rect width="400" height="400" fill="#ffe9b8"/>
      <circle cx="340" cy="56" r="30" fill="#ff8a65"/>
      <rect y="306" width="400" height="94" fill="#c5a35a"/>
      <ellipse cx="200" cy="318" rx="178" ry="26" fill="#b08f45"/>
      <path d="M334 212c30 20 32 64 12 94" fill="none" stroke="#fafafa" stroke-width="18" stroke-linecap="round"/>
      <circle cx="348" cy="314" r="16" fill="#2e2a26"/>
      <path d="M172 240c-18-48-10-88 16-108" fill="none" stroke="#fafafa" stroke-width="66" stroke-linecap="round"/>
      <path d="M212 126c16 28 16 62 4 92" fill="none" stroke="#2e2a26" stroke-width="30" stroke-linecap="round"/>
      <ellipse cx="230" cy="234" rx="112" ry="74" fill="#fafafa"/>
      <rect x="170" y="176" width="22" height="64" rx="11" fill="#2e2a26"/>
      <rect x="216" y="170" width="22" height="56" rx="11" fill="#2e2a26"/>
      <rect x="260" y="176" width="22" height="62" rx="11" fill="#2e2a26"/>
      <rect x="302" y="200" width="20" height="54" rx="10" fill="#2e2a26"/>
      <rect x="160" y="286" width="40" height="86" rx="16" fill="#eceff1"/>
      <rect x="222" y="290" width="40" height="82" rx="16" fill="#fafafa"/>
      <rect x="286" y="286" width="40" height="86" rx="16" fill="#eceff1"/>
      <rect x="160" y="350" width="40" height="24" rx="9" fill="#2e2a26"/>
      <rect x="222" y="352" width="40" height="22" rx="9" fill="#2e2a26"/>
      <rect x="286" y="350" width="40" height="24" rx="9" fill="#2e2a26"/>
      <ellipse cx="146" cy="144" rx="50" ry="64" transform="rotate(-22 146 144)" fill="#fafafa"/>
      <path d="M118 88l-16-40 40 22zM176 74l22-36-38 20z" fill="#eceff1"/>
      <ellipse cx="110" cy="192" rx="36" ry="26" transform="rotate(-22 110 192)" fill="#2e2a26"/>
      <path d="M162 180l36-10M168 208l38-10M178 234l36-10" fill="none" stroke="#2e2a26" stroke-width="12" stroke-linecap="round"/>
      <circle cx="142" cy="130" r="14" fill="#2e2a26"/>
      <circle cx="147" cy="123" r="5" fill="#ffffff"/>
    `
  },
  {
    id: 'panda', name: 'Panda', emoji: '🐼', cat: 'animals',
    svg: `
      <rect width="400" height="400" fill="#dff3c4"/>
      <circle cx="52" cy="52" r="28" fill="#ffd54f"/>
      <ellipse cx="322" cy="58" rx="46" ry="22" fill="#ffffff"/>
      <rect x="338" y="40" width="18" height="300" fill="#66bb6a"/>
      <path d="M338 120l-54-26 54-14zM356 196l56-26-56-14z" fill="#43a047"/>
      <rect y="314" width="400" height="86" fill="#8bc34a"/>
      <ellipse cx="200" cy="326" rx="178" ry="26" fill="#7cb342"/>
      <ellipse cx="196" cy="274" rx="106" ry="90" fill="#fafafa"/>
      <path d="M96 234c-30 18-36 66-12 92" fill="none" stroke="#2e2a26" stroke-width="42" stroke-linecap="round"/>
      <path d="M296 234c30 18 36 66 12 92" fill="none" stroke="#2e2a26" stroke-width="42" stroke-linecap="round"/>
      <ellipse cx="140" cy="344" rx="42" ry="24" fill="#2e2a26"/>
      <ellipse cx="252" cy="344" rx="42" ry="24" fill="#2e2a26"/>
      <circle cx="116" cy="118" r="38" fill="#2e2a26"/>
      <circle cx="276" cy="118" r="38" fill="#2e2a26"/>
      <circle cx="196" cy="168" r="88" fill="#fafafa"/>
      <ellipse cx="156" cy="152" rx="32" ry="38" transform="rotate(-18 156 152)" fill="#2e2a26"/>
      <ellipse cx="236" cy="152" rx="32" ry="38" transform="rotate(18 236 152)" fill="#2e2a26"/>
      <circle cx="158" cy="154" r="14" fill="#fafafa"/>
      <circle cx="234" cy="154" r="14" fill="#fafafa"/>
      <circle cx="158" cy="154" r="8" fill="#2e2a26"/>
      <circle cx="234" cy="154" r="8" fill="#2e2a26"/>
      <ellipse cx="196" cy="204" rx="22" ry="15" fill="#2e2a26"/>
      <path d="M196 220c-10 12-24 10-28 0M196 220c10 12 24 10 28 0" fill="none" stroke="#2e2a26" stroke-width="7" stroke-linecap="round"/>
      <rect x="24" y="250" width="16" height="110" fill="#66bb6a"/>
      <path d="M40 286l50-24-50-14z" fill="#43a047"/>
    `
  },
  {
    id: 'fox', name: 'Fox', emoji: '🦊', cat: 'animals',
    svg: `
      <rect width="400" height="400" fill="#cfe9ff"/>
      <circle cx="54" cy="52" r="28" fill="#ffd54f"/>
      <ellipse cx="322" cy="58" rx="46" ry="22" fill="#ffffff"/>
      <rect y="308" width="400" height="92" fill="#c5e1a5"/>
      <ellipse cx="200" cy="320" rx="178" ry="26" fill="#aed581"/>
      <path d="M300 246c62-8 80 46 46 84" fill="none" stroke="#ef6c00" stroke-width="54" stroke-linecap="round"/>
      <circle cx="330" cy="334" r="28" fill="#fafafa"/>
      <ellipse cx="200" cy="272" rx="104" ry="80" fill="#f4511e"/>
      <ellipse cx="200" cy="292" rx="62" ry="58" fill="#fafafa"/>
      <ellipse cx="132" cy="338" rx="40" ry="22" fill="#5d4037"/>
      <ellipse cx="268" cy="338" rx="40" ry="22" fill="#5d4037"/>
      <path d="M126 148l-14-82 78 42z" fill="#f4511e"/>
      <path d="M274 148l14-82-78 42z" fill="#f4511e"/>
      <path d="M134 140l-8-46 44 24z" fill="#5d4037"/>
      <path d="M266 140l8-46-44 24z" fill="#5d4037"/>
      <circle cx="200" cy="176" r="84" fill="#f4511e"/>
      <path d="M200 112c-44 0-66 36-66 74 0 26 30 48 66 48s66-22 66-48c0-38-22-74-66-74z" fill="#fafafa"/>
      <path d="M200 160c-26 0-40 22-40 46 0 18 18 32 40 32s40-14 40-32c0-24-14-46-40-46z" fill="#fff3e0"/>
      <ellipse cx="200" cy="222" rx="19" ry="15" fill="#2e2a26"/>
      <path d="M200 238v10M200 248c-9 10-21 8-25 0M200 248c9 10 21 8 25 0" fill="none" stroke="#8d6e63" stroke-width="6" stroke-linecap="round"/>
      <circle cx="164" cy="166" r="15" fill="#2e2a26"/>
      <circle cx="236" cy="166" r="15" fill="#2e2a26"/>
      <circle cx="169" cy="160" r="5" fill="#ffffff"/>
      <circle cx="241" cy="160" r="5" fill="#ffffff"/>
    `
  },
  {
    id: 'deer', name: 'Deer', emoji: '🦌', cat: 'animals',
    svg: `
      <rect width="400" height="400" fill="#cfe9ff"/>
      <circle cx="54" cy="52" r="28" fill="#ffd54f"/>
      <ellipse cx="322" cy="58" rx="46" ry="22" fill="#ffffff"/>
      <rect y="308" width="400" height="92" fill="#8bc34a"/>
      <ellipse cx="200" cy="320" rx="178" ry="26" fill="#7cb342"/>
      <ellipse cx="340" cy="238" rx="24" ry="20" fill="#fafafa"/>
      <ellipse cx="236" cy="252" rx="106" ry="72" fill="#bf8e5a"/>
      <circle cx="206" cy="226" r="13" fill="#f5e0c3"/>
      <circle cx="256" cy="240" r="13" fill="#f5e0c3"/>
      <circle cx="298" cy="226" r="12" fill="#f5e0c3"/>
      <circle cx="232" cy="276" r="12" fill="#f5e0c3"/>
      <circle cx="286" cy="280" r="11" fill="#f5e0c3"/>
      <rect x="166" y="302" width="34" height="76" rx="14" fill="#a1764a"/>
      <rect x="228" y="306" width="34" height="72" rx="14" fill="#bf8e5a"/>
      <rect x="290" y="302" width="34" height="76" rx="14" fill="#a1764a"/>
      <rect x="166" y="358" width="34" height="22" rx="8" fill="#4e342e"/>
      <rect x="228" y="360" width="34" height="20" rx="8" fill="#4e342e"/>
      <rect x="290" y="358" width="34" height="22" rx="8" fill="#4e342e"/>
      <path d="M160 254c-18-48-8-90 16-112" fill="none" stroke="#bf8e5a" stroke-width="56" stroke-linecap="round"/>
      <path d="M116 112c-20-28-18-54 0-70M116 72l-34-16M126 96l32-26M94 70l-26 14" fill="none" stroke="#8d6e63" stroke-width="13" stroke-linecap="round"/>
      <path d="M186 102c18-26 18-50 2-66M190 64l32-18M180 88l-30-26M206 62l26 16" fill="none" stroke="#8d6e63" stroke-width="13" stroke-linecap="round"/>
      <ellipse cx="150" cy="156" rx="52" ry="60" fill="#d4a373"/>
      <ellipse cx="96" cy="140" rx="28" ry="19" transform="rotate(-24 96 140)" fill="#bf8e5a"/>
      <ellipse cx="204" cy="134" rx="28" ry="19" transform="rotate(22 204 134)" fill="#bf8e5a"/>
      <ellipse cx="136" cy="196" rx="38" ry="28" fill="#f5e0c3"/>
      <ellipse cx="130" cy="190" rx="16" ry="12" fill="#4e342e"/>
      <circle cx="126" cy="146" r="14" fill="#2e2a26"/>
      <circle cx="178" cy="142" r="14" fill="#2e2a26"/>
      <circle cx="131" cy="140" r="5" fill="#ffffff"/>
      <circle cx="183" cy="136" r="5" fill="#ffffff"/>
    `
  },
  {
    id: 'koala', name: 'Koala', emoji: '🐨', cat: 'animals',
    svg: `
      <rect width="400" height="400" fill="#dff3c4"/>
      <circle cx="52" cy="52" r="28" fill="#ffd54f"/>
      <ellipse cx="322" cy="58" rx="46" ry="22" fill="#ffffff"/>
      <rect x="32" y="0" width="46" height="400" fill="#8d6e63"/>
      <path d="M78 110l64-30-10 54zM78 230l66 26-62 24z" fill="#6d4c41"/>
      <ellipse cx="142" cy="78" rx="46" ry="24" transform="rotate(-20 142 78)" fill="#43a047"/>
      <ellipse cx="128" cy="268" rx="46" ry="24" transform="rotate(16 128 268)" fill="#43a047"/>
      <ellipse cx="232" cy="276" rx="100" ry="90" fill="#90a4ae"/>
      <ellipse cx="232" cy="294" rx="60" ry="64" fill="#cfd8dc"/>
      <path d="M140 250c-28 14-34 60-10 86" fill="none" stroke="#78909c" stroke-width="38" stroke-linecap="round"/>
      <ellipse cx="184" cy="352" rx="40" ry="22" fill="#78909c"/>
      <ellipse cx="282" cy="352" rx="40" ry="22" fill="#78909c"/>
      <circle cx="146" cy="138" r="54" fill="#90a4ae"/>
      <circle cx="318" cy="138" r="54" fill="#90a4ae"/>
      <circle cx="146" cy="138" r="32" fill="#eceff1"/>
      <circle cx="318" cy="138" r="32" fill="#eceff1"/>
      <circle cx="232" cy="168" r="86" fill="#b0bec5"/>
      <ellipse cx="232" cy="198" rx="40" ry="34" fill="#37474f"/>
      <circle cx="200" cy="150" r="15" fill="#2e2a26"/>
      <circle cx="264" cy="150" r="15" fill="#2e2a26"/>
      <circle cx="205" cy="144" r="5" fill="#ffffff"/>
      <circle cx="269" cy="144" r="5" fill="#ffffff"/>
      <path d="M204 236c16 14 42 14 58 0" fill="none" stroke="#546e7a" stroke-width="8" stroke-linecap="round"/>
    `
  },
  {
    id: 'kangaroo', name: 'Kangaroo', emoji: '🦘', cat: 'animals',
    svg: `
      <rect width="400" height="400" fill="#ffe9b8"/>
      <circle cx="340" cy="56" r="30" fill="#ff8a65"/>
      <rect y="312" width="400" height="88" fill="#c5a35a"/>
      <ellipse cx="200" cy="324" rx="178" ry="26" fill="#b08f45"/>
      <path d="M268 272c48 10 76 44 84 76" fill="none" stroke="#a1764a" stroke-width="34" stroke-linecap="round"/>
      <ellipse cx="206" cy="256" rx="90" ry="100" fill="#bf8e5a"/>
      <ellipse cx="192" cy="286" rx="54" ry="58" fill="#e0bb90"/>
      <path d="M186 326c-22 24-22 40-6 48" fill="none" stroke="#a1764a" stroke-width="40" stroke-linecap="round"/>
      <path d="M160 352h92" fill="none" stroke="#8d6e63" stroke-width="26" stroke-linecap="round"/>
      <path d="M238 198c26 10 40 32 40 58" fill="none" stroke="#bf8e5a" stroke-width="28" stroke-linecap="round"/>
      <path d="M160 194c-24 12-34 32-32 56" fill="none" stroke="#bf8e5a" stroke-width="28" stroke-linecap="round"/>
      <ellipse cx="184" cy="122" rx="60" ry="54" fill="#d4a373"/>
      <ellipse cx="146" cy="52" rx="22" ry="48" transform="rotate(-16 146 52)" fill="#bf8e5a"/>
      <ellipse cx="226" cy="50" rx="22" ry="48" transform="rotate(14 226 50)" fill="#bf8e5a"/>
      <ellipse cx="146" cy="56" rx="11" ry="32" transform="rotate(-16 146 56)" fill="#f8bbd0"/>
      <ellipse cx="226" cy="54" rx="11" ry="32" transform="rotate(14 226 54)" fill="#f8bbd0"/>
      <ellipse cx="146" cy="150" rx="40" ry="28" transform="rotate(-10 146 150)" fill="#f5e0c3"/>
      <ellipse cx="124" cy="150" rx="13" ry="10" fill="#4e342e"/>
      <circle cx="160" cy="110" r="14" fill="#2e2a26"/>
      <circle cx="212" cy="108" r="14" fill="#2e2a26"/>
      <circle cx="165" cy="104" r="5" fill="#ffffff"/>
      <circle cx="217" cy="102" r="5" fill="#ffffff"/>
      <circle cx="196" cy="284" r="30" fill="#d4a373"/>
      <circle cx="188" cy="278" r="7" fill="#2e2a26"/>
      <circle cx="208" cy="276" r="7" fill="#2e2a26"/>
      <ellipse cx="198" cy="296" rx="10" ry="7" fill="#8d6e63"/>
    `
  },
  {
    id: 'raccoon', name: 'Raccoon', emoji: '🦝', cat: 'animals',
    svg: `
      <rect width="400" height="400" fill="#1b2a63"/>
      <circle cx="326" cy="62" r="36" fill="#fff9c4"/>
      <circle cx="56" cy="50" r="8" fill="#ffe082"/>
      <circle cx="120" cy="96" r="6" fill="#ffe082"/>
      <circle cx="40" cy="166" r="6" fill="#ffe082"/>
      <circle cx="368" cy="186" r="6" fill="#ffe082"/>
      <rect y="318" width="400" height="82" fill="#2e4a2e"/>
      <ellipse cx="200" cy="330" rx="178" ry="26" fill="#3d5f3d"/>
      <path d="M312 268c48 6 58 50 26 82" fill="none" stroke="#b0bec5" stroke-width="38" stroke-linecap="round"/>
      <path d="M332 282l6 18M342 314l4 20M330 344l-2 16" fill="none" stroke="#37474f" stroke-width="20" stroke-linecap="round"/>
      <ellipse cx="200" cy="272" rx="102" ry="82" fill="#90a4ae"/>
      <ellipse cx="200" cy="292" rx="60" ry="56" fill="#eceff1"/>
      <ellipse cx="136" cy="344" rx="40" ry="22" fill="#546e7a"/>
      <ellipse cx="264" cy="344" rx="40" ry="22" fill="#546e7a"/>
      <path d="M124 120l-10-56 60 34z" fill="#90a4ae"/>
      <path d="M276 120l10-56-60 34z" fill="#90a4ae"/>
      <path d="M132 118l-6-32 34 20z" fill="#546e7a"/>
      <path d="M268 118l6-32-34 20z" fill="#546e7a"/>
      <circle cx="200" cy="172" r="84" fill="#b0bec5"/>
      <path d="M200 142c-20-18-54-16-66 8-12 24 6 46 30 46 20 0 32-18 36-54z" fill="#263238"/>
      <path d="M200 142c20-18 54-16 66 8 12 24-6 46-30 46-20 0-32-18-36-54z" fill="#263238"/>
      <circle cx="166" cy="170" r="14" fill="#fafafa"/>
      <circle cx="234" cy="170" r="14" fill="#fafafa"/>
      <circle cx="166" cy="170" r="8" fill="#2e2a26"/>
      <circle cx="234" cy="170" r="8" fill="#2e2a26"/>
      <ellipse cx="200" cy="216" rx="34" ry="26" fill="#eceff1"/>
      <ellipse cx="200" cy="206" rx="16" ry="12" fill="#2e2a26"/>
      <path d="M200 220c-8 10-20 8-24 0M200 220c8 10 20 8 24 0" fill="none" stroke="#78909c" stroke-width="6" stroke-linecap="round"/>
    `
  },
  {
    id: 'squirrel', name: 'Squirrel', emoji: '🐿️', cat: 'animals',
    svg: `
      <rect width="400" height="400" fill="#dff3c4"/>
      <circle cx="52" cy="52" r="28" fill="#ffd54f"/>
      <ellipse cx="322" cy="58" rx="46" ry="22" fill="#ffffff"/>
      <rect y="312" width="400" height="88" fill="#8bc34a"/>
      <ellipse cx="200" cy="324" rx="178" ry="26" fill="#7cb342"/>
      <path d="M296 320c-10-70 10-120 44-136-54-6-96 46-92 136z" fill="#bf8e5a"/>
      <path d="M300 310c-6-58 10-98 36-112-42-4-74 38-70 112z" fill="#e0bb90"/>
      <ellipse cx="202" cy="260" rx="86" ry="92" fill="#bf8e5a"/>
      <ellipse cx="190" cy="288" rx="52" ry="58" fill="#f5e0c3"/>
      <ellipse cx="156" cy="352" rx="38" ry="20" fill="#a1764a"/>
      <ellipse cx="236" cy="352" rx="38" ry="20" fill="#a1764a"/>
      <path d="M172 248c-20 10-26 32-18 50" fill="none" stroke="#bf8e5a" stroke-width="26" stroke-linecap="round"/>
      <path d="M232 248c20 10 26 32 18 50" fill="none" stroke="#bf8e5a" stroke-width="26" stroke-linecap="round"/>
      <path d="M132 112l-8-50 50 32z" fill="#bf8e5a"/>
      <path d="M248 108l10-48-50 30z" fill="#bf8e5a"/>
      <circle cx="192" cy="158" r="76" fill="#d4a373"/>
      <ellipse cx="192" cy="190" rx="44" ry="32" fill="#f5e0c3"/>
      <ellipse cx="192" cy="178" rx="15" ry="11" fill="#4e342e"/>
      <path d="M192 192v10M192 202c-8 10-20 8-24 0M192 202c8 10 20 8 24 0" fill="none" stroke="#8d6e63" stroke-width="6" stroke-linecap="round"/>
      <path d="M182 214v16M202 214v16" fill="none" stroke="#ffffff" stroke-width="12" stroke-linecap="round"/>
      <circle cx="160" cy="146" r="14" fill="#2e2a26"/>
      <circle cx="224" cy="146" r="14" fill="#2e2a26"/>
      <circle cx="165" cy="140" r="5" fill="#ffffff"/>
      <circle cx="229" cy="140" r="5" fill="#ffffff"/>
      <ellipse cx="70" cy="326" rx="34" ry="40" fill="#a1764a"/>
      <path d="M36 300c0-18 16-28 34-28s34 10 34 28z" fill="#6d4c41"/>
      <rect x="62" y="258" width="16" height="22" rx="8" fill="#6d4c41"/>
    `
  },
  {
    id: 'flamingo', name: 'Flamingo', emoji: '🦩', cat: 'birds',
    svg: `
      <rect width="400" height="400" fill="#bfe9ff"/>
      <circle cx="54" cy="52" r="28" fill="#ffd54f"/>
      <ellipse cx="322" cy="58" rx="46" ry="22" fill="#ffffff"/>
      <rect y="290" width="400" height="110" fill="#4fc3f7"/>
      <path d="M0 316c46-18 68 14 112 0s68 14 112 0 66 14 112 0 46 8 64 0v-26H0z" fill="#29b6f6"/>
      <path d="M44 350c22-12 44-12 66 0-22 12-44 12-66 0z" fill="#81d4fa"/>
      <path d="M316 372c22-12 44-12 66 0-22 12-44 12-66 0z" fill="#81d4fa"/>
      <path d="M222 274v62" fill="none" stroke="#f06292" stroke-width="18" stroke-linecap="round"/>
      <path d="M222 322l-36 26" fill="none" stroke="#f06292" stroke-width="16" stroke-linecap="round"/>
      <ellipse cx="236" cy="226" rx="104" ry="72" fill="#f48fb1"/>
      <ellipse cx="268" cy="230" rx="62" ry="48" fill="#f06292"/>
      <path d="M322 182l56-28-18 62z" fill="#ec407a"/>
      <path d="M190 198c-44-28-56-72-34-104 22-32 66-26 78 4" fill="none" stroke="#f48fb1" stroke-width="34" stroke-linecap="round"/>
      <circle cx="240" cy="104" r="40" fill="#f48fb1"/>
      <path d="M272 92c34 0 52 14 52 30 0 14-18 24-52 22z" fill="#2e2a26"/>
      <path d="M278 102c22 0 32 8 32 18" fill="none" stroke="#fafafa" stroke-width="7" stroke-linecap="round"/>
      <circle cx="248" cy="90" r="13" fill="#2e2a26"/>
      <circle cx="253" cy="84" r="5" fill="#ffffff"/>
    `
  },
  {
    id: 'peacock', name: 'Peacock', emoji: '🦚', cat: 'birds',
    svg: `
      <rect width="400" height="400" fill="#dff3c4"/>
      <circle cx="52" cy="48" r="26" fill="#ffd54f"/>
      <rect y="330" width="400" height="70" fill="#8bc34a"/>
      <ellipse cx="200" cy="342" rx="178" ry="24" fill="#7cb342"/>
      <path d="M200 300L36 196M200 300L58 118M200 300L130 48M200 300v-96M200 300L270 48M200 300L342 118M200 300L364 196" fill="none" stroke="#2e7d32" stroke-width="12" stroke-linecap="round"/>
      <ellipse cx="36" cy="196" rx="40" ry="30" transform="rotate(32 36 196)" fill="#43a047"/>
      <ellipse cx="58" cy="118" rx="40" ry="30" transform="rotate(50 58 118)" fill="#43a047"/>
      <ellipse cx="130" cy="48" rx="40" ry="30" transform="rotate(74 130 48)" fill="#43a047"/>
      <ellipse cx="200" cy="30" rx="30" ry="40" fill="#43a047"/>
      <ellipse cx="270" cy="48" rx="40" ry="30" transform="rotate(-74 270 48)" fill="#43a047"/>
      <ellipse cx="342" cy="118" rx="40" ry="30" transform="rotate(-50 342 118)" fill="#43a047"/>
      <ellipse cx="364" cy="196" rx="40" ry="30" transform="rotate(-32 364 196)" fill="#43a047"/>
      <circle cx="36" cy="196" r="18" fill="#1e88e5"/>
      <circle cx="58" cy="118" r="18" fill="#1e88e5"/>
      <circle cx="130" cy="48" r="18" fill="#1e88e5"/>
      <circle cx="200" cy="30" r="18" fill="#1e88e5"/>
      <circle cx="270" cy="48" r="18" fill="#1e88e5"/>
      <circle cx="342" cy="118" r="18" fill="#1e88e5"/>
      <circle cx="364" cy="196" r="18" fill="#1e88e5"/>
      <circle cx="36" cy="196" r="8" fill="#ffd54f"/>
      <circle cx="130" cy="48" r="8" fill="#ffd54f"/>
      <circle cx="200" cy="30" r="8" fill="#ffd54f"/>
      <circle cx="270" cy="48" r="8" fill="#ffd54f"/>
      <circle cx="364" cy="196" r="8" fill="#ffd54f"/>
      <ellipse cx="200" cy="296" rx="62" ry="68" fill="#1565c0"/>
      <path d="M176 352v22M224 352v22" fill="none" stroke="#ff9800" stroke-width="13" stroke-linecap="round"/>
      <circle cx="200" cy="200" r="46" fill="#1e88e5"/>
      <path d="M200 142v-26M182 150l-14-26M218 150l14-26" fill="none" stroke="#1565c0" stroke-width="8" stroke-linecap="round"/>
      <circle cx="200" cy="112" r="10" fill="#1565c0"/>
      <circle cx="166" cy="118" r="9" fill="#1565c0"/>
      <circle cx="234" cy="118" r="9" fill="#1565c0"/>
      <path d="M200 206l-36 12 36 14z" fill="#ffca28"/>
      <circle cx="184" cy="190" r="11" fill="#fafafa"/>
      <circle cx="182" cy="190" r="6" fill="#2e2a26"/>
    `
  },
  {
    id: 'swan', name: 'Swan', emoji: '🦢', cat: 'birds',
    svg: `
      <rect width="400" height="400" fill="#bfe9ff"/>
      <circle cx="54" cy="52" r="28" fill="#ffd54f"/>
      <ellipse cx="322" cy="58" rx="46" ry="22" fill="#ffffff"/>
      <ellipse cx="282" cy="70" rx="32" ry="17" fill="#ffffff"/>
      <rect y="262" width="400" height="138" fill="#4fc3f7"/>
      <path d="M0 288c46-18 68 14 112 0s68 14 112 0 66 14 112 0 46 8 64 0v-26H0z" fill="#29b6f6"/>
      <path d="M44 330c22-12 44-12 66 0-22 12-44 12-66 0z" fill="#81d4fa"/>
      <path d="M310 356c22-12 44-12 66 0-22 12-44 12-66 0z" fill="#81d4fa"/>
      <ellipse cx="226" cy="258" rx="118" ry="70" fill="#fafafa"/>
      <path d="M232 196c44-10 78 8 94 38-40 14-78 6-94-38z" fill="#eceff1"/>
      <path d="M160 252c-38-50-32-108-2-134 26-22 60-10 66 16" fill="none" stroke="#fafafa" stroke-width="40" stroke-linecap="round"/>
      <circle cx="222" cy="128" r="36" fill="#fafafa"/>
      <path d="M250 118c32-2 46 10 46 22 0 12-16 20-46 18z" fill="#ff9800"/>
      <path d="M248 112c8-6 18-6 24 0-8 6-18 6-24 0z" fill="#3e2723"/>
      <circle cx="232" cy="118" r="11" fill="#2e2a26"/>
      <circle cx="236" cy="113" r="4" fill="#ffffff"/>
    `
  },
  {
    id: 'toucan', name: 'Toucan', emoji: '🐦', cat: 'birds',
    svg: `
      <rect width="400" height="400" fill="#2e7d32"/>
      <ellipse cx="54" cy="56" rx="72" ry="34" transform="rotate(-28 54 56)" fill="#43a047"/>
      <ellipse cx="350" cy="100" rx="68" ry="32" transform="rotate(22 350 100)" fill="#43a047"/>
      <ellipse cx="62" cy="344" rx="78" ry="36" transform="rotate(18 62 344)" fill="#388e3c"/>
      <ellipse cx="344" cy="352" rx="70" ry="34" transform="rotate(-16 344 352)" fill="#388e3c"/>
      <rect y="286" width="400" height="26" rx="13" fill="#6d4c41"/>
      <path d="M254 176l54 170-34 12-50-170z" fill="#263238"/>
      <ellipse cx="222" cy="214" rx="86" ry="100" fill="#263238"/>
      <ellipse cx="252" cy="222" rx="54" ry="76" fill="#37474f"/>
      <circle cx="202" cy="124" r="68" fill="#263238"/>
      <path d="M198 92c-30 2-58 10-78 24-26 18-24 44 6 56 28 12 60 2 76-24z" fill="#ff9800"/>
      <path d="M190 100c-26 2-50 10-66 20" fill="none" stroke="#ffca28" stroke-width="12" stroke-linecap="round"/>
      <path d="M126 150c22 10 50 6 66-12" fill="none" stroke="#e65100" stroke-width="10" stroke-linecap="round"/>
      <ellipse cx="206" cy="104" rx="26" ry="22" fill="#ffffff"/>
      <circle cx="206" cy="104" r="14" fill="#2e2a26"/>
      <circle cx="211" cy="98" r="5" fill="#ffffff"/>
      <ellipse cx="226" cy="268" rx="56" ry="34" fill="#f5f5f5"/>
      <path d="M198 284v22M238 284v22" fill="none" stroke="#90a4ae" stroke-width="14" stroke-linecap="round"/>
      <path d="M296 322l24 56-36-10z" fill="#e8473c"/>
    `
  },
  {
    id: 'ladybird', name: 'Ladybird', emoji: '🐞', cat: 'bugs',
    svg: `
      <rect width="400" height="400" fill="#bfe9ff"/>
      <circle cx="52" cy="50" r="28" fill="#ffd54f"/>
      <ellipse cx="322" cy="58" rx="46" ry="22" fill="#ffffff"/>
      <path d="M0 400c20-118 96-186 200-186s180 68 200 186z" fill="#66bb6a"/>
      <path d="M200 214c-56 60-74 120-62 186h124c12-66-6-126-62-186z" fill="#43a047"/>
      <ellipse cx="200" cy="240" rx="132" ry="118" fill="#e8473c"/>
      <rect x="188" y="130" width="24" height="216" rx="12" fill="#2e2a26"/>
      <circle cx="132" cy="186" r="25" fill="#2e2a26"/>
      <circle cx="268" cy="186" r="25" fill="#2e2a26"/>
      <circle cx="108" cy="266" r="23" fill="#2e2a26"/>
      <circle cx="292" cy="266" r="23" fill="#2e2a26"/>
      <circle cx="150" cy="320" r="20" fill="#2e2a26"/>
      <circle cx="250" cy="320" r="20" fill="#2e2a26"/>
      <path d="M200 140c-48 0-82 26-82 58h164c0-32-34-58-82-58z" fill="#2e2a26"/>
      <path d="M152 108c-14-26-34-36-56-32M248 108c14-26 34-36 56-32" fill="none" stroke="#2e2a26" stroke-width="11" stroke-linecap="round"/>
      <circle cx="90" cy="72" r="15" fill="#2e2a26"/>
      <circle cx="310" cy="72" r="15" fill="#2e2a26"/>
      <circle cx="166" cy="166" r="17" fill="#ffffff"/>
      <circle cx="234" cy="166" r="17" fill="#ffffff"/>
      <circle cx="166" cy="168" r="9" fill="#2e2a26"/>
      <circle cx="234" cy="168" r="9" fill="#2e2a26"/>
    `
  },
  {
    id: 'snail', name: 'Snail', emoji: '🐌', cat: 'bugs',
    svg: `
      <rect width="400" height="400" fill="#dff3c4"/>
      <circle cx="52" cy="50" r="28" fill="#ffd54f"/>
      <ellipse cx="322" cy="58" rx="46" ry="22" fill="#ffffff"/>
      <rect y="314" width="400" height="86" fill="#8bc34a"/>
      <ellipse cx="200" cy="326" rx="178" ry="26" fill="#7cb342"/>
      <path d="M40 318c-14-18-6-40 16-44h252c30 0 30 44 0 44z" fill="#ffca28"/>
      <ellipse cx="46" cy="300" rx="32" ry="30" fill="#ffca28"/>
      <circle cx="236" cy="216" r="112" fill="#8d6e63"/>
      <circle cx="236" cy="216" r="88" fill="#ffb300"/>
      <circle cx="236" cy="216" r="66" fill="#8d6e63"/>
      <circle cx="236" cy="216" r="44" fill="#ffb300"/>
      <circle cx="236" cy="216" r="22" fill="#8d6e63"/>
      <path d="M46 272c-10-40-2-72 16-88M70 268c6-38 22-62 44-72" fill="none" stroke="#ffca28" stroke-width="15" stroke-linecap="round"/>
      <circle cx="60" cy="172" r="21" fill="#ffca28"/>
      <circle cx="118" cy="188" r="21" fill="#ffca28"/>
      <circle cx="58" cy="170" r="10" fill="#2e2a26"/>
      <circle cx="118" cy="186" r="10" fill="#2e2a26"/>
      <path d="M34 306c14 10 32 8 42-6" fill="none" stroke="#e8a33d" stroke-width="8" stroke-linecap="round"/>
      <circle cx="356" cy="356" r="18" fill="#7cb342"/>
    `
  },
  {
    id: 'dragonfly', name: 'Dragonfly', emoji: '🪰', cat: 'bugs',
    svg: `
      <rect width="400" height="400" fill="#cfe9ff"/>
      <circle cx="52" cy="50" r="28" fill="#ffd54f"/>
      <ellipse cx="322" cy="58" rx="46" ry="22" fill="#ffffff"/>
      <rect y="328" width="400" height="72" fill="#4fc3f7"/>
      <path d="M0 348c46-16 68 12 112 0s68 12 112 0 66 12 112 0 46 6 64 0v-20H0z" fill="#29b6f6"/>
      <path d="M60 330c-14-56 8-96 2-132 24 42-4 80 14 132z" fill="#2e9e5b"/>
      <path d="M344 330c16-60-22-92-4-140-30 44 0 84-20 140z" fill="#2e9e5b"/>
      <ellipse cx="116" cy="146" rx="84" ry="34" transform="rotate(-18 116 146)" fill="#b3e5fc" stroke="#4fc3f7" stroke-width="7"/>
      <ellipse cx="284" cy="146" rx="84" ry="34" transform="rotate(18 284 146)" fill="#b3e5fc" stroke="#4fc3f7" stroke-width="7"/>
      <ellipse cx="124" cy="232" rx="72" ry="28" transform="rotate(16 124 232)" fill="#b3e5fc" stroke="#4fc3f7" stroke-width="7"/>
      <ellipse cx="276" cy="232" rx="72" ry="28" transform="rotate(-16 276 232)" fill="#b3e5fc" stroke="#4fc3f7" stroke-width="7"/>
      <rect x="180" y="128" width="40" height="212" rx="20" fill="#43a047"/>
      <rect x="180" y="176" width="40" height="14" fill="#2e7d32"/>
      <rect x="180" y="216" width="40" height="14" fill="#2e7d32"/>
      <rect x="180" y="256" width="40" height="14" fill="#2e7d32"/>
      <rect x="180" y="296" width="40" height="14" fill="#2e7d32"/>
      <circle cx="200" cy="106" r="54" fill="#66bb6a"/>
      <circle cx="172" cy="92" r="24" fill="#2e2a26"/>
      <circle cx="228" cy="92" r="24" fill="#2e2a26"/>
      <circle cx="166" cy="84" r="8" fill="#ffffff"/>
      <circle cx="222" cy="84" r="8" fill="#ffffff"/>
      <path d="M180 44c-6-22 4-34 20-30M220 44c6-22-4-34-20-30" fill="none" stroke="#2e7d32" stroke-width="8" stroke-linecap="round"/>
    `
  },
  {
    id: 'caterpillar', name: 'Caterpillar', emoji: '🐛', cat: 'bugs',
    svg: `
      <rect width="400" height="400" fill="#bfe9ff"/>
      <circle cx="52" cy="50" r="28" fill="#ffd54f"/>
      <ellipse cx="322" cy="58" rx="46" ry="22" fill="#ffffff"/>
      <path d="M0 400c0-96 90-166 200-166s200 70 200 166z" fill="#66bb6a"/>
      <path d="M200 234c-62 56-82 110-70 166h140c12-56-8-110-70-166z" fill="#43a047"/>
      <path d="M118 300v30M174 284v32M226 284v32M282 300v30" fill="none" stroke="#2e7d32" stroke-width="14" stroke-linecap="round"/>
      <circle cx="330" cy="236" r="52" fill="#7cb342"/>
      <circle cx="258" cy="212" r="56" fill="#8bc34a"/>
      <circle cx="184" cy="226" r="54" fill="#7cb342"/>
      <circle cx="118" cy="252" r="48" fill="#8bc34a"/>
      <circle cx="330" cy="236" r="24" fill="#aed581"/>
      <circle cx="258" cy="212" r="26" fill="#aed581"/>
      <circle cx="184" cy="226" r="24" fill="#aed581"/>
      <circle cx="68" cy="186" r="70" fill="#ffca28"/>
      <path d="M44 120c-12-28-4-48 14-52M90 118c10-28 30-40 46-30" fill="none" stroke="#ef6c00" stroke-width="11" stroke-linecap="round"/>
      <circle cx="56" cy="62" r="15" fill="#ef6c00"/>
      <circle cx="138" cy="84" r="15" fill="#ef6c00"/>
      <circle cx="48" cy="170" r="18" fill="#ffffff"/>
      <circle cx="104" cy="172" r="18" fill="#ffffff"/>
      <circle cx="50" cy="172" r="10" fill="#2e2a26"/>
      <circle cx="106" cy="174" r="10" fill="#2e2a26"/>
      <path d="M50 212c20 16 44 12 58-6" fill="none" stroke="#ef6c00" stroke-width="9" stroke-linecap="round"/>
      <circle cx="90" cy="206" r="12" fill="#f48fb1"/>
    `
  },
  {
    id: 'whale', name: 'Whale', emoji: '🐳', cat: 'sea',
    svg: `
      <rect width="400" height="400" fill="#4fc3f7"/>
      <circle cx="54" cy="50" r="28" fill="#fff176"/>
      <ellipse cx="320" cy="56" rx="46" ry="22" fill="#ffffff"/>
      <rect y="300" width="400" height="100" fill="#1e88e5"/>
      <path d="M0 322c46-20 68 14 112 0s68 14 112 0 66 14 112 0 46 10 64 0v-22H0z" fill="#1976d2"/>
      <path d="M196 104c-18-20-10-46 14-46 22 0 32 22 16 42" fill="none" stroke="#e3f2fd" stroke-width="18" stroke-linecap="round"/>
      <circle cx="176" cy="74" r="15" fill="#e3f2fd"/>
      <circle cx="244" cy="66" r="13" fill="#e3f2fd"/>
      <ellipse cx="196" cy="244" rx="150" ry="98" fill="#1565c0"/>
      <path d="M322 244l62-62 10 128z" fill="#1565c0"/>
      <path d="M100 272c54 28 142 28 194 0 4 40-56 68-98 68s-100-28-96-68z" fill="#bbdefb"/>
      <ellipse cx="128" cy="286" rx="46" ry="34" transform="rotate(-20 128 286)" fill="#0d47a1"/>
      <rect x="180" y="150" width="30" height="20" rx="10" fill="#0d47a1"/>
      <circle cx="122" cy="214" r="21" fill="#ffffff"/>
      <circle cx="116" cy="216" r="11" fill="#2e2a26"/>
      <path d="M86 262c26 16 56 14 76-6" fill="none" stroke="#0d47a1" stroke-width="9" stroke-linecap="round"/>
      <circle cx="300" cy="352" r="15" fill="#64b5f6"/>
      <circle cx="60" cy="366" r="13" fill="#64b5f6"/>
    `
  },
  {
    id: 'dolphin', name: 'Dolphin', emoji: '🐬', cat: 'sea',
    svg: `
      <rect width="400" height="400" fill="#7fd4f5"/>
      <circle cx="54" cy="50" r="28" fill="#fff176"/>
      <ellipse cx="320" cy="56" rx="46" ry="22" fill="#ffffff"/>
      <rect y="296" width="400" height="104" fill="#1e88e5"/>
      <path d="M0 318c46-20 68 14 112 0s68 14 112 0 66 14 112 0 46 10 64 0v-22H0z" fill="#1976d2"/>
      <path d="M58 300c-16-54 2-92-4-124 26 40 2 76 20 124z" fill="#2e9e5b"/>
      <path d="M352 300c14-58-20-88-4-134-28 42 0 80-18 134z" fill="#2e9e5b"/>
      <path d="M332 286l54-50-6 86z" fill="#78909c"/>
      <ellipse cx="200" cy="232" rx="146" ry="74" transform="rotate(-10 200 232)" fill="#90a4ae"/>
      <path d="M176 164l16-74 54 62z" fill="#78909c"/>
      <path d="M186 286l-38 58 92-28z" fill="#78909c"/>
      <path d="M78 258c56 34 180 20 234-28 14 44-70 96-144 96-48 0-92-26-90-68z" fill="#eceff1"/>
      <path d="M62 222c-28 4-44 14-46 24 22 10 44 8 58-6z" fill="#90a4ae"/>
      <circle cx="104" cy="214" r="17" fill="#ffffff"/>
      <circle cx="100" cy="216" r="9" fill="#2e2a26"/>
      <path d="M62 250c22 12 46 10 62-6" fill="none" stroke="#546e7a" stroke-width="8" stroke-linecap="round"/>
      <circle cx="64" cy="358" r="14" fill="#64b5f6"/>
      <circle cx="320" cy="368" r="16" fill="#64b5f6"/>
    `
  },
  {
    id: 'octopus', name: 'Octopus', emoji: '🐙', cat: 'sea',
    svg: `
      <rect width="400" height="400" fill="#4fc3f7"/>
      <circle cx="80" cy="60" r="14" fill="#b3e5fc"/>
      <circle cx="120" cy="30" r="9" fill="#b3e5fc"/>
      <circle cx="330" cy="86" r="12" fill="#b3e5fc"/>
      <rect y="340" width="400" height="60" fill="#f3d9a4"/>
      <path d="M52 344c-12-50 20-72 6-114 26 36-4 68 14 114z" fill="#2e9e5b"/>
      <path d="M352 344c16-56-24-84-6-132-30 42 2 78-18 132z" fill="#2e9e5b"/>
      <path d="M92 236c-48 24-70 64-70 116h46c0-42 18-76 48-94z" fill="#7e57c2"/>
      <path d="M140 276c-34 24-52 54-52 76h46c0-24 12-50 32-64z" fill="#9575cd"/>
      <path d="M180 300c-16 22-22 38-20 52h42c-2-20 0-36 10-48z" fill="#7e57c2"/>
      <path d="M220 300c16 22 22 38 20 52h-42c2-20 0-36-10-48z" fill="#9575cd"/>
      <path d="M260 276c34 24 52 54 52 76h-46c0-24-12-50-32-64z" fill="#7e57c2"/>
      <path d="M308 236c48 24 70 64 70 116h-46c0-42-18-76-48-94z" fill="#9575cd"/>
      <circle cx="42" cy="330" r="12" fill="#ce93d8"/>
      <circle cx="106" cy="332" r="11" fill="#ce93d8"/>
      <circle cx="172" cy="336" r="10" fill="#ce93d8"/>
      <circle cx="228" cy="336" r="10" fill="#ce93d8"/>
      <circle cx="294" cy="332" r="11" fill="#ce93d8"/>
      <circle cx="358" cy="330" r="12" fill="#ce93d8"/>
      <ellipse cx="200" cy="176" rx="124" ry="112" fill="#ab47bc"/>
      <ellipse cx="200" cy="212" rx="78" ry="62" fill="#ce93d8"/>
      <circle cx="154" cy="156" r="30" fill="#ffffff"/>
      <circle cx="246" cy="156" r="30" fill="#ffffff"/>
      <circle cx="158" cy="160" r="16" fill="#2e2a26"/>
      <circle cx="242" cy="160" r="16" fill="#2e2a26"/>
      <circle cx="164" cy="152" r="6" fill="#ffffff"/>
      <circle cx="248" cy="152" r="6" fill="#ffffff"/>
      <path d="M168 222c18 18 46 18 64 0" fill="none" stroke="#8e24aa" stroke-width="10" stroke-linecap="round"/>
    `
  },
  {
    id: 'crab', name: 'Crab', emoji: '🦀', cat: 'sea',
    svg: `
      <rect width="400" height="400" fill="#7fd4f5"/>
      <circle cx="54" cy="50" r="28" fill="#fff176"/>
      <ellipse cx="320" cy="56" rx="46" ry="22" fill="#ffffff"/>
      <rect y="300" width="400" height="100" fill="#f3d9a4"/>
      <ellipse cx="200" cy="312" rx="178" ry="26" fill="#e8c98a"/>
      <path d="M94 268l-50 38M106 296l-56 20M120 322l-48 36" fill="none" stroke="#c62828" stroke-width="17" stroke-linecap="round"/>
      <path d="M306 268l50 38M294 296l56 20M280 322l48 36" fill="none" stroke="#c62828" stroke-width="17" stroke-linecap="round"/>
      <path d="M96 222l-56-42" fill="none" stroke="#c62828" stroke-width="20" stroke-linecap="round"/>
      <path d="M304 222l56-42" fill="none" stroke="#c62828" stroke-width="20" stroke-linecap="round"/>
      <path d="M46 180c-28-12-44 4-40 26 4 20 26 28 42 14l-22-16z" fill="#e8473c"/>
      <path d="M354 180c28-12 44 4 40 26-4 20-26 28-42 14l22-16z" fill="#e8473c"/>
      <ellipse cx="200" cy="248" rx="136" ry="94" fill="#e8473c"/>
      <ellipse cx="200" cy="276" rx="88" ry="54" fill="#ef5350"/>
      <rect x="124" y="124" width="22" height="64" rx="11" fill="#e8473c"/>
      <rect x="254" y="124" width="22" height="64" rx="11" fill="#e8473c"/>
      <circle cx="135" cy="116" r="30" fill="#ffffff"/>
      <circle cx="265" cy="116" r="30" fill="#ffffff"/>
      <circle cx="139" cy="120" r="16" fill="#2e2a26"/>
      <circle cx="261" cy="120" r="16" fill="#2e2a26"/>
      <circle cx="145" cy="112" r="6" fill="#ffffff"/>
      <circle cx="267" cy="112" r="6" fill="#ffffff"/>
      <path d="M158 266c26 22 58 22 84 0" fill="none" stroke="#b71c1c" stroke-width="11" stroke-linecap="round"/>
      <circle cx="56" cy="356" r="16" fill="#e8c98a"/>
      <circle cx="348" cy="364" r="18" fill="#e8c98a"/>
    `
  },
  {
    id: 'seahorse', name: 'Seahorse', emoji: '🐠', cat: 'sea',
    svg: `
      <rect width="400" height="400" fill="#4fc3f7"/>
      <circle cx="84" cy="56" r="14" fill="#b3e5fc"/>
      <circle cx="124" cy="28" r="9" fill="#b3e5fc"/>
      <circle cx="336" cy="92" r="12" fill="#b3e5fc"/>
      <circle cx="56" cy="212" r="11" fill="#b3e5fc"/>
      <rect y="344" width="400" height="56" fill="#f3d9a4"/>
      <path d="M58 348c-14-56 10-80 2-120 26 40-2 74 16 120z" fill="#2e9e5b"/>
      <path d="M346 348c16-60-22-90-4-136-30 42 2 80-16 136z" fill="#2e9e5b"/>
      <path d="M206 152c-8 52-44 72-44 114 0 36 30 50 54 34" fill="none" stroke="#ffb300" stroke-width="58" stroke-linecap="round"/>
      <path d="M222 302c26 12 24 46-6 50-26 4-36-22-18-32" fill="none" stroke="#ffb300" stroke-width="32" stroke-linecap="round"/>
      <path d="M146 176c-24-4-38 8-38 26 18 10 34 4 38-26zM140 238c-26 0-38 14-36 32 20 8 36 0 36-32z" fill="#ff9800"/>
      <circle cx="208" cy="112" r="56" fill="#ffca28"/>
      <path d="M252 96c40-8 56 8 52 28-24 12-42 4-52-28z" fill="#ffb300"/>
      <path d="M258 116c20-4 30 0 32 8" fill="none" stroke="#ef6c00" stroke-width="8" stroke-linecap="round"/>
      <path d="M180 56c-8-26 6-42 26-38-16 8-24 20-20 38zM206 54c8-26 30-32 44-18-20 0-32 6-36 20z" fill="#ff9800"/>
      <path d="M232 160c20 10 26 26 20 42M198 220c20 8 26 24 20 40" fill="none" stroke="#ffd54f" stroke-width="12" stroke-linecap="round"/>
      <circle cx="228" cy="100" r="17" fill="#ffffff"/>
      <circle cx="232" cy="102" r="9" fill="#2e2a26"/>
      <path d="M186 132c16 12 36 10 48-4" fill="none" stroke="#ef6c00" stroke-width="8" stroke-linecap="round"/>
    `
  },
  {
    id: 'starfish', name: 'Starfish', emoji: '⭐', cat: 'sea',
    svg: `
      <rect width="400" height="400" fill="#7fd4f5"/>
      <circle cx="84" cy="56" r="14" fill="#b3e5fc"/>
      <circle cx="124" cy="28" r="9" fill="#b3e5fc"/>
      <circle cx="340" cy="78" r="12" fill="#b3e5fc"/>
      <rect y="286" width="400" height="114" fill="#f3d9a4"/>
      <ellipse cx="200" cy="300" rx="178" ry="26" fill="#e8c98a"/>
      <path d="M52 348c22-12 44-12 66 0-22 12-44 12-66 0z" fill="#e8c98a"/>
      <path d="M288 364c22-12 44-12 66 0-22 12-44 12-66 0z" fill="#e8c98a"/>
      <path d="M200 70L236 160L333 167L259 229L282 323L200 272L118 323L141 229L67 167L164 160Z" fill="#ff7043"/>
      <path d="M200 124L218 170L268 174L230 200L242 248L200 222L158 248L170 200L132 174L182 170Z" fill="#ff8a65"/>
      <circle cx="200" cy="96" r="12" fill="#ffccbc"/>
      <circle cx="310" cy="172" r="12" fill="#ffccbc"/>
      <circle cx="268" cy="298" r="12" fill="#ffccbc"/>
      <circle cx="132" cy="298" r="12" fill="#ffccbc"/>
      <circle cx="90" cy="172" r="12" fill="#ffccbc"/>
      <circle cx="176" cy="188" r="16" fill="#ffffff"/>
      <circle cx="224" cy="188" r="16" fill="#ffffff"/>
      <circle cx="177" cy="190" r="9" fill="#2e2a26"/>
      <circle cx="223" cy="190" r="9" fill="#2e2a26"/>
      <path d="M180 220c12 12 28 12 40 0" fill="none" stroke="#d84315" stroke-width="9" stroke-linecap="round"/>
    `
  },
  {
    id: 'shark', name: 'Shark', emoji: '🦈', cat: 'sea',
    svg: `
      <rect width="400" height="400" fill="#4fc3f7"/>
      <circle cx="84" cy="56" r="14" fill="#b3e5fc"/>
      <circle cx="124" cy="28" r="9" fill="#b3e5fc"/>
      <circle cx="340" cy="78" r="12" fill="#b3e5fc"/>
      <rect y="330" width="400" height="70" fill="#f3d9a4"/>
      <path d="M48 334c-14-56 10-80 2-120 26 40-2 74 16 120z" fill="#2e9e5b"/>
      <path d="M356 334c16-60-22-90-4-136-30 42 2 80-16 136z" fill="#2e9e5b"/>
      <path d="M196 120l28-84 54 86z" fill="#37474f"/>
      <path d="M40 212l-32-62 10 118z" fill="#37474f"/>
      <ellipse cx="216" cy="206" rx="156" ry="80" fill="#546e7a"/>
      <path d="M236 276l34 56-92-20z" fill="#37474f"/>
      <path d="M90 268c70 28 212 10 282-40-6 46-74 82-152 82-72 0-128-16-130-42z" fill="#eceff1"/>
      <path d="M352 196c18 4 26 12 26 22-14 8-26 4-30-12z" fill="#37474f"/>
      <path d="M126 246c66 26 190 10 246-30-10 28-50 50-104 56-66 8-124-6-142-26z" fill="#fafafa"/>
      <path d="M150 248l10 22 16-18 12 22 16-20 14 22 18-20 14 20 20-20" fill="none" stroke="#546e7a" stroke-width="7" stroke-linejoin="round"/>
      <circle cx="306" cy="172" r="19" fill="#ffffff"/>
      <circle cx="312" cy="172" r="10" fill="#2e2a26"/>
      <path d="M160 180l-4 34M196 172l-4 36" fill="none" stroke="#455a64" stroke-width="9" stroke-linecap="round"/>
    `
  },
  {
    id: 'jellyfish', name: 'Jellyfish', emoji: '🪼', cat: 'sea',
    svg: `
      <rect width="400" height="400" fill="#1565c0"/>
      <circle cx="70" cy="60" r="14" fill="#64b5f6"/>
      <circle cx="112" cy="30" r="9" fill="#64b5f6"/>
      <circle cx="334" cy="80" r="13" fill="#64b5f6"/>
      <circle cx="46" cy="214" r="11" fill="#64b5f6"/>
      <circle cx="356" cy="268" r="12" fill="#64b5f6"/>
      <rect y="356" width="400" height="44" fill="#0d47a1"/>
      <path d="M92 220c-6 54 18 70 10 120 4 30-10 40-28 36" fill="none" stroke="#f06292" stroke-width="18" stroke-linecap="round"/>
      <path d="M146 232c-4 60 16 80 8 134" fill="none" stroke="#ec407a" stroke-width="20" stroke-linecap="round"/>
      <path d="M200 236c0 66 14 86 4 140" fill="none" stroke="#f06292" stroke-width="22" stroke-linecap="round"/>
      <path d="M254 232c4 60-16 80-8 134" fill="none" stroke="#ec407a" stroke-width="20" stroke-linecap="round"/>
      <path d="M308 220c6 54-18 70-10 120-4 30 10 40 28 36" fill="none" stroke="#f06292" stroke-width="18" stroke-linecap="round"/>
      <path d="M44 218c0-96 70-162 156-162s156 66 156 162z" fill="#f48fb1"/>
      <path d="M44 218c26 20 50 20 78 0 26 20 52 20 78 0 26 20 52 20 78 0 26 20 52 20 78 0v26H44z" fill="#f48fb1"/>
      <path d="M118 112c16-30 44-46 82-46" fill="none" stroke="#fce4ec" stroke-width="18" stroke-linecap="round"/>
      <circle cx="152" cy="168" r="26" fill="#ffffff"/>
      <circle cx="248" cy="168" r="26" fill="#ffffff"/>
      <circle cx="156" cy="172" r="14" fill="#2e2a26"/>
      <circle cx="244" cy="172" r="14" fill="#2e2a26"/>
      <circle cx="161" cy="165" r="5" fill="#ffffff"/>
      <circle cx="249" cy="165" r="5" fill="#ffffff"/>
      <path d="M176 208c14 14 34 14 48 0" fill="none" stroke="#c2185b" stroke-width="10" stroke-linecap="round"/>
    `
  },
  {
    id: 'car', name: 'Car', emoji: '🚗', cat: 'go',
    svg: `
      <rect width="400" height="400" fill="#bde3ff"/>
      <circle cx="54" cy="54" r="30" fill="#ffd54f"/>
      <ellipse cx="322" cy="60" rx="46" ry="22" fill="#ffffff"/>
      <circle cx="350" cy="214" r="38" fill="#43a047"/>
      <rect x="342" y="214" width="16" height="90" fill="#5d4037"/>
      <rect y="284" width="400" height="116" fill="#8d9499"/>
      <rect y="336" width="400" height="12" fill="#ffffff"/>
      <path d="M94 212l44-54h126l54 54z" fill="#e8473c"/>
      <rect x="40" y="208" width="320" height="86" rx="26" fill="#e8473c"/>
      <path d="M110 206l32-38h50v38z" fill="#b3e5fc"/>
      <path d="M208 206v-38h48l38 38z" fill="#b3e5fc"/>
      <rect x="40" y="248" width="320" height="16" fill="#c62828"/>
      <circle cx="120" cy="296" r="46" fill="#37474f"/>
      <circle cx="120" cy="296" r="20" fill="#cfd8dc"/>
      <circle cx="286" cy="296" r="46" fill="#37474f"/>
      <circle cx="286" cy="296" r="20" fill="#cfd8dc"/>
      <rect x="40" y="226" width="26" height="22" rx="8" fill="#ffee58"/>
      <rect x="334" y="226" width="26" height="22" rx="8" fill="#ef5350"/>
      <circle cx="200" cy="272" r="12" fill="#ffffff"/>
    `
  },
  {
    id: 'bus', name: 'Bus', emoji: '🚌', cat: 'go',
    svg: `
      <rect width="400" height="400" fill="#cfe9ff"/>
      <circle cx="54" cy="54" r="30" fill="#ffd54f"/>
      <ellipse cx="320" cy="60" rx="46" ry="22" fill="#ffffff"/>
      <rect y="290" width="400" height="110" fill="#8d9499"/>
      <rect y="340" width="400" height="12" fill="#ffffff"/>
      <rect x="20" y="118" width="360" height="178" rx="26" fill="#ffca28"/>
      <rect x="20" y="186" width="360" height="14" fill="#ef6c00"/>
      <rect x="44" y="140" width="62" height="46" rx="8" fill="#b3e5fc"/>
      <rect x="120" y="140" width="62" height="46" rx="8" fill="#b3e5fc"/>
      <rect x="196" y="140" width="62" height="46" rx="8" fill="#b3e5fc"/>
      <rect x="272" y="140" width="62" height="46" rx="8" fill="#b3e5fc"/>
      <rect x="276" y="212" width="62" height="70" rx="8" fill="#90caf9"/>
      <rect x="304" y="212" width="8" height="70" fill="#ffca28"/>
      <rect x="40" y="226" width="32" height="26" rx="8" fill="#ffee58"/>
      <rect x="40" y="262" width="60" height="18" rx="8" fill="#ef6c00"/>
      <circle cx="104" cy="298" r="44" fill="#37474f"/>
      <circle cx="104" cy="298" r="19" fill="#cfd8dc"/>
      <circle cx="292" cy="298" r="44" fill="#37474f"/>
      <circle cx="292" cy="298" r="19" fill="#cfd8dc"/>
      <rect x="140" y="226" width="110" height="24" rx="10" fill="#3e2723"/>
      <rect x="22" y="104" width="54" height="20" rx="8" fill="#ef6c00"/>
    `
  },
  {
    id: 'firetruck', name: 'Fire engine', emoji: '🚒', cat: 'go',
    svg: `
      <rect width="400" height="400" fill="#bde3ff"/>
      <circle cx="54" cy="54" r="30" fill="#ffd54f"/>
      <ellipse cx="322" cy="60" rx="46" ry="22" fill="#ffffff"/>
      <rect y="292" width="400" height="108" fill="#8d9499"/>
      <rect y="342" width="400" height="12" fill="#ffffff"/>
      <path d="M78 124v48M140 124v48M202 124v48M264 124v48M322 124v48" fill="none" stroke="#78909c" stroke-width="15"/>
      <rect x="34" y="114" width="312" height="19" rx="9" fill="#90a4ae"/>
      <rect x="34" y="158" width="312" height="19" rx="9" fill="#90a4ae"/>
      <rect x="24" y="186" width="212" height="112" rx="14" fill="#e8473c"/>
      <rect x="242" y="202" width="134" height="96" rx="14" fill="#c62828"/>
      <rect x="262" y="222" width="76" height="48" rx="8" fill="#b3e5fc"/>
      <rect x="348" y="258" width="28" height="40" rx="8" fill="#e8473c"/>
      <rect x="44" y="210" width="76" height="46" rx="8" fill="#ef9a9a"/>
      <rect x="138" y="210" width="76" height="46" rx="8" fill="#ef9a9a"/>
      <rect x="24" y="268" width="212" height="16" fill="#b71c1c"/>
      <circle cx="94" cy="300" r="44" fill="#37474f"/>
      <circle cx="94" cy="300" r="19" fill="#cfd8dc"/>
      <circle cx="300" cy="300" r="44" fill="#37474f"/>
      <circle cx="300" cy="300" r="19" fill="#cfd8dc"/>
      <rect x="276" y="178" width="56" height="26" rx="12" fill="#2196f3"/>
      <rect x="282" y="186" width="18" height="18" rx="8" fill="#ef5350"/>
      <rect x="350" y="224" width="26" height="22" rx="8" fill="#ffee58"/>
    `
  },
  {
    id: 'police', name: 'Police car', emoji: '🚓', cat: 'go',
    svg: `
      <rect width="400" height="400" fill="#cfe9ff"/>
      <circle cx="54" cy="54" r="30" fill="#ffd54f"/>
      <ellipse cx="322" cy="60" rx="46" ry="22" fill="#ffffff"/>
      <rect y="284" width="400" height="116" fill="#8d9499"/>
      <rect y="336" width="400" height="12" fill="#ffffff"/>
      <path d="M94 208l44-54h126l54 54z" fill="#fafafa"/>
      <rect x="40" y="204" width="320" height="90" rx="26" fill="#fafafa"/>
      <path d="M110 202l32-38h50v38z" fill="#b3e5fc"/>
      <path d="M208 202v-38h48l38 38z" fill="#b3e5fc"/>
      <rect x="40" y="244" width="320" height="30" fill="#1565c0"/>
      <rect x="110" y="208" width="104" height="32" rx="8" fill="#1565c0"/>
      <circle cx="162" cy="224" r="13" fill="#ffd54f"/>
      <circle cx="120" cy="294" r="46" fill="#37474f"/>
      <circle cx="120" cy="294" r="20" fill="#cfd8dc"/>
      <circle cx="286" cy="294" r="46" fill="#37474f"/>
      <circle cx="286" cy="294" r="20" fill="#cfd8dc"/>
      <rect x="156" y="124" width="88" height="30" rx="12" fill="#37474f"/>
      <rect x="160" y="128" width="38" height="22" rx="8" fill="#e8473c"/>
      <rect x="202" y="128" width="38" height="22" rx="8" fill="#2196f3"/>
      <rect x="40" y="222" width="26" height="22" rx="8" fill="#ffee58"/>
      <rect x="334" y="222" width="26" height="22" rx="8" fill="#ef5350"/>
    `
  },
  {
    id: 'ambulance', name: 'Ambulance', emoji: '🚑', cat: 'go',
    svg: `
      <rect width="400" height="400" fill="#bde3ff"/>
      <circle cx="54" cy="54" r="30" fill="#ffd54f"/>
      <ellipse cx="322" cy="60" rx="46" ry="22" fill="#ffffff"/>
      <rect y="292" width="400" height="108" fill="#8d9499"/>
      <rect y="342" width="400" height="12" fill="#ffffff"/>
      <rect x="24" y="152" width="222" height="146" rx="16" fill="#fafafa"/>
      <path d="M252 206l30-54h52l44 54v92H252z" fill="#eceff1"/>
      <rect x="286" y="170" width="62" height="40" rx="8" fill="#b3e5fc"/>
      <rect x="24" y="252" width="354" height="22" fill="#e8473c"/>
      <rect x="112" y="186" width="24" height="76" rx="6" fill="#e8473c"/>
      <rect x="86" y="212" width="76" height="24" rx="6" fill="#e8473c"/>
      <rect x="40" y="176" width="54" height="46" rx="8" fill="#b3e5fc"/>
      <rect x="180" y="176" width="54" height="46" rx="8" fill="#b3e5fc"/>
      <circle cx="96" cy="300" r="44" fill="#37474f"/>
      <circle cx="96" cy="300" r="19" fill="#cfd8dc"/>
      <circle cx="302" cy="300" r="44" fill="#37474f"/>
      <circle cx="302" cy="300" r="19" fill="#cfd8dc"/>
      <rect x="276" y="124" width="60" height="28" rx="12" fill="#37474f"/>
      <rect x="280" y="128" width="24" height="20" rx="8" fill="#ef5350"/>
      <rect x="308" y="128" width="24" height="20" rx="8" fill="#2196f3"/>
      <rect x="350" y="222" width="28" height="24" rx="8" fill="#ffee58"/>
    `
  },
  {
    id: 'tractor', name: 'Tractor', emoji: '🚜', cat: 'go',
    svg: `
      <rect width="400" height="400" fill="#cfe9ff"/>
      <circle cx="54" cy="54" r="30" fill="#ffd54f"/>
      <ellipse cx="322" cy="60" rx="46" ry="22" fill="#ffffff"/>
      <rect y="312" width="400" height="88" fill="#c5a35a"/>
      <path d="M0 348c40-30 92-28 128 4z" fill="#a98743"/>
      <rect x="60" y="150" width="30" height="70" rx="12" fill="#546e7a"/>
      <rect x="104" y="146" width="128" height="90" rx="14" fill="#43a047"/>
      <rect x="120" y="162" width="96" height="56" rx="8" fill="#b3e5fc"/>
      <rect x="44" y="226" width="226" height="86" rx="16" fill="#66bb6a"/>
      <rect x="44" y="258" width="226" height="18" fill="#2e7d32"/>
      <circle cx="96" cy="306" r="40" fill="#37474f"/>
      <circle cx="96" cy="306" r="17" fill="#ffca28"/>
      <circle cx="268" cy="286" r="80" fill="#37474f"/>
      <circle cx="268" cy="286" r="38" fill="#ffca28"/>
      <circle cx="268" cy="286" r="16" fill="#546e7a"/>
      <path d="M268 206v22M268 344v22M188 286h22M326 286h22M212 230l16 16M308 326l16 16M212 342l16-16M308 246l16-16" fill="none" stroke="#546e7a" stroke-width="12" stroke-linecap="round"/>
      <rect x="36" y="242" width="26" height="22" rx="8" fill="#ffee58"/>
      <rect x="92" y="130" width="152" height="16" rx="8" fill="#2e7d32"/>
    `
  },
  {
    id: 'helicopter', name: 'Helicopter', emoji: '🚁', cat: 'go',
    svg: `
      <rect width="400" height="400" fill="#90caf9"/>
      <circle cx="54" cy="54" r="30" fill="#fff176"/>
      <ellipse cx="316" cy="70" rx="50" ry="24" fill="#ffffff"/>
      <ellipse cx="72" cy="306" rx="62" ry="28" fill="#ffffff"/>
      <ellipse cx="330" cy="340" rx="54" ry="26" fill="#ffffff"/>
      <rect x="14" y="94" width="372" height="18" rx="9" fill="#546e7a"/>
      <rect x="192" y="104" width="22" height="48" fill="#546e7a"/>
      <path d="M318 206l66-16-10 56z" fill="#1565c0"/>
      <rect x="226" y="208" width="120" height="22" rx="11" fill="#1e88e5"/>
      <ellipse cx="174" cy="220" rx="122" ry="76" fill="#1e88e5"/>
      <path d="M86 184c34-28 78-28 106 0-34 22-74 22-106 0z" fill="#b3e5fc"/>
      <circle cx="214" cy="212" r="26" fill="#b3e5fc"/>
      <rect x="52" y="240" width="240" height="18" fill="#1565c0"/>
      <path d="M350 180v62" fill="none" stroke="#546e7a" stroke-width="14" stroke-linecap="round"/>
      <path d="M332 200l36 24M332 224l36-24" fill="none" stroke="#546e7a" stroke-width="10" stroke-linecap="round"/>
      <path d="M110 288v26M242 288v26" fill="none" stroke="#546e7a" stroke-width="16" stroke-linecap="round"/>
      <rect x="66" y="308" width="226" height="18" rx="9" fill="#546e7a"/>
      <circle cx="68" cy="216" r="11" fill="#ffee58"/>
    `
  },
  {
    id: 'submarine', name: 'Submarine', emoji: '🛥️', cat: 'go',
    svg: `
      <rect width="400" height="400" fill="#1565c0"/>
      <circle cx="70" cy="56" r="14" fill="#64b5f6"/>
      <circle cx="110" cy="28" r="9" fill="#64b5f6"/>
      <circle cx="332" cy="78" r="13" fill="#64b5f6"/>
      <circle cx="44" cy="206" r="11" fill="#64b5f6"/>
      <rect y="344" width="400" height="56" fill="#0d47a1"/>
      <path d="M52 348c-14-54 10-78 2-116 26 38-2 72 16 116z" fill="#2e9e5b"/>
      <path d="M352 348c16-58-22-88-4-132-30 42 2 78-16 132z" fill="#2e9e5b"/>
      <path d="M44 212l-40-40 6 92z" fill="#ef6c00"/>
      <rect x="166" y="100" width="20" height="78" fill="#90a4ae"/>
      <rect x="166" y="92" width="58" height="18" rx="9" fill="#90a4ae"/>
      <rect x="128" y="146" width="96" height="60" rx="12" fill="#ef6c00"/>
      <ellipse cx="198" cy="238" rx="160" ry="84" fill="#ffb300"/>
      <circle cx="120" cy="238" r="34" fill="#546e7a"/>
      <circle cx="120" cy="238" r="24" fill="#b3e5fc"/>
      <circle cx="206" cy="238" r="34" fill="#546e7a"/>
      <circle cx="206" cy="238" r="24" fill="#b3e5fc"/>
      <circle cx="292" cy="238" r="30" fill="#546e7a"/>
      <circle cx="292" cy="238" r="21" fill="#b3e5fc"/>
      <path d="M38 236l-30-28 4 56z" fill="#ef6c00"/>
      <rect x="128" y="176" width="96" height="14" fill="#e65100"/>
      <circle cx="94" cy="130" r="15" fill="#64b5f6"/>
      <circle cx="132" cy="92" r="10" fill="#64b5f6"/>
      <circle cx="334" cy="300" r="13" fill="#64b5f6"/>
    `
  },
  {
    id: 'bicycle', name: 'Bicycle', emoji: '🚲', cat: 'go',
    svg: `
      <rect width="400" height="400" fill="#dff3c4"/>
      <circle cx="54" cy="54" r="30" fill="#ffd54f"/>
      <ellipse cx="322" cy="60" rx="46" ry="22" fill="#ffffff"/>
      <circle cx="350" cy="190" r="44" fill="#43a047"/>
      <rect x="342" y="190" width="16" height="106" fill="#5d4037"/>
      <rect y="296" width="400" height="104" fill="#b0bec5"/>
      <rect y="344" width="400" height="10" fill="#ffffff"/>
      <circle cx="96" cy="282" r="78" fill="#37474f"/>
      <circle cx="96" cy="282" r="58" fill="#b0bec5"/>
      <circle cx="96" cy="282" r="18" fill="#546e7a"/>
      <circle cx="304" cy="282" r="78" fill="#37474f"/>
      <circle cx="304" cy="282" r="58" fill="#b0bec5"/>
      <circle cx="304" cy="282" r="18" fill="#546e7a"/>
      <path d="M96 282l96-110M192 172h74M192 172l12 110M204 282h100M204 282l-108 0M266 172l38 110" fill="none" stroke="#e8473c" stroke-width="16" stroke-linecap="round"/>
      <path d="M96 282l-6-98" fill="none" stroke="#e8473c" stroke-width="16" stroke-linecap="round"/>
      <rect x="52" y="166" width="80" height="20" rx="10" fill="#37474f"/>
      <path d="M176 166h48l-12-28h-24z" fill="#3e2723"/>
      <circle cx="204" cy="282" r="24" fill="#546e7a"/>
      <circle cx="204" cy="282" r="11" fill="#cfd8dc"/>
      <path d="M204 282l34 22" fill="none" stroke="#37474f" stroke-width="12" stroke-linecap="round"/>
      <rect x="230" y="296" width="34" height="14" rx="7" fill="#3e2723"/>
    `
  },
  {
    id: 'motorbike', name: 'Motorbike', emoji: '🏍️', cat: 'go',
    svg: `
      <rect width="400" height="400" fill="#cfe9ff"/>
      <circle cx="54" cy="54" r="30" fill="#ffd54f"/>
      <ellipse cx="322" cy="60" rx="46" ry="22" fill="#ffffff"/>
      <rect y="296" width="400" height="104" fill="#8d9499"/>
      <rect y="346" width="400" height="10" fill="#ffffff"/>
      <rect x="52" y="272" width="136" height="24" rx="12" fill="#90a4ae"/>
      <circle cx="88" cy="284" r="72" fill="#263238"/>
      <circle cx="88" cy="284" r="36" fill="#b0bec5"/>
      <circle cx="88" cy="284" r="14" fill="#546e7a"/>
      <circle cx="312" cy="284" r="72" fill="#263238"/>
      <circle cx="312" cy="284" r="36" fill="#b0bec5"/>
      <circle cx="312" cy="284" r="14" fill="#546e7a"/>
      <path d="M296 166l16 90" fill="none" stroke="#78909c" stroke-width="24" stroke-linecap="round"/>
      <rect x="146" y="234" width="116" height="66" rx="18" fill="#546e7a"/>
      <rect x="146" y="252" width="116" height="18" fill="#455a64"/>
      <path d="M66 204h62l-6 26H70z" fill="#c62828"/>
      <path d="M78 228h118l-8 44H84z" fill="#37474f"/>
      <rect x="178" y="196" width="124" height="72" rx="24" fill="#e8473c"/>
      <path d="M198 212h58c10 0 14 8 10 16h-72z" fill="#ef5350"/>
      <rect x="248" y="136" width="98" height="22" rx="11" fill="#37474f"/>
      <circle cx="342" cy="190" r="28" fill="#ffee58"/>
      <circle cx="342" cy="190" r="15" fill="#fff9c4"/>
    `
  },
  {
    id: 'ferry', name: 'Ferry', emoji: '🛳️', cat: 'go',
    svg: `
      <rect width="400" height="400" fill="#a8e4ff"/>
      <circle cx="56" cy="56" r="30" fill="#fff176"/>
      <ellipse cx="312" cy="62" rx="50" ry="24" fill="#ffffff"/>
      <ellipse cx="268" cy="74" rx="32" ry="17" fill="#ffffff"/>
      <rect y="276" width="400" height="124" fill="#1e88e5"/>
      <path d="M0 302c40-16 60 16 100 0s60 16 100 0 60 16 100 0 60 16 100 0v-26H0z" fill="#42a5f5"/>
      <rect x="236" y="92" width="38" height="78" rx="8" fill="#ffca28"/>
      <rect x="236" y="112" width="38" height="20" fill="#e8473c"/>
      <rect x="92" y="166" width="224" height="60" rx="10" fill="#fafafa"/>
      <rect x="128" y="112" width="152" height="58" rx="10" fill="#eceff1"/>
      <rect x="146" y="128" width="34" height="28" rx="6" fill="#4fc3f7"/>
      <rect x="192" y="128" width="34" height="28" rx="6" fill="#4fc3f7"/>
      <rect x="110" y="182" width="32" height="28" rx="6" fill="#4fc3f7"/>
      <rect x="156" y="182" width="32" height="28" rx="6" fill="#4fc3f7"/>
      <rect x="202" y="182" width="32" height="28" rx="6" fill="#4fc3f7"/>
      <rect x="248" y="182" width="32" height="28" rx="6" fill="#4fc3f7"/>
      <path d="M34 226h332l-38 68H72z" fill="#1565c0"/>
      <rect x="34" y="220" width="332" height="18" rx="9" fill="#e8473c"/>
      <circle cx="104" cy="262" r="15" fill="#fafafa"/>
      <circle cx="166" cy="262" r="15" fill="#fafafa"/>
      <circle cx="228" cy="262" r="15" fill="#fafafa"/>
      <circle cx="290" cy="262" r="15" fill="#fafafa"/>
      <path d="M44 352c22-12 44-12 66 0-22 12-44 12-66 0z" fill="#64b5f6"/>
      <path d="M296 370c22-12 44-12 66 0-22 12-44 12-66 0z" fill="#64b5f6"/>
    `
  },
  {
    id: 'crane', name: 'Crane', emoji: '🏗️', cat: 'go',
    svg: `
      <rect width="400" height="400" fill="#cfe9ff"/>
      <circle cx="54" cy="54" r="30" fill="#ffd54f"/>
      <ellipse cx="322" cy="62" rx="46" ry="22" fill="#ffffff"/>
      <rect y="312" width="400" height="88" fill="#c5a35a"/>
      <path d="M268 358c34-40 92-42 132-6z" fill="#a98743"/>
      <rect x="20" y="54" width="360" height="22" rx="11" fill="#ffb300"/>
      <path d="M44 76l34 36M112 76l34 36M180 76l34 36M248 76l34 36M316 76l34 36M78 112l34-36M146 112l34-36M214 112l34-36M282 112l34-36M350 112l34-36" fill="none" stroke="#ffca28" stroke-width="11"/>
      <rect x="20" y="104" width="360" height="20" rx="10" fill="#ffb300"/>
      <rect x="150" y="124" width="56" height="130" fill="#ffca28"/>
      <path d="M160 140h36M160 172h36M160 204h36M160 236h36" fill="none" stroke="#ef6c00" stroke-width="10"/>
      <path d="M312 124v56" fill="none" stroke="#546e7a" stroke-width="10" stroke-linecap="round"/>
      <rect x="276" y="178" width="74" height="54" rx="10" fill="#546e7a"/>
      <rect x="290" y="192" width="46" height="26" rx="6" fill="#b3e5fc"/>
      <rect x="92" y="254" width="186" height="66" rx="14" fill="#ffb300"/>
      <rect x="92" y="282" width="186" height="16" fill="#ef6c00"/>
      <circle cx="136" cy="318" r="38" fill="#37474f"/>
      <circle cx="136" cy="318" r="16" fill="#cfd8dc"/>
      <circle cx="240" cy="318" r="38" fill="#37474f"/>
      <circle cx="240" cy="318" r="16" fill="#cfd8dc"/>
      <rect x="64" y="22" width="18" height="36" rx="9" fill="#546e7a"/>
      <path d="M58 22h30l-6 18H64z" fill="#e8473c"/>
    `
  },
  {
    id: 'sun', name: 'Sun', emoji: '☀️', cat: 'nature',
    svg: `
      <rect width="400" height="400" fill="#4fc3f7"/>
      <path d="M200 10v54M200 336v54M10 200h54M336 200h54M66 66l38 38M296 296l38 38M334 66l-38 38M104 296l-38 38" fill="none" stroke="#ffb300" stroke-width="26" stroke-linecap="round"/>
      <path d="M136 22l16 50M264 22l-16 50M136 378l16-50M264 378l-16-50M22 136l50 16M22 264l50-16M378 136l-50 16M378 264l-50-16" fill="none" stroke="#ffb300" stroke-width="18" stroke-linecap="round"/>
      <circle cx="200" cy="200" r="124" fill="#ffca28"/>
      <circle cx="200" cy="200" r="100" fill="#ffee58"/>
      <circle cx="162" cy="176" r="18" fill="#2e2a26"/>
      <circle cx="238" cy="176" r="18" fill="#2e2a26"/>
      <circle cx="168" cy="168" r="6" fill="#ffffff"/>
      <circle cx="244" cy="168" r="6" fill="#ffffff"/>
      <path d="M152 226c20 30 76 30 96 0" fill="none" stroke="#ef6c00" stroke-width="14" stroke-linecap="round"/>
      <circle cx="140" cy="222" r="17" fill="#ffab91"/>
      <circle cx="260" cy="222" r="17" fill="#ffab91"/>
    `
  },
  {
    id: 'moon', name: 'Moon', emoji: '🌙', cat: 'nature',
    svg: `
      <rect width="400" height="400" fill="#1b2a63"/>
      <circle cx="60" cy="54" r="9" fill="#ffe082"/>
      <circle cx="128" cy="100" r="6" fill="#ffe082"/>
      <circle cx="46" cy="178" r="7" fill="#ffe082"/>
      <circle cx="98" cy="268" r="6" fill="#ffe082"/>
      <circle cx="52" cy="340" r="8" fill="#ffe082"/>
      <circle cx="360" cy="326" r="7" fill="#ffe082"/>
      <path d="M322 42l10 28 28 10-28 10-10 28-10-28-28-10 28-10z" fill="#fff176"/>
      <path d="M88 322l8 22 22 8-22 8-8 22-8-22-22-8 22-8z" fill="#fff176"/>
      <path d="M352 190l7 18 18 7-18 7-7 18-7-18-18-7 18-7z" fill="#fff176"/>
      <path d="M248 56c-86 0-156 66-156 148s70 148 156 148c22 0 42-4 60-12-62-18-106-70-106-136s44-118 106-136c-18-8-38-12-60-12z" fill="#fff59d"/>
      <circle cx="160" cy="146" r="22" fill="#f0e2a8"/>
      <circle cx="132" cy="226" r="16" fill="#f0e2a8"/>
      <circle cx="186" cy="284" r="19" fill="#f0e2a8"/>
      <circle cx="222" cy="106" r="13" fill="#f0e2a8"/>
      <circle cx="178" cy="196" r="13" fill="#2e2a26"/>
      <circle cx="238" cy="190" r="13" fill="#2e2a26"/>
      <circle cx="183" cy="190" r="4" fill="#ffffff"/>
      <circle cx="243" cy="184" r="4" fill="#ffffff"/>
      <path d="M186 234c18 20 48 18 62-4" fill="none" stroke="#b8a46a" stroke-width="11" stroke-linecap="round"/>
    `
  },
  {
    id: 'raincloud', name: 'Rain cloud', emoji: '🌧️', cat: 'nature',
    svg: `
      <rect width="400" height="400" fill="#b0cfe0"/>
      <rect y="344" width="400" height="56" fill="#7cb342"/>
      <ellipse cx="200" cy="356" rx="178" ry="22" fill="#689f38"/>
      <path d="M118 276v40M170 294v40M224 276v40M276 294v40M80 300v34M320 300v34" fill="none" stroke="#4fc3f7" stroke-width="15" stroke-linecap="round"/>
      <path d="M68 238c-34 0-56-22-56-50s24-50 56-48c6-42 44-72 90-72 50 0 90 32 96 76 40-4 72 20 72 50s-26 44-62 44z" fill="#90a4ae"/>
      <path d="M96 166c6-32 36-54 72-54 20 0 38 6 52 18" fill="none" stroke="#cfd8dc" stroke-width="20" stroke-linecap="round"/>
      <circle cx="150" cy="186" r="19" fill="#eceff1"/>
      <circle cx="226" cy="186" r="19" fill="#eceff1"/>
      <circle cx="152" cy="190" r="10" fill="#2e2a26"/>
      <circle cx="224" cy="190" r="10" fill="#2e2a26"/>
      <path d="M166 220c14 16 36 16 50 0" fill="none" stroke="#546e7a" stroke-width="10" stroke-linecap="round"/>
      <path d="M306 108l-28 76 42-8-20 68 70-98-44 8z" fill="#ffd54f"/>
      <ellipse cx="62" cy="366" rx="30" ry="12" fill="#558b2f"/>
      <ellipse cx="330" cy="378" rx="34" ry="13" fill="#558b2f"/>
    `
  },
  {
    id: 'mountain', name: 'Mountain', emoji: '⛰️', cat: 'nature',
    svg: `
      <rect width="400" height="400" fill="#bfe9ff"/>
      <circle cx="326" cy="62" r="34" fill="#ffd54f"/>
      <ellipse cx="88" cy="88" rx="56" ry="26" fill="#ffffff"/>
      <ellipse cx="136" cy="100" rx="38" ry="20" fill="#ffffff"/>
      <path d="M0 330l110-166 96 166z" fill="#78909c"/>
      <path d="M110 164l48 72H62z" fill="#eceff1"/>
      <path d="M150 330l130-212 120 212z" fill="#546e7a"/>
      <path d="M280 118l60 98H220z" fill="#fafafa"/>
      <path d="M240 190l22 26 20-20 22 20 18-26" fill="none" stroke="#eceff1" stroke-width="14" stroke-linejoin="round"/>
      <rect y="326" width="400" height="74" fill="#7cb342"/>
      <ellipse cx="200" cy="336" rx="178" ry="22" fill="#689f38"/>
      <path d="M62 326l-26 56h52z" fill="#2e7d32"/>
      <rect x="80" y="356" width="10" height="26" fill="#5d4037"/>
      <path d="M86 322l-28 60h56z" fill="#388e3c"/>
      <path d="M332 330l-30 58h60z" fill="#2e7d32"/>
      <rect x="352" y="360" width="11" height="26" fill="#5d4037"/>
      <circle cx="200" cy="368" r="13" fill="#fff59d"/>
      <circle cx="252" cy="378" r="12" fill="#ef9a9a"/>
    `
  },
  {
    id: 'volcano', name: 'Volcano', emoji: '🌋', cat: 'nature',
    svg: `
      <rect width="400" height="400" fill="#4a2a52"/>
      <circle cx="60" cy="54" r="8" fill="#ffe082"/>
      <circle cx="350" cy="48" r="10" fill="#ffe082"/>
      <circle cx="44" cy="160" r="6" fill="#ffe082"/>
      <ellipse cx="200" cy="86" rx="92" ry="54" fill="#6b3b62"/>
      <ellipse cx="128" cy="116" rx="58" ry="32" fill="#6b3b62"/>
      <ellipse cx="282" cy="120" rx="54" ry="30" fill="#6b3b62"/>
      <path d="M200 56l-22 46 34-10-14 44 52-66-32 8z" fill="#ffd54f"/>
      <path d="M152 144l-20 34 26-6-10 34 38-50-24 6zM262 150l-18 32 24-6-10 32 36-48-22 6z" fill="#ff7043"/>
      <path d="M0 400l122-250h76l122 250z" fill="#5d4037"/>
      <path d="M146 150h108l-14-26h-80z" fill="#4e342e"/>
      <path d="M160 124h80c-6 36 6 70 24 102-30 14-48 46-50 86h-40c0-34-14-64-38-80 20-34 28-70 24-108z" fill="#e8473c"/>
      <path d="M176 134h48c-4 28 4 54 18 80-24 10-38 36-40 66h-24c0-26-10-48-30-62 16-26 30-54 28-84z" fill="#ff7043"/>
      <path d="M190 148h20c-2 20 2 38 12 56-16 8-26 26-28 46h-14c0-18-6-34-20-44 12-18 22-38 30-58z" fill="#ffca28"/>
      <ellipse cx="62" cy="380" rx="34" ry="14" fill="#4e342e"/>
      <ellipse cx="336" cy="374" rx="38" ry="15" fill="#4e342e"/>
    `
  },
  {
    id: 'island', name: 'Island', emoji: '🏝️', cat: 'nature',
    svg: `
      <rect width="400" height="400" fill="#7fd4f5"/>
      <circle cx="60" cy="56" r="30" fill="#fff176"/>
      <ellipse cx="312" cy="54" rx="48" ry="22" fill="#ffffff"/>
      <ellipse cx="270" cy="66" rx="32" ry="17" fill="#ffffff"/>
      <rect y="266" width="400" height="134" fill="#1e88e5"/>
      <path d="M0 292c46-18 68 14 112 0s68 14 112 0 66 14 112 0 46 8 64 0v-26H0z" fill="#42a5f5"/>
      <path d="M48 338c22-12 44-12 66 0-22 12-44 12-66 0z" fill="#64b5f6"/>
      <path d="M300 364c22-12 44-12 66 0-22 12-44 12-66 0z" fill="#64b5f6"/>
      <ellipse cx="200" cy="300" rx="150" ry="52" fill="#f3d9a4"/>
      <ellipse cx="200" cy="288" rx="118" ry="34" fill="#ffe0b2"/>
      <path d="M194 288c-6-62 2-104 20-128l24 6c-20 28-26 68-20 122z" fill="#8d6e63"/>
      <path d="M214 160c-44-18-78-6-92 18 36-6 64 0 84 14z" fill="#2e7d32"/>
      <path d="M222 158c44-22 80-12 94 12-36-8-66-4-86 10z" fill="#43a047"/>
      <path d="M212 152c-14-42-42-62-74-62 26 20 44 44 54 72z" fill="#43a047"/>
      <path d="M226 152c20-40 52-56 84-52-28 16-50 36-62 64z" fill="#2e7d32"/>
      <circle cx="218" cy="156" r="18" fill="#8d6e63"/>
      <circle cx="194" cy="182" r="16" fill="#a1887f"/>
      <circle cx="244" cy="186" r="15" fill="#a1887f"/>
      <ellipse cx="96" cy="294" rx="30" ry="15" fill="#e8c98a"/>
      <circle cx="318" cy="296" r="17" fill="#ef9a9a"/>
    `
  },
  {
    id: 'leaf', name: 'Autumn leaf', emoji: '🍁', cat: 'nature',
    svg: `
      <rect width="400" height="400" fill="#ffe9b8"/>
      <circle cx="52" cy="52" r="28" fill="#ff8a65"/>
      <path d="M42 150l20 34-40 6zM340 110l24 40-46 6zM58 330l22 36-44 8zM330 316l24 38-46 8z" fill="#ffcc80"/>
      <rect x="188" y="236" width="24" height="140" rx="12" fill="#6d4c41"/>
      <path d="M200 30c18 44 34 62 62 66l-18 26c26 10 44 10 64-2-6 28-16 42-34 50 34 14 50 32 54 56-40-10-66-6-82 10 10 22 10 42-2 62-20-20-40-28-62-28s-42 8-62 28c-12-20-12-40-2-62-16-16-42-20-82-10 4-24 20-42 54-56-18-8-28-22-34-50 20 12 38 12 64 2l-18-26c28-4 44-22 62-66z" fill="#e8473c"/>
      <path d="M200 86c12 28 22 40 40 44l-12 16c16 6 28 6 40-2-4 18-10 28-22 32 22 10 32 20 34 36-26-6-42-4-52 6 6 14 6 28-2 40-12-12-26-18-40-18s-28 6-40 18c-8-12-8-26-2-40-10-10-26-12-52-6 2-16 12-26 34-36-12-4-18-14-22-32 12 8 24 8 40 2l-12-16c18-4 28-16 40-44z" fill="#ff7043"/>
      <circle cx="176" cy="196" r="16" fill="#ffffff"/>
      <circle cx="224" cy="196" r="16" fill="#ffffff"/>
      <circle cx="177" cy="198" r="9" fill="#2e2a26"/>
      <circle cx="223" cy="198" r="9" fill="#2e2a26"/>
      <path d="M180 228c12 12 28 12 40 0" fill="none" stroke="#b71c1c" stroke-width="9" stroke-linecap="round"/>
      <circle cx="56" cy="368" r="16" fill="#ffb300"/>
      <circle cx="350" cy="376" r="18" fill="#ffb300"/>
    `
  },
  {
    id: 'apple', name: 'Apple', emoji: '🍎', cat: 'food',
    svg: `
      <rect width="400" height="400" fill="#dff3c4"/>
      <circle cx="52" cy="52" r="28" fill="#ffd54f"/>
      <ellipse cx="322" cy="58" rx="46" ry="22" fill="#ffffff"/>
      <rect y="336" width="400" height="64" fill="#8bc34a"/>
      <ellipse cx="200" cy="348" rx="178" ry="22" fill="#7cb342"/>
      <path d="M200 110c-26-22-68-26-96-4-34 26-42 86-20 144 18 48 54 86 82 86s28-18 34-18 6 18 34 18 64-38 82-86c22-58 14-118-20-144-28-22-70-18-96 4z" fill="#e8473c"/>
      <path d="M152 136c-20 2-34 18-40 44-6 26 0 54 14 76-26-30-32-72-18-102 8-16 24-22 44-18z" fill="#ef5350"/>
      <rect x="190" y="52" width="22" height="66" rx="11" fill="#6d4c41"/>
      <path d="M212 76c34-28 70-24 86 0-28 26-66 26-86 0z" fill="#43a047"/>
      <path d="M212 76c30-16 62-12 76 2" fill="none" stroke="#2e7d32" stroke-width="7" stroke-linecap="round"/>
      <circle cx="162" cy="208" r="19" fill="#ffffff"/>
      <circle cx="238" cy="208" r="19" fill="#ffffff"/>
      <circle cx="164" cy="212" r="11" fill="#2e2a26"/>
      <circle cx="236" cy="212" r="11" fill="#2e2a26"/>
      <path d="M170 258c18 20 42 20 60 0" fill="none" stroke="#b71c1c" stroke-width="12" stroke-linecap="round"/>
      <circle cx="132" cy="252" r="18" fill="#ef9a9a"/>
      <circle cx="268" cy="252" r="18" fill="#ef9a9a"/>
    `
  },
  {
    id: 'banana', name: 'Banana', emoji: '🍌', cat: 'food',
    svg: `
      <rect width="400" height="400" fill="#bfe9ff"/>
      <circle cx="52" cy="52" r="28" fill="#ffd54f"/>
      <ellipse cx="322" cy="58" rx="46" ry="22" fill="#ffffff"/>
      <rect y="330" width="400" height="70" fill="#8bc34a"/>
      <ellipse cx="200" cy="342" rx="178" ry="22" fill="#7cb342"/>
      <path d="M88 86c-16 86 10 164 70 206 60 42 130 36 184-12l-30-36c-42 34-92 38-134 8-44-32-64-94-52-162z" fill="#ffb300"/>
      <path d="M118 92c-12 76 12 142 64 178 50 34 108 30 154-10l-16-20c-40 32-88 34-126 8-42-30-60-86-50-152z" fill="#ffd54f"/>
      <path d="M78 60h44l-4 38H84z" fill="#8d6e63"/>
      <path d="M312 244l34 44-24 20-32-44z" fill="#8d6e63"/>
      <circle cx="166" cy="208" r="18" fill="#ffffff"/>
      <circle cx="230" cy="220" r="18" fill="#ffffff"/>
      <circle cx="168" cy="212" r="10" fill="#2e2a26"/>
      <circle cx="228" cy="224" r="10" fill="#2e2a26"/>
      <path d="M172 254c16 18 40 20 56 4" fill="none" stroke="#ef6c00" stroke-width="11" stroke-linecap="round"/>
      <circle cx="138" cy="250" r="16" fill="#ffcc80"/>
      <circle cx="256" cy="266" r="16" fill="#ffcc80"/>
      <circle cx="56" cy="364" r="15" fill="#fff59d"/>
      <circle cx="348" cy="372" r="16" fill="#fff59d"/>
    `
  },
  {
    id: 'strawberry', name: 'Strawberry', emoji: '🍓', cat: 'food',
    svg: `
      <rect width="400" height="400" fill="#dff3c4"/>
      <circle cx="52" cy="52" r="28" fill="#ffd54f"/>
      <ellipse cx="322" cy="58" rx="46" ry="22" fill="#ffffff"/>
      <rect y="336" width="400" height="64" fill="#8bc34a"/>
      <ellipse cx="200" cy="348" rx="178" ry="22" fill="#7cb342"/>
      <path d="M200 120c-78 0-134 42-134 102 0 62 62 142 134 142s134-80 134-142c0-60-56-102-134-102z" fill="#e8473c"/>
      <path d="M128 176c-22 20-32 46-30 74-14-36-2-68 30-74z" fill="#ef5350"/>
      <path d="M200 70c-12-28-42-38-72-28 10 18 26 30 48 34-34 4-58 20-66 42 36 0 64 6 82 20 18-14 46-20 82-20-8-22-32-38-66-42 22-4 38-16 48-34-30-10-60 0-72 28z" fill="#43a047"/>
      <rect x="190" y="38" width="20" height="40" rx="10" fill="#2e7d32"/>
      <circle cx="120" cy="228" r="9" fill="#fff59d"/>
      <circle cx="280" cy="228" r="9" fill="#fff59d"/>
      <circle cx="146" cy="290" r="9" fill="#fff59d"/>
      <circle cx="254" cy="290" r="9" fill="#fff59d"/>
      <circle cx="200" cy="318" r="9" fill="#fff59d"/>
      <circle cx="104" cy="282" r="8" fill="#fff59d"/>
      <circle cx="296" cy="282" r="8" fill="#fff59d"/>
      <circle cx="166" cy="206" r="19" fill="#ffffff"/>
      <circle cx="234" cy="206" r="19" fill="#ffffff"/>
      <circle cx="168" cy="210" r="11" fill="#2e2a26"/>
      <circle cx="232" cy="210" r="11" fill="#2e2a26"/>
      <path d="M174 252c16 18 36 18 52 0" fill="none" stroke="#b71c1c" stroke-width="11" stroke-linecap="round"/>
      <circle cx="138" cy="250" r="16" fill="#ef9a9a"/>
      <circle cx="262" cy="250" r="16" fill="#ef9a9a"/>
    `
  },
  {
    id: 'watermelon', name: 'Watermelon', emoji: '🍉', cat: 'food',
    svg: `
      <rect width="400" height="400" fill="#bfe9ff"/>
      <circle cx="52" cy="52" r="28" fill="#ffd54f"/>
      <ellipse cx="322" cy="58" rx="46" ry="22" fill="#ffffff"/>
      <rect y="336" width="400" height="64" fill="#8bc34a"/>
      <ellipse cx="200" cy="348" rx="178" ry="22" fill="#7cb342"/>
      <path d="M22 110h356c0 128-80 222-178 222S22 238 22 110z" fill="#2e7d32"/>
      <path d="M48 142h304c0 108-68 186-152 186S48 250 48 142z" fill="#fafafa"/>
      <path d="M68 164h264c0 94-58 160-132 160S68 258 68 164z" fill="#e8473c"/>
      <ellipse cx="128" cy="214" rx="12" ry="18" transform="rotate(-18 128 214)" fill="#2e2a26"/>
      <ellipse cx="272" cy="214" rx="12" ry="18" transform="rotate(18 272 214)" fill="#2e2a26"/>
      <ellipse cx="200" cy="296" rx="12" ry="18" fill="#2e2a26"/>
      <ellipse cx="136" cy="280" rx="11" ry="17" transform="rotate(-24 136 280)" fill="#2e2a26"/>
      <ellipse cx="264" cy="280" rx="11" ry="17" transform="rotate(24 264 280)" fill="#2e2a26"/>
      <rect x="22" y="96" width="356" height="24" rx="12" fill="#43a047"/>
      <circle cx="166" cy="212" r="20" fill="#ffffff"/>
      <circle cx="234" cy="212" r="20" fill="#ffffff"/>
      <circle cx="168" cy="216" r="11" fill="#2e2a26"/>
      <circle cx="232" cy="216" r="11" fill="#2e2a26"/>
      <path d="M172 252c16 18 40 18 56 0" fill="none" stroke="#b71c1c" stroke-width="11" stroke-linecap="round"/>
      <circle cx="56" cy="368" r="15" fill="#ef9a9a"/>
      <circle cx="348" cy="374" r="16" fill="#ef9a9a"/>
    `
  },
  {
    id: 'icecream', name: 'Ice cream', emoji: '🍦', cat: 'food',
    svg: `
      <rect width="400" height="400" fill="#bfe9ff"/>
      <circle cx="52" cy="52" r="28" fill="#ffd54f"/>
      <ellipse cx="322" cy="58" rx="46" ry="22" fill="#ffffff"/>
      <rect y="344" width="400" height="56" fill="#8bc34a"/>
      <path d="M126 236h148l-74 148z" fill="#e0a85c"/>
      <path d="M150 268l-18 18M178 268l-26 26M206 268l-26 26M234 268l-26 26M262 268l-26 26M196 316l-18 18M224 316l-18 18" fill="none" stroke="#c48a3c" stroke-width="9" stroke-linecap="round"/>
      <circle cx="200" cy="206" r="78" fill="#f48fb1"/>
      <circle cx="136" cy="166" r="56" fill="#ffca28"/>
      <circle cx="264" cy="166" r="56" fill="#a5d6a7"/>
      <circle cx="200" cy="112" r="64" fill="#fafafa"/>
      <path d="M160 72c12-16 32-24 50-22" fill="none" stroke="#ffffff" stroke-width="14" stroke-linecap="round"/>
      <path d="M126 192c-6 28 6 54 30 70M274 192c6 28-6 54-30 70" fill="none" stroke="#f8bbd0" stroke-width="14" stroke-linecap="round"/>
      <circle cx="172" cy="202" r="19" fill="#ffffff"/>
      <circle cx="228" cy="202" r="19" fill="#ffffff"/>
      <circle cx="174" cy="206" r="11" fill="#2e2a26"/>
      <circle cx="226" cy="206" r="11" fill="#2e2a26"/>
      <path d="M180 242c12 14 28 14 40 0" fill="none" stroke="#ad1457" stroke-width="10" stroke-linecap="round"/>
      <circle cx="152" cy="96" r="13" fill="#e8473c"/>
      <circle cx="248" cy="88" r="11" fill="#42a5f5"/>
      <circle cx="200" cy="58" r="12" fill="#66bb6a"/>
      <circle cx="56" cy="304" r="16" fill="#f48fb1"/>
      <circle cx="346" cy="318" r="18" fill="#a5d6a7"/>
    `
  },
  {
    id: 'cupcake', name: 'Cupcake', emoji: '🧁', cat: 'food',
    svg: `
      <rect width="400" height="400" fill="#dff3c4"/>
      <circle cx="52" cy="52" r="28" fill="#ffd54f"/>
      <ellipse cx="322" cy="58" rx="46" ry="22" fill="#ffffff"/>
      <rect y="344" width="400" height="56" fill="#8bc34a"/>
      <ellipse cx="200" cy="354" rx="178" ry="20" fill="#7cb342"/>
      <path d="M94 230h212l-26 132H120z" fill="#ef9a9a"/>
      <path d="M126 230l-10 132M166 230l-4 132M238 230l4 132M278 230l10 132" fill="none" stroke="#e8473c" stroke-width="15"/>
      <path d="M86 236c-14-22 0-46 24-50-6-34 24-58 56-48 10-30 54-36 72-10 32-14 62 8 58 40 30 6 38 42 14 68z" fill="#f48fb1"/>
      <path d="M110 190c-4-24 14-40 36-38" fill="none" stroke="#f8bbd0" stroke-width="16" stroke-linecap="round"/>
      <rect x="192" y="76" width="18" height="52" rx="8" fill="#42a5f5"/>
      <path d="M192 90h18M192 108h18" fill="none" stroke="#fafafa" stroke-width="7"/>
      <path d="M201 76c-14-14-6-30 6-32-6 14 0 22 10 26z" fill="#ffb300"/>
      <circle cx="124" cy="150" r="11" fill="#ffee58"/>
      <circle cx="276" cy="156" r="11" fill="#66bb6a"/>
      <circle cx="160" cy="118" r="10" fill="#42a5f5"/>
      <circle cx="244" cy="116" r="10" fill="#e8473c"/>
      <circle cx="168" cy="198" r="19" fill="#ffffff"/>
      <circle cx="232" cy="198" r="19" fill="#ffffff"/>
      <circle cx="170" cy="202" r="11" fill="#2e2a26"/>
      <circle cx="230" cy="202" r="11" fill="#2e2a26"/>
      <path d="M176 232c14 14 34 14 48 0" fill="none" stroke="#ad1457" stroke-width="10" stroke-linecap="round"/>
      <circle cx="140" cy="226" r="15" fill="#f8bbd0"/>
      <circle cx="260" cy="226" r="15" fill="#f8bbd0"/>
    `
  },
  {
    id: 'pizza', name: 'Pizza', emoji: '🍕', cat: 'food',
    svg: `
      <rect width="400" height="400" fill="#bfe9ff"/>
      <circle cx="52" cy="52" r="28" fill="#ffd54f"/>
      <ellipse cx="322" cy="58" rx="46" ry="22" fill="#ffffff"/>
      <rect y="340" width="400" height="60" fill="#c5a35a"/>
      <ellipse cx="200" cy="350" rx="178" ry="22" fill="#b08f45"/>
      <path d="M200 36L372 356H28z" fill="#e0a85c"/>
      <path d="M200 90L336 342H64z" fill="#ffca28"/>
      <circle cx="200" cy="316" r="30" fill="#e8473c"/>
      <circle cx="134" cy="286" r="26" fill="#e8473c"/>
      <circle cx="266" cy="286" r="26" fill="#e8473c"/>
      <circle cx="200" cy="222" r="26" fill="#e8473c"/>
      <circle cx="152" cy="178" r="20" fill="#e8473c"/>
      <circle cx="248" cy="178" r="20" fill="#e8473c"/>
      <path d="M176 258c10-14 28-14 38 0-10 14-28 14-38 0z" fill="#66bb6a"/>
      <path d="M110 330c10-14 28-14 38 0-10 14-28 14-38 0z" fill="#66bb6a"/>
      <path d="M254 332c10-14 28-14 38 0-10 14-28 14-38 0z" fill="#66bb6a"/>
      <path d="M186 130c8-12 22-12 30 0-8 12-22 12-30 0z" fill="#66bb6a"/>
      <circle cx="174" cy="246" r="20" fill="#ffffff"/>
      <circle cx="226" cy="246" r="20" fill="#ffffff"/>
      <circle cx="176" cy="250" r="11" fill="#2e2a26"/>
      <circle cx="224" cy="250" r="11" fill="#2e2a26"/>
      <path d="M180 288c14 14 32 14 44 0" fill="none" stroke="#8d6e63" stroke-width="10" stroke-linecap="round"/>
      <circle cx="56" cy="372" r="15" fill="#e0a85c"/>
      <circle cx="350" cy="376" r="16" fill="#e0a85c"/>
    `
  },
  {
    id: 'cake', name: 'Birthday cake', emoji: '🎂', cat: 'food',
    svg: `
      <rect width="400" height="400" fill="#f3e0f5"/>
      <circle cx="54" cy="56" r="26" fill="#ffd54f"/>
      <circle cx="346" cy="64" r="22" fill="#66bb6a"/>
      <circle cx="50" cy="176" r="18" fill="#42a5f5"/>
      <circle cx="356" cy="194" r="20" fill="#e8473c"/>
      <rect y="348" width="400" height="52" fill="#ce93d8"/>
      <rect x="40" y="258" width="320" height="94" rx="14" fill="#f48fb1"/>
      <rect x="72" y="186" width="256" height="78" rx="14" fill="#f8bbd0"/>
      <path d="M40 272c22-20 44-20 66 0s44 20 66 0 44-20 66 0 44 20 66 0 34-14 56-2v-14H40z" fill="#fafafa"/>
      <path d="M72 200c20-18 40-18 58 0s38 18 58 0 38-18 58 0 38 18 58 0 24-10 24-4v-12H72z" fill="#fafafa"/>
      <circle cx="104" cy="306" r="13" fill="#ffee58"/>
      <circle cx="170" cy="318" r="13" fill="#42a5f5"/>
      <circle cx="236" cy="306" r="13" fill="#66bb6a"/>
      <circle cx="300" cy="318" r="13" fill="#ffb300"/>
      <circle cx="136" cy="232" r="11" fill="#e8473c"/>
      <circle cx="200" cy="240" r="11" fill="#42a5f5"/>
      <circle cx="264" cy="232" r="11" fill="#66bb6a"/>
      <rect x="112" y="116" width="22" height="70" rx="8" fill="#42a5f5"/>
      <rect x="189" y="100" width="22" height="86" rx="8" fill="#e8473c"/>
      <rect x="266" y="116" width="22" height="70" rx="8" fill="#66bb6a"/>
      <rect x="112" y="136" width="22" height="12" fill="#fafafa"/>
      <rect x="189" y="124" width="22" height="12" fill="#fafafa"/>
      <rect x="266" y="136" width="22" height="12" fill="#fafafa"/>
      <path d="M123 116c-14-12-8-26 2-30-4 12 2 18 10 22z" fill="#ffb300"/>
      <path d="M200 100c-14-12-8-26 2-30-4 12 2 18 10 22z" fill="#ffb300"/>
      <path d="M277 116c-14-12-8-26 2-30-4 12 2 18 10 22z" fill="#ffb300"/>
    `
  },
  {
    id: 'carrot', name: 'Carrot', emoji: '🥕', cat: 'food',
    svg: `
      <rect width="400" height="400" fill="#bfe9ff"/>
      <circle cx="52" cy="52" r="28" fill="#ffd54f"/>
      <ellipse cx="322" cy="58" rx="46" ry="22" fill="#ffffff"/>
      <rect y="300" width="400" height="100" fill="#a98743"/>
      <ellipse cx="200" cy="312" rx="178" ry="26" fill="#8d6e63"/>
      <path d="M200 104c-50 0-84 24-84 48 0 68 48 230 84 230s84-162 84-230c0-24-34-48-84-48z" fill="#ff7043"/>
      <path d="M200 104c-30 0-50 16-52 34-4 56 18 182 40 226-6-66-14-184-6-230 2-18 10-28 18-30z" fill="#ff8a65"/>
      <path d="M148 196h104M154 254h92M166 310h68" fill="none" stroke="#e8591f" stroke-width="10" stroke-linecap="round"/>
      <path d="M200 110c-28-50-16-92 14-104-10 32-6 62 10 86z" fill="#43a047"/>
      <path d="M200 110c28-50 68-58 92-38-32 4-56 20-70 46z" fill="#2e7d32"/>
      <path d="M194 110c-40-38-80-38-100-18 32-2 62 10 82 26z" fill="#2e7d32"/>
      <path d="M200 110c0-54 22-84 50-86-24 22-34 50-32 86z" fill="#66bb6a"/>
      <circle cx="174" cy="166" r="18" fill="#ffffff"/>
      <circle cx="226" cy="166" r="18" fill="#ffffff"/>
      <circle cx="176" cy="170" r="10" fill="#2e2a26"/>
      <circle cx="224" cy="170" r="10" fill="#2e2a26"/>
      <path d="M182 204c12 12 24 12 36 0" fill="none" stroke="#c0441a" stroke-width="10" stroke-linecap="round"/>
      <circle cx="150" cy="200" r="14" fill="#ffab91"/>
      <circle cx="250" cy="200" r="14" fill="#ffab91"/>
      <circle cx="52" cy="346" r="18" fill="#8d6e63"/>
      <circle cx="356" cy="358" r="20" fill="#8d6e63"/>
    `
  },
  {
    id: 'cherries', name: 'Cherries', emoji: '🍒', cat: 'food',
    svg: `
      <rect width="400" height="400" fill="#dff3c4"/>
      <circle cx="52" cy="52" r="28" fill="#ffd54f"/>
      <ellipse cx="322" cy="58" rx="46" ry="22" fill="#ffffff"/>
      <rect y="336" width="400" height="64" fill="#8bc34a"/>
      <ellipse cx="200" cy="348" rx="178" ry="22" fill="#7cb342"/>
      <path d="M200 70c-44 48-70 108-66 164M200 70c44 48 78 102 84 152" fill="none" stroke="#5d4037" stroke-width="18" stroke-linecap="round"/>
      <path d="M200 70c30-28 68-30 94-8-30 2-60 10-82 26z" fill="#43a047"/>
      <path d="M198 72c-26-26-26-56-4-72-2 28 2 50 14 64z" fill="#2e7d32"/>
      <circle cx="128" cy="276" r="82" fill="#c62828"/>
      <circle cx="286" cy="266" r="76" fill="#e8473c"/>
      <circle cx="98" cy="240" r="24" fill="#ef5350"/>
      <circle cx="256" cy="232" r="22" fill="#ef9a9a"/>
      <circle cx="106" cy="266" r="15" fill="#ffffff"/>
      <circle cx="152" cy="266" r="15" fill="#ffffff"/>
      <circle cx="108" cy="270" r="9" fill="#2e2a26"/>
      <circle cx="150" cy="270" r="9" fill="#2e2a26"/>
      <path d="M112 302c12 12 28 12 38 0" fill="none" stroke="#7f1d1d" stroke-width="9" stroke-linecap="round"/>
      <circle cx="266" cy="258" r="14" fill="#ffffff"/>
      <circle cx="308" cy="258" r="14" fill="#ffffff"/>
      <circle cx="268" cy="262" r="8" fill="#2e2a26"/>
      <circle cx="306" cy="262" r="8" fill="#2e2a26"/>
      <path d="M270 292c12 10 26 10 36 0" fill="none" stroke="#7f1d1d" stroke-width="9" stroke-linecap="round"/>
      <circle cx="54" cy="368" r="15" fill="#e8473c"/>
      <circle cx="350" cy="374" r="16" fill="#e8473c"/>
    `
  },
  {
    id: 'castle', name: 'Castle', emoji: '🏰', cat: 'things',
    svg: `
      <rect width="400" height="400" fill="#9fdcff"/>
      <circle cx="56" cy="56" r="30" fill="#ffd54f"/>
      <ellipse cx="316" cy="64" rx="48" ry="24" fill="#ffffff"/>
      <ellipse cx="274" cy="76" rx="32" ry="18" fill="#ffffff"/>
      <rect y="318" width="400" height="82" fill="#7cb342"/>
      <ellipse cx="200" cy="330" rx="178" ry="24" fill="#689f38"/>
      <rect x="40" y="168" width="72" height="166" fill="#eceff1"/>
      <rect x="288" y="168" width="72" height="166" fill="#eceff1"/>
      <rect x="128" y="206" width="144" height="128" fill="#fafafa"/>
      <path d="M40 168l36-74 36 74z" fill="#e8473c"/>
      <path d="M288 168l36-74 36 74z" fill="#e8473c"/>
      <path d="M128 206l72-70 72 70z" fill="#c62828"/>
      <rect x="40" y="150" width="72" height="20" fill="#cfd8dc"/>
      <rect x="288" y="150" width="72" height="20" fill="#cfd8dc"/>
      <rect x="128" y="190" width="144" height="20" fill="#cfd8dc"/>
      <rect x="56" y="196" width="40" height="52" rx="20" fill="#42a5f5"/>
      <rect x="304" y="196" width="40" height="52" rx="20" fill="#42a5f5"/>
      <rect x="146" y="236" width="38" height="46" rx="19" fill="#42a5f5"/>
      <rect x="216" y="236" width="38" height="46" rx="19" fill="#42a5f5"/>
      <path d="M160 334v-46a40 40 0 0 1 80 0v46z" fill="#8d6e63"/>
      <path d="M200 248v86M160 300h80" fill="none" stroke="#5d4037" stroke-width="9"/>
      <circle cx="222" cy="306" r="8" fill="#ffd54f"/>
      <rect x="194" y="64" width="12" height="76" fill="#8d6e63"/>
      <path d="M206 70l54 20-54 20z" fill="#ffd54f"/>
      <rect x="70" y="60" width="11" height="38" fill="#8d6e63"/>
      <path d="M81 64l38 14-38 14z" fill="#42a5f5"/>
      <rect x="318" y="60" width="11" height="38" fill="#8d6e63"/>
      <path d="M329 64l38 14-38 14z" fill="#42a5f5"/>
    `
  },
  {
    id: 'lighthouse', name: 'Lighthouse', emoji: '🗼', cat: 'things',
    svg: `
      <rect width="400" height="400" fill="#1b4a7a"/>
      <circle cx="56" cy="46" r="7" fill="#ffe082"/>
      <circle cx="118" cy="90" r="5" fill="#ffe082"/>
      <circle cx="46" cy="150" r="6" fill="#ffe082"/>
      <circle cx="352" cy="46" r="30" fill="#fff9c4"/>
      <path d="M248 118l152-54v108z" fill="#ffee58"/>
      <path d="M248 118l152-26v52z" fill="#fff9c4"/>
      <rect y="300" width="400" height="100" fill="#0d3356"/>
      <path d="M0 322c46-18 68 14 112 0s68 14 112 0 66 14 112 0 46 8 64 0v-22H0z" fill="#1565c0"/>
      <path d="M0 400c20-70 70-108 130-108s110 38 130 108z" fill="#546e7a"/>
      <path d="M94 320h132l-20 72H114z" fill="#eceff1"/>
      <path d="M100 262h120l-6 58H106z" fill="#e8473c"/>
      <path d="M106 204h108l-6 58H112z" fill="#eceff1"/>
      <path d="M112 150h96l-6 54h-84z" fill="#e8473c"/>
      <rect x="100" y="134" width="120" height="20" rx="8" fill="#546e7a"/>
      <rect x="118" y="88" width="84" height="48" fill="#ffee58"/>
      <rect x="110" y="76" width="100" height="16" rx="6" fill="#37474f"/>
      <path d="M160 46l-18 30h36z" fill="#e8473c"/>
      <rect x="140" y="288" width="40" height="52" rx="20" fill="#37474f"/>
      <circle cx="130" cy="232" r="14" fill="#4fc3f7"/>
      <circle cx="190" cy="232" r="14" fill="#4fc3f7"/>
      <circle cx="160" cy="112" r="20" fill="#fff9c4"/>
    `
  },
  {
    id: 'windmill', name: 'Windmill', emoji: '🌬️', cat: 'things',
    svg: `
      <rect width="400" height="400" fill="#bfe9ff"/>
      <circle cx="54" cy="52" r="28" fill="#ffd54f"/>
      <ellipse cx="322" cy="60" rx="46" ry="22" fill="#ffffff"/>
      <ellipse cx="280" cy="72" rx="32" ry="17" fill="#ffffff"/>
      <rect y="312" width="400" height="88" fill="#8bc34a"/>
      <ellipse cx="200" cy="324" rx="178" ry="26" fill="#7cb342"/>
      <path d="M130 334l34-170h72l34 170z" fill="#eceff1"/>
      <path d="M164 164h72l10 50h-92z" fill="#fafafa"/>
      <path d="M156 110h88l-8 54h-72z" fill="#e8473c"/>
      <path d="M200 76l54 36H146z" fill="#c62828"/>
      <path d="M194 122l-150-34 6 44zM206 122l150 34-6-44zM194 128l-34 150 44-6zM206 128l34-150-44 6z" fill="#ffca28"/>
      <path d="M194 122l-150-34 6 22zM206 122l150 34-6-22zM194 128l-34 150 22-6zM206 128l34-150-22 6z" fill="#ffb300"/>
      <circle cx="200" cy="125" r="24" fill="#546e7a"/>
      <circle cx="200" cy="125" r="11" fill="#cfd8dc"/>
      <rect x="176" y="268" width="48" height="66" rx="8" fill="#8d6e63"/>
      <circle cx="214" cy="304" r="7" fill="#ffd54f"/>
      <rect x="148" y="222" width="36" height="36" rx="6" fill="#42a5f5"/>
      <rect x="220" y="222" width="36" height="36" rx="6" fill="#42a5f5"/>
      <circle cx="58" cy="348" r="14" fill="#fff59d"/>
      <circle cx="344" cy="356" r="15" fill="#ef9a9a"/>
    `
  },
  {
    id: 'teddy', name: 'Teddy bear', emoji: '🧸', cat: 'things',
    svg: `
      <rect width="400" height="400" fill="#f3e0f5"/>
      <circle cx="52" cy="52" r="26" fill="#ffd54f"/>
      <circle cx="350" cy="62" r="22" fill="#66bb6a"/>
      <circle cx="46" cy="190" r="18" fill="#42a5f5"/>
      <circle cx="358" cy="208" r="19" fill="#e8473c"/>
      <rect y="348" width="400" height="52" fill="#ce93d8"/>
      <ellipse cx="200" cy="268" rx="104" ry="94" fill="#bf8e5a"/>
      <ellipse cx="200" cy="286" rx="64" ry="66" fill="#f5e0c3"/>
      <ellipse cx="94" cy="256" rx="36" ry="54" transform="rotate(16 94 256)" fill="#a1764a"/>
      <ellipse cx="306" cy="256" rx="36" ry="54" transform="rotate(-16 306 256)" fill="#a1764a"/>
      <ellipse cx="136" cy="344" rx="46" ry="30" fill="#a1764a"/>
      <ellipse cx="264" cy="344" rx="46" ry="30" fill="#a1764a"/>
      <ellipse cx="136" cy="344" rx="24" ry="16" fill="#f5e0c3"/>
      <ellipse cx="264" cy="344" rx="24" ry="16" fill="#f5e0c3"/>
      <circle cx="116" cy="124" r="42" fill="#bf8e5a"/>
      <circle cx="284" cy="124" r="42" fill="#bf8e5a"/>
      <circle cx="116" cy="124" r="22" fill="#f5e0c3"/>
      <circle cx="284" cy="124" r="22" fill="#f5e0c3"/>
      <circle cx="200" cy="164" r="88" fill="#d4a373"/>
      <ellipse cx="200" cy="198" rx="52" ry="40" fill="#f5e0c3"/>
      <ellipse cx="200" cy="182" rx="20" ry="15" fill="#4e342e"/>
      <path d="M200 198v12M200 210c-9 12-23 10-27 0M200 210c9 12 23 10 27 0" fill="none" stroke="#8d6e63" stroke-width="7" stroke-linecap="round"/>
      <circle cx="166" cy="148" r="15" fill="#2e2a26"/>
      <circle cx="234" cy="148" r="15" fill="#2e2a26"/>
      <circle cx="171" cy="142" r="5" fill="#ffffff"/>
      <circle cx="239" cy="142" r="5" fill="#ffffff"/>
      <path d="M200 236c-26-20-56-10-56 12 0 18 26 26 56 10 30 16 56 8 56-10 0-22-30-32-56-12z" fill="#e8473c"/>
      <circle cx="200" cy="248" r="16" fill="#c62828"/>
    `
  },
  {
    id: 'kite', name: 'Kite', emoji: '🪁', cat: 'things',
    svg: `
      <rect width="400" height="400" fill="#9fdcff"/>
      <circle cx="56" cy="54" r="28" fill="#ffd54f"/>
      <ellipse cx="320" cy="68" rx="48" ry="24" fill="#ffffff"/>
      <ellipse cx="80" cy="176" rx="50" ry="24" fill="#ffffff"/>
      <ellipse cx="336" cy="214" rx="44" ry="22" fill="#ffffff"/>
      <rect y="350" width="400" height="50" fill="#8bc34a"/>
      <ellipse cx="200" cy="360" rx="178" ry="20" fill="#7cb342"/>
      <path d="M196 254c-30 24-24 54 4 62-20 20-14 46 10 54" fill="none" stroke="#8d6e63" stroke-width="9" stroke-linecap="round"/>
      <path d="M184 44L58 160l126 92z" fill="#e8473c"/>
      <path d="M184 44l126 116-126 92z" fill="#ffca28"/>
      <path d="M58 160l126 92V160z" fill="#1e88e5"/>
      <path d="M310 160l-126 92V160z" fill="#43a047"/>
      <path d="M184 44v208M58 160h252" fill="none" stroke="#fafafa" stroke-width="10"/>
      <path d="M160 288l44-18 10 44-46 16z" fill="#f48fb1"/>
      <path d="M186 336l44-18 10 44-46 16z" fill="#42a5f5"/>
      <circle cx="156" cy="142" r="19" fill="#ffffff"/>
      <circle cx="212" cy="142" r="19" fill="#ffffff"/>
      <circle cx="158" cy="146" r="11" fill="#2e2a26"/>
      <circle cx="210" cy="146" r="11" fill="#2e2a26"/>
      <path d="M162 188c14 14 34 14 48 0" fill="none" stroke="#5d4037" stroke-width="10" stroke-linecap="round"/>
      <circle cx="56" cy="372" r="14" fill="#fff59d"/>
      <circle cx="344" cy="378" r="15" fill="#ef9a9a"/>
    `
  },
  {
    id: 'snowman', name: 'Snowman', emoji: '⛄', cat: 'things',
    svg: `
      <rect width="400" height="400" fill="#b3d9f2"/>
      <circle cx="56" cy="54" r="26" fill="#fff9c4"/>
      <circle cx="320" cy="46" r="9" fill="#ffffff"/>
      <circle cx="356" cy="110" r="7" fill="#ffffff"/>
      <circle cx="46" cy="156" r="8" fill="#ffffff"/>
      <circle cx="104" cy="96" r="6" fill="#ffffff"/>
      <circle cx="298" cy="190" r="7" fill="#ffffff"/>
      <circle cx="60" cy="256" r="6" fill="#ffffff"/>
      <rect y="312" width="400" height="88" fill="#fafafa"/>
      <ellipse cx="200" cy="322" rx="178" ry="26" fill="#eceff1"/>
      <circle cx="200" cy="286" r="94" fill="#fafafa"/>
      <circle cx="200" cy="178" r="68" fill="#fafafa"/>
      <circle cx="200" cy="90" r="50" fill="#fafafa"/>
      <path d="M126 146c-42-8-62-28-64-52 20 22 44 32 72 30" fill="none" stroke="#8d6e63" stroke-width="13" stroke-linecap="round"/>
      <path d="M274 146c42-8 62-28 64-52-20 22-44 32-72 30" fill="none" stroke="#8d6e63" stroke-width="13" stroke-linecap="round"/>
      <path d="M152 42h96v-18c0-10-8-14-20-14h-56c-12 0-20 4-20 14z" fill="#37474f"/>
      <rect x="128" y="42" width="144" height="20" rx="8" fill="#263238"/>
      <rect x="152" y="26" width="96" height="14" fill="#e8473c"/>
      <path d="M140 134h120c14 0 14 24 0 24H140c-14 0-14-24 0-24z" fill="#e8473c"/>
      <path d="M248 158l10 54-32-10 8-44z" fill="#c62828"/>
      <path d="M200 92l44 14-44 14z" fill="#ff9800"/>
      <circle cx="178" cy="78" r="10" fill="#2e2a26"/>
      <circle cx="222" cy="78" r="10" fill="#2e2a26"/>
      <circle cx="176" cy="114" r="6" fill="#2e2a26"/>
      <circle cx="196" cy="120" r="6" fill="#2e2a26"/>
      <circle cx="216" cy="116" r="6" fill="#2e2a26"/>
      <circle cx="200" cy="186" r="15" fill="#263238"/>
      <circle cx="200" cy="240" r="15" fill="#263238"/>
      <circle cx="200" cy="294" r="15" fill="#263238"/>
    `
  }
];

export const sceneById = (id) => SCENES.find((s) => s.id === id) || SCENES[0];
