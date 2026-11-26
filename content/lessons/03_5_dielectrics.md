**A dielectric is an insulator whose charges shift slightly in an electric field (polarization); that shift lets a capacitor store more charge, by a factor equal to the dielectric constant.** This midsem topic sits outside the main story, but it can still be asked.

## The Problem: Storing More Charge in a Small Space

A parallel-plate capacitor with vacuum between its plates stores only a little charge. Slip an insulator between the plates and, at the same voltage, it stores much more. Why does an insulator, which carries no current, help at all?

## The Idea in Plain Words

In an electric field the charges inside an insulator **shift** slightly: electron clouds distort, ions move, polar molecules rotate. Each shift creates a tiny dipole. Together they produce a **polarization P** whose field partly cancels the applied field, so the plates can hold **more charge** for the same voltage.

:::analogy
Rush-hour commuters packed between two doors. Nobody can leave (no current), but everyone leans toward the exit (polarization), which makes room for more people to squeeze in at the doors (more charge on the plates).
:::

## How It Works

```text
C0 = eps0 A / l                  (vacuum)
C  = eps A / l = eps_r C0        (with dielectric; eps_r = dielectric constant)
D  = eps0 E + P                  (dielectric displacement)
P  = eps0 (eps_r - 1) E
eps0 = 8.85 x 10^-12 F/m
```

### Three types of polarization

| Type | What shifts | Works up to about |
|---|---|---|
| **Electronic** | electron cloud relative to nucleus (all materials) | 10^15 Hz |
| **Ionic** | cations and anions relative to each other (ionic solids) | 10^12 Hz |
| **Orientation** | permanent dipoles rotate (polar molecules) | 10^9 Hz |

Total P = P_electronic + P_ionic + P_orientation. As frequency rises, the slower mechanisms cannot keep up and drop out, so **eps_r falls with frequency**.

:::key
- Dielectric: insulator that **polarizes**; C = eps_r C0.
- **D = eps0 E + P**, **P = eps0 (eps_r - 1) E**.
- Electronic > ionic > orientation in frequency range; eps_r falls with frequency.
:::

:::mistakes
- **"Polarization means current flows through the dielectric."** Charges only **shift** slightly; no current flows.
:::

:::exam
- Midsem recap: capacitance numericals and *"explain the types of polarization."* See your midsem notes and formula sheet.
:::

:::def
A **dielectric** is an electrically insulating material that becomes **polarized** in an electric field by electronic, ionic or orientation polarization. Its **dielectric constant** eps_r = eps/eps0 is the factor by which it raises a capacitor's capacitance, C = eps_r eps0 A/l, with D = eps0 E + P and P = eps0(eps_r - 1)E.
:::

## Quick Check

:::q Q1 · A capacitor has C0 = 10 pF in vacuum. A dielectric with eps_r = 6 fills the gap. New capacitance?
:::ans
C = eps_r C0 = 6 x 10 = **60 pF**.
:::
:::

:::q Q2 · Why does a polar material's dielectric constant drop at microwave frequencies?
:::ans
Above about 10^9 Hz the permanent dipoles **cannot rotate fast enough**, so orientation polarization drops out and eps_r falls.
:::
:::
