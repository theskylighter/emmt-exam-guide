**Put p-type and n-type silicon side by side in one crystal and carriers diffuse across, leaving behind a thin layer of fixed charges whose electric field stops further flow.** That layer, the depletion region, is the engine inside every diode, transistor, LED and solar cell.

## The Problem: Vacuum Tubes Everywhere

In the 1930s every radio, telephone amplifier and early computer ran on **vacuum tubes**: glass bulbs with a red-hot filament that boiled electrons off into a vacuum. A **diode tube** (Fleming, 1904) let current flow one way only, which turns AC into DC. A **triode tube** (de Forest, 1906) let a small voltage control a large current, which gives amplification.

What was wrong with tubes?

- **Hot**: the filament wasted power just to stay on.
- **Fragile**: glass and vacuum break.
- **Short-lived**: the ENIAC computer (1945) had about 18,000 tubes and one failed every few days.
- **Big**: you could not shrink them much.

Bell Labs wanted a **solid crystal** that could do the same jobs. The first step came from an accident.

## The Story: A Cracked Rod That Made Its Own Voltage

In **1940**, Russell Ohl at Bell Labs was studying silicon for radar detectors. One rod had a **crack**. When light from a lamp fell on it, a meter jumped: **the rod produced a voltage by itself**.

The explanation: while the rod was solidifying, impurities had separated. One side held extra **phosphorus** (it behaved as n-type), the other extra **boron** (p-type), and the crack marked the boundary. Ohl had found the **p-n junction**. The same structure later became the diode, the junction transistor (1948) and the silicon solar cell (1954).

## The Idea in Plain Words

Recall from [Doping](03_2_doping.html): the **p-side** is full of mobile **holes** and the **n-side** is full of mobile **electrons**. When the two touch:

1. Electrons **diffuse** from n to p, and holes from p to n, because each is crowded on its own side.
2. They meet near the boundary and **recombine** (cancel each other).
3. Each electron that left the n-side leaves behind a **fixed positive donor ion**. Each hole that was filled on the p-side leaves a **fixed negative acceptor ion**.
4. These fixed charges create an **electric field pointing from n to p**, which pushes back on further diffusion.
5. Very quickly the push-back balances the diffusion and the net flow stops.

:::analogy
Two rooms joined by a doorway. The p-room has empty seats (holes), the n-room has people looking for seats (electrons). Open the door and people wander across to sit down. Every person who leaves the n-room leaves a "+" name tag behind; every seat taken on the p-side gets a "-" tag. Soon the tags near the door form a wall of charge that turns new people away. The cleared strip near the door is the depletion region.
:::

## How It Works

<<SVG:pn_junction_depletion>>

| Term | Meaning |
|---|---|
| **Depletion region** | thin layer around the junction with **no mobile carriers**, only fixed ions |
| **Built-in field E** | points from the **n-side (+ ions) to the p-side (- ions)** |
| **Barrier potential $V_0$** | the "hill" a carrier must climb to cross: about **0.7 V for Si**, 0.3 V for Ge |
| **Equilibrium** | diffusion (pushing carriers across) exactly balances drift (the field pushing them back) |

Callister's Figure 12.20(a) shows the same junction with no voltage applied: holes on the p-side, electrons on the n-side.

<<SVG:callister_fig12_20:compact>>

### Why it must be one single crystal

Callister is explicit: the junction is made from **one piece of single-crystal semiconductor**, doped n-type on one side and p-type on the other. If you simply press a p-piece against an n-piece, the **surface between them** makes the device very inefficient. Grain boundaries are harmful for the same reason. This is why the Czochralski process in [Growing Pure Silicon](03_4_pure_silicon.html) matters.

:::key
- p-side: majority holes. n-side: majority electrons.
- Diffusion and recombination create a **depletion region** of fixed ions.
- The fixed ions make a **built-in field (n to p)** and a **barrier $V_0$** (about 0.7 V in Si).
- The junction must be inside **one single crystal**.
:::

:::mistakes
- **"The depletion region is full of electrons and holes."** It is the opposite: it has been *emptied* of mobile carriers. Only fixed ions remain.
- **"The built-in field points from p to n."** It points from the positive donor ions (n-side) to the negative acceptor ions (p-side): **n to p**.
- **"The barrier keeps growing forever."** It stops growing once drift balances diffusion.
:::

:::exam
- Usually the first part of *"Explain the construction and working of a p-n junction diode."* Write the formation steps, draw the depletion region, and state $V_0$.
- Short questions: *"What is a depletion region?"*, *"Why is a single crystal used?"*
:::

:::def
A **p-n junction** is the boundary between p-type and n-type regions within a single crystal of semiconductor. Diffusion and recombination of carriers across it leave a **depletion region** of fixed ions, whose **built-in electric field** (n to p) sets up a **potential barrier** (about 0.7 V for Si) that opposes further diffusion.
:::

## Quick Check

:::q Q1 · Which ions sit on the n-side of the depletion region, and why?
:::ans
**Positive donor ions.** The electrons that used to belong to them diffused to the p-side, so the fixed positive cores are left uncovered.
:::
:::

:::q Q2 · Ohl's rod produced a voltage under light without any battery. Which part of the junction made that possible?
:::ans
The **built-in field** of the depletion region. Light created electron-hole pairs, and the field pushed electrons to the n-side and holes to the p-side, building up a voltage. This is exactly how a [solar cell](04_5_solar_cell.html) works.
:::
:::
