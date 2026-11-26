**Every formula, value and definition you need on exam morning, on one page.** Read it the morning of the exam; each section links back to the lesson that explains it.

## Magnetic Materials

```text
mu_B = qh / (4 pi m_e) = 9.274 x 10^-24 A.m^2     Bohr magneton
H = n I / l                                      field of a coil (A/m)
B = mu H = mu0 H + mu0 M                         flux density (T)
M = chi H ;  mu_r = mu / mu0 = 1 + chi
mu0 = 4 pi x 10^-7 H/m ;  1 T = 10^4 G ;  1 A/m = 4 pi x 10^-3 Oe
chi = C / (T - Tc)                               Curie-Weiss law, T > Tc
F = mu0 M^2 A / 2                                lifting force of a magnet
(BH)max = largest rectangle in 2nd quadrant      magnet power
```

| Topic | Must remember | Lesson |
|---|---|---|
| Types | dia (chi < 0: Cu, Si), para (small +: Al), **ferro** (up to 10^6: Fe, Co, Ni, Gd), antiferro (MnO, NiO), **ferri** (ferrites) | [Types](02_3_types_of_magnetism.html) |
| Domains | aligned regions; Bloch walls about 100 nm; random in virgin state | [Domains](02_4_domains.html) |
| Hysteresis | Bs, **Br** (remanence), **Hc** (coercivity); M saturates, B does not; loop area = loss per cycle | [Hysteresis](02_5_hysteresis.html) |
| Curie | above Tc: paramagnetic; Ms, Br, Hc fall with T; Fe 771, Co 1117, Ni 358, Gd 16, Nd2Fe14B 312 C | [Curie](02_6_curie_temperature.html) |
| Soft | Hc below 10^3 A/m, narrow loop: Fe-Si, permalloy, Metglas, ferrites: cores | [Soft vs Hard](02_7_soft_vs_hard.html) |
| Hard | Hc above 10^4 A/m, wide loop, large (BH)max: Alnico, ferrite, Sm-Co, Nd-Fe-B (about 445 kJ/m3): permanent magnets | [Soft vs Hard](02_7_soft_vs_hard.html) |
| Storage | square loop, moderate Hc, acicular gamma-Fe2O3, CrO2 | [Applications](02_8_applications.html) |

## Semiconductor Devices

```text
I = I0 [ exp(eV/kT) - 1 ]                        diode equation
V0 about 0.7 V (Si), 0.3 V (Ge)                  barrier
electron + hole -> energy                        recombination (forward bias, LED)
I_E = I_B + I_C ; alpha = I_C/I_E ; beta = I_C/I_B
J = J_L - J0 [ exp(qV/nkT) - 1 ]                 solar cell
Voc = (nkT/q) ln(J_L/J0 + 1) ;  Jsc = J_L
FF = Vm Jm / (Voc Jsc) ;  eta = FF Voc Jsc / P_in ;  P_in = 100 mW/cm^2
kT/q = 0.0259 V at 300 K
```

| Device | Must remember | Lesson |
|---|---|---|
| p-n junction | single crystal; diffusion and recombination leave fixed ions; field n to p | [p-n Junction](04_1_pn_junction.html) |
| Diode | forward (p to +): large exponential current; reverse: tiny I_R; breakdown; rectifier | [Diode Working](04_2_diode_working.html) |
| BJT | E (heavy) / B (thin) / C; J1 forward, J2 reverse; injected minority carriers cross base; 0.1 mV in, 10 mV out | [Transistor](04_3_bjt.html) |
| MOSFET | p source and drain in n substrate; SiO2-insulated gate; field changes channel; gate current about 0 | [MOSFET](04_4_mosfet.html) |
| Solar cell | n+ emitter / p base / grid / ARC / back Al; photon to EHP to separation to Voc and I_L; 4th quadrant | [Solar Cell](04_5_solar_cell.html) |
| J-V | Jsc, Voc, MPP, FF about 0.8, eta about 20% for Si | [J-V](04_6_solar_jv.html) |

**Timeline:** 1940 Ohl (p-n junction) · 1947 Bardeen and Brattain (point-contact transistor) · 1948 Shockley (junction transistor) · 1954 Chapin, Fuller and Pearson (6% Si solar cell) · 1959 Atalla and Kahng (MOSFET).

## Midsem (about 20%)

```text
sigma = n|e|mu_e + p|e|mu_h ;  rho = 1/sigma ;  rho_total = rho_t + rho_i + rho_d
n_i proportional to exp(-Eg / 2kT) ;  Eg: Si 1.11, Ge 0.67, GaAs 1.42 eV
V_H = R_H I B / d ;  R_H = -1/(n|e|) (n-type), +1/(p|e|) (p-type) ;  mu = |R_H| sigma
C = eps_r eps0 A / l ;  D = eps0 E + P ;  P = eps0 (eps_r - 1) E
k0 = Cs / Cl  (B 0.8, P 0.35, As 0.3, Sb 0.023) ;  Si a = 5.43 Angstrom
```

- Donors (group V: P, As, Sb) give n-type; acceptors (group III: B, Al, Ga) give p-type.
- Regions: freeze-out, extrinsic (n approximately Nd), intrinsic.
- Polarization: electronic (10^15 Hz) > ionic (10^12 Hz) > orientation (10^9 Hz).
- Hund's rule: Fe has 4, Co 3, Ni 2 unpaired 3d electrons; Cu none.
- Ferrites: spinel AB2O4, inverse spinel, ferrimagnetic.

:::tip
In every long answer: **definition first, then a large labelled diagram, then the explanation in numbered steps, then a formula or table.** Examiners mark the diagram and the key terms.
:::
