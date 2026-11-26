**How well a solid conducts depends on how many charge carriers it has and how freely they move; band theory explains the carrier count: metals have free electrons, insulators have a wide energy gap, and semiconductors have a small gap that heat or light can cross.**

## The Problem: Copper Conducts, Diamond Doesn't

Both are made of atoms full of electrons. Yet copper conducts about $10^{24}$ times better than diamond, and silicon sits in between and conducts **better when hot**, the opposite of a metal. Before Bell Labs could build devices, they needed a theory that explained this.

## The Idea in Plain Words

### Conductivity: carriers times mobility

$$\sigma = n|e|\mu_e + p|e|\mu_h \qquad \rho = \frac{1}{\sigma}$$

- **n, p**: number of free electrons and holes per m3.
- **$\mu_e$, $\mu_h$**: mobilities, how easily each moves in a field.

In metals n is huge and fixed, and resistivity rises with temperature, impurities and deformation (**Matthiessen's rule**: $\rho_{total}$ = rho_thermal + rho_impurity + rho_deformation).

### Bands

When billions of atoms bond, their sharp energy levels spread into **bands**:

- **Valence band (VB)**: electrons tied into bonds.
- **Conduction band (CB)**: empty states where electrons move freely.
- **Band gap $E_g$**: the energy needed to lift an electron from the VB into the CB.

:::analogy
A two-storey car park. The ground floor (VB) is completely full, so no car can move. The upper floor (CB) is empty. Lift a car upstairs (give an electron energy $E_g$) and it can drive around freely, and the empty space it left downstairs lets the cars below shuffle along too. That empty space is a **hole**.
:::

## How It Works

| Class | Gap | Behaviour |
|---|---|---|
| Metal | none (bands overlap or half-filled) | conducts; resistance rises with temperature |
| Semiconductor | small, **below about 2 eV** (Si 1.11, Ge 0.67, GaAs 1.42 eV) | conducts a little; **more when hot or lit** |
| Insulator | large, above about 2 eV | does not conduct |

- An electron that crosses the gap leaves behind a **hole**, which acts as a positive carrier. One crossing creates an **electron-hole pair (EHP)**.
- **Heat** can create EHPs: intrinsic carriers grow steeply, **$n_i \propto \exp(-E_g/2kT)$**.
- **Light** with photon energy **$h\nu \geq E_g$** can also create EHPs. This is the basis of the [solar cell](04_5_solar_cell.html).
- In an intrinsic semiconductor **n = p = $n_i$**, so $\sigma$ = $n_i$ |e| ($\mu_e$ + $\mu_h$).

:::key
- **$\sigma$ = n|e|$\mu_e$ + p|e|$\mu_h$**.
- Bands: VB, CB and the gap **$E_g$**. Semiconductor gap below about 2 eV.
- Crossing the gap makes an **electron-hole pair**, by heat or by light.
- Semiconductor conductivity **rises** with temperature; metal conductivity falls.
:::

:::mistakes
- **"Holes are positive particles."** A hole is a missing electron in a bond; it only behaves like a positive charge.
- **"Semiconductors conduct worse when hot, like metals."** They conduct **better**, because more electron-hole pairs form.
:::

:::exam
- Midsem recap, likely as short questions or a conductivity numerical. Full detail and solved problems are in your midsem notes.
:::

:::def
In a solid, atomic energy levels broaden into **energy bands**. The **band gap $E_g$** separates the filled **valence band** from the empty **conduction band**. Metals have no gap, insulators a large gap (above about 2 eV), and **semiconductors** a small gap that thermal or light energy can bridge, creating **electron-hole pairs**; conductivity is $\sigma = n|e|\mu_e + p|e|\mu_h$.
:::

## Quick Check

:::q Q1 · What minimum photon energy creates an electron-hole pair in silicon?
:::ans
The band gap, **$E_g$ = 1.11 eV** (a wavelength of about 1.1 um).
:::
:::

:::q Q2 · Why does a semiconductor's conductivity rise with temperature while a metal's falls?
:::ans
In a semiconductor heat creates many more **carriers** ($n_i$ rises exponentially), which outweighs the drop in mobility. In a metal the carrier count is fixed, so only the **mobility falls** as lattice vibrations scatter electrons.
:::
:::
