**In a MOSFET a voltage on an insulated gate creates an electric field that changes how well a thin channel conducts, so almost no input current is needed to control a large output current.** It is the transistor inside every modern chip.

## The Problem: The BJT Needs Input Current

A [junction transistor](04_3_bjt.html) is controlled by the current flowing into its base. That is a problem when the signal source **cannot supply much current**, and it wastes power when billions of transistors sit on one chip. Engineers wanted a transistor controlled by **voltage alone**, the way a tube's grid controls current without drawing any.

## The Story

The idea of controlling a channel with a field was patented in the 1920s but nobody could make it work, because the semiconductor surface trapped charge. In **1959**, **Mohamed Atalla and Dawon Kahng** at Bell Labs solved it by growing a clean layer of **silicon dioxide** on the silicon surface. Their metal-oxide-semiconductor field-effect transistor (**MOSFET**) is easy to shrink, and today a single processor holds billions of them.

## The Idea in Plain Words

:::analogy
A garden hose with a foot on it. The hose is the channel, the water is current. Pressing harder with your foot (changing the gate voltage) changes the flow, yet your foot never touches the water: the gate is insulated from the channel.
:::

## How It Works

<<SVG:callister_fig12_25>>

**Construction (Callister's p-type MOSFET):**

1. Start with an **n-type silicon substrate**.
2. Make two small islands of **p-type** silicon: the **source** and the **drain**.
3. Join them with a narrow **p-type channel**.
4. Oxidise the surface to form an insulating **SiO₂ layer** over the channel.
5. Put a metal contact, the **gate**, on top of the oxide. Source and drain also get metal contacts.

**Working:**

1. A voltage on the gate creates an **electric field** across the oxide into the channel.
2. The field changes the number of carriers in the channel. For example, a **positive** gate field drives **holes out** of the p-channel, so its conductivity falls.
3. A small change in gate field produces a **large change in the source-drain current**, much like the base in a junction transistor.
4. Because the gate is insulated, the **gate current is extremely small**.

## BJT vs MOSFET

| | Junction transistor (BJT) | MOSFET |
|---|---|---|
| Controlled by | base **current** | gate **voltage** (field) |
| Input current | appreciable | almost zero (insulated gate) |
| Carriers doing the work | **minority** carriers injected into the base | **majority** carriers in the channel |
| Terminals | emitter, base, collector | source, gate, drain (and substrate) |
| Typical use | analog amplifiers, power circuits | digital logic, memory, processors |

:::key
- Source and drain (p) in an n-substrate, joined by a p-channel, with an **SiO₂-insulated gate** on top.
- The **gate field** changes the **channel conductivity**.
- Gate current is almost zero, so MOSFETs suit sources that cannot supply current.
- MOSFETs use **majority** carriers; BJTs use injected **minority** carriers.
:::

:::mistakes
- **"Current flows into the gate."** The oxide is an insulator; gate current is extremely small.
- **"The MOSFET works by injecting minority carriers, like a BJT."** It modulates the majority carriers already in the channel.
- **Forgetting the oxide layer in the diagram.** The "O" in MOS is the SiO₂ insulator, and it is what makes the device work.
:::

:::exam
- Usually a part question after the BJT: *"Briefly explain the MOSFET"* or *"Differentiate BJT and MOSFET"* (4-5 marks). Draw Fig 12.25 and give the comparison table.
:::

:::def
A **MOSFET** (metal-oxide-semiconductor field-effect transistor) consists of two p-type islands (**source** and **drain**) in an n-type substrate joined by a narrow p-type **channel**, with a metal **gate** separated from the channel by an insulating **SiO₂** layer. A voltage on the gate creates a field that changes the channel's conductivity, so a small gate voltage controls a large source-drain current with almost no gate current.
:::

## Quick Check

:::q Q1 · Why is a MOSFET preferred when the signal source can supply very little current?
:::ans
Its gate is **insulated** by SiO₂, so it draws almost **no input current**. It is controlled by the gate voltage (field) alone.
:::
:::

:::q Q2 · In Callister's p-type MOSFET, what does a positive gate voltage do to the channel?
:::ans
It drives **holes out** of the p-type channel, which **reduces** its conductivity and therefore the source-drain current.
:::
:::
