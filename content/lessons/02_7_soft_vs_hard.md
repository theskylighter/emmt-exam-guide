**The shape of the hysteresis loop decides a magnetic material's job: a narrow loop (low coercivity) makes a soft magnet that switches easily with little loss; a wide loop (high coercivity, high remanence) makes a hard magnet that refuses to let go.**

## The Problem: One Material Cannot Do Both Jobs

A **transformer core** has its magnetization reversed 50 times every second, forever. A **fridge magnet** should keep its magnetization for decades, whatever happens. If you used a fridge-magnet material in a transformer, it would waste huge energy every cycle and overheat. If you used transformer iron as a fridge magnet, it would fall off. Engineers need a rule for choosing.

## The Idea in Plain Words

Look at the [hysteresis loop](02_5_hysteresis.html):

- **Soft** magnetic material: **tall, narrow** loop. Easy to magnetise, easy to demagnetise, little energy lost per cycle.
- **Hard** magnetic material: **wide, fat** loop. Hard to magnetise, but once magnetised it **keeps** a large remanence and resists demagnetisation.

:::analogy
A soft magnet is a sponge: it soaks up the field easily and squeezes out just as easily. A hard magnet is a stubborn memory: it takes effort to teach, but it never forgets.
:::

## How It Works

<<SVG:askeland_fig20_9>>

- **(a)** Soft magnet for electrical applications: tall and narrow. Hard magnet for permanent magnets: wide. Square loop for computer applications (memory).
- **(b)** The dividing line is the **coercivity** (Askeland): **$H_c$ below $10^{3}$ A/m: soft; $H_c$ above $10^{4}$ A/m: hard**; in between: semi-hard (recording media).

### Coercivity depends on microstructure, saturation does not

- **Saturation magnetization** depends only on **composition**, like Young's modulus.
- **Coercivity** is **microstructure-sensitive**, like yield strength: grain boundaries, pores, particle shape and crystal direction all change it.
- To make a material **soft**, let domain walls move freely: large clean grains, few defects, grain-oriented (textured) sheet.
- To make it **hard**, **pin** the walls: fine particles, precipitates, defects, elongated particles.

### Soft magnetic materials

Requirements (Askeland): **high saturation magnetization, high permeability, small coercive field, small remanence, small hysteresis loop, rapid response to high-frequency fields, and high electrical resistivity** (to limit eddy currents).

<<SVG:askeland_table20_4>>

### Hard (permanent) magnetic materials

Requirements: **high remanence, high permeability, high coercive field, large hysteresis loop, and high power, i.e. a large $(BH)_{max}$.**

<<SVG:askeland_table20_6>>

### The energy product (BH)max

The **power** of a permanent magnet is the **area of the largest rectangle that fits in the second (or fourth) quadrant** of its B-H loop. It measures the energy needed to demagnetise it. To make it large, **both $B_r$ and $H_c$ must be large**.

<<SVG:askeland_fig20_10>>

Figure 20-10(b) is a story of its own: magnet strength grew roughly **twentyfold in the 20th century**, from steels (1920s) to **Alnicos** (1930s), **ferrites** (1950s), **Sm-Co** (1960s-70s) and **Nd-Fe-B** (1984, found independently by Sagawa at Sumitomo and Croat at General Motors). Nd-Fe-B holds the record, about **445 kJ/m³**.

<<SVG:askeland_fig20_11:compact>>

:::example
**Finding $(BH)_{max}$ (Askeland Example 20-3).** On the fourth-quadrant curve in Fig 20-11, try a rectangle at each marked H and compute B × H. The product rises, peaks, then falls; the largest one is $(BH)_{max}$. In practice you read B at several H values, multiply, and pick the maximum.
:::

## The Comparison

| Property | Soft magnetic | Hard magnetic |
|---|---|---|
| Hysteresis loop | **narrow**, small area | **wide**, large area |
| Coercivity $H_c$ | **low** (below $10^{3}$ A/m) | **high** (above $10^{4}$ A/m) |
| Remanence $B_r$ | low | **high** |
| Permeability | **very high** | lower |
| Saturation magnetization | high | high |
| Energy loss per cycle | **low** | high |
| Magnetised and demagnetised | **easily** | with difficulty |
| Electrical resistivity | high preferred (low eddy loss) | not critical |
| $(BH)_{max}$ | small | **large** |
| Domain walls | move **freely** (few defects, large grains) | **pinned** (fine particles, precipitates) |
| Examples | pure iron, **Fe-3% Si** (grain-oriented), **permalloy** (Fe-Ni), **Metglas** (amorphous), **MnZn/NiZn ferrites** | **Alnico**, **Ba ferrite** (BaFe12O19), **Sm-Co**, **Nd2Fe14B**, Co steel |
| Applications | transformer, motor and generator cores, electromagnets, inductors, relays | permanent magnets in motors, generators, loudspeakers, meters, separators |

:::key
- **Coercivity** is the dividing line: below $10^{3}$ A/m soft, above $10^{4}$ A/m hard.
- Soft: narrow loop, high permeability, low loss: **cores**.
- Hard: wide loop, high $B_r$ and $H_c$, large **$(BH)_{max}$**: **permanent magnets**.
- Coercivity is microstructure-sensitive; saturation is not.
:::

:::mistakes
- **"Hard magnets have higher saturation magnetization."** Not necessarily; the difference is **coercivity and remanence**, not $M_s$.
- **"Soft magnets are weak magnets."** They carry very **large** flux when a current is on; they just do not keep it.
- **Defining $(BH)_{max}$ as the loop area.** It is the largest **rectangle** in the second quadrant, not the whole area.
:::

:::exam
- *"Differentiate between soft and hard magnetic materials"* (assignment question, 5-8 marks). Draw both loops on one axis (Fig 20-9a), then the comparison table with examples and applications.
- *"What is $(BH)_{max}$? Why should it be large for a permanent magnet?"*
:::

:::def
**Soft magnetic materials** have a narrow hysteresis loop with low coercivity (below about $10^{3}$ A/m), low remanence and high permeability, so they are magnetised and demagnetised easily with little energy loss; they are used for transformer and motor cores. **Hard magnetic materials** have a wide loop with high coercivity (above about $10^{4}$ A/m), high remanence and a large energy product $(BH)_{max}$, so they retain their magnetization; they are used as permanent magnets.
:::

## Quick Check

:::q Q1 · A material has $H_c$ = 50 A/m. Soft or hard, and what would you use it for?
:::ans
**Soft** (well below $10^{3}$ A/m). Use it for a **transformer or motor core**, where low loss per cycle matters.
:::
:::

:::q Q2 · Why are Fe-Si transformer steels made "grain-oriented"?
:::ans
The grains are aligned so that the **easy magnetisation direction** lies along the sheet, letting domain walls move easily. This lowers coercivity and **energy loss** per cycle.
:::
:::

:::q Q3 · Why must both $B_r$ and $H_c$ be large for a strong permanent magnet?
:::ans
$(BH)_{max}$ is a rectangle in the second quadrant bounded by **$B_r$** on the B axis and **$H_c$** on the H axis. If either is small, the largest rectangle is small.
:::
:::
