**A diode lets current through when the junction's barrier is lowered (forward bias) and blocks it when the barrier is raised (reverse bias).** That one-way behaviour turns AC into DC.

## The Problem: Getting DC Out of an AC Socket

The mains supplies **alternating current**, which reverses direction 50 times a second. Phone chargers, radios and every electronic circuit need **direct current**. The vacuum-tube diode did this job, but it was hot and fragile. A [p-n junction](04_1_pn_junction.html) can do it in a crystal, because its barrier responds differently to the two polarities of an applied voltage.

## The Idea in Plain Words

An external battery either **helps** the carriers over the barrier or **pulls them further away** from it:

- **Forward bias**: positive terminal to the **p-side**, negative to the **n-side**. The barrier gets **lower**, so carriers cross freely: **large current**.
- **Reverse bias**: positive terminal to the **n-side**, negative to the **p-side**. The barrier gets **higher** and the depletion region **wider**: almost **no current**.

:::analogy
A one-way turnstile. Push from the correct side (forward bias) and it spins freely. Push from the wrong side (reverse bias) and it locks. Push hard enough from the wrong side and it breaks (breakdown).
:::

## How It Works

<<SVG:callister_fig12_20>>

**(a) No bias.** Holes dominate the p-side and electrons the n-side; the barrier is in equilibrium.

**(b) Forward bias.**

1. Holes on the p-side and electrons on the n-side are both **pushed toward the junction**.
2. They meet in the **recombination zone** and annihilate each other:

$$\text{electron} + \text{hole} \;\longrightarrow\; \text{energy} \qquad \text{(Callister eq. 12.21)}$$

3. The battery keeps supplying new carriers, so a **large current** flows with **low resistivity**.

**(c) Reverse bias.**

1. Holes and electrons are both **drawn away from the junction**.
2. The region near the junction is left with almost no mobile carriers, so it is **highly insulating**.
3. Only a tiny **reverse (saturation) current** flows.

:::note
Equation 12.21 is the principle of the **LED**: in a forward-biased junction, recombination releases the energy as light. A **solar cell** is the same process in reverse: light goes in and creates the pairs.
:::

### The current-voltage (I-V) characteristic

<<SVG:callister_fig12_21:compact>>

**Watch it happen.** Follow the operating point along the I-V curve while the depletion region narrows (forward), widens (reverse) and finally breaks down.

<<ANIM:pn_junction>>

| Region | What the curve does | Why |
|---|---|---|
| Forward bias (right) | current stays small until about 0.7 V (Si), then rises **exponentially** | the barrier has been lowered enough for carriers to flood across |
| Reverse bias (left) | a tiny, nearly constant current **$I_R$** | only the few minority carriers can cross |
| Breakdown (far left) | current **rises abruptly** at a large reverse voltage (sometimes several hundred volts) | large numbers of carriers are suddenly generated |

The standard (Shockley) diode equation describes the curve:

$$I = I_0\left[\exp\!\left(\frac{eV}{kT}\right) - 1\right]$$

For large forward V the exponential dominates; for reverse V the bracket tends to -1, so I tends to **-I0**, the small saturation current.

### Rectification: what the diode is for

<<SVG:callister_fig12_22:compact>>

The input voltage swings between **+$V_0$ and -V0** (a). On forward half-cycles the current is large (**$I_F$**); on reverse half-cycles it is almost zero (**$I_R$**, much smaller than $I_F$) (b). **AC goes in, one-way pulsating current comes out.** That is a **rectifier**.

:::key
- Forward bias: **p to +**, barrier lowered, large exponential current.
- Reverse bias: **p to -**, depletion widens, tiny saturation current.
- Large reverse voltage causes **breakdown**.
- Use: **rectification** (AC to DC), plus LEDs and photodiodes.
:::

:::mistakes
- **Swapping the bias polarities.** Forward means the p-side goes to the **positive** terminal. Remember "**P**ositive to **P**".
- **"Reverse current is exactly zero."** It is small but not zero ($I_R$ in Fig 12.21).
- **"Breakdown destroys the diode."** Not necessarily; Zener diodes are designed to operate in breakdown.
- **Drawing the forward curve as a straight line.** It is exponential, with a knee near 0.7 V for Si.
:::

:::exam
- *"Explain the construction and working of a p-n junction diode with its I-V characteristics."* (8-10 marks): formation of the depletion region, forward and reverse bias with Fig 12.20, the I-V curve (Fig 12.21) with breakdown, and rectification (Fig 12.22).
- *"Why does a diode conduct in one direction only?"*: barrier lowered vs raised.
:::

:::def
A **p-n junction diode** is a two-terminal device made from a single semiconductor crystal doped p-type on one side and n-type on the other. Under **forward bias** (p positive) the barrier is lowered and a large current flows, rising exponentially with voltage. Under **reverse bias** (p negative) the depletion region widens and only a tiny saturation current flows, until **breakdown** at high voltage. It is used mainly as a **rectifier**.
:::

## Quick Check

:::q Q1 · A diode is connected with its n-side to the positive terminal of a battery. Does it conduct?
:::ans
**No.** That is reverse bias: carriers are pulled away from the junction, the depletion region widens, and only the tiny saturation current flows.
:::
:::

:::q Q2 · In forward bias, where do the electrons and holes "go"?
:::ans
They meet near the junction and **recombine** (electron + hole gives energy). The battery keeps supplying fresh carriers, which is why a steady current flows.
:::
:::

:::q Q3 · What does Figure 12.22(b) show that 12.22(a) does not?
:::ans
That the current flows almost only during the **forward half-cycles**: the AC input has been **rectified** into a one-directional current.
:::
:::
