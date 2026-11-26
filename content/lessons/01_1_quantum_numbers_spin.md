**Each electron in an atom has an "address" of four quantum numbers; the fourth, spin, makes every electron a tiny magnet, and the filling rules decide whether those magnets pair up and cancel or stay unpaired.** Unpaired 3d electrons are the root of magnetism.

## The Problem: Why Only a Few Magnetic Elements?

Almost every element has dozens of electrons, and every electron is a moving charge. Yet only a handful of elements (iron, cobalt, nickel, gadolinium) make strong magnets. To understand why, we need to know how electrons are arranged inside the atom. This is the midsem topic you already know, viewed through a magnetic lens.

## The Idea in Plain Words

Early in the 20th century physicists found that an electron cannot sit just anywhere: it has an **address** of four numbers. In **1925** Uhlenbeck and Goudsmit added the strangest one: the electron behaves as if it **spins**, and a spinning charge is a **tiny magnet**.

:::analogy
A block of flats. **n** is the floor, **l** the type of flat (s, p, d, f), **$m_l$** the particular flat, and **$m_s$** which of the two beds the resident sleeps in, head up or head down. Two residents in one flat always sleep head-to-toe (opposite spins), so their "magnets" cancel.
:::

## How It Works

| Number | Symbol | Allowed values | Tells you | Magnetism link |
|---|---|---|---|---|
| Principal | n | 1, 2, 3 ... (K, L, M ...) | shell: size and energy | |
| Azimuthal | l | 0 to n-1 (s, p, d, f) | sub-shell shape | a **d** sub-shell (l = 2) holds 10 electrons, room for up to 5 unpaired |
| Magnetic | $m_l$ | -l to +l | orbital orientation | orbital moment (largely quenched in solids) |
| Spin | $m_s$ | +1/2 or -1/2 | spin up or down | **the source of the moment**, one Bohr magneton |

### The three filling rules

1. **Aufbau**: fill the lowest energy first, using the (n + l) rule; this is why **4s fills before 3d**.
2. **Pauli exclusion**: at most two electrons per orbital, with **opposite spins**. A pair **cancels**.
3. **Hund's rule**: in a sub-shell, electrons first occupy empty orbitals **singly with parallel spins**, and only then pair up. This **maximises unpaired spins**.

### Putting them together for the 3d metals

```text
Element  3d electrons   3d orbitals (5 boxes)      Unpaired
Mn          5           [up][up][up][up][up]          5
Fe          6           [ud][up][up][up][up]          4
Co          7           [ud][ud][up][up][up]          3
Ni          8           [ud][ud][ud][up][up]          2
Cu         10           [ud][ud][ud][ud][ud]          0   -> not magnetic
```

(ud = a paired up-down couple; up = a single unpaired spin.)

### Unpaired spins are necessary but not enough

Manganese has **5** unpaired spins but is **antiferromagnetic**. Only in Fe, Co and Ni (and Gd) does the **exchange interaction** make the spins of **neighbouring atoms** line up parallel. That is the subject of [Where Magnetism Comes From](02_1_magnetic_dipoles.html).

### Crystal-structure link: spinels and ferrites

Ferrites, the ceramic magnets in high-frequency transformers, have the **spinel structure AB₂O₄** (midsem, Raghavan). In an **inverse spinel** such as Fe₃O₄, ions on the two kinds of site point their moments **opposite but unequally**, giving **ferrimagnetism**.

:::key
- Four quantum numbers: **n, l, $m_l$, $m_s$**; spin ($m_s$) gives the magnetic moment.
- **Pauli**: paired electrons have opposite spins and cancel.
- **Hund**: spread out with parallel spins first, maximising unpaired electrons.
- Fe 4, Co 3, Ni 2 unpaired 3d electrons; Cu 0.
:::

:::mistakes
- **"3d fills before 4s."** By the (n + l) rule 4s (4 + 0 = 4) fills before 3d (3 + 2 = 5).
- **"More unpaired electrons always means a stronger magnet."** Mn has the most but is antiferromagnetic; the exchange interaction decides.
:::

:::exam
- Midsem-style: *"Explain the four quantum numbers with examples"* or *"State Hund's rule"*. For the endsem, the useful version is linking them to magnetism: *"Why are Fe, Co and Ni ferromagnetic while Cu is not?"*
:::

:::def
The **four quantum numbers** (principal n, azimuthal l, magnetic $m_l$, spin $m_s$) specify the state of an electron in an atom. The spin quantum number $m_s$ = +1/2 or -1/2 gives each electron an intrinsic magnetic moment of one Bohr magneton. By the Pauli principle paired electrons have opposite spins and cancel, and by Hund's rule electrons occupy a sub-shell singly with parallel spins first, so atoms with partly filled d or f sub-shells carry net magnetic moments.
:::

## Quick Check

:::q Q1 · How many unpaired 3d electrons does iron have, and which rule tells you?
:::ans
**Four** (3d6: one pair and four singles). **Hund's rule** says electrons fill empty orbitals singly with parallel spins before pairing.
:::
:::

:::q Q2 · Why is copper not ferromagnetic?
:::ans
Its 3d sub-shell is **full** (3d10), so every spin is paired and cancels; there is no net moment to align.
:::
:::
