**Every industrial use of a magnetic material comes from matching the loop shape to the job: narrow loops for cores that switch constantly, wide loops for magnets that must never let go, and square loops for storing bits.**

## The Problem: Choosing the Right Magnet for the Job

The assignment asks for **any three industrial applications**. A list of names earns few marks. A good answer says, for each application, **what the job demands**, **which loop shape** meets it, and **which materials** are used. This lesson gives three full answers built that way.

## The Idea in Plain Words

| Job | Demand | Loop | Material class |
|---|---|---|---|
| Reverse the field 50 times a second with little loss | low loss, high permeability | **narrow** | soft |
| Provide a steady field forever, for free | high Br and Hc, large (BH)max | **wide** | hard |
| Hold a 0 or 1 and switch cleanly | two stable states | **square** | semi-hard |

## How It Works

### Application 1: Transformer, motor and generator cores (soft magnets)

**Story.** In the 1880s-90s Edison's DC grid lost to Westinghouse and Tesla's **AC** grid, largely because AC voltage can be stepped up and down with **transformers**. Every transformer core is cycled round its hysteresis loop **50-60 times a second**, so any loss per cycle adds up to large amounts of heat. In 1892 Charles Steinmetz showed that the hysteresis loss grows with the loop area.

**What the job needs.**
- **Small loop area** (low Hc) for low hysteresis loss.
- **High permeability and saturation** so a small current gives a large flux.
- **High resistivity** to cut **eddy currents**: induced currents in the core that waste power as I2R heat, especially at high frequency.

**Materials.**
- **Grain-oriented Fe-3% Si steel**: silicon raises resistivity; texture puts the easy direction along the sheet; the core is built from thin insulated **laminations** to block eddy currents.
- **Metglas** (amorphous Fe-B-Si ribbon): no grains, so walls move very freely; very low loss, used in efficient distribution transformers.
- **MnZn and NiZn ferrites**: ceramic, with enormous resistivity, for **high-frequency** transformers and inductors (chargers, switched-mode power supplies).

### Application 2: Permanent magnets in motors, generators and speakers (hard magnets)

**Story.** Every motor and generator needs a magnetic field. Electromagnets need power all the time; a strong permanent magnet gives the field **for free**. The **Nd-Fe-B revolution (1984)** made motors small and light enough for cordless tools, hard-disk drives, drones, **electric-vehicle traction motors** and direct-drive **wind turbines**.

**What the job needs.**
- **High remanence Br**: a strong field.
- **High coercivity Hc**: it must not be demagnetised by the motor's own opposing fields.
- **Large (BH)max**: a smaller magnet does the same job.
- A **Curie temperature** well above the operating temperature.

**Materials.**
- **Nd2Fe14B**: highest (BH)max (about 290-445 kJ/m3). Limits (Askeland): **low Tc (312 C), poor corrosion resistance, brittleness**.
- **Sm-Co**: lower energy but Tc about 723 C: high-temperature aerospace and military motors.
- **Ba/Sr ferrite**: cheap and corrosion-proof: loudspeakers, small DC motors, fridge magnets.
- **Alnico**: very high Tc (about 780-900 C) and stable: sensors, meters, guitar pickups.

The lifting force of a permanent magnet is F = mu0 M2 A / 2 (Askeland eq. 20-11).

### Application 3: Magnetic data storage (square loop, semi-hard)

**Story.** In **1956** IBM's RAMAC 350, the first hard-disk drive, stored about 5 MB on fifty 24-inch platters. The principle has not changed: a **bit is a tiny region magnetised "north up" (1) or "north down" (0)**. In **1988** Albert Fert and Peter Grunberg discovered **giant magnetoresistance (GMR)**, which made read heads sensitive enough for terabyte drives (Nobel Prize, 2007), and started the field of **spintronics**.

**What the job needs.**
- A **square loop**: a written bit stays put, and flips sharply only when the write head applies enough field.
- **Moderate coercivity**: high enough that stray fields cannot erase data, low enough that the head can rewrite it.
- **Acicular (needle-shaped) particles**, which raise coercivity through **shape anisotropy**.

**Materials.** gamma-Fe2O3, Co-doped gamma-Fe2O3, CrO2, acicular Fe particles, Ba ferrite (tapes and cards); **sputtered Co-Pt-Ta-Cr thin films** on hard disks. **Credit-card and ATM stripes** use gamma-Fe2O3 or Fe3O4 particles.

<<SVG:askeland_table20_5>>

:::note
Other applications you may name: **magnetorheological (MR) fluids** of soft carbonyl-iron particles that stiffen in a field, used in car suspensions (Delphi's MagneRide); **ferrofluids**; magnetic separators in mining and recycling; MRI and sensors.
:::

:::key
- **Cores (soft)**: narrow loop, high permeability, high resistivity: Fe-Si laminations, Metglas, ferrites.
- **Permanent magnets (hard)**: high Br, Hc and (BH)max: Nd-Fe-B, Sm-Co, ferrite, Alnico.
- **Storage (square loop)**: stable bits, moderate Hc, acicular particles: gamma-Fe2O3, CrO2, Co-Pt-Cr films.
:::

:::mistakes
- **Listing applications without reasons.** Always link the application to the loop property it needs.
- **"Transformer cores use hard magnets because they must be strong."** Cores must switch every cycle with little loss, so they are **soft**.
- **"Storage media should have the highest possible coercivity."** Too high and the head could not rewrite the data; it must be moderate.
:::

:::exam
- *"Explain any three industrial applications of magnetic materials"* (assignment question, 6-9 marks). For each: the application, the property needed, the loop shape and two or three materials. A small sketch of the relevant loop earns extra credit.
:::

:::def
**Applications of magnetic materials** follow from the hysteresis loop: **soft** materials (narrow loop, high permeability, low loss, high resistivity) are used for **transformer, motor and generator cores** and inductors; **hard** materials (high remanence, coercivity and (BH)max) are used as **permanent magnets** in motors, generators and loudspeakers; and materials with a **square loop** and moderate coercivity are used for **magnetic data storage** such as hard disks, tapes and card stripes.
:::

## Quick Check

:::q Q1 · Why are transformer cores made of thin laminations instead of a solid block?
:::ans
Thin, insulated sheets block the paths of **eddy currents**, which would otherwise circulate in a solid block and waste power as I2R heat.
:::
:::

:::q Q2 · Why do magnetic recording media use needle-shaped particles?
:::ans
Elongated (acicular) particles have **shape anisotropy**, which raises coercivity, so stored bits resist accidental erasure.
:::
:::

:::q Q3 · An EV motor runs at 180 C. What concern does this raise for Nd-Fe-B magnets?
:::ans
Nd-Fe-B has a fairly low **Curie temperature (312 C)** and loses coercivity as it heats, so it risks demagnetisation. Designers add dysprosium or use Sm-Co for hotter duty.
:::
:::
