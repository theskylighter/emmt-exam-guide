**An illuminated solar cell behaves like a diode with a light-generated current subtracted, so its J-V curve is the diode curve shifted down; reading four numbers off that curve (Jsc, Voc, the maximum power point and the fill factor) tells you how good the cell is.**

## The Problem: How Do You Compare Two Cells?

A tiny lab cell and a large panel produce very different currents, and "it works in sunlight" says nothing about quality. We need a single graph, independent of size, that shows **how much voltage and current a cell can deliver together**, and a few numbers that summarise it.

That graph is the **J-V characteristic**: current **density** J (current divided by cell area, in mA/cm2) against voltage V. Using J instead of I removes the effect of cell size.

## The Idea in Plain Words

From the [construction lesson](04_5_solar_cell.html): in the dark, a solar cell is just a p-n diode. Light adds a current I_L flowing the **opposite way** to a diode's forward current. So:

```text
textbook (diode) sign:   J = J0 [ exp(qV / nkT) - 1 ] - J_L
solar-engineer sign:     J = J_L - J0 [ exp(qV / nkT) - 1 ]
```

- **J_L**: light-generated current density, proportional to light intensity.
- **J0**: the diode's tiny reverse saturation current density.
- **n**: ideality factor (1 to 2); **kT/q** = 0.0259 V at 300 K.

The second form is the first multiplied by -1. It just flips the useful part of the curve into the first quadrant.

:::analogy
Think of a water pump that must also push against a leak. J_L is how much water the sun pumps; the diode term is the leak, which grows rapidly as you build up pressure (voltage). With the outlet wide open you get the most flow but no pressure (Jsc). With the outlet closed you get the most pressure but no flow (Voc). Useful work needs both, so the best point is somewhere in between.
:::

## How It Works

<<SVG:solar_cell_jv>>

**Panel (a):** the blue **dark** curve is an ordinary diode. **Light shifts the whole curve down by J_L** (red). The part in the **fourth quadrant** (V > 0, J < 0) is where the cell delivers power.

**Panel (b):** the same illuminated curve flipped into the first quadrant, with its key points:

| Parameter | Meaning | Formula | Typical Si |
|---|---|---|---|
| **Short-circuit current density, Jsc** | current at V = 0 (terminals shorted); the **maximum current** | Jsc is approximately J_L | 35-42 mA/cm2 |
| **Open-circuit voltage, Voc** | voltage at J = 0 (no load); the **maximum voltage** | Voc = (nkT/q) ln(J_L/J0 + 1) | 0.6-0.7 V |
| **Maximum power point (Vm, Jm)** | the "knee", where P = V x J is largest | Pmax = Vm x Jm | about 0.55 V, 36 mA/cm2 |
| **Fill factor, FF** | how "square" the curve is | FF = (Vm x Jm) / (Voc x Jsc) | 0.75-0.85 |
| **Efficiency, eta** | electrical power out / light power in | eta = (FF x Voc x Jsc) / P_in | 20-26% (modern lab Si) |

**P_in = 100 mW/cm2** is the standard test condition ("1 sun", AM1.5 spectrum, 25 C).

### Reading the fill factor geometrically

In panel (b), the dashed box has area **Voc x Jsc**: the power you would get if the curve were a perfect rectangle. The shaded box has area **Vm x Jm = Pmax**. **FF is shaded area divided by dashed area.** A squarer curve fills more of the box.

### Worked example (the numbers in the figure)

Jsc = 38 mA/cm2, Voc = 0.63 V, FF = 0.83, P_in = 100 mW/cm2.

```text
eta = FF x Voc x Jsc / P_in
    = 0.83 x 0.63 V x 38 mA/cm2 / 100 mW/cm2
    = 19.9 mW/cm2 / 100 mW/cm2
    = 0.199, about 20 %
```

### What changes the curve

| Change | Effect |
|---|---|
| More light | Jsc rises **in proportion**; Voc rises only slightly (logarithmically) |
| Higher temperature | J0 rises sharply, so **Voc falls** (about -2 mV per C for Si) and efficiency drops; hot panels underperform |
| Series resistance (contacts, thin emitter) | curve leans over near Voc; **FF falls** |
| Shunt (leakage) resistance too low | flat top tilts down near Jsc; **FF falls** |

:::key
- Illuminated cell = diode curve **shifted by J_L**; it works in the **4th quadrant**.
- **Jsc** at V = 0, **Voc** at J = 0, **MPP** at the knee.
- **FF = VmJm / (VocJsc)**, about 0.8 for good Si.
- **eta = FF x Voc x Jsc / P_in**, with P_in = 100 mW/cm2.
:::

:::mistakes
- **Putting Pmax at Voc or at Jsc.** At both of those points the power is **zero** (J = 0 or V = 0). The maximum is at the knee.
- **Forgetting P_in in the efficiency.** Efficiency compares output to the light input, 100 mW/cm2 under standard conditions.
- **Drawing the illuminated curve through the origin.** Only the dark curve passes through the origin; the illuminated one is shifted by J_L.
- **Thinking more light raises Voc in proportion.** Voc grows only with the logarithm of J_L.
:::

:::exam
- *"Draw and explain the J-V characteristics of a solar cell. Define fill factor and efficiency."* Draw panel (b) with Jsc, Voc, MPP and the two rectangles; write the equation and the four definitions.
- Numerical: *"Find the efficiency given Voc, Jsc and FF"* (see Q2 below).
- Short: *"Why does efficiency fall with temperature?"*
:::

:::def
The **J-V characteristic** of a solar cell is the curve of current density against voltage under illumination, J = J_L - J0[exp(qV/nkT) - 1]. It intercepts the current axis at the **short-circuit current density Jsc** (approximately J_L) and the voltage axis at the **open-circuit voltage Voc** = (nkT/q) ln(J_L/J0 + 1). The **maximum power point** (Vm, Jm) gives Pmax = VmJm; the **fill factor** is FF = VmJm/(VocJsc); and the **efficiency** is eta = FF x Voc x Jsc / P_in.
:::

## Quick Check

:::q Q1 · What is the power output of a solar cell at open circuit? Why?
:::ans
**Zero.** At open circuit J = 0, and P = V x J. Likewise at short circuit V = 0, so P = 0 there too.
:::
:::

:::q Q2 · A Si cell has Voc = 0.6 V, Jsc = 35 mA/cm2 and FF = 0.8. Find its efficiency under 100 mW/cm2.
:::ans
eta = 0.8 x 0.6 x 35 / 100 = 16.8 / 100 = **16.8%**.
:::
:::

:::q Q3 · On a hot day a panel's Voc drops. Which term in the equation is responsible?
:::ans
**J0**, the saturation current density, which rises steeply with temperature. Since Voc = (nkT/q) ln(J_L/J0 + 1), a larger J0 gives a smaller Voc.
:::
:::
