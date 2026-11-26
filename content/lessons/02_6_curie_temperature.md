**Heat jostles the aligned spins; above a sharp, material-specific temperature, the Curie temperature, thermal agitation wins completely and a ferromagnet becomes paramagnetic.**

## The Problem: Magnets That Stop Working When Hot

Heat a magnet in a flame and it suddenly lets go of the iron it was holding. A motor that runs too hot can lose the strength of its magnets. Why does a ferromagnet need to stay **cool** to work, and how hot is too hot?

## The Story

In **1895** Pierre Curie, before his famous work on radioactivity with Marie Curie, carefully heated magnetic materials and measured them. He found that each ferromagnet **abruptly stops being ferromagnetic** above its own sharp temperature. That temperature now carries his name. Marie and Pierre Curie both won Nobel Prizes, and Marie won two.

## The Idea in Plain Words

Two forces are in a tug of war:

- The **exchange interaction** tries to keep neighbouring spins **aligned**.
- **Thermal energy** (vibration) tries to **randomise** them.

As temperature rises, the randomising side gets stronger. At the **Curie temperature $T_c$** it wins: the domains lose their order and the material behaves as a **paramagnet**.

:::analogy
A marching band in step. As the music speeds up and the ground starts shaking (rising temperature), more and more players fall out of step. Past a certain point ($T_c$) nobody is in step at all: they can still turn to face the conductor when told (a field is applied), but they drift apart the moment the conductor stops.
:::

## How It Works

<<SVG:askeland_fig20_8>>

- **(a)** As T increases, the **saturation magnetization, remanence and coercive field all decrease**, so the hysteresis loop **shrinks**.
- **(b)** The **remanence falls to zero at $T_c$**.
- **Above $T_c$**: the material is **paramagnetic**. Dipoles can still be aligned by an applied field, but they become random again when it is removed.
- Above $T_c$ the susceptibility follows the **Curie-Weiss law**:

$$\chi = \frac{C}{T - T_c} \qquad (C = \text{material constant},\ T > T_c)$$

- **$T_c$ depends on the material** and can be changed by **alloying**.
- The change is **reversible**: cool the material below $T_c$ and it becomes ferromagnetic again, though its domains come back randomly oriented, so a magnet must be re-magnetised.
- Ferrimagnetic materials (ferrites) behave the same way.

<<SVG:askeland_table20_3:compact>>

:::note
The table lists the strongest magnet material as "Nd2Fe12B"; this is a misprint in the book for **Nd2Fe14B**. Notice its $T_c$ is only **312 C**, a real limitation in hot electric-vehicle motors. **Gadolinium** ($T_c$ = 16 C) is ferromagnetic only on a cold day.
:::

### Uses of the Curie temperature

- It sets the **maximum service temperature** of a magnet (motors, sensors, loudspeakers).
- **Temperature switches**: a ferrite whose $T_c$ is near the target temperature stops attracting a magnet when hot, as in some rice-cooker thermostats.
- **Demagnetising** a part: heat it above $T_c$ and cool it without a field.

:::key
- **$T_c$**: above it a ferro/ferrimagnet becomes **paramagnetic**.
- As T rises: **$M_s$, $B_r$ and $H_c$ all fall**; the loop shrinks; **remanence = 0 at $T_c$**.
- Above $T_c$: **$\chi = C/(T - T_c)$** (Curie-Weiss law).
- $T_c$ is material-specific and tunable by alloying; the change is reversible.
:::

:::mistakes
- **"Above $T_c$ the material is non-magnetic."** It is **paramagnetic**: it still responds weakly to a field.
- **"Cooling below $T_c$ restores the original magnet."** Ferromagnetism returns, but the domains are random, so the net magnetization is zero until re-magnetised.
- **Using the Curie-Weiss law below $T_c$.** It applies only **above** $T_c$.
:::

:::exam
- *"Define Curie temperature. Explain the effect of temperature on ferromagnetic materials"* (assignment question, 4-6 marks). Definition, the tug of war, Fig 20-8 (shrinking loops and remanence vs T), the Curie-Weiss law, a few values from Table 20-3.
:::

:::def
The **Curie temperature ($T_c$)** is the temperature above which a ferromagnetic or ferrimagnetic material loses its spontaneous magnetization and becomes **paramagnetic**. As temperature rises, thermal agitation increasingly opposes the alignment of dipoles, so the saturation magnetization, remanence and coercivity decrease; at $T_c$ the remanence becomes zero. Above $T_c$ the susceptibility follows the Curie-Weiss law, $\chi = C/(T - T_c)$. Examples: Fe 771 C, Co 1117 C, Ni 358 C, Gd 16 C.
:::

## Quick Check

:::q Q1 · Nickel ($T_c$ = 358 C) is heated to 400 C. Is it still attracted to a magnet?
:::ans
Only **weakly**. It is above $T_c$, so it is now **paramagnetic**: it responds slightly to a field but has no domains and no remanence.
:::
:::

:::q Q2 · Why might an engineer choose Sm-Co over Nd-Fe-B for a motor that runs very hot?
:::ans
Sm-Co has a much higher Curie temperature (about 723-747 C) than Nd-Fe-B (312 C), so it keeps its magnetism at high temperature.
:::
:::
