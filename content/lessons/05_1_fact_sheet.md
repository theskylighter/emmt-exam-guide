**Every formula, value and definition you need on exam morning, on one page.** Read it the morning of the exam; each section links back to the lesson that explains it.

## Magnetic Materials

| Formula | What it is |
|---|---|
| $\mu_B = \dfrac{qh}{4\pi m_e} = 9.274 \times 10^{-24}\ \text{A·m}^2$ | Bohr magneton |
| $H = \dfrac{nI}{l}$ | field of a coil (A/m) |
| $B = \mu H = \mu_0 H + \mu_0 M$ | flux density (T) |
| $M = \chi H \qquad \mu_r = \dfrac{\mu}{\mu_0} = 1 + \chi$ | magnetization, relative permeability |
| $\mu_0 = 4\pi \times 10^{-7}\ \text{H/m}$ | permeability of free space |
| $1\ \text{T} = 10^4\ \text{G} \qquad 1\ \text{A/m} = 4\pi \times 10^{-3}\ \text{Oe}$ | unit conversions |
| $\chi = \dfrac{C}{T - T_c}$ | Curie-Weiss law, for $T > T_c$ |
| $F = \dfrac{\mu_0 M^2 A}{2}$ | lifting force of a magnet |
| $(BH)_{max}$ = largest rectangle in the 2nd quadrant | magnet power |

| Topic | Must remember | Lesson |
|---|---|---|
| Types | dia ($\chi < 0$: Cu, Si), para (small +: Al), **ferro** ($\chi$ up to $10^6$: Fe, Co, Ni, Gd), antiferro (MnO, NiO), **ferri** (ferrites) | [Types](02_3_types_of_magnetism.html) |
| Domains | aligned regions; Bloch walls about 100 nm; random in the virgin state | [Domains](02_4_domains.html) |
| Hysteresis | $B_s$, **$B_r$** (remanence), **$H_c$** (coercivity); M saturates, B does not; loop area = loss per cycle | [Hysteresis](02_5_hysteresis.html) |
| Curie | above $T_c$: paramagnetic; $M_s$, $B_r$, $H_c$ fall with T; Fe 771, Co 1117, Ni 358, Gd 16, Nd₂Fe₁₄B 312 °C | [Curie](02_6_curie_temperature.html) |
| Soft | $H_c < 10^3$ A/m, narrow loop: Fe-Si, permalloy, Metglas, ferrites: cores | [Soft vs Hard](02_7_soft_vs_hard.html) |
| Hard | $H_c > 10^4$ A/m, wide loop, large $(BH)_{max}$: Alnico, ferrite, Sm-Co, Nd-Fe-B (about 445 kJ/m³): permanent magnets | [Soft vs Hard](02_7_soft_vs_hard.html) |
| Storage | square loop, moderate $H_c$, acicular γ-Fe₂O₃, CrO₂ | [Applications](02_8_applications.html) |

## Semiconductor Devices

| Formula | What it is |
|---|---|
| $I = I_0\left[\exp\!\left(\dfrac{eV}{kT}\right) - 1\right]$ | diode equation |
| $V_0 \approx 0.7$ V (Si), 0.3 V (Ge) | barrier potential |
| electron + hole → energy | recombination (forward bias, LED) |
| $I_E = I_B + I_C \qquad \alpha = \dfrac{I_C}{I_E} \qquad \beta = \dfrac{I_C}{I_B}$ | transistor currents |
| $J = J_L - J_0\left[\exp\!\left(\dfrac{qV}{nkT}\right) - 1\right]$ | solar cell J-V |
| $V_{oc} = \dfrac{nkT}{q}\ln\!\left(\dfrac{J_L}{J_0} + 1\right) \qquad J_{sc} \approx J_L$ | open-circuit voltage, short-circuit current |
| $FF = \dfrac{V_m J_m}{V_{oc} J_{sc}}$ | fill factor |
| $\eta = \dfrac{FF \cdot V_{oc} \cdot J_{sc}}{P_{in}}, \quad P_{in} = 100\ \text{mW/cm}^2$ | efficiency |
| $kT/q = 0.0259$ V at 300 K | thermal voltage |

| Device | Must remember | Lesson |
|---|---|---|
| p-n junction | single crystal; diffusion and recombination leave fixed ions; field points n to p | [p-n Junction](04_1_pn_junction.html) |
| Diode | forward (p to +): large exponential current; reverse: tiny $I_R$; breakdown; rectifier | [Diode Working](04_2_diode_working.html) |
| BJT | E (heavy) / B (thin) / C; J1 forward, J2 reverse; injected minority carriers cross the base; 0.1 mV in, 10 mV out | [Transistor](04_3_bjt.html) |
| MOSFET | p source and drain in an n substrate; SiO₂-insulated gate; field changes the channel; gate current ≈ 0 | [MOSFET](04_4_mosfet.html) |
| Solar cell | n⁺ emitter / p base / grid / ARC / back Al; photon → EHP → separation → $V_{oc}$ and $I_L$; 4th quadrant | [Solar Cell](04_5_solar_cell.html) |
| J-V | $J_{sc}$, $V_{oc}$, MPP, $FF \approx 0.8$, $\eta \approx 20\%$ for Si | [J-V](04_6_solar_jv.html) |

**Timeline:** 1940 Ohl (p-n junction) · 1947 Bardeen and Brattain (point-contact transistor) · 1948 Shockley (junction transistor) · 1954 Chapin, Fuller and Pearson (6% Si solar cell) · 1959 Atalla and Kahng (MOSFET).

## Midsem (about 20%)

| Formula | What it is |
|---|---|
| $\sigma = n\|e\|\mu_e + p\|e\|\mu_h \qquad \rho = 1/\sigma$ | conductivity, resistivity |
| $\rho_{total} = \rho_t + \rho_i + \rho_d$ | Matthiessen's rule |
| $n_i \propto \exp\!\left(-\dfrac{E_g}{2kT}\right)$ | intrinsic carriers; $E_g$: Si 1.11, Ge 0.67, GaAs 1.42 eV |
| $V_H = \dfrac{R_H I B}{d}$ | Hall voltage |
| $R_H = -\dfrac{1}{n\|e\|}$ (n-type), $\ +\dfrac{1}{p\|e\|}$ (p-type) $\qquad \mu = \|R_H\|\,\sigma$ | Hall coefficient, mobility |
| $C = \dfrac{\varepsilon_r \varepsilon_0 A}{l} \qquad D = \varepsilon_0\mathcal{E} + P \qquad P = \varepsilon_0(\varepsilon_r - 1)\mathcal{E}$ | dielectrics |
| $k_0 = C_s / C_l$ (B 0.8, P 0.35, As 0.3, Sb 0.023) | segregation coefficient |
| Si: $a = 5.43$ Å | lattice constant |

- Donors (group V: P, As, Sb) give n-type; acceptors (group III: B, Al, Ga) give p-type.
- Regions: freeze-out, extrinsic ($n \approx N_d$), intrinsic.
- Polarization: electronic ($10^{15}$ Hz) > ionic ($10^{12}$ Hz) > orientation ($10^9$ Hz).
- Hund's rule: Fe has 4, Co 3, Ni 2 unpaired 3d electrons; Cu none.
- Ferrites: spinel AB₂O₄, inverse spinel, ferrimagnetic.

:::tip
In every long answer: **definition first, then a large labelled diagram, then the explanation in numbered steps, then a formula or table.** Examiners mark the diagram and the key terms.
:::
