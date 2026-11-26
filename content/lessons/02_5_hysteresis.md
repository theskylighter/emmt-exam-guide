**When the field on a ferromagnet is cycled, its magnetization lags behind, because domain walls move irreversibly; the result is a closed loop whose shape tells you how much the material remembers (remanence), how hard it is to erase (coercivity), and how much energy each cycle wastes (loop area).**

## The Problem: A Material With Memory

Magnetise an iron nail with a strong magnet and take the magnet away: the nail **stays** magnetic. Plain paramagnets never do that. So the magnetization of a ferromagnet depends not only on the field **now** but on its **history**. We need a picture of that history, because it decides what a material is good for: a transformer core, a permanent magnet or a hard disk.

That picture is the **hysteresis loop** ("hysteresis" comes from the Greek for "lagging behind").

## The Idea in Plain Words

Tell the loop as a story of [domains](02_4_domains.html) in four acts:

1. **Switch the field on**: domains grow and rotate until all are aligned (saturation).
2. **Switch it off**: many domains stay aligned (remanence). The material is now a magnet.
3. **Reverse it**: a reverse field is needed to bring the magnetization back to zero (coercivity).
4. **Keep cycling**: the magnetization traces a closed loop, always lagging behind the field.

:::analogy
A stiff door on rusty hinges. Push it open (apply H) and it swings; let go and it stays mostly open (remanence). To shut it you must push the other way with some force (coercivity). Every open-and-shut cycle costs effort lost to friction in the hinges (loop area = energy lost as heat).
:::

## How It Works

### Act 1: The first magnetization curve

<<SVG:askeland_fig20_6>>

Start with an unmagnetised (**virgin**) sample at the origin.

1. **Small H**: domains nearly aligned with the field **grow** by Bloch-wall motion. It is hard at first, so M rises **slowly**. The initial slope is the **initial permeability $\mu_i$**.
2. **Medium H**: walls move easily and M rises **rapidly**. The steepest slope (a tangent from the origin) is the **maximum permeability $\mu_{max}$**.
3. **Large H**: the unfavourable domains have gone; the remaining moments **rotate** into the field direction.
4. **Saturation**: all dipoles are aligned. This is the **saturation magnetization $M_s$**, the most M the material can have.

### Acts 2 to 4: Remanence, coercivity and the loop

<<SVG:askeland_fig20_7>>

**Watch it happen.** Press Play, or step through with Next. The dot traces the loop while the domains on the right show *why* B changes at each point. The last frame is the diagram you draw in the exam.

<<ANIM:hysteresis>>

- **Point 3, saturation**: as above.
- **Point 4, remanence**: reduce H to zero. Domain walls resist moving back, so many domains stay aligned and a **remanent magnetization $M_r$** remains. In B terms, **$B_r$ = $\mu_0$ $M_r$**, also called the **retentivity**. The material now acts as a **permanent magnet**.
- **Point 5, coercive field**: apply a **reverse** field. The field needed to bring the magnetization back to zero is the **coercivity $H_c$**.
- Increase the reverse field further and the material saturates in the opposite direction. Cycle the field and the curve closes into the **hysteresis loop**.

### M-H loop vs B-H loop

| | M-H loop (Fig 20-7a) | B-H loop (Fig 20-7b) |
|---|---|---|
| Saturates? | **Yes**, flat at $M_s$ | **No**, keeps rising |
| Why | M cannot exceed all dipoles aligned | B = $\mu_0$ H + $\mu_0$ M keeps growing with H even after M is maximum |
| Remanence | $M_r$ | $B_r$ = $\mu_0$ $M_r$ |

### What the loop area means

The **area inside the loop** equals the **energy lost per cycle per unit volume**, dissipated as heat as the domain walls are dragged back and forth. The **shaded rectangle** in Fig 20-7(b) is the largest B × H product in the second quadrant: the **power of the magnet**, $(BH)_{max}$ (see [Soft vs Hard](02_7_soft_vs_hard.html)).

### Why the shape matters

| Loop shape | Behaviour | Use |
|---|---|---|
| **Tall and narrow** | easy to magnetise and demagnetise, little loss | **soft** magnets: transformer and motor cores |
| **Wide and fat** | hard to demagnetise, high remanence | **hard** magnets: permanent magnets |
| **Square** | two stable states, sharp switching | **memory**: data storage |

:::key
- The loop exists because domain-wall motion is **irreversible**: M lags behind H.
- Key points: **saturation ($M_s$, $B_s$)**, **remanence ($M_r$, $B_r$)**, **coercivity ($H_c$)**.
- **M saturates, B does not**, because B = $\mu_0$(H + M).
- **Loop area = energy lost per cycle** (heat).
- Loop shape decides use: narrow = soft, wide = hard, square = memory.
:::

:::mistakes
- **"Remanence is the field needed to demagnetise."** That is **coercivity**. Remanence is what is **left** at H = 0.
- **Drawing the B-H loop flat at saturation.** Only the M-H loop flattens; the B-H loop keeps sloping upward.
- **Starting the loop at the remanence point.** The first curve starts at the **origin** (virgin state) and goes to saturation; the loop is traced after that.
- **Forgetting the arrows.** The loop has a direction; mark it.
:::

:::exam
- *"Write a note on the ferromagnetic hysteresis B-H loop"* (assignment question, 8-10 marks). Write the definition, draw a large labelled loop (origin, virgin curve, +$B_s$, $B_r$, -Hc, -Bs, -Br, +$H_c$, arrows), explain the four acts with domains, then the loop area and the significance of loop shape.
- Short: *"Define retentivity and coercivity."*
:::

:::def
The **hysteresis loop** is the closed B-H (or M-H) curve traced by a ferromagnetic material as the applied field is cycled. Starting from the demagnetised state, domain growth and rotation take the material to **saturation ($B_s$)**; on removing the field a **remanent induction ($B_r$)** remains; a reverse **coercive field ($H_c$)** is needed to reduce B to zero. B lags behind H because domain-wall motion is irreversible, and the **area of the loop** equals the energy dissipated per cycle per unit volume.
:::

## Quick Check

:::q Q1 · What is the magnetization of a ferromagnet at H = 0 after it has been saturated?
:::ans
It equals the **remanence $M_r$** ($B_r$ in B terms), not zero, because the domain walls do not all move back.
:::
:::

:::q Q2 · Why does the B-H loop keep rising beyond saturation while the M-H loop goes flat?
:::ans
Because **B = $\mu_0$ H + $\mu_0$ M**. Once M is at its maximum $M_s$, the $\mu_0$ H term still grows with H, so B keeps rising.
:::
:::

:::q Q3 · A transformer core runs at 50 Hz. Why should its loop be narrow?
:::ans
The loop is traversed 50 times a second and each cycle loses energy equal to the **loop area**. A narrow loop means little loss and little heating.
:::
:::
