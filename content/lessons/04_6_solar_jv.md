**An illuminated solar cell behaves like a diode with a light-generated current subtracted, so its J-V curve is the diode curve shifted down; reading four numbers off that curve ($J_{sc}$, $V_{oc}$, the maximum power point and the fill factor) tells you how good the cell is.**

## The Problem: How Do You Compare Two Cells?

A tiny lab cell and a large panel produce very different currents, and "it works in sunlight" says nothing about quality. We need a single graph, independent of size, that shows **how much voltage and current a cell can deliver together**, and a few numbers that summarise it.

That graph is the **J-V characteristic**: current **density** J (current divided by cell area, in mA/cm²) against voltage V. Using J instead of I removes the effect of cell size.

## The Idea in Plain Words

From the [construction lesson](04_5_solar_cell.html): in the dark, a solar cell is just a p-n diode. Light adds a current $I_L$ flowing the **opposite way** to a diode's forward current. So:

Textbook (diode) sign:

$$J = J_0\left[\exp\!\left(\frac{qV}{nkT}\right) - 1\right] - J_L$$

Solar-engineer sign:

$$J = J_L - J_0\left[\exp\!\left(\frac{qV}{nkT}\right) - 1\right]$$

- **$J_L$**: light-generated current density, proportional to light intensity.
- **$J_0$**: the diode's tiny reverse saturation current density.
- **n**: ideality factor (1 to 2); **kT/q** = 0.0259 V at 300 K.

The second form is the first multiplied by -1. It just flips the useful part of the curve into the first quadrant.

:::analogy
Think of a water pump that must also push against a leak. $J_L$ is how much water the sun pumps; the diode term is the leak, which grows rapidly as you build up pressure (voltage). With the outlet wide open you get the most flow but no pressure ($J_{sc}$). With the outlet closed you get the most pressure but no flow ($V_{oc}$). Useful work needs both, so the best point is somewhere in between.
:::

## How It Works

<<SVG:solar_cell_jv>>

**Watch it happen.** Skip to step 4 (Next three times), then drag the dot along the curve: the shaded rectangle is the power, largest at the maximum power point.

<<ANIM:solar_cell>>

**Panel (a):** the blue **dark** curve is an ordinary diode. **Light shifts the whole curve down by $J_L$** (red). The part in the **fourth quadrant** (V > 0, J < 0) is where the cell delivers power.

**Panel (b):** the same illuminated curve flipped into the first quadrant, with its key points:

| Parameter | Meaning | Formula | Typical Si |
|---|---|---|---|
| **Short-circuit current density, $J_{sc}$** | current at V = 0 (terminals shorted); the **maximum current** | $J_{sc}$ is approximately $J_L$ | 35-42 mA/cm² |
| **Open-circuit voltage, $V_{oc}$** | voltage at J = 0 (no load); the **maximum voltage** | $V_{oc} = \dfrac{nkT}{q}\ln\left(\dfrac{J_L}{J_0} + 1\right)$ | 0.6-0.7 V |
| **Maximum power point ($V_m$, $J_m$)** | the "knee", where P = V × J is largest | $P_{max}$ = $V_m$ x $J_m$ | about 0.55 V, 36 mA/cm² |
| **Fill factor, FF** | how "square" the curve is | $FF = \dfrac{V_m J_m}{V_{oc} J_{sc}}$ | 0.75-0.85 |
| **Efficiency, $\eta$** | electrical power out / light power in | $\eta = \dfrac{FF \cdot V_{oc} \cdot J_{sc}}{P_{in}}$ | 20-26% (modern lab Si) |

**$P_{in}$ = 100 mW/cm²** is the standard test condition ("1 sun", AM1.5 spectrum, 25 C).

### Reading the fill factor geometrically

In panel (b), the dashed box has area **$V_{oc}$ x $J_{sc}$**: the power you would get if the curve were a perfect rectangle. The shaded box has area **$V_m$ x $J_m$ = $P_{max}$**. **FF is shaded area divided by dashed area.** A squarer curve fills more of the box.

### Worked example (the numbers in the figure)

$J_{sc}$ = 38 mA/cm², $V_{oc}$ = 0.63 V, FF = 0.83, $P_{in}$ = 100 mW/cm².

$$\eta = \frac{FF \times V_{oc} \times J_{sc}}{P_{in}} = \frac{0.83 \times 0.63\ \text{V} \times 38\ \text{mA/cm}^2}{100\ \text{mW/cm}^2} = \frac{19.9\ \text{mW/cm}^2}{100\ \text{mW/cm}^2} = 0.199 \approx 20\%$$

### What changes the curve

| Change | Effect |
|---|---|
| More light | $J_{sc}$ rises **in proportion**; $V_{oc}$ rises only slightly (logarithmically) |
| Higher temperature | $J_0$ rises sharply, so **$V_{oc}$ falls** (about -2 mV per C for Si) and efficiency drops; hot panels underperform |
| Series resistance (contacts, thin emitter) | curve leans over near $V_{oc}$; **FF falls** |
| Shunt (leakage) resistance too low | flat top tilts down near $J_{sc}$; **FF falls** |

:::key
- Illuminated cell = diode curve **shifted by $J_L$**; it works in the **4th quadrant**.
- **$J_{sc}$** at V = 0, **$V_{oc}$** at J = 0, **MPP** at the knee.
- **$FF = V_m J_m / (V_{oc} J_{sc})$**, about 0.8 for good Si.
- **$\eta$ = FF x $V_{oc}$ x $J_{sc}$ / $P_{in}$**, with $P_{in}$ = 100 mW/cm².
:::

:::mistakes
- **Putting $P_{max}$ at $V_{oc}$ or at $J_{sc}$.** At both of those points the power is **zero** (J = 0 or V = 0). The maximum is at the knee.
- **Forgetting $P_{in}$ in the efficiency.** Efficiency compares output to the light input, 100 mW/cm² under standard conditions.
- **Drawing the illuminated curve through the origin.** Only the dark curve passes through the origin; the illuminated one is shifted by $J_L$.
- **Thinking more light raises $V_{oc}$ in proportion.** $V_{oc}$ grows only with the logarithm of $J_L$.
:::

:::exam
- *"Draw and explain the J-V characteristics of a solar cell. Define fill factor and efficiency."* Draw panel (b) with $J_{sc}$, $V_{oc}$, MPP and the two rectangles; write the equation and the four definitions.
- Numerical: *"Find the efficiency given $V_{oc}$, $J_{sc}$ and FF"* (see Q2 below).
- Short: *"Why does efficiency fall with temperature?"*
:::

:::def
The **J-V characteristic** of a solar cell is the curve of current density against voltage under illumination, $J = J_L - J_0[\exp(qV/nkT) - 1]$. It intercepts the current axis at the **short-circuit current density $J_{sc}$** (approximately $J_L$) and the voltage axis at the **open-circuit voltage** $V_{oc} = (nkT/q)\ln(J_L/J_0 + 1)$. The **maximum power point** ($V_m$, $J_m$) gives $P_{max} = V_m J_m$; the **fill factor** is $FF = V_m J_m/(V_{oc} J_{sc})$; and the **efficiency** is $\eta = FF \cdot V_{oc} \cdot J_{sc}/P_{in}$.
:::

## Quick Check

:::q Q1 · What is the power output of a solar cell at open circuit? Why?
:::ans
**Zero.** At open circuit J = 0, and P = V × J. Likewise at short circuit V = 0, so P = 0 there too.
:::
:::

:::q Q2 · A Si cell has $V_{oc}$ = 0.6 V, $J_{sc}$ = 35 mA/cm² and FF = 0.8. Find its efficiency under 100 mW/cm².
:::ans
$\eta = 0.8 \times 0.6 \times 35 / 100 = 16.8/100 =$ **16.8%**.
:::
:::

:::q Q3 · On a hot day a panel's $V_{oc}$ drops. Which term in the equation is responsible?
:::ans
**$J_0$**, the saturation current density, which rises steeply with temperature. Since $V_{oc} = (nkT/q)\ln(J_L/J_0 + 1)$, a larger $J_0$ gives a smaller $V_{oc}$.
:::
:::
