**A solar cell is a large-area p-n junction: light creates electron-hole pairs, and the junction's built-in field pulls them apart before they can recombine, so a voltage appears and a current can flow through a load.** This is the photovoltaic effect.

## The Problem: Power Where There Are No Wires

In 1953 Bell Labs needed power for **remote telephone repeater stations** in hot, humid places where batteries kept failing. Sunlight was free and everywhere, but the only light-to-electricity devices were **selenium cells** from 1883 that were about **1% efficient**: a curiosity, not a power source.

## The Story: Ohl's Crack, Full Circle

- **1839**: 19-year-old **Edmond Becquerel** saw that light on electrodes in a solution produced a voltage, the first observation of the **photovoltaic effect**.
- **1883**: Charles Fritts built a selenium cell, about 1% efficient.
- **1940**: Russell Ohl's cracked silicon rod made a voltage under light (see [The p-n Junction](04_1_pn_junction.html)).
- **1953-54**: **Daryl Chapin** was struggling with selenium. **Calvin Fuller** (a chemist) and **Gerald Pearson** (a physicist) were making doped silicon junctions for *transistors* and noticed how strongly they responded to light. Pearson told Chapin to switch to silicon.
- **25 April 1954**: Bell Labs demonstrated the **"Bell Solar Battery"**, about **6% efficient**, running a toy Ferris wheel on sunlight.
- **1958**: the **Vanguard 1** satellite flew on solar cells. Solar power ran the space age before it reached rooftops.

:::note
One structure, three devices: a p-n junction with current in is a **diode**; with current in and light out it is an **LED**; with light in and current out it is a **solar cell**.
:::

## The Idea in Plain Words

A photon with energy at least equal to the band gap (**$h\nu \geq E_g$**, with $E_g$ = 1.1 eV for Si) lifts an electron from the valence band into the conduction band, creating an **electron-hole pair** (see [Conduction and Energy Bands](03_1_conduction_bands.html)). In plain silicon the pair would just recombine and give off heat. **Near a junction, the built-in field separates them**: electrons go to the n-side, holes to the p-side. The charges pile up and give a voltage.

:::analogy
The depletion region is a permanent slope. Light keeps dropping marbles of two colours onto it: blue marbles (electrons) always roll one way, red ones (holes) the other. They collect at opposite ends, and connecting the two ends with a wire lets them flow round and meet, which is the current that does useful work.
:::

## Construction

<<SVG:solar_cell_construction>>

**Watch it happen.** A photon makes an electron-hole pair, the junction field separates it, and electrons flow round the load. The last steps lead into the J-V curve.

<<ANIM:solar_cell>>

| Layer (top to bottom) | What it is | Why it is there |
|---|---|---|
| **Front metal grid** | thin metal fingers and busbars; the **negative** terminal | collects electrons while leaving most of the surface open to light |
| **Anti-reflection coating** | thin transparent film (Si₃N₄ or SiO₂), often on a textured surface | bare silicon reflects about a third of the light; the coating cuts this to a few percent |
| **n+ emitter** | very thin (about 0.3-1 um), heavily doped n-type | light must pass through it to reach the junction |
| **p-n junction (depletion region)** | built-in field E pointing from n to p | **separates** the pairs: the engine of the cell |
| **p-type base** | thick (about 150-200 um), lightly doped | absorbs most of the light and generates most pairs |
| **Back metal contact** | usually aluminium; the **positive** terminal | collects holes |

## Working, Step by Step

1. **Absorption**: a photon with $h\nu \geq E_g$ creates an **electron-hole pair** in the base or emitter.
2. **Diffusion to the junction**: pairs created within about one diffusion length of the depletion region reach its field.
3. **Separation**: the built-in field sweeps **electrons to the n-side** and **holes to the p-side**.
4. **Photovoltage**: the n-side charges negative and the p-side positive. With no load connected this is the **open-circuit voltage $V_{oc}$**.
5. **Photocurrent**: with a load connected, electrons leave the n-side through the front grid, flow through the load and return to the p-side via the back contact, where they recombine with holes. This **light-generated current $I_L$** is proportional to the light intensity.

:::warn
The cell is **not** biased by a battery. It generates its own voltage and pushes current **out of its positive terminal**, so it works in the **fourth quadrant** of the diode's I-V curve (V positive, I negative): it delivers power instead of using it. The next lesson, [J-V Characteristics](04_6_solar_jv.html), shows this on the graph.
:::

:::key
- A solar cell is a **large-area p-n junction** close to the surface.
- **Photon ($h\nu \geq E_g$) → electron-hole pair → field separates them → voltage and current.**
- Layers: front grid (-), anti-reflection coating, thin n+ emitter, junction, thick p-base, back contact (+).
- Photocurrent is proportional to light intensity.
:::

:::mistakes
- **"Any light works."** Photons with energy below $E_g$ (wavelength longer than about 1.1 um for Si) pass through without making pairs.
- **"The emitter should be thick to absorb light."** It is thin so that light reaches the junction; the thick **base** does most of the absorbing.
- **"The front contact covers the whole surface."** It is a thin finger grid, otherwise it would block the light.
- **Mixing up terminals.** Electrons collect at the **n-side (front, negative)**; holes at the **p-side (back, positive)**.
:::

:::exam
- *"Explain the construction and working of a solar cell"* is usually paired with *"draw and explain its J-V characteristics"* (8-10 marks). Draw the cross-section with labels, then write the four working steps, then go to the J-V curve.
- Short: *"What is the photovoltaic effect?"*, *"Why is an anti-reflection coating used?"*
:::

:::def
A **solar cell** is a large-area p-n junction that converts light directly into electricity by the **photovoltaic effect**. It has a thin, heavily doped n+ emitter on a thick p-type base, a front metal grid, an anti-reflection coating and a back contact. Photons with energy at least $E_g$ create electron-hole pairs; the built-in field of the junction separates them (electrons to n, holes to p), producing a photovoltage and, through an external load, a photocurrent.
:::

## Quick Check

:::q Q1 · Why does a solar cell need a junction at all? Why not just shine light on plain p-type silicon?
:::ans
Light would still create electron-hole pairs, but with **no built-in field** to separate them they would simply **recombine** and give off heat. The junction's field is what pulls them apart and creates a voltage.
:::
:::

:::q Q2 · Which terminal of the cell is positive, and why?
:::ans
The **back contact on the p-side**. The field pushes holes to the p-side, so it charges positive; electrons go to the n-side (front), which charges negative.
:::
:::

:::q Q3 · What was the first practical silicon solar cell, and how efficient was it?
:::ans
The **Bell Solar Battery** (Chapin, Fuller and Pearson, Bell Labs, demonstrated 25 April 1954), about **6%** efficient.
:::
:::
