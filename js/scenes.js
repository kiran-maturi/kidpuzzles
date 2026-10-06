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
  },
  {
    id: 'dog', name: 'Dog', emoji: '🐶',
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
    id: 'owl', name: 'Owl', emoji: '🦉',
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
    id: 'penguin', name: 'Penguin', emoji: '🐧',
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
    id: 'frog', name: 'Frog', emoji: '🐸',
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
    id: 'bee', name: 'Bee', emoji: '🐝',
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
    id: 'turtle', name: 'Turtle', emoji: '🐢',
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
    id: 'elephant', name: 'Elephant', emoji: '🐘',
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
    id: 'lion', name: 'Lion', emoji: '🦁',
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
    id: 'balloon', name: 'Balloon', emoji: '🎈',
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
    id: 'plane', name: 'Aeroplane', emoji: '✈️',
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
    id: 'digger', name: 'Digger', emoji: '🚜',
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
    id: 'robot', name: 'Robot', emoji: '🤖',
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
  }
];

export const sceneById = (id) => SCENES.find((s) => s.id === id) || SCENES[0];
