**Every material responds to a magnetic field; the type of response (opposing, weakly following, strongly following, or cancelling) depends on whether its atoms have unpaired electrons and how neighbouring moments interact.**

## The Problem: "Non-Magnetic" Is a Myth

We casually call copper or plastic "non-magnetic". Askeland is blunt: *"Strictly speaking, there is no such thing as a non-magnetic material."* Every material responds to a field; the responses just differ in **sign** and **size** by a factor of about a trillion. We need a way to sort them.

## The Idea in Plain Words

Ask two questions about a material's atoms:

1. **Do they have a net moment?** (Are there unpaired electrons?)
2. **If yes, how do neighbours interact?** Not at all, parallel, antiparallel, or antiparallel but unequal?

The answers give five behaviours.

<<SVG:askeland_fig20_3>>

## How It Works

| Type | What the atoms do | Susceptibility $\chi$ | Examples |
|---|---|---|---|
| **Diamagnetic** | no net moment; the field distorts electron orbits and induces a small moment that **opposes** the field | small, **negative** (about -$10^{-6}$) | Cu, Ag, Au, Si, alumina; superconductors are perfect diamagnets ($\chi$ = -1) |
| **Paramagnetic** | unpaired electrons give moments that **align with** the field, but neighbours **do not interact**; alignment is lost when the field is removed | small, positive ($10^{-6}$ to $10^{-4}$) | Al, Ti, alloys of Cu |
| **Ferromagnetic** | unpaired 3d spins and the **exchange interaction** align neighbours **parallel**; large magnetization even in small fields | very large, up to **$10^{6}$** | Fe, Ni, Co, Gd |
| **Antiferromagnetic** | neighbouring moments line up **opposite and equal**, so they cancel | small, positive | Mn, Cr, MnO, NiO, CoO |
| **Ferrimagnetic** | two kinds of ions point **opposite but unequal**, leaving a net moment | large | ferrites such as Fe3O4, NiZn and MnZn ferrites |

<<SVG:askeland_fig20_4:compact>>

Figure 20-4 shows antiferromagnetic **MnO**: the Mn ions in alternate (111) planes point opposite ways, so the net moment is zero.

### Why ferrites matter

Ferrimagnetic ferrites are **ceramics**, so they are good **electrical insulators**. That keeps **eddy-current losses** tiny, which makes them the best choice for **high-frequency** transformers and inductors. Their crystal structure is the **spinel**, AB2O4 (see [Quantum Numbers and Spin](01_1_quantum_numbers_spin.html)).

### Above the Curie temperature

Ferromagnetic and ferrimagnetic materials become **paramagnetic** above their Curie temperature, where the susceptibility follows the **Curie-Weiss law**, $\chi = C/(T - T_c)$. See [Curie Temperature](02_6_curie_temperature.html).

### Superparamagnetism (a bonus)

If ferromagnetic grains are made extremely small (Fe3O4 particles of 3-5 nm), thermal energy flips each particle's moment at random and the material behaves as **paramagnetic**. Such particles make **ferrofluids** ("liquid magnets") used as seals in hard drives and as coolants in loudspeakers.

:::analogy
A classroom told to face the front. **Diamagnetic** students stubbornly lean slightly backwards. **Paramagnetic** students turn to face the front but drift back once the teacher leaves. **Ferromagnetic** students all face the front together and keep doing it. **Antiferromagnetic** students sit in pairs facing opposite ways. **Ferrimagnetic** students also sit in opposite-facing pairs, but one of each pair is bigger, so the class still leans one way.
:::

:::key
- Diamagnetic: $\chi$ **negative**, opposes the field.
- Paramagnetic: $\chi$ small positive, **no interaction** between moments.
- Ferromagnetic: $\chi$ huge, neighbours **parallel** (Fe, Co, Ni, Gd).
- Antiferromagnetic: neighbours **antiparallel and equal**, cancel (MnO).
- Ferrimagnetic: **antiparallel but unequal**, net moment (ferrites, insulating).
:::

:::mistakes
- **"Diamagnetic means not magnetic."** It means a weak **negative** response; every material is at least diamagnetic.
- **Confusing anti- and ferrimagnetism.** Both are antiparallel; only **ferri** has unequal moments and a net magnetization.
- **"Ferrites are metals."** They are **ceramic oxides**, which is exactly why they have low eddy losses.
:::

:::exam
- *"Classify magnetic materials with examples"* (5 marks): the table above plus Fig 20-3.
- MCQ traps: sign of $\chi$ for diamagnets; which type ferrites are.
:::

:::def
Materials are classified by their response to a magnetic field: **diamagnetic** (induced moment opposes the field, $\chi \approx -10^{-6}$), **paramagnetic** (unpaired, non-interacting moments align weakly, $\chi$ from $10^{-6}$ to $10^{-4}$), **ferromagnetic** (unpaired moments aligned parallel by the exchange interaction, $\chi$ up to $10^{6}$), **antiferromagnetic** (equal antiparallel moments, zero net magnetization) and **ferrimagnetic** (unequal antiparallel moments, net magnetization).
:::

## Quick Check

:::q Q1 · A material has $\chi$ = -1. What is it?
:::ans
A **perfect diamagnet**, i.e. a superconductor: it expels the field completely.
:::
:::

:::q Q2 · Why are ferrites, not iron, used in high-frequency transformers?
:::ans
Ferrites are **ceramic insulators** with very high resistivity, so **eddy-current losses** are tiny at high frequency. Metallic iron would heat up badly.
:::
:::
