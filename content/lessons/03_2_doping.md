**Adding a tiny, controlled amount of a group V or group III impurity to silicon creates extra electrons (n-type) or extra holes (p-type), turning a poor conductor into one whose carriers we can design.**

## The Problem: Pure Silicon Is Useless for Devices

Intrinsic silicon at room temperature has only about **$10^{16}$ carriers per m3** out of about **5 x $10^{28}$ atoms per m3**: far too few, and the number changes wildly with temperature. Devices need a **large, controlled, temperature-stable** carrier concentration, and they need to choose **which** carrier dominates.

## The Idea in Plain Words

Replace a few silicon atoms (4 valence electrons) with atoms that have **one more** or **one fewer**:

- **Group V** (P, As, Sb) has **5** valence electrons. Four bond, and the fifth is loosely held and easily freed: a **donor**. Result: **n-type**, majority carriers **electrons**.
- **Group III** (B, Al, Ga) has **3** valence electrons. One bond is missing an electron: a **hole**. The atom is an **acceptor**. Result: **p-type**, majority carriers **holes**.

:::analogy
A dance where everyone holds hands in fours. Invite a few guests with five hands (donors): the spare hand is free to wander, carrying current. Invite guests with three hands (acceptors): there is a gap in the ring, and neighbours shuffle into it one after another, so the gap itself moves around.
:::

## How It Works

| | n-type | p-type |
|---|---|---|
| Dopant | P, As, Sb (group V) | B, Al, Ga (group III) |
| Name | donor | acceptor |
| Majority carrier | electrons, **n approximately $N_d$** | holes, **p approximately $N_a$** |
| Minority carrier | holes | electrons |
| Energy level | just **below the conduction band** | just **above the valence band** |
| Conductivity | $\sigma$ approximately n\|e\|$\mu_e$ | $\sigma$ approximately p\|e\|$\mu_h$ |

### Three temperature regions of doped silicon

1. **Freeze-out** (below about 100 K): too cold to free the dopant carriers.
2. **Extrinsic** (about 100-475 K): every dopant is ionised and **n is approximately $N_d$**, flat with temperature. This is the **useful operating range**.
3. **Intrinsic** (above about 475 K): thermally created electron-hole pairs swamp the dopant. This is why chips fail when they overheat.

:::note
Put a p-region next to an n-region inside **one crystal** and you get a **p-n junction**, the starting point of every device in Chapter 4. See [The p-n Junction](04_1_pn_junction.html).
:::

:::key
- **n-type**: group V donors, majority **electrons**.
- **p-type**: group III acceptors, majority **holes**.
- Extrinsic region: carrier count fixed by doping, n approximately $N_d$ or p approximately $N_a$.
:::

:::mistakes
- **"n-type silicon is negatively charged."** It is **electrically neutral**: every free electron is balanced by a fixed positive donor ion.
- **Swapping the groups.** Group **V** gives **n**-type (think "fiVe, n"); group III gives p-type.
:::

:::exam
- Midsem recap; also the starting paragraph of any device answer (*"A p-n junction is formed by..."*).
:::

:::def
**Doping** is the controlled addition of impurities to a semiconductor. Group V **donors** (P, As, Sb) give **n-type** material with electrons as majority carriers (n approximately $N_d$); group III **acceptors** (B, Al, Ga) give **p-type** material with holes as majority carriers (p approximately $N_a$).
:::

## Quick Check

:::q Q1 · Silicon is doped with arsenic. Which type is it, and what is the majority carrier?
:::ans
Arsenic is group V, a donor, so the silicon is **n-type** with **electrons** as majority carriers.
:::
:::

:::q Q2 · Why is doped silicon's conductivity nearly constant between about 100 K and 475 K?
:::ans
In that **extrinsic** region every dopant atom is already ionised, so the carrier count equals the dopant count, and intrinsic carriers are still too few to matter.
:::
:::
