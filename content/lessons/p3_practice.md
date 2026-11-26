**A probable endsem paper built on the exact pattern sir shared.** Each question has a likelihood tag, a 5-mark answer skeleton and the diagram to draw. Each skeleton also links to the lesson that explains it in full.

:::note
**The real pattern (from sir):**

- Draw schematic diagrams wherever possible.
- **Q1:** attempt **any 5 of 7** sub-questions, 5 marks each (25 marks).
- **Q2, Q3, Q4:** compulsory, 5 marks each (15 marks).
- **Q5:** compulsory, **four numericals** of 2.5 marks each (10 marks).
- **Total: 50 marks.**
:::

## How these questions were picked

Sir's own list sets the targets: **p-n junction diode, transistors, solar cell with J-V characteristics**, plus the three assignments (**soft vs hard materials and the B-H loop**, **Curie temperature**, **three industrial applications**). Q2-Q4 are compulsory, so they almost certainly cover the three device topics sir named, one each. The magnetic assignments then fit naturally as the choice questions in Q1, with one or two midsem topics (about 20%) filling the rest. Q5's four numericals need formulas, and only a few topics have them: solar efficiency, B-H-M, transistor currents, and Hall effect or conductivity.

| Tag | Meaning |
|---|---|
| **Very likely** | Named by sir or set as an assignment |
| **Likely** | A core topic of the chapter, with a standard textbook question |
| **Possible** | Midsem material (about 20%) or a variant of a likely question |

:::tip
**Strategy for Q1.** Prepare all seven, but be bulletproof on (a)-(d): they are the assignments, so you already have answers written. Aim to attempt (a), (b), (c), (d) and (e). Keep (f) and (g) as backups in case one of the others is twisted.
:::

## Question 1 · Attempt any FIVE (5 x 5 = 25 marks)

:::q 1(a) · Explain the ferromagnetic hysteresis (B-H) loop with the help of domain theory. Define remanence and coercivity. [Very likely, Assignment 1]
:::ans
**Diagram:** the full loop with $B_s$, $B_r$, $H_c$ and the first magnetization curve labelled (Askeland Fig 20-7).

<<SVG:askeland_fig20_7>>

1. **Definition:** when the field H on a ferromagnet is cycled, B lags behind H and traces a closed loop: the hysteresis loop.
2. **Virgin curve:** the domains start randomly oriented, so B = 0. As H rises, domains aligned with the field **grow by Bloch-wall motion**, then the rest **rotate**, until **saturation $B_s$** is reached.
3. **Remove the field:** the walls do not all move back (the motion is irreversible), so B falls only to the **remanence $B_r$**. The material is now a permanent magnet.
4. **Reverse the field:** a reverse field equal to the **coercivity $H_c$** is needed to bring B back to zero.
5. **Keep cycling:** the material saturates in the reverse direction and returns, closing the loop.
6. **Loop area** = energy lost as heat per cycle (hysteresis loss).
7. **Shape decides use:** a narrow loop means a soft material (cores); a wide loop means a hard material (magnets).

Full answer: [The Hysteresis Loop](02_5_hysteresis.html).
:::
:::

:::q 1(b) · Differentiate between soft and hard magnetic materials, with examples and one application of each. [Very likely, Assignment 1]
:::ans
**Diagram:** two loops on the same axes, one narrow (soft) and one wide (hard) (Askeland Fig 20-9).

<<SVG:askeland_fig20_9>>

| Property | Soft | Hard |
|---|---|---|
| Loop | narrow, small area | wide, large area |
| Coercivity $H_c$ | low, $< 10^3$ A/m | high, $> 10^4$ A/m |
| Remanence $B_r$ | low | high |
| Permeability | high | low |
| Hysteresis loss | low | high |
| $(BH)_{max}$ | small | large |
| Magnetized | easily, and easily reversed | with difficulty, and kept permanently |
| Examples | Fe-3% Si, permalloy (Ni-Fe), Metglas, soft ferrites | Alnico, hard ferrites, Sm-Co, Nd-Fe-B |
| Uses | transformer, motor and generator cores; inductors | permanent magnets, speakers, motors |

Write at least 6 rows and give one example for each type. Full answer: [Soft vs Hard](02_7_soft_vs_hard.html).
:::
:::

:::q 1(c) · Define Curie temperature. Explain the effect of temperature on the magnetic properties of a ferromagnetic material. [Very likely, Assignment 2]
:::ans
**Diagram:** the loops shrinking as T rises, plus remanence against temperature falling to zero at $T_c$ (Askeland Fig 20-8).

<<SVG:askeland_fig20_8>>

1. **Definition:** the Curie temperature $T_c$ is the temperature above which a ferromagnetic (or ferrimagnetic) material loses its spontaneous magnetization and becomes **paramagnetic**.
2. **Reason:** two effects compete. Exchange interaction keeps the spins aligned; thermal vibration randomizes them. At $T_c$ thermal energy wins and the domains disappear.
3. **Effect on the loop:** as T rises, $M_s$, $B_r$ and $H_c$ all **decrease** and the loop shrinks. At $T_c$ the remanence becomes zero.
4. **Above $T_c$**, the **Curie-Weiss law** holds: $\chi = \frac{C}{T - T_c}$.
5. **Values:** Fe 771 °C, Co 1117 °C, Ni 358 °C, Gd 16 °C, Nd₂Fe₁₄B 312 °C.
6. **Practical point:** a magnet must work well below its $T_c$. Nd-Fe-B's low $T_c$ limits it in hot motors, so Sm-Co is used at high temperature.

Full answer: [Curie Temperature](02_6_curie_temperature.html).
:::
:::

:::q 1(d) · Explain any three industrial applications of magnetic materials, naming the material and the property required in each. [Very likely, Assignment 3]
:::ans
**Diagram:** the loop shape for each application: narrow, wide and square.

1. **Transformer, motor and generator cores (soft):** the core is cycled 50-60 times a second, so it needs a narrow loop (low hysteresis loss), high permeability, high saturation and high resistivity (low eddy-current loss). Materials: **Fe-3% Si laminations**, Metglas (amorphous), and **ferrites** for high frequency.
2. **Permanent magnets in motors, generators and speakers (hard):** they need high $B_r$, high $H_c$ and a large $(BH)_{max}$. Materials: **Nd-Fe-B** (EV motors, wind turbines, hard-disk actuators), Sm-Co (high temperature), Alnico, and hard ferrites (cheap speakers).
3. **Magnetic data storage (square loop):** a bit is a region magnetized up (1) or down (0). It needs a **square loop** with moderate $H_c$: easy to write, but it must not erase on its own. Materials: **γ-Fe₂O₃**, CrO₂, and Co-Pt-Cr thin films on hard disks.

For each application write the property, the material and the reason. Full answer: [Three Industrial Applications](02_8_applications.html).
:::
:::

:::q 1(e) · Classify magnetic materials as dia-, para-, ferro-, antiferro- and ferrimagnetic, with susceptibility and examples. [Likely]
:::ans
**Diagram:** arrow pictures of the dipole arrangement for each type (Askeland Fig 20-3), and B against H.

<<SVG:askeland_fig20_3>>

| Type | Dipoles | $\chi$ | Examples |
|---|---|---|---|
| Diamagnetic | none; an induced moment opposes H | about $-10^{-6}$ | Cu, Ag, Si, Au |
| Paramagnetic | random, partly align with H | $10^{-6}$ to $10^{-4}$ | Al, Ti, Cu alloys |
| Ferromagnetic | aligned in domains | up to $10^6$ | Fe, Co, Ni, Gd |
| Antiferromagnetic | equal moments, antiparallel | small, positive | MnO, NiO |
| Ferrimagnetic | unequal moments, antiparallel | large | ferrites (Fe₃O₄, spinels) |

Full answer: [Five Kinds of Magnetic Behaviour](02_3_types_of_magnetism.html).
:::
:::

:::q 1(f) · Explain the Hall effect. How does it determine the type and concentration of charge carriers? [Possible, midsem]
:::ans
**Diagram:** a rectangular slab with $I_x$ along x, $B_z$ along z and $V_H$ measured across y, showing the carriers deflected to one face.

1. A current $I_x$ flows through a slab placed in a perpendicular field $B_z$.
2. The Lorentz force pushes the carriers sideways, so charge builds up on one face and a transverse **Hall voltage** appears: $V_H = \frac{R_H I_x B_z}{d}$.
3. **The sign gives the carrier type:** $R_H = -\frac{1}{n|e|}$ for electrons (n-type) and $R_H = +\frac{1}{p|e|}$ for holes (p-type).
4. **The magnitude gives the concentration:** $n = \frac{1}{|R_H|\,|e|}$.
5. **Mobility:** $\mu = |R_H|\,\sigma$.
6. **Uses:** characterizing semiconductors, and Hall sensors (current, position, speed).

Full answer: [The Hall Effect](03_3_hall_effect.html).
:::
:::

:::q 1(g) · Explain the construction and working of a MOSFET. Compare it with a BJT. [Possible]
:::ans
**Diagram:** a cross-section of the MOSFET (Callister Fig 12.25).

<<SVG:callister_fig12_25>>

1. **Construction:** two small **p-type regions (source and drain)** are formed in an **n-type substrate**, joined by a narrow p-type channel. A thin **SiO₂** layer insulates the metal **gate** from the channel.
2. **Working:** the gate voltage sets up an **electric field** in the channel and changes its conductivity, which controls the source-drain current. This is a **field effect**.
3. The gate current is **almost zero** because the oxide insulates it, so the input impedance is very high.
4. **Comparison with a BJT:** a MOSFET is voltage-controlled and a BJT is current-controlled; a MOSFET's input impedance is very high and a BJT's is low; a MOSFET uses one carrier type (unipolar) and a BJT uses both (bipolar); MOSFETs dominate digital ICs because they pack densely and draw little power.

Full answer: [The MOSFET](04_4_mosfet.html).
:::
:::

:::note
**Other Q1 candidates worth one read:** domains and Bloch walls ([Domains](02_4_domains.html)), the origin of magnetism and the Bohr magneton ([Dipoles](02_1_magnetic_dipoles.html)), n-type vs p-type with band diagrams ([Doping](03_2_doping.html)), and the Czochralski process ([Pure Silicon](03_4_pure_silicon.html)).
:::

## Question 2 · P-N Junction Diode (5 marks, compulsory)

:::q Q2 · Explain the formation of a p-n junction and the working of a p-n junction diode in forward and reverse bias. Draw its I-V characteristics. [Very likely, sir's list]
:::ans
**Diagrams:** the junction with its depletion region, and the bias pictures (Callister Fig 12.20). The I-V curve (Fig 12.21) is a must-draw.

<<SVG:pn_junction_depletion>>

<<SVG:callister_fig12_21:compact>>

1. **Formation:** p-type and n-type regions are made in **one single crystal**. Electrons diffuse from n to p and holes from p to n, and they recombine near the junction. Fixed ions are left behind: positive donors on the n-side and negative acceptors on the p-side. This forms the **depletion region**, whose built-in field (n to p) stops further diffusion. The barrier is about **0.7 V for Si** and 0.3 V for Ge.
2. **Forward bias (p to +, n to -):** the barrier is lowered. Holes and electrons are pushed toward the junction and recombine, so a **large current** flows that rises **exponentially** with V.
3. **Reverse bias (p to -, n to +):** carriers are pulled away, the depletion region widens and becomes insulating, and only a **tiny saturation current** flows.
4. **Diode equation:** $I = I_0\left[\exp\!\left(\frac{eV}{kT}\right) - 1\right]$.
5. **Breakdown:** at a large reverse voltage the current rises suddenly.
6. **Use:** one-way conduction makes the diode a **rectifier** (AC to DC, Fig 12.22).

Full answer: [p-n Junction](04_1_pn_junction.html) and [Diode Working](04_2_diode_working.html).
:::
:::

:::note
**Variants to expect in Q2:** "Explain rectification by a p-n junction diode with waveforms" (Fig 12.22), or "What is the depletion region? How does its width change with bias?"
:::

## Question 3 · Transistor (5 marks, compulsory)

:::q Q3 · Explain the construction and working of a p-n-p junction transistor. How does it act as an amplifier? [Very likely, sir's list]
:::ans
**Diagram:** the p-n-p transistor in its circuit, with input and output signals (Callister Fig 12.23). Optionally also the band picture (Fig 12.24).

<<SVG:callister_fig12_23>>

1. **Construction:** two p-n junctions back to back, forming an **emitter** (p, heavily doped), a **base** (n, very thin and lightly doped) and a **collector** (p).
2. **Biasing:** junction 1 (emitter-base) is **forward** biased; junction 2 (base-collector) is **reverse** biased.
3. Forward bias injects **large numbers of holes** from the emitter into the base, where they are **minority carriers**.
4. The base is **very thin**, so only a few holes recombine; **most sweep through** into the collector, pulled by the field of the reverse-biased junction 2.
5. **Amplification:** a small change in input voltage gives a large change in collector current, so a large voltage appears across the load resistor. In Callister's example 0.1 mV becomes about 10 mV.
6. **Currents:** $I_E = I_B + I_C$, $\alpha = I_C/I_E \approx 0.95\text{–}0.99$, $\beta = I_C/I_B \approx 20\text{–}200$.

Full answer: [The Junction Transistor](04_3_bjt.html).
:::
:::

:::note
**Variants to expect in Q3:** an **n-p-n** transistor (swap holes for electrons and reverse the polarities), "BJT vs MOSFET" (see 1(g)), or "the transistor as a switch". If sir writes "transistors" in the plural, a short comparison of BJT and MOSFET at the end earns the marks.
:::

## Question 4 · Solar Cell and J-V Characteristics (5 marks, compulsory)

:::q Q4 · Explain the construction and working of a solar cell. Draw its J-V characteristics and define $V_{oc}$, $J_{sc}$, fill factor and efficiency. [Very likely, sir's list]
:::ans
**Diagrams:** the cross-section of the cell, and the J-V curve with the maximum-power rectangle.

<<SVG:solar_cell_construction>>

<<SVG:solar_cell_jv>>

1. **Construction:** a large-area p-n junction: a thin **n⁺ emitter** on top of a **p-type base**, a front **metal finger grid**, an **anti-reflection coating**, and a full **back Al contact**.
2. **Working (photovoltaic effect):** a photon with $h\nu \geq E_g$ creates an **electron-hole pair**. The pair diffuses to the junction, and the built-in field sweeps **electrons to n and holes to p**. This produces a voltage, and a current flows through a load.
3. **J-V equation:** $J = J_L - J_0\left[\exp\!\left(\frac{qV}{nkT}\right) - 1\right]$.
4. **Short-circuit current density $J_{sc}$** (at V = 0): $J_{sc} \approx J_L$.
5. **Open-circuit voltage $V_{oc}$** (at J = 0): $V_{oc} = \frac{nkT}{q}\ln\!\left(\frac{J_L}{J_0} + 1\right)$.
6. **Fill factor:** $FF = \frac{V_m J_m}{V_{oc} J_{sc}}$, about 0.8 for good Si. It measures how square the curve is.
7. **Efficiency:** $\eta = \frac{FF \cdot V_{oc} \cdot J_{sc}}{P_{in}}$, about 20% for Si under 100 mW/cm².

Full answer: [Solar Cell](04_5_solar_cell.html) and [J-V Characteristics](04_6_solar_jv.html).
:::
:::

## Question 5 · Numericals (4 x 2.5 = 10 marks, compulsory)

Write the formula, substitute with units, and box the answer: the 2.5 marks are split across these three steps.

:::q 5(a) · A silicon solar cell of area 100 cm² has $V_{oc}$ = 0.6 V, $J_{sc}$ = 35 mA/cm² and FF = 0.78 under 100 mW/cm² illumination. Find the maximum power and the efficiency. [Very likely]
:::ans
$P_{max}/\text{area} = FF \cdot V_{oc} \cdot J_{sc} = 0.78 \times 0.6 \times 35 =$ **16.38 mW/cm²**

$P_{max} = 16.38 \times 100 =$ **1.638 W** for the cell

$\eta = \dfrac{16.38}{100} =$ **16.4%**
:::
:::

:::q 5(b) · A solenoid of 300 turns and length 0.15 m carries 2 A. Its iron core has $\mu_r$ = 300. Find H, B and M. [Very likely]
:::ans
$H = \dfrac{nI}{l} = \dfrac{300 \times 2}{0.15} =$ **4000 A/m**

$B = \mu_r \mu_0 H = 300 \times 4\pi \times 10^{-7} \times 4000 =$ **1.51 T**

$M = \chi H = (\mu_r - 1)H = 299 \times 4000 =$ **$1.196 \times 10^{6}$ A/m**
:::
:::

:::q 5(c) · A transistor has $\alpha$ = 0.98 and emitter current $I_E$ = 5 mA. Find $I_C$, $I_B$ and $\beta$. [Likely]
:::ans
$I_C = \alpha I_E = 0.98 \times 5 =$ **4.9 mA**

$I_B = I_E - I_C = 5 - 4.9 =$ **0.1 mA**

$\beta = \dfrac{I_C}{I_B} = \dfrac{4.9}{0.1} =$ **49**. Check: $\beta = \dfrac{\alpha}{1-\alpha} = \dfrac{0.98}{0.02} = 49$.
:::
:::

:::q 5(d) · A semiconductor slab 0.5 mm thick carries 10 mA in a magnetic field of 0.5 T and shows a Hall voltage of 2 mV. The Hall coefficient is positive. Find $R_H$, the carrier type and the carrier concentration. [Possible, midsem]
:::ans
$R_H = \dfrac{V_H d}{I B} = \dfrac{2 \times 10^{-3} \times 0.5 \times 10^{-3}}{10 \times 10^{-3} \times 0.5} =$ **$2 \times 10^{-4}$ m³/C**

A positive $R_H$ means the carriers are **holes**, so the material is **p-type**.

$p = \dfrac{1}{R_H |e|} = \dfrac{1}{2 \times 10^{-4} \times 1.6 \times 10^{-19}} =$ **$3.125 \times 10^{22}$ m⁻³**
:::
:::

### Backup numericals (in case Q5 changes)

:::q 5(e) · A diode has $I_0 = 10^{-12}$ A. Find the current at a forward bias of 0.6 V at 300 K (kT/e = 0.0259 V).
:::ans
$I = I_0\left[\exp\!\left(\dfrac{eV}{kT}\right) - 1\right] = 10^{-12}\left[\exp\!\left(\dfrac{0.6}{0.0259}\right) - 1\right] = 10^{-12} \times 1.15 \times 10^{10} =$ **11.5 mA**
:::
:::

:::q 5(f) · Find $V_{oc}$ for a solar cell with $J_L$ = 35 mA/cm² and $J_0 = 10^{-12}$ A/cm² at 300 K (n = 1).
:::ans
$\dfrac{J_L}{J_0} = \dfrac{0.035}{10^{-12}} = 3.5 \times 10^{10}$, so $\ln(3.5 \times 10^{10}) = 24.28$

$V_{oc} = 0.0259 \times 24.28 =$ **0.629 V**
:::
:::

:::q 5(g) · n-type silicon has $n = 10^{22}$ m⁻³ and $\mu_e$ = 0.135 m²/V·s. Find its conductivity and resistivity.
:::ans
$\sigma = n|e|\mu_e = 10^{22} \times 1.6 \times 10^{-19} \times 0.135 =$ **216 (Ω·m)⁻¹**

$\rho = 1/\sigma =$ **$4.63 \times 10^{-3}$ Ω·m**
:::
:::

:::q 5(h) · A coil gives H = 1000 A/m. A material placed inside has $\chi$ = 4999. Find M and B.
:::ans
$M = \chi H = 4999 \times 1000 =$ **$5.0 \times 10^{6}$ A/m**

$B = \mu_0(H + M) = 4\pi \times 10^{-7} \times 5 \times 10^{6} =$ **6.28 T** on paper. A real ferromagnet would saturate at about 1.5-2 T, so mention that if the numbers come out this large.
:::
:::

## Last-day priority list

1. **Must draw from memory:** the B-H loop with $B_r$ and $H_c$, soft and hard loops, the Curie-temperature curve, the p-n junction with its depletion region, the diode I-V curve, the p-n-p transistor circuit, the solar cell cross-section, and the J-V curve with the MPP rectangle.
2. **Must write without thinking:** the soft vs hard table (6+ rows), the Curie definition and values, and the three applications with their materials.
3. **Must know the formulas:** $H = nI/l$, $B = \mu_r\mu_0 H$, $M = \chi H$, $I_E = I_B + I_C$, $\beta = \alpha/(1-\alpha)$, $\eta = FF \cdot V_{oc} J_{sc}/P_{in}$, $V_{oc}$, $R_H$ and $n = 1/(R_H e)$. All are in the [Formula and Fact Sheet](05_1_fact_sheet.html).
