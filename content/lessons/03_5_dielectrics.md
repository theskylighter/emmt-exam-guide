**A dielectric is an insulator whose charges shift slightly in an electric field (polarization); that shift lets a capacitor store more charge, by a factor equal to the dielectric constant.** This midsem topic sits outside the main story, but it can still be asked.

## The Problem: Storing More Charge in a Small Space

A parallel-plate capacitor with vacuum between its plates stores only a little charge. Slip an insulator between the plates and, at the same voltage, it stores much more. Why does an insulator, which carries no current, help at all?

## The Idea in Plain Words

In an electric field the charges inside an insulator **shift** slightly: electron clouds distort, ions move, polar molecules rotate. Each shift creates a tiny dipole. Together they produce a **polarization P** whose field partly cancels the applied field, so the plates can hold **more charge** for the same voltage.

:::analogy
Rush-hour commuters packed between two doors. Nobody can leave (no current), but everyone leans toward the exit (polarization), which makes room for more people to squeeze in at the doors (more charge on the plates).
:::

## How It Works

How a dielectric lets the plates hold more charge. (a) With vacuum the plates carry $\pm Q_0$. (b) In the material, dipoles exist but point every which way. (c) The field lines them up: inside, the charges cancel, but a layer of net charge $-\Delta Q$ appears next to the positive plate and $+\Delta Q$ next to the negative one. The battery tops each plate up by $\Delta Q$, so the charge rises from $Q_0$ to $Q_0 + \Delta Q$ at the same voltage. The polarization is $P = \Delta Q / A$.

<<SVG:callister_fig12_30>>

| Relation | Meaning |
|---|---|
| $C_0 = \dfrac{\varepsilon_0 A}{l}$ | capacitance with vacuum |
| $C = \dfrac{\varepsilon A}{l} = \varepsilon_r C_0$ | with a dielectric ($\varepsilon_r$ = dielectric constant) |
| $D = \varepsilon_0 \mathcal{E} + P$ | dielectric displacement |
| $P = \varepsilon_0(\varepsilon_r - 1)\mathcal{E}$ | polarization |
| $\varepsilon_0 = 8.85 \times 10^{-12}\ \text{F/m}$ | permittivity of free space |

### Three types of polarization

<<SVG:callister_fig12_31>>

| Type | What shifts | Works up to about |
|---|---|---|
| **Electronic** | electron cloud relative to nucleus (all materials) | $10^{15}$ Hz |
| **Ionic** | cations and anions relative to each other (ionic solids) | $10^{12}$ Hz |
| **Orientation** | permanent dipoles rotate (polar molecules) | $10^{9}$ Hz |

Total P = P_electronic + P_ionic + P_orientation. As frequency rises, the slower mechanisms cannot keep up and drop out, so **$\varepsilon_r$ falls with frequency**.

:::key
- Dielectric: insulator that **polarizes**; C = $\varepsilon_r$ $C_0$.
- **D = $\varepsilon_0$ E + P**, **P = $\varepsilon_0$ ($\varepsilon_r$ - 1) E**.
- Electronic > ionic > orientation in frequency range; $\varepsilon_r$ falls with frequency.
:::

:::mistakes
- **"Polarization means current flows through the dielectric."** Charges only **shift** slightly; no current flows.
:::

:::exam
- Midsem recap: capacitance numericals and *"explain the types of polarization."* See your midsem notes and formula sheet.
:::

:::def
A **dielectric** is an electrically insulating material that becomes **polarized** in an electric field by electronic, ionic or orientation polarization. Its **dielectric constant** $\varepsilon_r = \varepsilon/\varepsilon_0$ is the factor by which it raises a capacitor's capacitance, $C = \varepsilon_r \varepsilon_0 A/l$, with $D = \varepsilon_0 \mathcal{E} + P$ and $P = \varepsilon_0(\varepsilon_r - 1)\mathcal{E}$.
:::

## Quick Check

:::q Q1 · A capacitor has $C_0$ = 10 pF in vacuum. A dielectric with $\varepsilon_r$ = 6 fills the gap. New capacitance?
:::ans
$C = \varepsilon_r C_0 = 6 \times 10 =$ **60 pF**.
:::
:::

:::q Q2 · Why does a polar material's dielectric constant drop at microwave frequencies?
:::ans
Above about $10^{9}$ Hz the permanent dipoles **cannot rotate fast enough**, so orientation polarization drops out and $\varepsilon_r$ falls.
:::
:::
