**Practice for Chapters 3 and 4: semiconductor devices, with a little midsem recap.** Attempt each question before opening the answer.

## A. Definitions and Short Answers

:::q A1 · What is a depletion region?
:::ans
The thin layer around a p-n junction that has been **emptied of mobile carriers**, leaving only fixed donor (+) and acceptor (-) ions. Their field opposes further diffusion. See [The p-n Junction](04_1_pn_junction.html).
:::
:::

:::q A2 · Why is the base of a transistor made thin and lightly doped?
:::ans
So that carriers injected from the emitter **cross it without recombining** and reach the collector, giving a large collector current and high gain.
:::
:::

:::q A3 · Define fill factor and efficiency of a solar cell.
:::ans
**FF = VmJm / (VocJsc)**, the squareness of the J-V curve. **eta = FF x Voc x Jsc / P_in**, electrical power out divided by light power in (P_in = 100 mW/cm2).
:::
:::

:::q A4 · Differentiate BJT and MOSFET (any four points).
:::ans
| | BJT | MOSFET |
|---|---|---|
| Control | base current | gate voltage (field) |
| Input current | appreciable | nearly zero |
| Carriers | minority (injected) | majority (channel) |
| Terminals | emitter, base, collector | source, gate, drain |
:::
:::

:::q A5 · What is the photovoltaic effect?
:::ans
The generation of a **voltage and current** in a material (here a p-n junction) when it absorbs light: photons create electron-hole pairs, and the junction field separates them.
:::
:::

## B. MCQ

:::q B1 · In forward bias, the p-side is connected to
(a) the negative terminal (b) the positive terminal (c) earth (d) either terminal
:::ans
**(b)** the positive terminal.
:::
:::

:::q B2 · The built-in field of a p-n junction points
(a) from p to n (b) from n to p (c) along the junction (d) nowhere; there is no field
:::ans
**(b)** from the positive donor ions (n-side) to the negative acceptor ions (p-side).
:::
:::

:::q B3 · For normal amplification in a BJT,
(a) both junctions forward (b) both reverse (c) emitter-base forward, collector-base reverse (d) emitter-base reverse, collector-base forward
:::ans
**(c)**.
:::
:::

:::q B4 · A solar cell delivers power in which quadrant of the textbook I-V plot?
(a) first (b) second (c) third (d) fourth
:::ans
**(d) fourth**: V positive, I negative.
:::
:::

:::q B5 · Group III dopants in silicon produce
(a) n-type (b) p-type (c) intrinsic (d) insulating silicon
:::ans
**(b) p-type** (acceptors).
:::
:::

## C. Numericals

:::q C1 · A transistor has I_B = 40 uA and beta = 125. Find I_C and I_E.
:::ans
I_C = beta I_B = 125 x 40 uA = **5 mA**. I_E = I_B + I_C = **5.04 mA**.
:::
:::

:::q C2 · A cell of area 100 cm2 has Voc = 0.62 V, Isc = 3.6 A and FF = 0.78 under 100 mW/cm2. Find Pmax and efficiency.
:::ans
Pmax = FF x Voc x Isc = 0.78 x 0.62 x 3.6 = **1.74 W**. P_in = 100 mW/cm2 x 100 cm2 = 10 W. eta = 1.74 / 10 = **17.4%**.
:::
:::

:::q C3 · Find Voc for a cell with J_L = 40 mA/cm2 and J0 = 10^-12 A/cm2 at 300 K (n = 1, kT/q = 0.0259 V).
:::ans
J_L / J0 = 0.04 / 10^-12 = 4 x 10^10. ln(4 x 10^10) = 24.41. Voc = 0.0259 x 24.41 = **0.632 V**.
:::
:::

## D. Long Answers

:::q D1 · Explain the construction and working of a p-n junction diode with its I-V characteristics. (10 marks)
:::ans
**Outline:** single crystal, p and n regions; formation of the depletion region and barrier; forward bias (Fig 12.20b), reverse bias (12.20c); I-V curve with knee, saturation current and breakdown (12.21); diode equation; rectification (12.22). Revise [p-n Junction](04_1_pn_junction.html) and [Diode Working](04_2_diode_working.html).
:::
:::

:::q D2 · Explain the construction and working of a junction transistor. How does it amplify? (10 marks)
:::ans
**Outline:** two junctions back to back, E/B/C with doping and thickness; J1 forward, J2 reverse (Fig 12.23); carrier injection and transit across the thin base (Fig 12.24); small input change gives large collector current change, about 0.1 mV to 10 mV; current relations; switching use; brief MOSFET. Revise [Junction Transistor](04_3_bjt.html) and [MOSFET](04_4_mosfet.html).
:::
:::

:::q D3 · Explain the construction and working of a solar cell and its J-V characteristics. (10 marks)
:::ans
**Outline:** labelled cross-section; four working steps; J-V equation; dark vs illuminated curve; Jsc, Voc, MPP, FF and efficiency with the rectangles; effect of light and temperature. Revise [Solar Cell](04_5_solar_cell.html) and [J-V Characteristics](04_6_solar_jv.html).
:::
:::
