**When current flows through a conductor in a magnetic field, the carriers are pushed to one side and a sideways voltage appears; its sign reveals whether the carriers are electrons or holes, and its size gives their concentration.**

## The Problem: Which Carrier Is It?

Before building a diode or transistor you must know whether a wafer is n-type or p-type, and how heavily it is doped. A resistance measurement cannot tell: electrons and holes both carry current. We need a measurement that depends on the **sign** of the carriers.

## The Story

In **1879** Edwin Hall, a graduate student, passed current through a thin gold strip in a magnetic field and found a small voltage **across** the strip, at right angles to the current. Nearly a century later his effect became the standard test for semiconductor wafers, and Hall sensors now sit in phones and car engines.

## The Idea in Plain Words

A moving charge in a magnetic field feels a sideways **Lorentz force**. Carriers pile up on one edge of the sample until the electric field from the pile-up balances the magnetic push. The voltage between the edges is the **Hall voltage $V_H$**. Electrons and holes moving in the same current direction are pushed to the **same** edge, but they carry opposite charge, so **$V_H$ has opposite signs**.

:::analogy
Cars driving down a road in a strong crosswind drift to one side. Red cars and blue cars drift to the same side, but if red cars carry "+" flags and blue cars "-" flags, the flags piled on that side tell you which colour was driving.
:::

## How It Works

Read the figure in order. (a) Current $I_x$ flows along the bar and the field $B_z$ points up; the Lorentz force $F(-y)$ bends each electron toward the back face. (b) Electrons pile up on the back face and leave the front face positive. The resulting field pushes back with $F(+y)$ until the two forces balance, and the voltmeter reads $V_H$. (c) In a p-type sample the holes are pushed to the **same** back face, so the charges, and the sign of $V_H$, are reversed.

<<SVG:callister_fig12_19>>

$$V_H = \frac{R_H I_x B_z}{d} \qquad (d = \text{sample thickness})$$

$$R_H = -\frac{1}{n|e|}\ \ (\text{electrons, n-type}) \qquad R_H = +\frac{1}{p|e|}\ \ (\text{holes, p-type})$$

$$\mu = |R_H|\,\sigma \qquad (\text{mobility from the Hall coefficient and conductivity})$$

- **$V_H$ negative: n-type. $V_H$ positive: p-type** (for the standard sign convention).
- Measure $V_H$, $I_x$, $B_z$ and d, find $R_H$, then the **carrier concentration** $n = 1/(|R_H|\,|e|)$.
- Combine with the conductivity to get the **mobility**.

:::key
- Lorentz force pushes carriers sideways and builds up **$V_H$**.
- **Sign of $V_H$ gives the carrier type**; size gives the concentration.
- $R_H$ = -1/ne (electrons), +1/pe (holes); $\mu$ = |$R_H$| $\sigma$.
:::

:::mistakes
- **"Electrons and holes are pushed to opposite sides."** For the same current direction they are pushed to the **same** side; it is their **charge** that differs, which flips the sign of $V_H$.
:::

:::exam
- Midsem recap: numericals on $R_H$, n and mobility. Full worked problems are in your midsem notes.
:::

:::def
The **Hall effect** is the appearance of a transverse voltage $V_H = R_H I B/d$ across a current-carrying conductor placed in a perpendicular magnetic field, due to the Lorentz force on the carriers. The Hall coefficient $R_H = -1/ne$ for electrons and $+1/pe$ for holes, so the sign of $V_H$ identifies the carrier type and its magnitude gives the carrier concentration; the mobility is $\mu = |R_H|\,\sigma$.
:::

## Quick Check

:::q Q1 · A Hall measurement gives a positive $V_H$. What type is the sample?
:::ans
**p-type**: holes are the majority carriers ($R_H$ positive).
:::
:::

:::q Q2 · $R_H$ = -6.25 x $10^{-4}$ m3/C. Find the electron concentration.
:::ans
$n = \dfrac{1}{|R_H|\,|e|} = \dfrac{1}{6.25 \times 10^{-4} \times 1.6 \times 10^{-19}} =$ **$10^{22}$ m⁻³**.
:::
:::
